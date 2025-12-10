'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { FaCode, FaRocket, FaMobile, FaSearch, FaCheckCircle, FaClock, FaHeadset, FaChartLine } from 'react-icons/fa';
import { HiArrowRight, HiCheck, HiExternalLink } from 'react-icons/hi';
import { prefersReducedMotion, slideUpVariants, optimizedViewport } from '@/lib/animationUtils';
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiPostgresql,
    SiMongodb,
    SiDocker,
    SiGit,
    SiFigma,
    SiVercel,
    SiPython,
    SiPhp
} from 'react-icons/si';

const projects = [
    {
        title: 'Rockstar Track - Лендинг для музыкального стартапа',
        description: 'Сайт лендинг для продвижения инновационного музыкального стартапа с современным дизайном и анимациями',
        image: '/photoforweb/rockstar/rock.webp',
        imageAlt: 'Разработка лендинга Rockstar Track - современный дизайн сайта для музыкального стартапа с анимациями на Next.js',
        technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
        features: [
            'Современный минималистичный дизайн',
            'Плавные анимации и переходы',
            'Полная адаптивность',
            'SEO оптимизация'
        ],
        link: 'https://rockstar.kz/',
        category: 'Лендинг',
        year: '2025'
    },
    {
        title: 'Сайт и CRM Система для управления заказами и клиентами',
        description: 'Сайт и Полнофункциональная CRM для автоматизации заказов и учет клиентов',
        image: '/photoforweb/bonjour/logotransp.png',
        imageAlt: 'Логотип Bonjour Bakery - разработка многостраничного сайта и CRM системы для пекарни с каталогом товаров на PHP',
        technologies: ['PHP', 'SQLite', 'Vanilla JS', 'CSRF Protection'],
        features: [
            'Каталог товаров',
            'База данных клиентов и заказов',
            'Аналитика и отчетность',
            'Многостраничный сайт'
        ],
        link: 'https://bonjourbakery.kz/',
        category: 'Сайт + CRM Система',
        year: '2025'
    }
];

