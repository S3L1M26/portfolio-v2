import React from 'react';
import { svgData } from '@/config/skills';

interface TechIconProps {
  iconData?: svgData;
  name: string;
}

export default function TechIcon({ iconData, name }: TechIconProps) {
  if (!iconData?.url) return null;

  const { url, color, themeColors } = iconData;

  const hasColor = Boolean(color);
  const lightColor = themeColors?.light;
  const darkColor = themeColors?.dark;

  // Lógica de estilos de Máscara CSS
  const maskStyle: React.CSSProperties = {
    maskImage: `url(${url})`,
    WebkitMaskImage: `url(${url})`,
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskPosition: 'center',
    WebkitMaskPosition: 'center',
    maskSize: 'contain',
    WebkitMaskSize: 'contain',
  };

  // -------------------------------------------------------------
  // CASO 1: Color tintado estático para AMBOS temas (color explícito)
  // Ejemplo: { url: 'react.svg', color: '#00D8FF' }
  // -------------------------------------------------------------
  if (hasColor && !lightColor && !darkColor) {
    return (
      <span
        className="w-6 h-6 inline-block shrink-0"
        style={{ ...maskStyle, backgroundColor: color }}
        role="img"
        aria-label={`${name} icon`}
      />
    );
  }

  // -------------------------------------------------------------
  // CASO 2: Se definieron colores para AMBOS temas
  // Ejemplo: { themeColors: { light: '#000000', dark: '#FFFFFF' } }
  // -------------------------------------------------------------
  if (lightColor && darkColor) {
    return (
      <span
        className="w-6 h-6 inline-block shrink-0 bg-(--icon-light) dark:bg-(--icon-dark) transition-colors"
        style={{
          ...maskStyle,
          '--icon-light': lightColor,
          '--icon-dark': darkColor,
        } as React.CSSProperties}
        role="img"
        aria-label={`${name} icon`}
      />
    );
  }

  // -------------------------------------------------------------
  // CASO 3: Solo se definió color para TEMA OSCURO (modo claro usa SVG original)
  // Ejemplo: { themeColors: { dark: '#FFFFFF' } }
  // -------------------------------------------------------------
  if (!lightColor && darkColor) {
    return (
      <>
        {/* En modo claro: SVG Original */}
        <img
          src={url}
          alt={`${name} icon`}
          className="w-6 h-6 object-contain block dark:hidden"
        />
        {/* En modo oscuro: SVG Tintado */}
        <span
          className="w-6 h-6 shrink-0 hidden dark:inline-block"
          style={{ ...maskStyle, backgroundColor: darkColor }}
          role="img"
          aria-label={`${name} icon`}
        />
      </>
    );
  }

  // -------------------------------------------------------------
  // CASO 4: Solo se definió color para TEMA CLARO (modo oscuro usa SVG original)
  // Ejemplo: { themeColors: { light: '#000000' } }
  // -------------------------------------------------------------
  if (lightColor && !darkColor) {
    return (
      <>
        {/* En modo claro: SVG Tintado */}
        <span
          className="w-6 h-6 shrink-0 inline-block dark:hidden"
          style={{ ...maskStyle, backgroundColor: lightColor }}
          role="img"
          aria-label={`${name} icon`}
        />
        {/* En modo oscuro: SVG Original */}
        <img
          src={url}
          alt={`${name} icon`}
          className="w-6 h-6 object-contain hidden dark:block"
        />
      </>
    );
  }

  // -------------------------------------------------------------
  // CASO 5: SVG Original (sin modificaciones)
  // Ejemplo: { url: 'python.svg' }
  // -------------------------------------------------------------
  return (
    <img
      src={url}
      alt={`${name} icon`}
      className="w-6 h-6 object-contain"
    />
  );
}