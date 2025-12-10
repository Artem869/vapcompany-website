'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiUser, HiChatAlt2 } from 'react-icons/hi';

interface ContactFormProps {
    courseType?: string; // Если это форма для записи на курс
    subject?: string; // Тема обращения
    buttonText?: string;
    simpleForm?: boolean; // Только имя и телефон
}

export default function ContactForm({ courseType, subject, buttonText = 'Отправить заявку', simpleForm = false }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const formatPhoneNumber = (value: string): string => {
        // Убираем все символы кроме цифр
        const digitsOnly = value.replace(/\D/g, '');

        // Если пусто, возвращаем пустую строку
        if (!digitsOnly) return '';

        // Форматируем в зависимости от длины
        if (digitsOnly.length <= 1) {
            return `+${digitsOnly}`;
        } else if (digitsOnly.length <= 4) {
            return `+${digitsOnly.slice(0, 1)} (${digitsOnly.slice(1)}`;
        } else if (digitsOnly.length <= 7) {
            return `+${digitsOnly.slice(0, 1)} (${digitsOnly.slice(1, 4)}) ${digitsOnly.slice(4)}`;
        } else if (digitsOnly.length <= 9) {
            return `+${digitsOnly.slice(0, 1)} (${digitsOnly.slice(1, 4)}) ${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7)}`;
        } else {
            return `+${digitsOnly.slice(0, 1)} (${digitsOnly.slice(1, 4)}) ${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7, 9)}-${digitsOnly.slice(9, 11)}`;
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhoneNumber(e.target.value);
        setFormData({ ...formData, phone: formatted });
    };

    const validatePhone = (phone: string): boolean => {
        // Убираем все символы кроме цифр
        const digitsOnly = phone.replace(/\D/g, '');
        // Проверяем: от 10 до 11 цифр (для казахстанских номеров)
        return digitsOnly.length >= 10 && digitsOnly.length <= 11;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        // Валидация телефона
        if (!validatePhone(formData.phone)) {
            setStatus('error');
            setErrorMessage('Введите корректный номер телефона (10-11 цифр)');
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    courseType,
                    subject,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', email: '', message: '' });

                // Сбрасываем статус через 5 секунд
                setTimeout(() => {
                    setStatus('idle');
                }, 5000);
            } else {
                setStatus('error');
                setErrorMessage(data.error || 'Произошла ошибка');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Не удалось отправить заявку. Проверьте подключение к интернету.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-2">
                    Ваше имя *
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiUser className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                    </div>
                    <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Введите ваше имя"
                    />
                </div>
            </div>

            {/* Phone */}
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-2">
                    Телефон *
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiPhone className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                    </div>
                    <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+7 (___) ___-__-__"
                        maxLength={18}
                    />
                </div>
            </div>

            {/* Email - только если не простая форма */}
            {!simpleForm && (
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-2">
                        Email (необязательно)
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <HiMail className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                        </div>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="email@example.com"
                        />
                    </div>
                </div>
            )}

            {/* Message - только если не простая форма */}
            {!simpleForm && (
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-2">
                        Сообщение (необязательно)
                    </label>
                    <div className="relative">
                        <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                            <HiChatAlt2 className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                        </div>
                        <textarea
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                            placeholder="Дополнительная информация..."
                        />
                    </div>
                </div>
            )}

            {/* Status Messages */}
            {status === 'success' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-300"
                >
                    ✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
                </motion.div>
            )}

            {status === 'error' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-300"
                >
                    ❌ {errorMessage}
                </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all ${status === 'loading'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg'
                    }`}
            >
                {status === 'loading' ? (
                    <span className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        Отправка...
                    </span>
                ) : (
                    buttonText
                )}
            </motion.button>

            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                * Обязательные поля
            </p>
        </form>
    );
}
