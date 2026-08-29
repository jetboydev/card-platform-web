'use client';

import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { useState } from 'react';
import { images } from '@/shared/assets';

interface CustomImageProps {
  src?: string | StaticImageData | null;
  alt: string;
  fallbackSrc?: string | StaticImageData;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  className?: string;
}

export function CustomImage({
  src,
  alt,
  fallbackSrc = images.imageDefault,
  priority = false,
  fill = true,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  className,
}: CustomImageProps) {
  const [error, setError] = useState(false);
  const effectiveSrc = error || !src ? fallbackSrc : src;

  return (
    <Image
      src={effectiveSrc}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      onError={() => setError(true)}
      className={className}
    />
  );
}
