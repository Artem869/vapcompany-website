'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { HiCheckCircle, HiShieldCheck, HiClock, HiTruck } from 'react-icons/hi';
import { FaBox, FaWarehouse, FaShip, FaHandshake, FaCalculator, FaFileContract } from 'react-icons/fa';
import { prefersReducedMotion, slideUpVariants, optimizedViewport } from '@/lib/animationUtils';

const benefits = [
    {
        icon: HiShieldCheck,
        title: 'Без рисков',
        description: 'Полная проверка поставщиков и качества товара перед отправкой',
    },
    {
        icon: FaWarehouse,
        title: 'Наш склад в Китае',
        description: 'У вас нет адреса? Используйте склад наших партнеров для консолидации',
    },
    {
        icon: HiClock,
        title: 'Экономия времени',
        description: 'Мы берем на себя все переговоры и документооборот',
    },
    {
        icon: HiTruck,
        title: 'Доставка до двери',
        description: 'Организуем логистику от склада в Китае до вашей двери',
    },
];

const problems = [
    {
        icon: '😰',
        title: 'Боитесь заказывать впервые?',
        description: 'Мы проведем вас через весь процесс от А до Я',
    },
    {
        icon: '🏢',
        title: 'Нет адреса склада в Китае?',
        description: 'Используйте склад наших партнеров для приема и проверки товара',
    },
    {
        icon: '🤝',
        title: 'Не знаете китайский язык?',
        description: 'Мы общаемся с поставщиками и контролируем процесс',
    },
    {
        icon: '💰',
        title: 'Не понимаете как работают платежи?',
        description: 'Мы объясним все финансовые схемы и поможем с оплатой',
    },

    {
        icon: '⚖️',
        title: 'Боитесь обмана?',
        description: 'Работаем только с проверенными поставщиками',
    },
];

const process = [
    {
        step: '01',
        title: 'Консультация',
        description: 'Обсуждаем ваши потребности, подбираем товар и поставщиков',
        icon: FaHandshake,
    },
    {
        step: '02',
        title: 'Поиск поставщика',
        description: 'Находим надежных производителей, проверяем их репутацию',
        icon: FaBox,
    },
    {
        step: '03',
        title: 'Расчет стоимости',
        description: 'Считаем полную цену с доставкой и всеми расходами',
        icon: FaCalculator,
    },
    {
        step: '04',
        title: 'Заказ и контроль',
        description: 'Размещаем заказ, контролируем производство и качество',
        icon: FaFileContract,
    },
    {
        step: '05',
        title: 'Отправка на склад',
        description: 'Товар доставляется на наш склад в Китае для проверки',
        icon: FaWarehouse,
    },
    {
        step: '06',
        title: 'Доставка в Казахстан',
        description: 'Организуем логистику и доставку до вас',
        icon: FaShip,
    },
];

const categories = [
    'Электроника и гаджеты',
    'Одежда и текстиль',
    'Мебель и интерьер',
    'Строительные материалы',
    'Автозапчасти',
    'Детские товары',
    'Косметика и уход',
    'Спортивные товары',
    'Упаковка и тара',
    'Промышленное оборудование',
    'Товары для дома',
    'И многое другое...',
];

export default function ImportPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    // Schema.org для услуги импорта
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Импорт товаров",
        "provider": {
            "@type": "Organization",
            "name": "VAP Company",
            "url": "https://vapcompany.kz"
        },
        "areaServed": "KZ",
        "description": "Полный цикл импорта товаров: поиск поставщиков, логистика, таможенное оформление. Работаем с Китаем"
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 -z-10" />

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Импорт товаров из <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">Китая</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                            Поможем заказать товары из Китая с нуля. Без опыта, без склада, без знания языка — мы берем все на себя
                        </p>
                        <motion.button
                            onClick={() => setIsContactModalOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-shadow"
                        >
                            Получить консультацию
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Problems Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Мы решаем ваши проблемы
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Первый раз заказываете из Китая? Не переживайте — мы знаем все подводные камни
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {problems.map((problem, index) => (
                            <motion.div
                                key={problem.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="text-4xl mb-4">{problem.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {problem.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {problem.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Почему с нами удобно
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Полный цикл импорта под ключ
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 mb-4">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Как это работает
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            6 простых шагов от идеи до получения товара
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {process.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                                >
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                                        {item.step}
                                    </div>
                                    <div className="mt-4">
                                        <Icon className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4" />
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Что мы поставляем
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Работаем с любыми категориями товаров
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                <div className="flex items-center justify-center space-x-2">
                                    <HiCheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                                    <span className="text-gray-900 dark:text-white font-medium">{category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Начните импорт из Китая сегодня
                    </h2>
                    <p className="text-xl text-purple-100 mb-8">
                        Получите бесплатную консультацию и расчет стоимости вашего заказа
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            onClick={() => setIsContactModalOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg hover:shadow-2xl transition-shadow"
                        >
                            Связаться с нами
                        </motion.button>
                        <Link
                            href="/education"
                            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
                        >
                            Пройти обучение
                        </Link>
                    </div>
                </motion.div>
            </section>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />

            <Footer />
        </div>
    );
}
