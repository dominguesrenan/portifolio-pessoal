import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface OptimizedImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    quality?: number;
    placeholder?: boolean;
    effect?: 'blur' | 'opacity';
    loading?: 'lazy' | 'eager';
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    width = 800,
    height = 600,
    quality = 80,
    placeholder = true,
    effect = 'blur',
    loading = 'lazy',
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isWebpSupported, setIsWebpSupported] = useState(false);

    useEffect(() => {
        const webpTest = new Image();
        webpTest.onload = () => setIsWebpSupported(true);
        webpTest.onerror = () => setIsWebpSupported(false);
        webpTest.src =
            'data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiQDAA7oQAA4JAQAAAGBAEVAAAAA=';
    }, []);

    const imageSrc = isWebpSupported ? src.replace(/\.(jpg|jpeg|png)$/, '.webp') : src;

    return (
        <LazyLoadImage
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            quality={quality}
            placeholder={placeholder}
            effect={effect}
            loading={loading}
            wrapperClassName="w-full"
            className={`h-full w-full object-cover ${isLoaded ? '' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
            webp={isWebpSupported}
        />
    );
};
