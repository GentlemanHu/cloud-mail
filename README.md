<p align="center">
    <img src="doc/demo/logo.png" width="80px" />
    <h1 align="center">Cloud Mail</h1>
    <p align="center">基于 Cloudflare 的简约响应式邮箱服务，支持邮件发送、附件收发 🎉</p> 
    <p align="center">
        简体中文 | <a href="/README-en.md" style="margin-left: 5px">English </a>
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


## 项目简介

只需要一个域名，就可以创建多个不同的邮箱，类似各大邮箱平台，本项目支持署到 Cloudflare Workers ，降低服务器成本，搭建自己的邮箱服务

## 项目展示

- [在线演示](https://skymail.ink)<br>
- [部署文档](https://doc.skymail.ink)<br>

| ![](/doc/demo/demo1.png) | ![](/doc/demo/demo2.png) |
|-----------------------|-----------------------|
| ![](/doc/demo/demo3.png) | ![](/doc/demo/demo4.png) |




## 功能介绍

- **💰 低成本使用**： 可部署到 Cloudflare Workers 降低服务器成本

- **💻 响应式设计**：响应式布局自动适配PC和大部分手机端浏览器

- **📧 邮件发送**：集成Resend发送邮件，支持群发，内嵌图片和附件发送，发送状态查看

- **🛡️ 管理员功能**：可以对用户，邮件进行管理，RABC权限控制对功能及使用资源限制

- **📦 附件收发**：支持收发附件，使用R2对象存储保存和下载文件

- **🔔 邮件推送**：接收邮件后可以转发到TG机器人或其他服务商邮箱

- **📡 开放API**：支持使用API批量生成用户，多条件查询邮件 

- **🔢 验证码识别**：使用Workers AI，自动识别邮件验证码 

- **📈 数据可视化**：使用ECharts对系统数据详情，用户邮件增长可视化显示

- **🎨 个性化设置**：可以自定义网站标题，登录背景，透明度

- **🤖 人机验证**：集成Turnstile人机验证，防止人机批量注册

- **📜 更多功能**：正在开发中...



## 技术栈

- **平台**：[Cloudflare Workers](https://developers.cloudflare.com/workers/)

- **Web框架**：[Hono](https://hono.dev/)

- **ORM：**[Drizzle](https://orm.drizzle.team/)

- **前端框架**：[Vue3](https://vuejs.org/) 

- **UI框架**：[Element Plus](https://element-plus.org/) 

- **邮件推送：** [Resend](https://resend.com/)

- **缓存**：[Cloudflare KV](https://developers.cloudflare.com/kv/)

- **数据库**：[Cloudflare D1](https://developers.cloudflare.com/d1/)

- **文件存储**：[Cloudflare R2](https://developers.cloudflare.com/r2/)

## 目录结构

```
cloud-mail
├── mail-worker				    # worker后端项目
│   ├── src                  
│   │   ├── api	 			    # api接口层			
│   │   ├── const  			    # 项目常量
│   │   ├── dao                 # 数据访问层
│   │   ├── email			    # 邮件处理接收
│   │   ├── entity			    # 数据库实体
│   │   ├── error			    # 自定义异常
│   │   ├── hono			    # web框架配置、拦截器、全局异常等
│   │   ├── i18n			    # 语言国际化
│   │   ├── init			    # 数据库缓存初始化
│   │   ├── model			    # 响应体数据封装
│   │   ├── security			# 身份权限认证
│   │   ├── service			    # 业务服务层
│   │   ├── template			# 消息模板
│   │   ├── utils			    # 工具类
│   │   └── index.js			# 入口文件
│   ├── pageckge.json			# 项目依赖
│   └── wrangler.toml			# 项目配置
│
├── mail-vue				    # vue前端项目
│   ├── src
│   │   ├── axios 			    # axios配置
│   │   ├── components			# 自定义组件
│   │   ├── echarts			    # echarts组件导入
│   │   ├── i18n			    # 语言国际化
│   │   ├── init			    # 入站初始化
│   │   ├── layout			    # 主体布局组件
│   │   ├── perm			    # 权限认证
│   │   ├── request			    # api接口
│   │   ├── router			    # 路由配置
│   │   ├── store			    # 全局状态管理
│   │   ├── utils			    # 工具类
│   │   ├── views			    # 页面组件
│   │   ├── app.vue			    # 入口组件
│   │   ├── main.js			    # 入口js
│   │   └── style.css			# 全局css
│   ├── package.json			# 项目依赖
└── └── env.release				# 项目配置
```

## 外部 API 对接文档

> 本节介绍如何在**其它系统**中通过内部密钥调用本平台的接口，最常用的是「以任意邮箱为发送方发送邮件（支持富文本、图片、附件）」。
> 通过 API 发送的邮件会**真实投递**（Cloudflare Email Routing / Resend），并**落库**，在后台「全部邮件 / 已发送」中可见。

### 1. 获取 API 令牌（鉴权）

所有 `/api/public/*` 接口（除 `genToken` 外）都需要在请求头携带 `Authorization` 令牌。获取方式二选一：

- **方式一（推荐）**：管理员登录后台 → **系统设置 → 外部接口** → 点击生成，即可**查看 / 重置 / 复制**令牌，无需密码换取。
- **方式二**：调用 `POST /api/public/genToken`，用管理员邮箱+密码换取令牌。

> 令牌全局唯一，重新生成后旧令牌立即失效。

```http
Authorization: 你的令牌
```

---

### 2. 发送邮件 `POST /api/public/sendEmail`

以系统**已配置域名下的任意邮箱**作为发送方发送邮件，支持纯文本、富文本 HTML、图片、附件。

#### 请求头

| Header | 必填 | 说明 |
|--------|------|------|
| `Authorization` | 是 | API 令牌 |
| `Content-Type` | 是 | `application/json` |

#### 请求参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `from` | string | 是 | 发送方邮箱，域名**必须**是系统已配置的域名，前缀任意（如 `noreply@yourdomain.com`） |
| `fromName` | string | 否 | 发送方显示名，缺省取邮箱前缀 |
| `to` | string \| string[] | 是 | 收件人，字符串（逗号分隔多个）或字符串数组 |
| `subject` | string | 是 | 邮件标题 |
| `text` | string | 否 | 纯文本正文（`text` / `html` **至少填一个**） |
| `html` | string | 否 | 富文本 HTML 正文 |
| `attachments` | object[] | 否 | 附件数组，最多 **10** 个，结构见下（需配置 R2 对象存储） |

**`attachments` 元素结构**

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `filename` | string | 是 | 文件名（含扩展名，如 `invoice.pdf`） |
| `content` | string | 是 | 文件内容的 **Base64**（纯 Base64，不要带 `data:...;base64,` 前缀） |
| `type` | string | 是 | MIME 类型（如 `application/pdf`、`image/png`） |
| `contentId` | string | 否 | 仅内嵌图片使用，配合 HTML 中 `<img src="cid:xxx">`（见下文「内嵌图片」） |

#### 富文本 HTML

直接在 `html` 字段传入标准 HTML 即可，支持段落、样式、表格、链接等：

```json
{
  "html": "<h2 style='color:#1890ff'>标题</h2><p>这是一段<strong>富文本</strong>邮件，<a href='https://example.com'>点此访问</a>。</p>"
}
```

#### 图片

**方式 A — 远程图片 URL（最简单，通用）**：在 HTML 中直接引用可公网访问的图片链接。注意部分邮件客户端默认屏蔽远程图片，需用户点击“显示图片”。

```json
{ "html": "<p>看图：</p><img src='https://your-cdn.com/banner.png' width='600'/>" }
```

**方式 B — 内嵌图片 CID（兼容性最好）**：把图片作为附件传入并设置 `contentId`，在 HTML 中用 `cid:` 引用。

> 内嵌 CID 图片在 **Cloudflare Email 通道**已验证支持；若你的域名走 **Resend** 通道，建议改用「远程图片 URL」或将图片作为普通附件发送。

```json
{
  "html": "<p>内嵌图片：</p><img src='cid:logo01'/>",
  "attachments": [
    { "filename": "logo.png", "content": "iVBORw0KGgoAAAANS...", "type": "image/png", "contentId": "logo01" }
  ]
}
```

#### 附件（下载型）

普通附件（PDF、图片、压缩包等）通过 `attachments` 传入，不设置 `contentId` 即为下载附件：

```json
{
  "attachments": [
    { "filename": "report.pdf", "content": "JVBERi0xLjcNCiX...", "type": "application/pdf" }
  ]
}
```

> 附件功能依赖 **R2 对象存储**，若未配置 R2，请勿传 `attachments`。

#### 成功返回

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

| 字段 | 说明 |
|------|------|
| `emailId` | 落库后的邮件 ID（可在后台「全部邮件」查询） |
| `messageId` | 发信服务返回的消息 ID |
| `channel` | 实际使用的发送通道：`cloudflare` / `resend` / `internal`（全站内投递） |
| `status` | 邮件状态：`delivered`（已投递） / `sent`（已发送，等待回执） |

#### 错误返回与错误码

失败时返回 `{ "code": <非200>, "message": "<原因>" }`。错误提示语言随请求头 `accept-language`（默认中文）。常见错误：

| HTTP code | message（中文） | 触发原因 |
|-----------|----------------|----------|
| 401 | token验证失败 | `Authorization` 令牌错误或未生成 |
| 400 | 请求体不是合法的 JSON… | JSON 格式错误（常见：**中文引号** `" "`、缺引号/逗号） |
| 400 | 发送方邮箱格式不正确 | `from` 非法邮箱 |
| 400 | 发送方邮箱域名不在系统配置的域名内 | `from` 域名未在系统 `domain` 中 |
| 400 | 收件人不能为空 | `to` 为空 |
| 400 | 非法邮箱 | 某个收件人邮箱格式非法 |
| 400 | 邮件标题不能为空 | 缺 `subject` |
| 400 | 邮件内容不能为空… | `text` 与 `html` 都为空 |
| 400 | 附件不能超过10个 | `attachments` 超过 10 个 |
| 400 | 发信服务未配置，只能给站内邮箱发件 | 有站外收件人但未配置 Cloudflare Email / Resend |
| 403 | 邮件发送功能已停用 | 后台「邮件发送」开关已关闭 |

---

### 3. 调用示例

<details>
<summary><b>cURL</b></summary>

```bash
curl -X POST 'https://your-domain.com/api/public/sendEmail' \
  -H 'Authorization: YOUR_API_TOKEN' \
  -H 'Content-Type: application/json' \
  --data '{
    "from": "noreply@yourdomain.com",
    "fromName": "Your App",
    "to": ["someone@example.com"],
    "subject": "Hello",
    "html": "<h2>Hello</h2><p>这是一封<strong>富文本</strong>邮件</p><img src=\"https://your-cdn.com/pic.png\" width=\"600\"/>"
  }'
```
</details>

<details>
<summary><b>Node.js（fetch，Node 18+）</b></summary>

```js
const res = await fetch('https://your-domain.com/api/public/sendEmail', {
  method: 'POST',
  headers: {
    'Authorization': 'YOUR_API_TOKEN',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    from: 'noreply@yourdomain.com',
    fromName: 'Your App',
    to: ['someone@example.com'],
    subject: 'Hello',
    html: '<h2>Hello</h2><p>富文本邮件</p>',
    // 附件：把文件读成纯 base64
    // attachments: [{ filename: 'a.pdf', content: base64Str, type: 'application/pdf' }],
  }),
});
console.log(await res.json());
```
</details>

<details>
<summary><b>Python（requests）</b></summary>

```python
import requests, base64

# 可选：附件
# with open('a.pdf','rb') as f:
#     att_b64 = base64.b64encode(f.read()).decode()

resp = requests.post(
    'https://your-domain.com/api/public/sendEmail',
    headers={'Authorization': 'YOUR_API_TOKEN'},
    json={
        'from': 'noreply@yourdomain.com',
        'fromName': 'Your App',
        'to': ['someone@example.com'],
        'subject': 'Hello',
        'html': '<h2>Hello</h2><p>富文本邮件</p>',
        # 'attachments': [{'filename':'a.pdf','content':att_b64,'type':'application/pdf'}],
    },
)
print(resp.json())
```
</details>

<details>
<summary><b>PHP（cURL）</b></summary>

```php
<?php
$payload = json_encode([
  'from' => 'noreply@yourdomain.com',
  'fromName' => 'Your App',
  'to' => ['someone@example.com'],
  'subject' => 'Hello',
  'html' => '<h2>Hello</h2><p>富文本邮件</p>',
  // 'attachments' => [['filename'=>'a.pdf','content'=>base64_encode(file_get_contents('a.pdf')),'type'=>'application/pdf']],
]);
$ch = curl_init('https://your-domain.com/api/public/sendEmail');
curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => ['Authorization: YOUR_API_TOKEN', 'Content-Type: application/json'],
  CURLOPT_POSTFIELDS => $payload,
]);
echo curl_exec($ch);
```
</details>

---

### 4. 其它公共接口（对接时可能用到）

#### 4.1 生成令牌 `POST /api/public/genToken`

无需 `Authorization`，用管理员邮箱+密码换取令牌（全局唯一，重新生成旧的失效）。

```json
// 请求
{ "email": "admin@yourdomain.com", "password": "管理员密码" }
// 返回
{ "code": 200, "message": "success", "data": { "token": "9f4e298e-7431-4c76-bc15-4931c3a73984" } }
```

#### 4.2 邮件查询 `POST /api/public/emailList`

需 `Authorization`。部分参数支持模糊匹配 `%`：`'admin'` 等值、`'admin%'` 开头、`'%@example.com'` 结尾、`'%admin%'` 包含。

| 参数 | 类型 | 必填 | 默认 | 说明 |
|------|------|------|------|------|
| `toEmail` | string | 否 | | 收件人邮箱，支持模糊 |
| `sendName` | string | 否 | | 发件人名字，支持模糊 |
| `sendEmail` | string | 否 | | 发件人邮箱，支持模糊 |
| `subject` | string | 否 | | 邮件主题，支持模糊 |
| `content` | string | 否 | | 邮件 HTML，支持模糊 |
| `timeSort` | string | 否 | `desc` | 时间排序（`asc` 最旧，`desc` 最新） |
| `type` | integer | 否 | | 邮件类型（`0` 收件，`1` 发件，空 全部） |
| `isDel` | integer | 否 | | 是否删除（`0` 正常，`1` 删除，空 全部） |
| `num` | integer | 否 | `1` | 页码 |
| `size` | integer | 否 | `20` | 每页数量 |

#### 4.3 添加用户 `POST /api/public/addUser`

需 `Authorization`。批量创建邮箱用户，邮箱域名须为系统已配置域名。

```json
{
  "list": [
    { "email": "user1@yourdomain.com", "password": "可选，缺省随机", "roleName": "可选角色名" }
  ]
}
```

---

### 5. 重要说明（务必阅读）

- **发送方“任意”的边界**：能真正投递的前提是 `from` 的域名**已在系统配置**且**已在发信服务商（Cloudflare / Resend）验证**。使用未验证域名会被拒收或进垃圾箱。
- **发送通道**：配置了 Cloudflare Email Routing（`CF_EMAIL=true`）时优先走 Cloudflare；否则使用 `from` 域名对应的 Resend Token。
- **Cloudflare Email 收件人限制**：`send_email` binding 通常要求收件人为已验证的目标地址；**若需向任意外部收件人发信，请配置 Resend**。
- **可见性**：API 发送的邮件会落库，后台「全部邮件 / 已发送」可见；Cloudflare（Email Routing 活动 / Workers 日志）与 Resend 后台亦可见。
- **附件**依赖 R2 对象存储；**内嵌 CID 图片**在 Cloudflare 通道验证支持。
- **常见坑**：请求体务必是**合法 JSON**，不要使用中文引号 `“ ”`、避免缺引号/逗号。

## 赞助

<a href="https://doc.skymail.ink/support.html" >
<img width="170px" src="./doc/images/support.png" alt="">
</a>

## 许可证

本项目采用 [MIT](LICENSE) 许可证	


## 交流

[Telegram](https://t.me/cloud_mail_tg)



