import '@/styles/GlitchText.css';
import type { CSSProperties, ReactNode } from 'react';

interface GlitchTextProps {
  children: ReactNode;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
  className?: string;
}

type GlitchTextStyles = CSSProperties & {
  '--after-duration': string;
  '--before-duration': string;
  '--after-shadow': string;
  '--before-shadow': string;
};

const GlitchText = ({
  children,
  speed = 1,
  enableShadows = true,
  enableOnHover = true,
  className = ''
}: GlitchTextProps) => {
  const inlineStyles: GlitchTextStyles = {
    '--after-duration': `${speed * 3}s`,
    '--before-duration': `${speed * 2}s`,
    '--after-shadow': enableShadows ? '-5px 0 red' : 'none',
    '--before-shadow': enableShadows ? '5px 0 cyan' : 'none'
  };

  const hoverClass = enableOnHover ? 'enable-on-hover' : '';

  return (
    <div className={`glitch ${hoverClass} ${className}`} style={inlineStyles} data-text={children}>
      {children}
    </div>
  );
};

export default GlitchText;
