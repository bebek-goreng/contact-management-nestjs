# User API Spec

## Register User

Endpoint: POST /api/users

Request Body:

```json
{
  "username": "test",
  "password": "test",
  "name": "test"
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "test",
    "name": "test"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Username already registered"
}
```

## Login User

Endpoint: POST /api/users/login

Request Body:

```json
{
  "username": "test",
  "password": "test"
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "test",
    "name": "test",
    "token": "session_id_generated"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Username or password is wrong"
}
```

## Get User

Endpoint: GET /api/users/current

Headers:

- authorization: token

Response Body (Success):

```json
{
  "data": {
    "username": "test",
    "name": "test"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Unauthorized"
}
```

## Update User

Endpoint: PATCH /api/users/current

Headers: 
- Authorization: token

Request Body:

```json
{
  "password": "test", //optional
  "name": "test" //optional
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "test",
    "name": "test"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Username already registered"
}
```

## Logout User

Endpoint: DELETE /api/users/current

Headers: 
- Authorization: token

Response Body (Success):

```json
{
  "data": "Success"
}
```

