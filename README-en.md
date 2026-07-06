<p align="center">
    <img src="doc/demo/logo.png" width="80px" />
    <h1 align="center">Cloud Mail</h1>
    <p align="center">A simple, responsive email service designed to run on Cloudflare Workers 🎉</p> 
    <p align="center">
       <a href="/README.md" style="margin-left: 5px">简体中文</a> | English 
    </p>
    <p align="center">
        <a href="https://github.com/maillab/cloud-mail/tree/main?tab=MIT-1-ov-file" target="_blank" >
            <img src="https://img.shields.io/badge/license-MIT-green" />
        </a>    
        <a href="https://github.com/maillab/cloud-mail/releases" target="_blank" >
            <img src="https://img.shields.io/github/v/release/maillab/cloud-mail" alt="releases" />
        </a>  
        <a href="https://github.com/maillab/cloud-mail/issues" >
            <img src="https://img.shields.io/github/issues/maillab/cloud-mail" alt="issues" />
        </a>  
        <a href="https://github.com/maillab/cloud-mail/stargazers" target="_blank">
            <img src="https://img.shields.io/github/stars/maillab/cloud-mail" alt="stargazers" />
        </a>  
        <a href="https://github.com/maillab/cloud-mail/forks" target="_blank" >
            <img src="https://img.shields.io/github/forks/maillab/cloud-mail" alt="forks" />
        </a>
    </p>
    <p align="center">
        <a href="https://trendshift.io/repositories/20459" target="_blank" >
            <img src="https://trendshift.io/api/badge/repositories/20459" alt="trendshift" >
        </a>
    </p>
</p>

## Description
With only one domain, you can create multiple different email addresses, similar to major email platforms. This project can be deployed on Cloudflare Workers to reduce server costs and build your own email service.
## Project Showcase

