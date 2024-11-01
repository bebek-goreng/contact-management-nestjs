# Contact API Apec

## Create Contact

Endpoint: POST /api/contacts

Headers:

- Authorization: token

Request Body:

```json
{
  "first_name": "test",
  "last_name": "test",
  "email": "test@mail.com",
  "phone": "6285212345678"
}
```

Response Body (Success):

```json
{
  "data": {
    "id": 1,
    "first_name": "test",
    "last_name": "test",
    "email": "test@mail.com",
    "phone": "6285212345678"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Contact already exist"
}
```

## Get Contact

Endpoint: Get /api/contacts/:contactId

Headers:

- Authorization: token

Response Body (Success):

```json
{
  "data": {
    "id": 1,
    "first_name": "test",
    "last_name": "test",
    "email": "test@mail.com",
    "phone": "6285212345678"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Contact not found"
}
```

## Update Contact

Endpoint: PUT /api/contacts/:contactId

Headers:

- Authorization: token

Request Body:

```json
{
  "first_name": "test",
  "last_name": "test",
  "email": "test@mail.com",
  "phone": "6285212345678"
}
```

Response Body (Success):

```json
{
  "data": {
    "id": 1,
    "first_name": "test",
    "last_name": "test",
    "email": "test@mail.com",
    "phone": "6285212345678"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Contact already exist"
}
```

## Remove Contact

Endpoint: DELETE /api/contacts

Headers:

- Authorization: token

Response Body (Success):

```json
{
  "data": "Success"
}
```

## Search Contact

Endpoint: Get /api/contacts

Headers:

- Authorization: token

Query Params:

- name: string, contact first_name or contact last_name, optional
- phone: string, contact phone, optional
- email: string, contact email, optional
- page: number, default 1
- size: number, default 10

Response Body (Success):

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "test",
      "last_name": "test",
      "email": "test@mail.com",
      "phone": "6285212345678"
    },
    {
      "id": 2,
      "first_name": "test",
      "last_name": "test",
      "email": "test@mail.com",
      "phone": "6285212345678"
    }
  ]
  "paging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Contact not found"
}
```
