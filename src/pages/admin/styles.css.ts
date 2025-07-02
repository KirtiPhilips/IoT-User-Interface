import { style } from '@vanilla-extract/css';

import { BREAKPOINTS } from '~/global-styles.css';

export const content = style({
  gap: '1rem',
  flexDirection: 'column',
  '@media': {
    [`(min-width: ${BREAKPOINTS.tablet}px)`]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },
});

export const card = style({
  width: '100%',
  '@media': {
    [`(min-width: ${BREAKPOINTS.tablet}px)`]: {
      width: '20rem',
    },
  },
});
