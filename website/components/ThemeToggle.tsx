'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();

    // Избегаем гидратации на сервере
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800" />
        );
    }

    const currentTheme = theme || resolvedTheme;

    return (
        <motion.button
            onClick={() => {
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                console.log('Switching theme from', currentTheme, 'to', newTheme);
                setTheme(newTheme);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Переключить тему"
        >
            {currentTheme === 'dark' ? (
                <HiSun className="w-6 h-6" />
            ) : (
                <HiMoon className="w-6 h-6" />
            )}
        </motion.button>
    );
}
