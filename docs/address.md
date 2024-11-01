# Address API SPEC

## Create Address

Endpoint: POST /api/contacts/:contactId/addressess

Headers:

- Authorization: token

Request Body:

```json
{
  "street": "Jl. Merak", //optional
  "city": "Surabaya", //optional
  "province": "Jawa Timur", //optional
  "country": "Indonesia",
  "postal_code": "12345"
}
```

Response Body (Success):

```json
{
  "data": {
    "id": 1,
    "street": "Jl. Merak",
    "city": "Surabaya",
    "province": "Jawa Timur",
    "country": "Indonesia",
    "postal_code": "12345"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Failed to create address"
}
```

## Get Address

Endpoint: GET /api/contacts/:contactId/addressess/:addressId

Headers:

- Authorization: token

Response Body (Success):

```json
{
  "data": {
    "id": 1,
    "street": "Jl. Merak",
    "city": "Surabaya",
    "province": "Jawa Timur",
    "country": "Indonesia",
    "postal_code": "12345"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Address not found"
}
```

## Update Address

Endpoint: PUT /api/contacts/:contactId/addressess/:addressId

Headers:

- Authorization: token

Request Body:

```json
{
  "street": "Jl. Merak",
  "city": "Surabaya",
  "province": "Jawa Timur",
  "country": "Indonesia",
  "postal_code": "12345"
}
```

Response Body (Success):

```json
{
  "data": {
    "id": 1,
    "street": "Jl. Merak",
    "city": "Surabaya",
    "province": "Jawa Timur",
    "country": "Indonesia",
    "postal_code": "12345"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Failed to update address"
}
```

## Remove Address

Endpoint: DELETE /api/contacts/:contactId/addressess/:addressId

Headers:

- Authorization: token

Response Body (Success):

```json
{
  "data": "Success"
}
```

Response Body (Failed):

```json
{
  "errors": "Failed to delete address"
}
```

## List Addresses

Endpoint: GET /api/contacts/:contactId/addressess

Headers:

- Authorization: token

Response Body (Success):

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jl. Merak",
      "city": "Surabaya",
      "province": "Jawa Timur",
      "country": "Indonesia",
      "postal_code": "12345"
    },
    {
      "id": 2,
      "street": "Jl. Merak",
      "city": "Surabaya",
      "province": "Jawa Timur",
      "country": "Indonesia",
      "postal_code": "12345"
    }
  ]
}
```

Response Body (Failed):

```json
{
  "errors": "Address list not found"
}
```
