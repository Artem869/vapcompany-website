'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiHome, HiArrowLeft } from 'react-icons/hi';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
            {/* Animated background circles */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-30"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-30"
            />

            <div className="max-w-2xl mx-auto text-center relative z-10">
                {/* 404 Number */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        404
                    </h1>
                </motion.div>

                {/* Error message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Страница не найдена
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto">
                        К сожалению, страница, которую вы ищете, не существует или была перемещена.
                    </p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link href="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-2xl shadow-blue-600/50 flex items-center space-x-2"
                        >
                            <HiHome className="w-5 h-5" />
                            <span>Главная страница</span>
                        </motion.button>
                    </Link>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.history.back()}
                        className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-colors shadow-lg flex items-center space-x-2"
                    >
                        <HiArrowLeft className="w-5 h-5" />
                        <span>Назад</span>
                    </motion.button>
                </motion.div>

                {/* Additional info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12"
                >
                    <p className="text-gray-500 text-sm">
                        Если вы считаете, что это ошибка, свяжитесь с нами:{' '}
                        <a
                            href="mailto:vapcompany7605@gmail.com"
                            className="text-blue-600 hover:text-blue-700 font-semibold"
                        >
                            vapcompany7605@gmail.com
                        </a>
                    </p>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-16 flex justify-center space-x-4"
                >
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                            className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
