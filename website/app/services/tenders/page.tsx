'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { FaFileContract, FaCheckCircle, FaChartLine, FaHandshake, FaShieldAlt, FaClock, FaTrophy, FaRocket, FaAward } from 'react-icons/fa';
import { HiArrowRight, HiCheck } from 'react-icons/hi';
import { prefersReducedMotion, slideUpVariants, optimizedViewport } from '@/lib/animationUtils';

// Наши собственные проекты Vap Company
const ourProjects = [
    {
        year: '2023',
        projects: 157,
        sum: '>18 млн ₸',
        growth: 'Старт',
        color: 'from-blue-400 to-blue-600'
    },
    {
        year: '2024',
        projects: 205,
        sum: '>30 млн ₸',
        growth: '+66%',
        color: 'from-purple-400 to-purple-600'
    },
    {
        year: '2025',
        projects: 139,
        sum: '>20 млн ₸',
        growth: 'В процессе',
        color: 'from-green-400 to-green-600'
    }
];

// Проекты клиентов, которым мы помогли выиграть
const clientWins = [

    {
        year: '2024',
        tenders: 1,
        sum: '50 млн ₸',
        winRate: '100%',
        color: 'from-purple-400 to-purple-600'
    },
    {
        year: '2025',
        tenders: 12,
        sum: '>350 млн ₸',
        winRate: '100%',
        color: 'from-green-400 to-green-600'
    }
];

const benefits = [
    {
        icon: FaCheckCircle,
        title: 'Высокий процент побед',
        description: 'Наш опыт и знание тендерного законодательства обеспечивают максимальные шансы на успех'
    },
    {
        icon: FaClock,
        title: 'Экономия времени',
        description: 'Мы берем на себя всю рутинную работу, позволяя вам сосредоточиться на бизнесе'
    },
    {
        icon: FaShieldAlt,
        title: 'Юридическая защита',
        description: 'Полное соответствие законодательству РК и защита ваших интересов'
    },
    {
        icon: FaChartLine,
        title: 'Аналитика и отчетность',
        description: 'Детальная статистика и прозрачная отчетность по каждому тендеру'
    }
];

const process = [
    {
        step: '01',
        title: 'Анализ потребностей',
        description: 'Изучаем ваш бизнес, определяем подходящие тендеры и формируем стратегию участия'
    },
    {
        step: '02',
        title: 'Поиск тендеров',
        description: 'Мониторим все площадки, отбираем релевантные тендеры и уведомляем вас о возможностях'
    },
    {
        step: '03',
        title: 'Подготовка документов',
        description: 'Собираем и оформляем все необходимые документы согласно требованиям заказчика'
    },
    {
        step: '04',
        title: 'Подача заявки',
        description: 'Размещаем заявку на площадке, следим за статусом и реагируем на запросы'
    },
    {
        step: '05',
        title: 'Сопровождение',
        description: 'Участвуем в переговорах, отвечаем на вопросы, защищаем вашу заявку'
    },
    {
        step: '06',
        title: 'Заключение договора',
        description: 'Помогаем в оформлении договора и обеспечиваем правильное исполнение обязательств'
    }
];

const faq = [
    {
        question: 'Какие тендеры вы сопровождаете?',
        answer: 'Мы работаем с государственными(Mitwork, Samruk-Kazyna, Goszakup, НацБанк) и коммерческими(MpKz, AirAstana, БЦК) тендерами в Казахстане: поставки, услуги, IT-проекты и другие направления.'
    },
    {
        question: 'Сколько стоят ваши услуги?',
        answer: 'Стоимость зависит от сложности тендера и объема работ. Мы работаем по фиксированной ставке или проценту от выигранного договора. Точную цену определяем после анализа.'
    },
    {
        question: 'Какие гарантии вы даете?',
        answer: 'Мы гарантируем профессиональную подготовку всех документов и соблюдение законодательства. При этом победа в тендере зависит от многих факторов, включая конкурентную среду и решение заказчика.'
    },
    {
        question: 'Сколько времени занимает подготовка к тендеру?',
        answer: 'В среднем 3-7 дней в зависимости от сложности. При срочных тендерах можем подготовить документы за 1-2 дня с доплатой за срочность.'
    }
];

