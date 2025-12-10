'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { FaFileContract, FaShip, FaCode, FaGraduationCap } from 'react-icons/fa';
import ContactModal from './ContactModal';
import ThemeToggle from './ThemeToggle';

const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'О компании', href: '/about' },
];

const services = [
    {
        name: 'Тендеры',
        href: '/services/tenders',
        icon: FaFileContract,
        description: 'Участие в государственных тендерах'
    },
    {
        name: 'Импорт из Китая',
        href: '/services/import',
        icon: FaShip,
        description: 'Поставки товаров из Китая'
    },
    {
        name: 'Веб-разработка',
        href: '/services/web',
        icon: FaCode,
        description: 'Создание сайтов под ключ'
    },
    {
        name: 'Обучение',
        href: '/education',
        icon: FaGraduationCap,
        description: 'Курсы по тендерам и импорту'
    },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        {/* Animated Logo Icon */}
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-xl shadow-lg flex items-center justify-center overflow-hidden"
                        >
                            <Image
                                src="/logomain2.png"
                                alt="VAP Company Logo"
                                width={40}
                                height={40}
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity -z-10" />
                        </motion.div>

                        {/* Text Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col leading-tight"
                        >
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                                VAP COMPANY
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider">
                                ВАШ БИЗНЕС ПАРТНЕР
                            </span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium group flex items-center space-x-1">
                                <span>Услуги</span>
                                <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
                            </button>

                            <AnimatePresence>
                                {isServicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700"
                                    >
                                        <div className="p-2">
                                            {services.map((service) => {
                                                const Icon = service.icon;
                                                return (
                                                    <Link
                                                        key={service.name}
                                                        href={service.href}
                                                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                                                    >
                                                        <div className="flex-shrink-0 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                                                            <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="text-gray-900 dark:text-gray-100 font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                                {service.name}
                                                            </div>
                                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                                {service.description}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <ThemeToggle />

                        <motion.button
                            onClick={() => setIsContactModalOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
                        >
                            Связаться
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <HiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            ) : (
                                <HiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* Mobile Services Submenu */}
                            <div>
                                <button
                                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                    className="w-full flex items-center justify-between px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors font-medium"
                                >
                                    <span>Услуги</span>
                                    <HiChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {isMobileServicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="mt-2 ml-4 space-y-2"
                                        >
                                            {services.map((service) => {
                                                const Icon = service.icon;
                                                return (
                                                    <Link
                                                        key={service.name}
                                                        href={service.href}
                                                        onClick={() => {
                                                            setIsMobileMenuOpen(false);
                                                            setIsMobileServicesOpen(false);
                                                        }}
                                                        className="flex items-center space-x-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors"
                                                    >
                                                        <Icon className="w-5 h-5" />
                                                        <span>{service.name}</span>
                                                    </Link>
                                                );
                                            })}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsContactModalOpen(true);
                                }}
                                className="w-full px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                            >
                                Связаться
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Contact Modal */}
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </motion.header>
    );
}