const technologies = [
    {
        category: 'Frontend',
        stack: [
            { name: 'React', icon: SiReact, color: 'text-blue-500' },
            { name: 'Next.js', icon: SiNextdotjs, color: 'text-black' },
            { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' }
        ]
    },
    {
        category: 'Backend',
        stack: [
            { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
            { name: 'PHP', icon: SiPhp, color: 'text-indigo-500' },
            { name: 'Python', icon: SiPython, color: 'text-blue-500' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
            { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' }
        ]
    },
    {
        category: 'DevOps & Tools',
        stack: [
            { name: 'Docker', icon: SiDocker, color: 'text-blue-600' },
            { name: 'Git', icon: SiGit, color: 'text-orange-600' },
            { name: 'Figma', icon: SiFigma, color: 'text-purple-600' },
            { name: 'Vercel', icon: SiVercel, color: 'text-black' }
        ]
    }
];

const benefits = [
    {
        icon: FaRocket,
        title: 'Быстрая разработка',
        description: 'Используем современные технологии для ускорения процесса разработки без потери качества'
    },
    {
        icon: FaMobile,
        title: 'Адаптивный дизайн',
        description: 'Все наши сайты идеально отображаются на любых устройствах - от смартфонов до больших мониторов'
    },
    {
        icon: FaSearch,
        title: 'SEO оптимизация',
        description: 'Оптимизируем сайты для поисковых систем, чтобы ваш бизнес находили в интернете'
    },
    {
        icon: FaHeadset,
        title: 'Поддержка 24/7',
        description: 'Предоставляем техническую поддержку и помощь в продвижении после запуска проекта'
    }
];

const process = [
    {
        step: '01',
        title: 'Анализ и планирование',
        description: 'Изучаем ваш бизнес, целевую аудиторию, анализируем конкурентов и составляем техническое задание',
        duration: '1-2 дня'
    },
    {
        step: '02',
        title: 'Дизайн и прототипирование',
        description: 'Создаем современный дизайн или дорабатываем ваш, разрабатываем интерактивные прототипы для согласования',
        duration: '2-3 дня'
    },
    {
        step: '03',
        title: 'Разработка',
        description: 'Программируем функционал, интегрируем API, настраиваем базы данных и админ-панель',
        duration: '3-14 дней'
    },
    {
        step: '04',
        title: 'Тестирование',
        description: 'Проверяем работу на всех устройствах, исправляем баги, оптимизируем производительность',
        duration: '1-2 дня'
    },
    {
        step: '05',
        title: 'Запуск и поддержка',
        description: 'Размещаем сайт на хостинге, настраиваем аналитику, обучаем команду и предоставляем поддержку',
        duration: '1-2 дня'
    }
];

const features = [
    'Уникальный дизайн под ваш бренд',
    'Быстрая загрузка страниц',
    'Защита от взлома и DDoS',
    'Интеграция с CRM и платежами',
    'Многоязычность',
    'Блог и новости',
    'Формы обратной связи',
    'Онлайн-чат',
    'Панель администратора',
    'Аналитика посещений',
    'Email-рассылки',
    'Резервное копирование'
];

const pricing = [
    {
        name: 'Landing - Одностраничный сайт',
        price: 'от 50 000 ₸',
        description: 'Одностраничный сайт для продажи товара или услуги',
        features: [
            'Современный дизайн',
            'Адаптивная верстка',
            'Форма обратной связи',
            'SEO базовая оптимизация',
            '1 месяц поддержки'
        ],
        popular: false
    },
    {
        name: 'Корпоративный сайт',
        price: 'от 120 000 ₸',
        description: 'Многостраничный сайт для представления компании',
        features: [
            'Премиум дизайн',
            'До 10 страниц',
            'Блог / Новости',
            'Панель администратора',
            'Интеграция с соц. сетями',
            '3 месяца поддержки'
        ],
        popular: true
    },
    {
        name: 'Интернет-магазин',
        price: 'от 250 000 ₸',
        description: 'Полнофункциональный магазин с корзиной и оплатой',
        features: [
            'Каталог товаров',
            'Корзина и оформление заказа',
            'Интеграция с платежами',
            'Личный кабинет',
            'Админ-панель',
            '6 месяцев поддержки'
        ],
        popular: false
    }
];

export default function WebDevelopmentPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    // Schema.org для услуги веб-разработки
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Разработка веб-сайтов",
        "provider": {
            "@type": "Organization",
            "name": "VAP Company",
            "url": "https://vapcompany.kz"
        },
        "offers": {
            "@type": "Offer",
            "priceRange": "50000-250000 KZT",
            "priceCurrency": "KZT"
        },
        "areaServed": "KZ",
        "description": "Профессиональная разработка сайтов: лендинги, корпоративные сайты, интернет-магазины"
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
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 opacity-50" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-6">
                            <FaCode className="w-4 h-4" />
                            <span>Веб-разработка</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Создаем{' '}
                            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                современные сайты, телеграмм боты и айти решения
                            </span>
                            {' '}под ключ
                        </h1>

                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            От лендингов до сложных веб-приложений. Используем передовые технологии
                            для создания быстрых, красивых и функциональных решений для вашего бизнеса.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.button
                                onClick={() => setIsContactModalOpen(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                            >
                                Заказать разработку
                                <HiArrowRight className="w-5 h-5" />
                            </motion.button>
                            <Link href="#projects">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
                                >
                                    Посмотреть проекты
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Наши проекты
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Примеры разработанных сайтов и веб-приложений
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-100 dark:border-gray-700"
                            >
                                {/* Project Image */}
                                <div className="relative h-64 bg-gradient-to-br from-green-100 to-blue-100 overflow-hidden rounded-t-2xl">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={project.image}
                                            alt={project.imageAlt || project.title}
                                            width={200}
                                            height={200}
                                            className="object-contain opacity-88 group-hover:scale-110 transition-transform duration-500 rounded-2xl"
                                        />
                                    </div>
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold">
                                            {project.year}
                                        </span>
                                        <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-2 mb-6">
                                        {project.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2">
                                                <HiCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {project.link && (
                                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
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
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                            Хотите увидеть больше примеров наших работ?
                        </p>
                        <Link href="/portfolio/web">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all"
                            >
                                Смотреть все проекты
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Технологический стек
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Используем современные и проверенные технологии
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {technologies.map((category, catIndex) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                            >
                                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                                    {category.category}
                                </h3>
                                <div className="space-y-4">
                                    {category.stack.map((tech) => (
                                        <div
                                            key={tech.name}
                                            className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group"
                                        >
                                            <tech.icon className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform`} />
                                            <span className="font-semibold text-gray-700 dark:text-gray-300">
                                                {tech.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Как мы работаем
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Прозрачный процесс разработки от идеи до запуска
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {process.map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col md:flex-row items-start gap-6 p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl shadow-lg hover:shadow-xl transition-all group border border-gray-100 dark:border-gray-700"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                                        {item.step}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold w-fit">
                                            {item.duration}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Возможности наших сайтов
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Все необходимое для успешного онлайн-присутствия
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-3 group"
                            >
                                <HiCheck className="w-5 h-5 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
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
                                        <div className="p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform">
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

            {/* Pricing Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Стоимость разработки
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Прозрачные цены для разных типов проектов
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricing.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all ${plan.popular ? 'border-2 border-green-500 transform scale-105' : 'border border-gray-200 dark:border-gray-700'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="px-4 py-1 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full text-sm font-semibold">
                                            Популярный
                                        </span>
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                                <p className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                    {plan.price}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2">
                                            <HiCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-400">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={`https://wa.me/77472051617?text=${encodeURIComponent(`Здравствуйте! Интересует ${plan.name}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-full py-3 rounded-xl font-semibold transition-all ${plan.popular
                                            ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg hover:shadow-xl'
                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                            }`}
                                    >
                                        Заказать
                                    </motion.button>
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-gray-600 dark:text-gray-400">
                            Нужен индивидуальный проект? {' '}
                            <button
                                onClick={() => setIsContactModalOpen(true)}
                                className="text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:hover:text-green-300 cursor-pointer"
                            >
                                Свяжитесь с нами
                            </button>
                            {' '} для расчета стоимости
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaRocket className="w-16 h-16 text-white mx-auto mb-6" />
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Готовы запустить свой проект?
                        </h2>
                        <p className="text-xl text-green-100 mb-8">
                            Получите бесплатную консультацию и коммерческое предложение уже сегодня
                        </p>
                        <button
                            onClick={() => setIsContactModalOpen(true)}
                            className=" px-8 py-4 bg-white text-green-600 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
                        >
                            Свяжитесь с нами
                        </button>

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
