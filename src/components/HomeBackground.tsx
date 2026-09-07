'use client';

import { useTheme } from 'next-themes';
import Balatro from './Balatro';

const backgroundPalettes = {
  light: {
    color1: '#FFFFFF', // original #DE443B
    color2: '#4E4E43', // original #006BB4
    color3: '#E5E3E3' // original #162325
  },
  dark: {
    color1: '#000000',
    color2: '#9898a1',
    color3: '#1A1C1C'
  }
} as const;

export default function HomeBackground() {
  const { resolvedTheme } = useTheme();
  const palette = backgroundPalettes[resolvedTheme === 'light' ? 'light' : 'dark'];

  return (
    <Balatro
      spinRotation={-2}
      spinSpeed={7}
      {...palette}
      contrast={3.5}
      lighting={0.4}
      spinAmount={0.25}
      pixelFilter={2000}
    />
  );
}
