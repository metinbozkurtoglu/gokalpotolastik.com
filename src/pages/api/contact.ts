import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, phone, message } = data;

    // Validation
    if (!name || name.length < 2) {
      return new Response(JSON.stringify({ error: 'Geçerli bir isim giriniz' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const phoneRegex = /^(\+90|0)?[0-9]{10}$/;
    const cleanPhone = phone.replace(/\s/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return new Response(JSON.stringify({ error: 'Geçerli bir telefon numarası giriniz' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: import.meta.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(import.meta.env.SMTP_PORT || '465'),
      secure: true, // SSL
      auth: {
        user: import.meta.env.SMTP_USER || 'info@gokalpotolastik.com',
        pass: import.meta.env.SMTP_PASS
      }
    });

    // Email content
    const mailOptions = {
      from: `"Gökalp Lastikçilik Web" <${import.meta.env.SMTP_USER || 'info@gokalpotolastik.com'}>`,
      to: import.meta.env.SMTP_TO || 'info@gokalpotolastik.com',
      replyTo: `"${name}" <noreply@gokalpotolastik.com>`,
      subject: `🚗 Yeni İletişim Formu: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #E53E3E 0%, #C53030 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #E53E3E; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 3px solid #E53E3E; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
            .cta { display: inline-block; background: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin:0;">🔧 Gökalp Lastikçilik</h1>
              <p style="margin:5px 0 0;">Yeni İletişim Formu Mesajı</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 İsim Soyisim:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📱 Telefon:</div>
                <div class="value"><a href="tel:${cleanPhone}" style="color:#E53E3E;">${phone}</a></div>
              </div>
              ${message ? `
              <div class="field">
                <div class="label">💬 Mesaj:</div>
                <div class="value">${message}</div>
              </div>
              ` : ''}
              <div style="text-align:center; margin-top:20px;">
                <a href="tel:${cleanPhone}" class="cta" style="background:#E53E3E;">📞 Müşteriyi Ara</a>
                <a href="https://wa.me/90${cleanPhone.replace(/^(\+90|0)/, '')}" class="cta">💬 WhatsApp</a>
              </div>
            </div>
            <div class="footer">
              <p>Bu mesaj gokalpotolastik.com iletişim formundan gönderildi.</p>
              <p>Tarih: ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Yeni İletişim Formu Mesajı
========================

İsim: ${name}
Telefon: ${phone}
${message ? `Mesaj: ${message}` : ''}

Tarih: ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({
      success: true,
      message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Email gönderme hatası:', error);
    return new Response(JSON.stringify({
      error: 'Mesaj gönderilemedi. Lütfen telefon ile iletişime geçin.',
      fallback: true
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