export default function TendersPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    // Schema.org для услуги участия в тендерах
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Участие в тендерах,госзакупках",
        "provider": {
            "@type": "Organization",
            "name": "VAP Company",
            "url": "https://vapcompany.kz"
        },
        "areaServed": "KZ",
        "description": "Помощь в участии в государственных и коммерческих тендерах: поиск тендеров, подготовка документов, сопровождение"
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-50" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
                            <FaFileContract className="w-4 h-4" />
                            <span>Сопровождение тендеров</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                            Помощь в участии{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                                в тендерах
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Полное сопровождение тендерных процедур в Казахстане. От поиска подходящих тендеров
                            до заключения договора. Увеличиваем ваши шансы на победу.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                onClick={() => setIsContactModalOpen(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                            >
                                Получить консультацию
                                <HiArrowRight className="w-5 h-5" />
                            </motion.button>
                            <Link href="#process">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
                                >
                                    Как мы работаем
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
            </section>

            {/* Statistics Section */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
                            <FaTrophy className="w-4 h-4" />
                            <span>Наши достижения</span>
                        </div>
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Проекты Vap Company
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Тендеры, в которых участвовала наша компания
                        </p>
                    </motion.div>

                    {/* Our Projects Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {ourProjects.map((stat, index) => (
                            <motion.div
                                key={stat.year}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all group overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`} />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{stat.year}</h3>
                                        {stat.growth !== 'Старт' && stat.growth !== 'В процессе' && (
                                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold">
                                                {stat.growth}
                                            </span>
                                        )}
                                        {stat.growth === 'В процессе' && (
                                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold flex items-center gap-1">
                                                <FaRocket className="w-3 h-3" />
                                                {stat.growth}
                                            </span>
                                        )}
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Тендеров выиграно</p>
                                            <p className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                                {stat.projects}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Сумма договоров </p>
                                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                                {stat.sum}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Client Wins Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mb-20"
                    >
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/50 dark:to-blue-900/50 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-6">
                                <FaAward className="w-4 h-4" />
                                <span>Победы наших клиентов</span>
                            </div>
                            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                                Помогли клиентам выиграть
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400">
                                Тендеры, в которых мы сопровождали наших клиентов до победы
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {clientWins.map((stat, index) => (
                                <motion.div
                                    key={stat.year}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="relative p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all group overflow-hidden border-2 border-green-100 dark:border-green-900/50"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`} />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{stat.year}</h3>
                                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold">
                                                Win {stat.winRate}
                                            </span>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Тендеров сопровождено</p>
                                                <p className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                                    {stat.tenders}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Сумма выигранных тендеров</p>
                                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                                    {stat.sum}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Почему выбирают нас
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Преимущества работы с Vap Company
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all group"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                                            <benefit.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section id="process" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Процесс работы
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Как мы помогаем выигрывать тендеры
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {process.map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col md:flex-row items-start gap-6 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                                        {item.step}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white dark:bg-gray-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Частые вопросы
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Ответы на популярные вопросы о тендерах
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {faq.map((item, index) => (
                            <motion.div
                                key={item.question}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all"
                            >
                                <h3 className="text-xl font-bold mb-3 flex items-start gap-3 text-gray-900 dark:text-white">
                                    <HiCheck className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                                    {item.question}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed ml-9">
                                    {item.answer}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaHandshake className="w-16 h-16 text-white mx-auto mb-6" />
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Готовы начать выигрывать тендеры?
                        </h2>
                        <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
                            Получите бесплатную консультацию и узнайте, как мы можем помочь вашему бизнесу
                        </p>
                        <motion.button
                            onClick={() => setIsContactModalOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-blue-600 dark:bg-gray-900 dark:text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
                        >
                            Связаться с нами
                            <HiArrowRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />

            <Footer />
        </div>
    );
}