- [Live Demo](https://skymail.ink)<br>
- [Deployment Guide](https://doc.skymail.ink/en/)<br>


| ![](/doc/demo/demo1.png) | ![](/doc/demo/demo2.png) |
|--------------------------|--------------------------|
| ![](/doc/demo/demo3.png) | ![](/doc/demo/demo4.png) |

## Features

- **💰 Low-Cost Usage**: No server required — deploy to Cloudflare Workers to reduce costs.

- **💻 Responsive Design**: Automatically adapts to both desktop and most mobile browsers.

- **📧 Email Sending**: Integrated with Resend, supporting bulk email sending and attachments.

- **🛡️ Admin Features**: Admin controls for user and email management with RBAC-based access control.

- **📦 Attachment Support**: Send and receive attachments, stored and downloaded via R2 object storage.

- **🔔 Email Push**: Forward received emails to Telegram bots or other email providers.

- **📡 Open API**: Supports batch user creation via API and multi-condition email queries

- **🔢 Verification Code Recognition**: Auto-detect codes via Workers AI

- **📈 Data Visualization**: Use ECharts to visualize system data, including user email growth.

- **🎨 Personalization**: Customize website title, login background, and transparency.

- **🤖 CAPTCHA**: Integrated with Turnstile CAPTCHA to prevent automated registration.

- **📜 More Features**: Under development...

## Tech Stack

- **Platform**: [Cloudflare Workers](https://developers.cloudflare.com/workers/)

- **Web Framework**: [Hono](https://hono.dev/)

- **ORM**: [Drizzle](https://orm.drizzle.team/)

- **Frontend Framework**: [Vue3](https://vuejs.org/)

- **UI Framework**: [Element Plus](https://element-plus.org/)

- **Email Service**: [Resend](https://resend.com/)

- **Cache**: [Cloudflare KV](https://developers.cloudflare.com/kv/)

- **Database**: [Cloudflare D1](https://developers.cloudflare.com/d1/)

- **File Storage**: [Cloudflare R2](https://developers.cloudflare.com/r2/)

## Project Structure

```
cloud-mail
├── mail-worker				    # Backend worker project
│   ├── src                  
│   │   ├── api	 			    # API layer
│   │   ├── const  			    # Project constants
│   │   ├── dao                 # Data access layer
│   │   ├── email			    # Email processing and handling
│   │   ├── entity			    # Database entities
│   │   ├── error			    # Custom exceptions
│   │   ├── hono			    # Web framework, middleware, error handling
│   │   ├── i18n			    # Internationalization
│   │   ├── init			    # Database and cache initialization
│   │   ├── model			    # Response data models
│   │   ├── security			# Authentication and authorization
│   │   ├── service			    # Business logic layer
│   │   ├── template			# Message templates
│   │   ├── utils			    # Utility functions
│   │   └── index.js			# Entry point
│   ├── package.json			# Project dependencies
│   └── wrangler.toml			# Project configuration
│
├─ mail-vue				        # Frontend Vue project
│   ├── src
│   │   ├── axios 			    # Axios configuration
│   │   ├── components			# Custom components
│   │   ├── echarts			    # ECharts integration
│   │   ├── i18n			    # Internationalization
│   │   ├── init			    # Startup initialization
│   │   ├── layout			    # Main layout components
│   │   ├── perm			    # Permissions and access control
│   │   ├── request			    # API request layer
│   │   ├── router			    # Router configuration
│   │   ├── store			    # Global state management
│   │   ├── utils			    # Utility functions
│   │   ├── views			    # Page components
│   │   ├── app.vue			    # Root component
│   │   ├── main.js			    # Entry JS file
│   │   └── style.css			# Global styles
│   ├── package.json			# Project dependencies
└── └── env.release				# Environment configuration

```

## External API

> This section explains how to call the platform from **another system** using an internal token — most commonly to **send emails from any mailbox (rich text, images, attachments)**.
> Emails sent via the API are **really delivered** (Cloudflare Email Routing / Resend) and **persisted**, visible in the admin "All Mail / Sent".

### 1. Get the API token (auth)

Every `/api/public/*` endpoint (except `genToken`) requires an `Authorization` token. Two ways to obtain it:

- **Option A (recommended)**: Admin panel → **System Settings → External API** → generate to **view / regenerate / copy** the token (no password exchange).
- **Option B**: Call `POST /api/public/genToken` with the admin email + password.

> The token is global and unique; regenerating immediately invalidates the old one.

```http
Authorization: YOUR_API_TOKEN
```

### 2. Send email `POST /api/public/sendEmail`

Send from **any mailbox under a configured domain**, supporting plain text, rich HTML, images and attachments.

**Headers**

| Header | Required | Notes |
|--------|----------|-------|
| `Authorization` | Yes | API token |
| `Content-Type` | Yes | `application/json` |

**Body parameters**

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `from` | string | Yes | Sender mailbox; the domain **must** be a configured domain, any prefix (e.g. `noreply@yourdomain.com`) |
| `fromName` | string | No | Sender display name (defaults to the mailbox prefix) |
| `to` | string \| string[] | Yes | Recipients: comma-separated string or array |
| `subject` | string | Yes | Subject |
| `text` | string | No | Plain-text body (**at least one** of `text` / `html`) |
| `html` | string | No | Rich HTML body |
| `attachments` | object[] | No | Up to **10** items; requires R2 storage. See below |

**`attachments` item**

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `filename` | string | Yes | File name with extension (e.g. `invoice.pdf`) |
| `content` | string | Yes | File content as **pure Base64** (no `data:...;base64,` prefix) |
| `type` | string | Yes | MIME type (e.g. `application/pdf`, `image/png`) |
| `contentId` | string | No | Inline images only; reference it in HTML via `<img src="cid:xxx">` |

**Images**

- **Remote URL (simplest)**: reference a public image URL in HTML. Some clients block remote images by default.
  ```json
  { "html": "<img src='https://your-cdn.com/banner.png' width='600'/>" }
  ```
- **Inline CID (best compatibility)**: pass the image as an attachment with `contentId` and reference it via `cid:`.
  > Inline CID is verified on the **Cloudflare Email** channel; if your domain uses **Resend**, prefer a remote URL or a normal attachment.
  ```json
  {
    "html": "<img src='cid:logo01'/>",
    "attachments": [{ "filename": "logo.png", "content": "iVBORw0K...", "type": "image/png", "contentId": "logo01" }]
  }
  ```

**Success response**

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "emailId": 123,
    "messageId": "xxxxxxxx",
    "channel": "cloudflare",
    "status": "delivered",
    "from": "noreply@yourdomain.com",
    "to": ["someone@example.com"],
    "createTime": "2099-12-30 23:59:59"
  }
}
```

`channel`: `cloudflare` / `resend` / `internal`. `status`: `delivered` / `sent`.

**Errors** — `{ "code": <non-200>, "message": "<reason>" }`. Message language follows the `accept-language` header. Common cases: `401` invalid token; `400` invalid JSON (watch out for smart quotes `" "`), invalid/unconfigured sender domain, empty recipient/subject/content, attachments > 10, no provider configured; `403` sending disabled.

**cURL example**

```bash
curl -X POST 'https://your-domain.com/api/public/sendEmail' \
  -H 'Authorization: YOUR_API_TOKEN' \
  -H 'Content-Type: application/json' \
  --data '{
    "from": "noreply@yourdomain.com",
    "fromName": "Your App",
    "to": ["someone@example.com"],
    "subject": "Hello",
    "html": "<h2>Hello</h2><p>A <strong>rich text</strong> email</p>"
  }'
```

### 3. Other public endpoints

- `POST /api/public/genToken` — no auth; body `{ "email", "password" }` → `{ data: { token } }`.
- `POST /api/public/emailList` — auth required; query emails. Some fields support fuzzy `%` (`admin`, `admin%`, `%@example.com`, `%admin%`). Params: `toEmail`, `sendName`, `sendEmail`, `subject`, `content`, `timeSort` (default `desc`), `type` (`0` received / `1` sent / empty all), `isDel`, `num` (1), `size` (20).
- `POST /api/public/addUser` — auth required; body `{ "list": [{ "email", "password?", "roleName?" }] }`.

### 4. Notes

- The sender domain must be **configured and verified** with the provider (Cloudflare / Resend), otherwise delivery fails.
- Cloudflare's `send_email` binding usually requires verified destination addresses; **configure Resend to send to arbitrary external recipients**.
- Sent emails are persisted and visible in the admin panel, Cloudflare (Email Routing / Workers logs) and Resend dashboard.
- Attachments require R2 storage; inline CID images are verified on the Cloudflare channel.

## Sponsor

<a href="https://doc.skymail.ink/support.html">
<img width="170px" src="./doc/images/support.png" alt="">
</a>

## License

This project is licensed under the [MIT](LICENSE) license.

## Communication

[Telegram](https://t.me/cloud_mail_tg)
