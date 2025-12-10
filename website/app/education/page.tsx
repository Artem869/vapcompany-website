'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiCheckCircle, HiClock, HiCurrencyDollar, HiAcademicCap, HiChartBar, HiLightBulb } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { prefersReducedMotion, slideUpVariants, optimizedViewport } from '@/lib/animationUtils';

const courses = [
    {
        id: 1,
        title: 'Обучение работе с тендерами',
        description: 'Полный курс по участию в государственных и коммерческих тендерах в Казахстане + Бонус: курс по импорту из Китая',
        price: '150 000 ₸',
        duration: '3 недели',
        format: 'Онлайн + практика',
        gradient: 'from-blue-600 to-purple-600',
        icon: HiChartBar,
        image: '/images/tenders-course.jpg',
        badge: '🎁 Включает курс по Китаю',
        benefits: [
            'Понимание законодательной базы РК по госзакупкам',
            'Регистрация и работа на площадках: Mitwork, Goszakup, Samruk-Kazyna, НацБанк',
            'Подготовка конкурсной документации',
            'Стратегии ценообразования для победы',
            'Работа с ЭЦП и документооборотом',
            'Анализ конкурентов и рынка',
            'Обжалование результатов тендеров',
            '20+ практических кейсов из реального опыта',
            '🎁 БОНУС: Полный курс по импорту из Китая (экономия 50 000 ₸)',
        ],
        program: [
            {
                week: 1,
                title: 'Основы тендерной деятельности',
                topics: ['Законодательство РК', 'Регистрация на площадках', 'Виды тендеров'],
            },
            {
                week: 2,
                title: 'Подготовка к участию',
                topics: ['Анализ документации', 'Ценообразование', 'Подготовка документов'],
            },
            {
                week: 3,
                title: 'Участие и победа',
                topics: ['Подача заявок', 'Стратегии победы', 'Работа с обеспечениями'],
            },
            {
                week: 4,
                title: 'После победы и практика',
                topics: ['Заключение договоров', 'Обжалование', 'Разбор реальных кейсов', 'Закуп с Китая'],
            },
        ],
        results: [
            'Самостоятельно участвовать в тендерах',
            'Выигрывать тендеры',
            'Заказывать самостоятельно товары из Китая',
            'Увеличить прибыль бизнеса через госзакупки',
        ],
    },
    {
        id: 2,
        title: 'Обучение импорту из Китая',
        description: 'Практический курс по организации поставок товаров из Китая в Казахстан',
        price: '50 000 ₸',
        duration: '1 неделя',
        format: 'Онлайн + документы',
        gradient: 'from-green-600 to-teal-600',
        icon: HiLightBulb,
        image: '/images/china-import-course.jpg',
        benefits: [
            'Поиск надежных поставщиков в Китае',
            'Работа с платформами: Alibaba, 1688',
            'Логистика и таможенное оформление',
            'Расчет полной себестоимости товара',
            'Юридические аспекты импорта в РК',
            'Контроль качества и работа с браком',
            'Оптимизация налогов и пошлин',
            'Готовые шаблоны договоров и документов',
        ],
        program: [
            {
                week: 1,
                title: 'Основы импорта',
                topics: ['Поиск поставщиков', 'Работа с платформами', 'Проверка надежности'],
            },
            {
                week: 2,
                title: 'Логистика и документы',
                topics: ['Доставка и растаможка', 'Расчет себестоимости', 'Юридическое оформление'],
            },
        ],
        results: [
            'Находить выгодных поставщиков',
            'Организовывать поставки самостоятельно',
            'Экономить до 40% на посредниках',
            'Запустить импортный бизнес с нуля',
        ],
    },
];

const faqs = [
    {
        question: 'Какой формат обучения?',
        answer: 'Обучение проходит онлайн в формате видеоуроков + живые вебинары с преподавателем. Все записи сохраняются, можно смотреть в удобное время. После каждого модуля - домашние задания с проверкой.',
    },
    {
        question: 'Нужен ли опыт для обучения?',
        answer: 'Нет, курсы рассчитаны на новичков. Мы начинаем с основ и постепенно переходим к сложным темам. Главное - желание учиться и применять знания на практике.',
    },
    {
        question: 'Выдается ли сертификат?',
        answer: 'Да, после успешного прохождения курса и выполнения всех заданий вы получаете именной сертификат о прохождении обучения.',
    },
    {
        question: 'Можно ли оплатить в рассрочку?',
        answer: 'Да, для курса по тендерам доступна рассрочка на 3,6,12 месяцев. Для курса по импорту - полная оплата.',
    },
    {
        question: 'Есть ли поддержка после обучения?',
        answer: 'Да, в течение 3 месяцев после окончания курса вы можете задавать вопросы преподавателю и получать консультации.',
    },
];

