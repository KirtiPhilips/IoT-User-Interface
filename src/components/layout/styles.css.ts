import {
  atomicBackgroundSecondary as backgroundSecondary,
  atomicBackgroundTertiary as backgroundTertiary,
  atomicBorderLeft as borderLeft,
  atomicBorderTop as borderTop,
} from '@filament/react/styles';
import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('body', {
  padding: 0,
  margin: 0,
});

export const content = style([
  backgroundTertiary,
  borderTop,
  borderLeft,
  {
    gridArea: 'content',
    overflowY: 'auto',
    padding: '1rem',
    borderTopLeftRadius: '0.5rem',
  },
]);

export const page = style([
  backgroundSecondary,
  {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: 'auto 1fr',
    gridTemplateAreas: `
    'header header'
    'sidebar content'`,
    height: '100svh',
    '@media': {
      [`(max-width: 1200px) `]: {
        gridTemplateColumns: '0 1fr',
      },
    },
  },
]);
