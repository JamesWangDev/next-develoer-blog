import styled from '@emotion/styled';
import Link from 'next/link';

import { Component, ComponentProps } from '~/elements/base/fc';
import {
  ComponentWithGradientProps,
  textShadowToClassName,
  gradientToClassName,
  TextShadowOptions,
} from '~/elements/props';
import { mediaQueries } from '~/types';

interface BaseToolbarLinkProps {
  active?: boolean;
}

interface ToolbarLinkProps
  extends ComponentProps,
    ComponentWithGradientProps,
    BaseToolbarLinkProps {
  to: string;
  title?: string;
  emoji?: string;
  label?: string;
}

export const BaseToolbarLink = styled('a')<BaseToolbarLinkProps>`
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-height: 48px;
  max-height: calc(var(--toolbar-height) - 0.6rem);
  min-width: 48px;
  height: 100%;
  border-radius: 4px;
  padding: 0 0.8rem;

  &.active,
  &:active,
  &:focus,
  &:hover {
    color: var(--accent-dark) !important;
    background-color: var(--toolbar-highlight);
    border-radius: 4px;
  }

  ${mediaQueries.tablet.lg} {
    min-height: unset;
    justify-content: center;
    margin: 0 0.2rem;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const ToolbarLinkEmoji = styled.span`
  margin-right: 0.6rem;

  @media not all and (min-resolution: 0.001dpcm) {
    @media {
      margin-right: 0.5rem;
    }
  }
`;

export const ToolbarLink: Component<ToolbarLinkProps> = (props) => {
  const {
    to,
    active,
    title,
    emoji,
    className,
    children,
    gradientColor,
    label,
  } = props;

  const actualTitle = title || (label ? `Link to ${label}` : '');

  const getEmojiShadowColor = (): TextShadowOptions | null => {
    if (!gradientColor) return null;
    return gradientColor.substring(
      0,
      gradientColor.indexOf('-'),
    ) as TextShadowOptions;
  };

  return (
    <Link href={to} passHref={true}>
      <BaseToolbarLink
        title={actualTitle}
        aria-label={actualTitle}
        className={`${className} nodeco ${active ? 'active' : ''}`.trim()}
        active={active}
      >
        {emoji && (
          <ToolbarLinkEmoji
            className={textShadowToClassName(getEmojiShadowColor(), true)}
          >
            {emoji}
          </ToolbarLinkEmoji>
        )}
        {children}
        {label && (
          <span className={gradientToClassName(gradientColor, true)}>
            {label}
          </span>
        )}
      </BaseToolbarLink>
    </Link>
  );
};
