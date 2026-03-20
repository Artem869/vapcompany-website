'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { FaCode, FaClock, FaCheckCircle, FaArrowLeft, FaTimes } from 'react-icons/fa';
import { HiArrowRight, HiCheck, HiExternalLink } from 'react-icons/hi';

const caseStudies = [
    {
        id: 1,
        title: 'Rockstar Track - Лендинг для музыкального стартапа',
        category: 'Лендинг',
        year: '2025',
        duration: '5 дней',
        image: '/photoforweb/rockstar/rock.webp',
        imageAlt: 'Кейс Rockstar Track - разработка премиального лендинга для музыкального стартапа с анимациями эквалайзера',
        link: 'https://rockstar.kz/',
        gallery: [
            '/photoforweb/rockstar/onee.webp',
            '/photoforweb/rockstar/two.webp',
            '/photoforweb/rockstar/three.webp',
        ],
        challenge: 'Клиент: Rockstar Track. Задача: создать современный премиальный сайт с музыкальными  анимациями, который показывает технологичность продукта.',
        solution: 'Разработали лендинг на Next.js 15 с использованием TypeScript и Tailwind CSS. Реализовали плавные анимации через Framer Motion, создали адаптивный дизайн для всех устройств, добавили анимацию эквалайзера и музыкальных иконок. Интегрировали SEO-оптимизацию для лучшей видимости в поисковых системах.',
        results: [
            'Современный минималистичный дизайн',
            'Время загрузки страницы < 1 секунды',
            'Полная адаптивность на всех устройствах',
            'Музыкальная анимации'
        ],
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'React'],
        features: [
            'Быстрая загрузка через статическую генерацию',
            'Адаптивные кастомные анимации под музыкальную тему',
            'Гладкие стеклянные (glass) эффекты интерфейса',
            'Автоматическая оптимизация изображений',
            'Полная адаптивность под мобильные устройства'
        ]
    },
    {
        id: 2,
        title: 'Bonjour Bakery - Кондитерская',
        category: 'Сайт + CRM',
        year: '2025',
        duration: '4 недели',
        image: '/photoforweb/bonjour/logotransp.png',
        imageAlt: 'Кейс Bonjour Bakery - разработка многостраничного сайта кондитерской с CRM системой учета заказов на PHP',
        link: 'https://bonjourbakery.kz/',
        gallery: [
            '/photoforweb/bonjour/one.webp',
            '/photoforweb/bonjour/two.webp',
            '/photoforweb/bonjour/three.webp',
            '/photoforweb/bonjour/four.webp',
            '/photoforweb/bonjour/five.webp',
            '/photoforweb/bonjour/six.webp'
        ],
        challenge: 'Клиент: Bonjour Bakery. Задача: создать современный многостраничный сайт с категориями тортов и выпечки. Так же CRM систему, учет клиентов, заказов, а так же выгрузка в ексель всех данных.',
        solution: 'Разработали многостраничный сайт и crm систему. Добавили пользователей (администратора и менеджера) для управления заказами и клиентами.Рализовали выгрузку все заказов и клиентов в ексель. Создали адаптивный дизайн для всех устройств, интегрировали SEO-оптимизацию для лучшей видимости в поисковых системах.',
        results: [
            'Современный дизайн',
            'Каталог больше 200 тортов и выпечки',
            'Полная адаптивность на всех устройствах',
            'WebP изображения с fallback',
            'Административная CRM панель'
        ],
        technologies: ['PHP', 'SQLite', 'Vanilla JS', 'CSRF Protection', 'XSS Prevention'],
        features: [
            'Плавные reveal-эффекты',
            'Анимированная загрузк',
            'CRM система для управления заказами',
            'Статистика и аналитика',
            'Динамический каталог продуктов',
            'Модульная архитектура'
        ]
    },
    {
        id: 3,
        title: 'DVR Company - Корпоративный сайт для IT компании',
        category: 'Сайт',
        year: '2025',
        duration: '1 неделя',
        image: '/photoforweb/dvr/logo1.png',
        imageAlt: 'Кейс DVR Company - создание корпоративного IT-сайта с портфолио проектов за 1 неделю',
        link: 'https://dvrcompany.kz/',
        gallery: [
            '/photoforweb/dvr/one.webp',
            '/photoforweb/dvr/two.webp',
            '/photoforweb/dvr/three.webp'
        ],
        challenge: 'Клиент: DVR Company. Задача: создать минималистичный  сайт с описанием услуг и  категориями товаров. ',
        solution: 'Разработали минималистичный сайт. Рализовали модальные окна с услугами и с выпадающими меню для товаров. Создали адаптивный дизайн для всех устройств, интегрировали SEO-оптимизацию для лучшей видимости в поисковых системах.',
        results: [
            'Современный и минималистичный дизайн',
            'Полная адаптивность на всех устройствах',
            'Интерактивные выпадающие меню товаров',
            'WebP изображения для быстрой загрузки'
        ],
        technologies: ['Next.js 16', 'React 19', 'Tailwind CSS 4', 'Framer Motion', 'TypeScript 5'],
        features: [
            'Серверные компоненты Next.js 16',
            'Плавные анимации Framer Motion',
            'TypeScript для типобезопасности',
            'Интерактивные модальные окна',
            'SEO и метатеги'
        ]
    },
    {
        id: 4,
        title: 'Ridera - Авто под выкуп',
        category: 'Лендинг',
        year: '2026',
        duration: '1.5 недели',
        image: '/photoforweb/ridera/logo.png',
        imageAlt: 'Кейс Ridera - создание лендинга для сдачи авто в аренду',
        link: 'https://ridera.kz/',
        gallery: [
            '/photoforweb/ridera/one.webp',
            '/photoforweb/ridera/two.webp',
            '/photoforweb/ridera/three.webp'
        ],
        challenge: 'Клиент: Ridera. Задача: переделать старый сайт на новый, минималистичный. ',
        solution: 'Разработали минималистичный сайт. Рализовали перевод на Казахский язык. Создали адаптивный дизайн для всех устройств, интегрировали SEO-оптимизацию для лучшей видимости в поисковых системах.',
        results: [
            'Современный и минималистичный дизайн',
            'Полная адаптивность на всех устройствах',
            'Мультиязычность (Казахский и Русский)',
            'WebP изображения для быстрой загрузки'
        ],
        technologies: ['Next.js 14', 'React 18', 'Tailwind CSS 4', 'TypeScript 5'],
        features: [
            'Серверные компоненты Next.js 14',
            'Плавные анимации',
            'TypeScript для типобезопасности',
            'Интерактивные модальные окна',
            'SEO и метатеги'
        ]
    }


];

