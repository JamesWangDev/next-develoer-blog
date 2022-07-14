import type { ComponentProps } from 'react';

import type { FC } from '@/types';
import { styled, css } from '~/stitches';

import { Link } from './Link';

const ButtonStyles = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-start',
  minHeight: '42px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '$accent',
  color: '$on-accent',
  py: '0.4rem',
  px: '0.8rem',
  gap: '0.4rem',
  fontWeight: 700,
  letterSpacing: '0.025rem',
  transition: 'all 0.2s ease-in-out',
  ellipsize: true,
  useFont: 'manrope',
  hocus: {
    backgroundColor: '$accent-dark',
    transform: 'translateY(-1px)',
    textDecoration: 'none',
  },
  '&:disabled': {
    opacity: 0.5,
    pointerEvents: 'none',
    cursor: 'not-allowed',
  },
  '& > svg:only-child': {
    margin: '0 auto',
  },
  variants: {
    withShadow: {
      true: {
        canHover: {
          boxShadow: '0 1px 2px 1px rgb($colors$toolbar-glow / .12)',
          hocus: {
            boxShadow: '0 1px 2px 1px rgb($colors$toolbar-glow / .24)',
          },
        },
      },
    },
    outlined: {
      true: {
        background: 'none',
        border: '1px solid $divider',
        color: '$text-secondary',
        boxShadow: 'none',
        hocus: {
          boxShadow: '0 0 1px 1px rgb($colors$toolbar-glow / 0.1)',
          backgroundColor: 'rgba(45 82 171 / .08)',
          borderColor: '$accent-dark',
          color: '$text-primary',
          dark: {
            backgroundColor: 'rgba(56 103  214 / 0.16)',
          },
        },
      },
    },
  },
});

const StyledButton = styled('button', ButtonStyles);

const StyledLinkButton = styled(Link, ButtonStyles);
export const LinkButton: FC<ComponentProps<typeof StyledLinkButton>> = (
  props,
) => {
  return (
    <StyledLinkButton
      {...props}
      underline={false}
      css={{ hocus: { color: '$on-accent', dark: { color: '$on-accent' } } }}
    />
  );
};

export const Button: FC<ComponentProps<typeof StyledButton>> = (props) => {
  return (
    <StyledButton
      aria-label={props.title}
      name={props.title}
      type={props.type || 'button'}
      {...props}
    />
  );
};
