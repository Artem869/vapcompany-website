/**
 * Оптимизированный компонент изображения с lazy loading
 * Автоматически применяет best practices для Core Web Vitals
 */

import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'loading' | 'placeholder'> {
    priority?: boolean; // Для изображений above-the-fold
    quality?: number; // Качество (по умолчанию 75)
}

export default function OptimizedImage({
    priority = false,
    quality = 75,
    ...props
}: OptimizedImageProps) {
    return (
        <Image
            {...props}
            quality={quality}
            loading={priority ? 'eager' : 'lazy'} // Priority изображения загружаются сразу
            placeholder="blur" // Blur эффект при загрузке
            blurDataURL={props.blurDataURL || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3C/svg%3E"}
            sizes={props.sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
            style={{
                ...props.style,
                maxWidth: '100%',
                height: 'auto',
            }}
        />
    );
}

// Компонент для изображений героя (above the fold)
export function HeroImage(props: Omit<OptimizedImageProps, 'priority'>) {
    return <OptimizedImage {...props} priority={true} quality={85} />;
}

// Компонент для фоновых изображений
export function BackgroundImage(props: Omit<OptimizedImageProps, 'priority' | 'quality'>) {
    return <OptimizedImage {...props} priority={false} quality={60} />;
}
