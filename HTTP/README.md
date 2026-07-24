# 🌐 HTTP (HyperText Transfer Protocol)

## 📖 Introduction

HTTP (HyperText Transfer Protocol) is the communication protocol used between a **client** and a **server**. It defines how requests are sent and responses are received over the web.

### Example

```
Browser (Client)
      │
HTTP Request
      │
      ▼
Server
      │
HTTP Response
      │
      ▼
Browser
```

---

# 🖥️ Client

A client is a device or application that requests data from a server.

### Examples

- Browser (Chrome, Firefox)
- Mobile App
- React Application
- Postman

---

# 🖥️ Server

A server is a computer or application that receives client requests, processes them, and sends responses.

### Examples

- Node.js
- Express.js
- Django
- Laravel

---

# 📤 HTTP Request

An HTTP Request is sent by the client to the server.

It contains:

- URL
- HTTP Method
- Headers
- Body (optional)

Example

```
GET /users HTTP/1.1
Host: example.com
```

---

# 📥 HTTP Response

An HTTP Response is sent by the server back to the client.

It contains:

- Status Code
- Headers
- Response Body

Example

```json
{
    "success": true,
    "message": "User Found"
}
```

---

# 🔥 HTTP Methods

## GET

Used to retrieve data.

Example

```
GET /users
```

---

## POST

Used to create new data.

Example

```
POST /users
```

---

## PUT

Updates the complete resource.

Example

```
PUT /users/1
```

---

## PATCH

Updates only specific fields.

Example

```
PATCH /users/1
```

---

## DELETE

Deletes a resource.

Example

```
DELETE /users/1
```

---

# 📌 Difference Between PUT and PATCH

PUT

- Updates the entire resource.
- Missing fields may be replaced.

PATCH

- Updates only specified fields.
- Remaining data stays unchanged.

---

# 📊 HTTP Status Codes

## 2xx Success

| Code | Meaning |
|------|---------|
|200|OK|
|201|Created|
|204|No Content|

---

## 3xx Redirection

| Code | Meaning |
|------|---------|
|301|Moved Permanently|
|302|Found|

---

## 4xx Client Errors

| Code | Meaning |
|------|---------|
|400|Bad Request|
|401|Unauthorized|
|403|Forbidden|
|404|Not Found|
|409|Conflict|

---

## 5xx Server Errors

| Code | Meaning |
|------|---------|
|500|Internal Server Error|
|502|Bad Gateway|
|503|Service Unavailable|

---

# 📄 HTTP Headers

Headers provide additional information about requests and responses.

Example

```
Content-Type: application/json
Authorization: Bearer Token
```

---

# 📦 Common Request Headers

## Authorization

Used for authentication.

Example

```
Authorization: Bearer eyJhbGciOi...
```

---

## Content-Type

Specifies the format of request body.

Examples

```
application/json

multipart/form-data

application/x-www-form-urlencoded
```

---

## Accept

Tells the server which response format is acceptable.

Example

```
Accept: application/json
```

---

## User-Agent

Contains browser or application information.

Example

```
User-Agent: Chrome
```

---

## Cookie

Sends stored cookies to the server.

---

## Host

Specifies the server hostname.

Example

```
Host: localhost:8000
```

---

# 📦 Common Response Headers

## Content-Type

Response data type.

Example

```
Content-Type: application/json
```

---

## Set-Cookie

Creates cookies in browser.

---

## Cache-Control

Controls browser caching.

Example

```
Cache-Control: no-cache
```

---

## Access-Control-Allow-Origin

Used by CORS.

Example

```
Access-Control-Allow-Origin: *
```

---

# 🔐 Security Headers

Security headers help protect web applications.

## X-Content-Type-Options

Prevents MIME type sniffing.

```
X-Content-Type-Options: nosniff
```

---

## X-Frame-Options

Protects against Clickjacking.

```
X-Frame-Options: DENY
```

---

## Content-Security-Policy (CSP)

Controls which resources can be loaded.

Example

```
Content-Security-Policy: default-src 'self'
```

---

## Strict-Transport-Security (HSTS)

Forces HTTPS.

Example

```
Strict-Transport-Security: max-age=31536000
```

---

## Referrer-Policy

Controls referrer information.

Example

```
Referrer-Policy: no-referrer
```

---

# 🌍 CORS (Cross-Origin Resource Sharing)

CORS is a browser security mechanism that controls whether one origin can access resources from another origin.

Example

Frontend

```
http://localhost:5173
```

Backend

```
http://localhost:8000
```

Different ports mean different origins.

Without CORS

❌ Browser blocks the request.

With CORS enabled

✅ Request succeeds.

Express Example

```javascript
import cors from "cors";

app.use(cors());
```

Allow only one frontend

```javascript
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
```

---

# 🍪 Cookies

Cookies are small pieces of data stored in the browser.

Uses

- Authentication
- Session Management
- Remember Login
- User Preferences

---

# 🔑 Authorization Header

Example

```
Authorization: Bearer JWT_TOKEN
```

Used with JWT Authentication.

---

# 📌 Interview Questions

### What is HTTP?

HTTP is a protocol used for communication between client and server.

---

### Difference between HTTP and HTTPS?

HTTP

- Not encrypted

HTTPS

- Encrypted using SSL/TLS

---

### What is a Header?

Headers contain additional information about requests and responses.

---

### What is CORS?

CORS allows or restricts requests between different origins.

---

### Difference between GET and POST?

GET

- Retrieves data
- No request body

POST

- Creates data
- Has request body

---

### Difference between PUT and PATCH?

PUT updates the entire resource.

PATCH updates only selected fields.

---

### What is Status Code 404?

Requested resource not found.

---

### What is Status Code 500?

Internal server error.

---

# 🛠 Technologies

- HTTP
- REST API
- Node.js
- Express.js
- Browser
- Postman

---

# 📚 Summary

- HTTP enables communication between client and server.
- Requests contain methods, headers, and optional body.
- Responses contain status codes and data.
- Headers carry extra information.
- CORS controls cross-origin access.
- Security headers protect web applications.
- HTTPS provides encrypted communication.