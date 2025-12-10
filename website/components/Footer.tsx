'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaTelegram, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const navigation = {
    company: [
        { name: 'О компании', href: '/about' },
    ],
    services: [
        { name: 'Тендеры', href: '/services/tenders' },
        { name: 'Импорт из Китая', href: '/services/import' },
        { name: 'Веб-разработка', href: '/services/web' },
        { name: 'Обучение', href: '/education' },
    ],
};

const social = [
    { name: 'Telegram', icon: FaTelegram, href: 'https://t.me/vapcompany' },
    { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/77472051617' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/vapcompanykz' },
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">
                                VAP COMPANY
                            </h3>
                            <p className="text-gray-400 mb-6">
                                Профессиональные бизнес-решения для вашего развития
                            </p>
                            <div className="flex space-x-4">
                                {social.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.a
                                            key={item.name}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                                        >
                                            <Icon className="w-5 h-5" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Company Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-white font-semibold mb-4">Компания</h4>
                        <ul className="space-y-2">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-white font-semibold mb-4">Услуги</h4>
                        <ul className="space-y-2">
                            {navigation.services.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="text-white font-semibold mb-4">Контакты</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <HiMail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                                <a
                                    href="mailto:vapcompany7605@gmail.com"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    vapcompany7605@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <HiPhone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                                <span>+7 (747) 205-16-17</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <HiLocationMarker className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                                <span>Алматы, Казахстан</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 pt-8 border-t border-gray-800"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © 2023-{new Date().getFullYear()} Vap Company. Все права защищены.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link
                                href="/privacy"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                            >
                                Политика конфиденциальности
                            </Link>
                            <Link
                                href="/terms"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                            >
                                Условия использования
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
