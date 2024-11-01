import { HttpException, Inject, Injectable } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { PrismaService } from "../common/prisma.service";
import { ValidationService } from "../common/validation.service";
import { LoginUserRequest, RegisterUserRequest, UpdateUserRequest, UserResponse } from "../model/user.model";
import { Logger } from 'winston';
import { UserValidation } from "./user.validation";
import * as bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { User } from "@prisma/client";

@Injectable()
export class UserService {
    constructor(
        private validationService: ValidationService,
        @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
        private prismaService: PrismaService
    ) { }
    async register(request: RegisterUserRequest): Promise<UserResponse> {
        this.logger.debug(`Register new user ${JSON.stringify(request)}`);
        const registerRequest: RegisterUserRequest = this.validationService.validate(UserValidation.REGISTER, request);

        const totalUserWithSameUsername = await this.prismaService.user.count({
            where: {
                username: registerRequest.username
            }
        });

        if (totalUserWithSameUsername != 0) {
            throw new HttpException('Username already exist', 400)
        }

        registerRequest.password = await bcrypt.hash(registerRequest.password, 10);

        const user = await this.prismaService.user.create({
            data: registerRequest
        })

        return {
            id: user.id,
            username: user.username,
            name: user.name
        }
    }

    async login(request: LoginUserRequest): Promise<UserResponse> {
        this.logger.debug(`UserService.login ${JSON.stringify(request)}`);
        const loginRequest: LoginUserRequest = this.validationService.validate(UserValidation.LOGIN, request);

        const user = await this.prismaService.user.findFirst({
            where: {
                username: loginRequest.username
            }
        });

        if (!user) {
            throw new HttpException('Username or password is invalid', 401);
        }

        const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);

        if (!isPasswordValid) {
            throw new HttpException('Username or password is invalid', 401);
        }

        const updateToken = await this.prismaService.user.update({
            where: {
                id: user.id
            }, data: {
                token: uuid()
            }
        });

        return {
            id: updateToken.id,
            username: updateToken.username,
            name: updateToken.name,
            token: updateToken.token
        }
    }

    async get(user: User): Promise<UserResponse> {
        return {
            id: user.id,
            username: user.username,
            name: user.name
        }
    }

    async update(user: User, request: UpdateUserRequest): Promise<UserResponse> {
        this.logger.debug(`UserService.update ${JSON.stringify(user)}, ${JSON.stringify(request)}`);

        const updateRequest = this.validationService.validate(UserValidation.UPDATE, request);

        if (updateRequest.name) {
            user.name = updateRequest.name;
        }

        if (updateRequest.password) {
            user.password = await bcrypt.hash(updateRequest.password, 10);
        }

        const result = await this.prismaService.user.update({
            where: {
                username: user.username
            }, data: user
        });

        return {
            id: result.id,
            name: result.name,
            username: result.username
        }
    }

    async logout(user: User): Promise<UserResponse> {
        const result = await this.prismaService.user.update({
            where: {
                username: user.username
            }, data: {
                token: null
            }
        });

        return {
            id: result.id,
            username: result.username,
            name: result.name
        }
    }
}