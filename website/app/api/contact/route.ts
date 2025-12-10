import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Создаём транспорт для отправки email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, phone, email, message, subject, courseType } = body;

        // Валидация
        if (!name || !phone) {
            return NextResponse.json(
                { error: 'Имя и телефон обязательны' },
                { status: 400 }
            );
        }

        // Формируем текст письма
        let emailText = `
Новая заявка с сайта VAP Company
═══════════════════════════════════

`;

        if (courseType) {
            emailText += `📚 ТИП ЗАЯВКИ: ${courseType}\n\n`;
        } else if (subject) {
            emailText += `📋 ТЕМА: ${subject}\n\n`;
        }

        emailText += `
👤 ИМЯ: ${name}
📱 ТЕЛЕФОН: ${phone}
`;

        if (email) {
            emailText += `📧 EMAIL: ${email}\n`;
        }

        if (message) {
            emailText += `\n💬 СООБЩЕНИЕ:\n${message}\n`;
        }

        emailText += `
═══════════════════════════════════
⏰ Дата: ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Almaty' })}
`;

        // HTML версия письма
        const emailHTML = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; }
        .header { background: linear-gradient(135deg, #2563eb 0%, #9333ea 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: white; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin: 15px 0; padding: 15px; background: #f8f9fa; border-left: 4px solid #2563eb; border-radius: 5px; }
        .field-label { font-weight: bold; color: #2563eb; margin-bottom: 5px; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0;">🔔 Новая заявка</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Сайт VAP Company</p>
        </div>
        <div class="content">
            ${courseType ? `<div class="field"><div class="field-label">📚 Тип заявки</div><div style="font-size: 18px; font-weight: bold;">${courseType}</div></div>` : ''}
            ${subject ? `<div class="field"><div class="field-label">📋 Тема</div><div>${subject}</div></div>` : ''}
            <div class="field">
                <div class="field-label">👤 Имя</div>
                <div>${name}</div>
            </div>
            <div class="field">
                <div class="field-label">📱 Телефон</div>
                <div style="font-size: 18px; font-weight: bold;"><a href="tel:${phone}">${phone}</a></div>
            </div>
            ${email ? `<div class="field"><div class="field-label">📧 Email</div><div><a href="mailto:${email}">${email}</a></div></div>` : ''}
            ${message ? `<div class="field"><div class="field-label">💬 Сообщение</div><div style="white-space: pre-wrap;">${message}</div></div>` : ''}
            <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #e5e7eb; color: #666; font-size: 14px;">
                ⏰ ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Almaty' })}
            </div>
        </div>
        <div class="footer">
            <p>Это автоматическое уведомление с сайта vapcompany.kz</p>
        </div>
    </div>
</body>
</html>
`;

        // Отправляем email
        await transporter.sendMail({
            from: `"VAP Company Website" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: courseType
                ? `🎓 Заявка на обучение: ${courseType}`
                : subject
                    ? `💼 ${subject}`
                    : '📩 Новая заявка с сайта',
            text: emailText,
            html: emailHTML,
        });

        return NextResponse.json(
            { message: 'Заявка успешно отправлена!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json(
            { error: 'Ошибка при отправке заявки. Попробуйте позже.' },
            { status: 500 }
        );
    }
}
