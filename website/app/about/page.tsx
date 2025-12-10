'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { HiCheckCircle, HiLightBulb, HiUsers, HiTrendingUp } from 'react-icons/hi';
import { prefersReducedMotion, slideUpVariants, optimizedViewport } from '@/lib/animationUtils';

const values = [
    {
        icon: HiCheckCircle,
        title: 'Надежность',
        description: 'Мы выполняем обязательства в срок и гарантируем качество каждого проекта',
    },
    {
        icon: HiLightBulb,
        title: 'Инновации',
        description: 'Используем современные технологии и подходы для решения бизнес-задач',
    },
    {
        icon: HiUsers,
        title: 'Клиентоориентированность',
        description: 'Индивидуальный подход к каждому клиенту и партнерские отношения',
    },
    {
        icon: HiTrendingUp,
        title: 'Развитие',
        description: 'Постоянно совершенствуем навыки и расширяем спектр услуг',
    },
];

const timeline = [
    {
        year: 'До 2023',
        title: 'Начало пути',
        description: 'Идея компании появилась задолго до её создания — это была мечта и цель, к которым шли через изучение рынка, технологий и возможностей.',
    },
    {
        year: '2023',
        title: 'Официальное основание',
        description: 'Официальная регистрация Vap Company. Запуск первых проектов в сфере тендерного бизнеса и импорта с Китая.',
    },
    {
        year: '2024',
        title: 'Расширение услуг',
        description: 'Добавление новых направлений: Сопровождение тендеров. Рост клиентской базы.',
    },
    {
        year: '2025',
        title: 'Новый уровень',
        description: 'Укрепление позиций на рынке, запуск собственных продуктов и выход на новые рынки.',
    },
];

export default function AboutPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 -z-10" />

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            О <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">компании</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            История развития и ценности Vap Company
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                Наша история
                            </h2>
                            <div className="space-y-4 text-gray-700 dark:text-gray-400 leading-relaxed">
                                <p>
                                    История Vap Company началась задолго до официальной регистрации в 2023 году.
                                    Её появлению предшествовала цель — прийти в сферу тендеров и веб-разработки, создавая решения, которые помогают бизнесу расти.
                                </p>
                                <p>
                                    Накопив богатый опыт и глубокое понимание рынка, было принято решение создать
                                    компанию, которая объединит профессионализм в тендерном сопровождении с
                                    передовыми технологиями веб-разработки.
                                </p>
                                <p>
                                    Сегодня Vap Company — это команда, которая предоставляет комплексные
                                    решения для бизнеса: от участия в тендерах и импорта товаров до разработки
                                    сайтов и CRM-систем. Мы гордимся каждым реализованным проектом и продолжаем
                                    расти вместе с нашими клиентами.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-square w-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Image
                                        src="/logomain2.png"
                                        alt="О компании VAP Company - команда профессиональных веб-разработчиков и IT-специалистов в Казахстане"
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-contain opacity-90"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Этапы развития
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            От идеи до успешной компании
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-2xl flex items-center justify-center shadow-xl">
                                            <span className="text-3xl font-bold text-white">{item.year}</span>
                                        </div>
                                    </div>
                                    <div className="flex-grow bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Миссия и видение
                        </h2>
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white mb-8">
                                <h3 className="text-2xl font-bold mb-4">Наша миссия</h3>
                                <p className="text-lg leading-relaxed">
                                    Помогать бизнесу достигать новых высот через профессиональное сопровождение
                                    тендеров, качественные веб-решения и эффективную автоматизацию процессов.
                                </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 md:p-12">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Наше видение</h3>
                                <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                                    Стать ведущей компанией в Казахстане и регионе, предоставляющей комплексные
                                    бизнес-решения и инновационные продукты для развития современного предпринимательства.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Наши ценности
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Принципы, которыми мы руководствуемся в работе
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-xl flex items-center justify-center mb-6">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-12 text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Готовы работать с нами?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Давайте вместе создадим успешное будущее для вашего бизнеса
                        </p>
                        <motion.button
                            onClick={() => setIsContactModalOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
                        >
                            Связаться с нами
                        </motion.button>
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