const stats = [
    { value: '4', label: 'Завершенных проекта' },
    { value: '100%', label: 'Довольных клиентов' },
    { value: '2 нед', label: 'Средний срок' },
    { value: 'Чистый код', label: 'Никаких конструкторов' }
];

export default function WebPortfolioPage() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openModal = (id: number) => {
        setSelectedProject(id);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    const openImageModal = (image: string) => {
        setSelectedImage(image);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    const selectedCase = caseStudies.find(c => c.id === selectedProject);

    // Schema.org для портфолио проектов
    const portfolioSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": caseStudies.map((project, index) => ({
            "@type": "CreativeWork",
            "position": index + 1,
            "name": project.title,
            "description": project.challenge,
            "creator": {
                "@type": "Organization",
                "name": "VAP Company"
            },
            "datePublished": project.year,
            "url": project.link
        }))
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
            />

            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 opacity-50" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <Link href="/services/web" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors mb-8">
                        <FaArrowLeft className="w-4 h-4" />
                        Назад к веб-разработке
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-6">
                            <FaCode className="w-4 h-4" />
                            <span>Портфолио веб-разработки</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Наши{' '}
                            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                проекты
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Детальные кейсы по веб-разработке с описанием задач, решений и результатов
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
                    >
                        {stats.map((stat, index) => (
                            <div key={stat.label} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                                <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-20 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((caseStudy, index) => (
                            <motion.div
                                key={caseStudy.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => openModal(caseStudy.id)}
                                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer flex flex-col"
                            >
                                {/* Project Image */}
                                <div className="relative h-56 bg-gradient-to-br from-green-100 to-blue-100 overflow-hidden rounded-t-2xl">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={caseStudy.image}
                                            alt={caseStudy.imageAlt || caseStudy.title}
                                            width={150}
                                            height={150}
                                            className="object-contain group-hover:scale-110 transition-transform duration-500 rounded-2xl"
                                        />
                                    </div>
                                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                                        <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold text-center">
                                            {caseStudy.year}
                                        </span>
                                        <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-semibold text-center">
                                            {caseStudy.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
                                        {caseStudy.title}
                                    </h3>

                                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        <span className="flex items-center gap-1">
                                            <FaClock className="w-4 h-4" />
                                            {caseStudy.duration}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                                        {caseStudy.challenge}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {caseStudy.technologies.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {caseStudy.technologies.length > 3 && (
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs font-medium">
                                                +{caseStudy.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <button className="text-green-600 dark:text-green-400 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                                        Подробнее
                                        <HiArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedCase && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto py-8 px-4"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-10 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                            >
                                <FaTimes className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            </button>

                            {/* Header */}
                            <div className="p-8 md:p-12 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
                                <div className="flex flex-wrap items-center gap-4 mb-6">
                                    <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold">
                                        {selectedCase.category}
                                    </span>
                                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                                        {selectedCase.year}
                                    </span>
                                    <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold flex items-center gap-2">
                                        <FaClock className="w-4 h-4" />
                                        {selectedCase.duration}
                                    </span>
                                </div>

                                <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">{selectedCase.title}</h2>

                                {selectedCase.link && (
                                    <Link href={selectedCase.link} target="_blank" rel="noopener noreferrer" onClick={closeModal}>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all"
                                        >
                                            Посмотреть проект
                                            <HiExternalLink className="w-5 h-5" />
                                        </motion.button>
                                    </Link>
                                )}
                            </div>

                            {/* Gallery Section */}
                            {selectedCase.gallery && selectedCase.gallery.length > 0 && (
                                <div className="px-8 md:px-12 py-6 bg-gray-50 dark:bg-gray-900/50">
                                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Скриншоты проекта</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {selectedCase.gallery.map((img, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                onClick={() => openImageModal(img)}
                                                className="relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`${selectedCase.title} скриншот ${idx + 1}`}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-gray-800/90 rounded-full p-3">
                                                        <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Content */}
                            <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 max-h-[70vh] overflow-y-auto scrollbar-hide"
                                style={{
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none'
                                }}
                            >
                                {/* Left Column */}
                                <div className="space-y-8">
                                    {/* Challenge */}
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                                            <span className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                                                ?
                                            </span>
                                            Задача
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                                            {selectedCase.challenge}
                                        </p>
                                    </div>

                                    {/* Solution */}
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                                            <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                                                💡
                                            </span>
                                            Решение
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                                            {selectedCase.solution}
                                        </p>
                                    </div>

                                    {/* Results */}
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                                            <span className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white">
                                                <FaCheckCircle className="w-5 h-5" />
                                            </span>
                                            Результаты
                                        </h3>
                                        <ul className="space-y-3">
                                            {selectedCase.results.map((result) => (
                                                <li key={result} className="flex items-start gap-3">
                                                    <HiCheck className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 dark:text-gray-400">{result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-8">
                                    {/* Technologies */}
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Технологии</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {selectedCase.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-4 py-2 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 text-gray-700 dark:text-gray-300 rounded-lg font-medium border border-gray-200 dark:border-gray-700"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Реализованные функции</h3>
                                        <ul className="space-y-2">
                                            {selectedCase.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-2">
                                                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                                                    <span className="text-gray-700 dark:text-gray-400">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Image Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeImageModal}
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeImageModal}
                            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                        >
                            <FaTimes className="w-6 h-6 text-white" />
                        </button>

                        {/* Image */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-7xl w-full max-h-[90vh] aspect-video"
                        >
                            <Image
                                src={selectedImage}
                                alt="Полноэкранный просмотр"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </motion.div>

                        {/* Hint */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm">
                            Нажмите в любом месте, чтобы закрыть
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Хотите такой же результат?
                        </h2>
                        <p className="text-xl text-green-100 mb-8">
                            Расскажите о своем проекте, и мы создадим решение специально для вас
                        </p>
                        <motion.button
                            onClick={() => setIsContactModalOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
                        >
                            Обсудить проект
                            <HiArrowRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <Footer />

            {/* Contact Modal */}
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div>
    );
}
