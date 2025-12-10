/**
 * Утилита для оптимизации производительности анимаций
 * Уменьшает/отключает анимации на слабых устройствах и при настройке "reduce motion"
 */

// Проверка настройки "уменьшить анимацию" в ОС
export const prefersReducedMotion = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Проверка мобильного устройства
export const isMobile = () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
};

// Проверка слабого устройства (менее 4 ядер)
export const isLowEndDevice = () => {
    if (typeof navigator === 'undefined') return false;
    return (navigator.hardwareConcurrency || 4) < 4;
};

// Получить оптимизированные настройки анимации
export const getOptimizedAnimationConfig = () => {
    const shouldReduce = prefersReducedMotion() || isLowEndDevice();

    return {
        // Отключаем анимации для пользователей с настройкой "reduce motion"
        initial: shouldReduce ? {} : undefined,
        animate: shouldReduce ? {} : undefined,
        exit: shouldReduce ? {} : undefined,

        // Упрощенные transition для слабых устройств
        transition: shouldReduce
            ? { duration: 0 }
            : { duration: 0.3, ease: 'easeOut' },
    };
};

// Варианты анимаций для использования с Framer Motion
export const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 }
    },
};

export const slideUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 }
    },
};

export const scaleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3 }
    },
};

// Optimized viewport settings для whileInView
export const optimizedViewport = {
    once: true, // Анимация только 1 раз (экономия ресурсов)
    margin: '-50px', // Начинать анимацию чуть раньше
    amount: 0.3, // Минимум 30% элемента должно быть видно
};