export default function EducationPage() {
    const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

    // Schema.org для образовательных услуг
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "VAP Company - Обучение тендерам и импорту с Китая",
        "provider": {
            "@type": "Organization",
            "name": "VAP Company",
            "url": "https://vapcompany.kz"
        },
        "areaServed": "KZ",
        "description": "Практическое обучение тендерам и импорту из Китая"
    };

    return (
        <>
            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <Header />
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <HiAcademicCap className="w-5 h-5" />
                                <span>Образовательные программы</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                                Обучение для вашего бизнеса
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                                Получите практические знания от экспертов с реальным опытом. <br />
                                Начните зарабатывать на тендерах или импорте уже через месяц обучения. <br />
                                <span className="text-yellow-600 dark:text-yellow-400 font-semibold">🎁 Курс по тендерам включает обучение импорту из Китая!</span>
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex items-center space-x-2">
                                    <HiCheckCircle className="w-5 h-5 text-green-600" />
                                    <span>Практические кейсы</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <HiCheckCircle className="w-5 h-5 text-green-600" />
                                    <span>Сертификат</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <HiCheckCircle className="w-5 h-5 text-green-600" />
                                    <span>Поддержка 3 месяца</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Courses */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="space-y-32">
                            {courses.map((course, index) => {
                                const Icon = course.icon;
                                return (
                                    <div key={course.id}>
                                        {/* Info block between courses */}
                                        {index === 1 && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5 }}
                                                className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-2xl p-8 text-center mb-32 shadow-2xl"
                                            >
                                                <div className="text-4xl mb-4">🎁</div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                                    Специальное предложение!
                                                </h3>
                                                <p className="text-lg text-gray-800 mb-2">
                                                    При покупке курса <span className="font-bold">"Тендеры"</span> за 150 000 ₸
                                                </p>
                                                <p className="text-xl font-bold text-gray-900 dark:text-white">
                                                    Курс по импорту из Китая — В ПОДАРОК! 🎉
                                                </p>
                                                <p className="text-sm text-gray-700 dark:text-gray-900 mt-4">
                                                    Экономия 50 000 ₸ • Полная стоимость пакета 200 000 ₸
                                                </p>
                                            </motion.div>
                                        )}

                                        <motion.div
                                            key={course.id}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden"
                                        >
                                            {/* Course Header */}
                                            <div className={`bg-gradient-to-r ${course.gradient} p-8 md:p-12 text-white relative`}>
                                                {course.badge && (
                                                    <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                                        {course.badge}
                                                    </div>
                                                )}
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1">
                                                        <Icon className="w-12 h-12 mb-4" />
                                                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                                            {course.title}
                                                        </h2>
                                                        <p className="text-xl opacity-90 mb-6">
                                                            {course.description}
                                                        </p>
                                                        <div className="flex flex-wrap gap-4">
                                                            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                                                                <HiCurrencyDollar className="w-5 h-5" />
                                                                <div className="flex flex-col">
                                                                    <span className="font-bold">{course.price}</span>
                                                                    {course.badge && (
                                                                        <span className="text-xs opacity-75 line-through">200 000 ₸</span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                                                                <HiClock className="w-5 h-5" />
                                                                <span>{course.duration}</span>
                                                            </div>
                                                            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                                                                <HiAcademicCap className="w-5 h-5" />
                                                                <span>{course.format}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-8 md:p-12">
                                                {/* Benefits */}
                                                <div className="mb-12">
                                                    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                                                        Что вы получите
                                                    </h3>
                                                    <div className="grid md:grid-cols-2 gap-4">
                                                        {course.benefits.map((benefit, idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                                                className="flex items-start space-x-3"
                                                            >
                                                                <HiCheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                                                                <span className="text-gray-700 dark:text-gray-400">{benefit}</span>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Program */}
                                                <div className="mb-12">
                                                    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                                                        Программа обучения
                                                    </h3>
                                                    <div className="space-y-4">
                                                        {course.program.map((week, idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                initial={{ opacity: 0, y: 20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-md transition-shadow"
                                                            >
                                                                <div className="flex items-center space-x-4 mb-3">
                                                                    <div className={`bg-gradient-to-r ${course.gradient} text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold`}>
                                                                        {week.week}
                                                                    </div>
                                                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                                                        {week.title}
                                                                    </h4>
                                                                </div>
                                                                <div className="flex flex-wrap gap-2 ml-16">
                                                                    {week.topics.map((topic, topicIdx) => (
                                                                        <span
                                                                            key={topicIdx}
                                                                            className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                                                                        >
                                                                            {topic}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Results */}
                                                <div className="mb-8">
                                                    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                                                        После обучения вы сможете
                                                    </h3>
                                                    <div className="grid md:grid-cols-2 gap-4">
                                                        {course.results.map((result, idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                initial={{ opacity: 0, scale: 0.9 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                                className={`bg-gradient-to-r ${course.gradient} text-white p-6 rounded-xl`}
                                                            >
                                                                <p className="font-medium">{result}</p>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* CTA */}
                                                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                                                    <motion.button
                                                        onClick={() => setSelectedCourse(course.id)}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className={`px-8 py-4 bg-gradient-to-r ${course.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-shadow w-full sm:w-auto`}
                                                    >
                                                        Записаться на курс
                                                    </motion.button>
                                                    <a
                                                        href="https://wa.me/77472051617?text=Здравствуйте!%20Интересует%20обучение"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <motion.button
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            className="flex items-center space-x-2 px-8 py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors w-full sm:w-auto"
                                                        >
                                                            <FaWhatsapp className="w-5 h-5" />
                                                            <span>Написать</span>
                                                        </motion.button>
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                                Часто задаваемые вопросы
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400">
                                Ответы на популярные вопросы об обучении
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Готовы начать обучение?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Свяжитесь с нами для консультации и записи на курс
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                onClick={() => setSelectedCourse(1)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-shadow w-full sm:w-auto"
                            >
                                Записаться сейчас
                            </motion.button>
                            <a
                                href="https://wa.me/77472051617?text=Здравствуйте!%20Хочу%20записаться%20на%20обучение"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto"
                                >
                                    <FaWhatsapp className="w-5 h-5" />
                                    <span>Написать в WhatsApp</span>
                                </motion.button>
                            </a>
                        </div>
                    </motion.div>
                </section>

                {/* Modal with Form */}
                {selectedCourse && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                        onClick={() => setSelectedCourse(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto scrollbar-hide"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            }}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        Записаться на курс
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {courses.find(c => c.id === selectedCourse)?.title}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedCourse(null)}
                                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <ContactForm
                                courseType={courses.find(c => c.id === selectedCourse)?.title}
                                buttonText="Отправить заявку"
                                simpleForm={true}
                            />
                        </motion.div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}
