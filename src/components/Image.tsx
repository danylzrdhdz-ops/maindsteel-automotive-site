import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean;
  quality?: number; // Permite el prop para compatibilidad, aunque Vite (sin server SSR) maneja la compresión de origen o build
}

/**
 * Componente Image nativo optimizado para Vite (Alternativa a next/image)
 * Mantiene la estructura de fill y objectFit, e incorpora lazy loading por defecto.
 */
export const Image: React.FC<ImageProps> = ({ fill, style, className, alt, quality, ...props }) => {
  // Cuando se requiere 'fill', envolvemos en un contenedor con posición relativa
  if (fill) {
    return (
      <div className="relative w-full h-full" style={{ position: 'relative' }}>
        <img
          {...props}
          alt={alt || ''}
          loading="lazy"
          decoding="async"
          className={`absolute w-full h-full inset-0 ${className || ''}`}
          style={{ ...style, objectFit: style?.objectFit || 'contain' }}
        />
      </div>
    );
  }

  // Comportamiento normal si no es full fill
  return (
    <img
      {...props}
      alt={alt || ''}
      loading="lazy"
      decoding="async"
      className={className}
      style={style}
    />
  );
};

export default Image;
