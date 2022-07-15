import { styled } from '~/stitches';

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  px: '14px',
  '@tablet-md': {
    px: 0,
  },
});
