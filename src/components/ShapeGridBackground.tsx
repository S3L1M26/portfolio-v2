'use client';

import { useTheme } from 'next-themes';
import ShapeGrid from './ShapeGrid';

const backgroundPalettes = {
  light: {
    borderColor: '#D4D4D8',
    fillColor: '#FAFAFA',
    hoverFillColor: '#E4E4E7'
  },
  dark: {
    borderColor: '#27272A',
    fillColor: '#09090B',
    hoverFillColor: '#27272A'
  }
} as const;

export default function ShapeGridBackground() {
  const { resolvedTheme } = useTheme();
  const palette = backgroundPalettes[resolvedTheme === 'light' ? 'light' : 'dark'];

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <ShapeGrid
        speed={0.5}
        squareSize={40}
        direction="diagonal"
        shape="square"
        hoverTrailAmount={0}
        {...palette}
      />
    </div>
  );
}
