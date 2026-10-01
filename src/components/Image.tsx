import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean;
  quality?: number; // Permite el prop para compatibilidad, aunque Vite (sin server SSR) maneja la compresión de origen o build
}

/**
 * Componente Image nativo optimizado para Vite (Alternativa a next/image)
 * Mantiene la estructura de fill y objectFit, e incorpora lazy loading por defecto.
 */
export const Image: React.FC<ImageProps> = ({ fill, style, className, alt, quality, loading = 'lazy', fetchPriority, ...props }) => {
  // Cuando se requiere 'fill', envolvemos en un contenedor con posición relativa
  if (fill) {
    return (
      <div className="relative w-full h-full" style={{ position: 'relative' }}>
        <img
          alt={alt || ''}
          loading={loading}
          decoding="async"
          fetchPriority={fetchPriority}
          className={`absolute w-full h-full inset-0 ${className || ''}`}
          style={{ ...style, objectFit: style?.objectFit || 'contain' }}
          {...props}
        />
      </div>
    );
  }

  // Comportamiento normal si no es full fill
  return (
    <img
      alt={alt || ''}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      className={className}
      style={style}
      {...props}
    />
  );
};

export default Image;
