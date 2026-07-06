import app from '../hono/hono';
import result from '../model/result';
import externalService from '../service/external-service';
import BizError from '../error/biz-error';
import { t } from '../i18n/i18n';

/**
 * 外部发信 API
 *
 * 鉴权：走 /public 前缀鉴权（见 security.js），请求头 Authorization 填入系统的 public token。
 * public token 由管理员在后台「系统设置 - 外部接口」一键生成，或通过 /api/public/genToken（邮箱+密码）获取。
 *
 * 示例：
 *   POST /api/public/sendEmail
 *   Authorization: <public token>
 *   Content-Type: application/json
 *   {
 *     "from": "noreply@yourdomain.com",
 *     "fromName": "Your App",
 *     "to": ["someone@example.com"],
 *     "subject": "Hello",
 *     "text": "纯文本内容",
 *     "html": "<p>HTML 内容</p>"
 *   }
 */
app.post('/public/sendEmail', async (c) => {
	let body = null;
	try {
		body = await c.req.json();
	} catch (e) {
		throw new BizError(t('invalidJsonBody'), 400);
	}
	const data = await externalService.sendEmail(c, body);
	return c.json(result.ok(data));
});
