'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMail, HiX } from 'react-icons/hi';
import ContactForm from './ContactForm';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [showForm, setShowForm] = useState(false);
    const [mounted, setMounted] = useState(false);

    const whatsappNumber = '77472051617';
    const whatsappMessage = encodeURIComponent('Здравствуйте! Интересует ваши услуги.');
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    useEffect(() => {
        setMounted(true);
    }, []);

    // Блокируем скролл body, но разрешаем внутри модалки
    useEffect(() => {
        if (isOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [isOpen]);

    const handleClose = () => {
        setShowForm(false);
        onClose();
    };

    if (!mounted || !isOpen) return null;

    const modalContent = (
        <AnimatePresence>
            <div
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                onClick={handleClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-lg w-full relative max-h-[90vh] overflow-y-auto scrollbar-hide my-auto"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                    >
                        <HiX className="w-6 h-6" />
                    </button>

                    {!showForm ? (
                        // Choice Screen
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                                Свяжитесь с нами
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-8">
                                Выберите удобный способ связи
                            </p>

                            <div className="space-y-4">
                                {/* WhatsApp Button */}
                                <motion.a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-center space-x-3 w-full px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow"
                                >
                                    <FaWhatsapp className="w-6 h-6" />
                                    <span>Написать в WhatsApp</span>
                                </motion.a>

                                {/* Divider */}
                                <div className="flex items-center space-x-4 py-2">
                                    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">или</span>
                                    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                                </div>

                                {/* Form Button */}
                                <motion.button
                                    onClick={() => setShowForm(true)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-center space-x-3 w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow"
                                >
                                    <HiMail className="w-6 h-6" />
                                    <span>Оставить заявку</span>
                                </motion.button>
                            </div>

                            {/* Contact Info */}
                            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Или позвоните нам:</p>
                                <a
                                    href="tel:+77472051617"
                                    className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                >
                                    +7 (747) 205-16-17
                                </a>
                            </div>
                        </div>
                    ) : (
                        // Form Screen
                        <div>
                            <div className="mb-6">
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors mb-4"
                                >
                                    ← Назад
                                </button>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    Оставить заявку
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Мы свяжемся с вами в ближайшее время
                                </p>
                            </div>
                            <ContactForm
                                subject="Общая заявка с сайта"
                                buttonText="Отправить заявку"
                            />
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );

    return createPortal(modalContent, document.body);
}