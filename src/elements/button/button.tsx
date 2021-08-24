import styled from '@emotion/styled';
import Icon from '@mdi/react';

import { Component, ComponentProps } from '~/elements/fc';

const baseButtonStyles = `
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 32px;
  color: #fff;
  padding: 0.4rem 0.8rem;
  text-decoration: none;

  & > *:not(:last-child) {
    margin-right: 0.4rem;
  }
`;

const BaseButton = styled.button`
  ${baseButtonStyles}
`;

interface ButtonProps extends ComponentProps {
  icon?: string;
  iconSize?: number;
}

export const Button: Component<ButtonProps> = (props) => {
  const { icon, iconSize = 1, className, children } = props;

  return (
    <BaseButton className={className}>
      {icon && <Icon path={icon} size={iconSize} />}
      {children && <span>{children}</span>}
    </BaseButton>
  );
};

const BaseLinkButton = styled.a`
  ${baseButtonStyles}
`;

interface LinkButtonProps extends ButtonProps {
  href: string;
  target?: string;
  rel?: string;
}

export const LinkButton: Component<LinkButtonProps> = (props) => {
  const {
    icon,
    iconSize = 1,
    className,
    children,
    href,
    target = '_blank',
    rel = 'noopener noreferrer',
  } = props;

  return (
    <BaseLinkButton className={className} href={href} target={target} rel={rel}>
      {icon && <Icon path={icon} size={iconSize} />}
      {children && <span>{children}</span>}
    </BaseLinkButton>
  );
};

const BaseLinkIconButton: Component<LinkButtonProps> = (props) => {
  const {
    icon,
    iconSize = 1,
    className,
    href,
    target = '_blank',
    rel = 'noopener noreferrer',
  } = props;

  return (
    <BaseLinkButton className={className} href={href} target={target} rel={rel}>
      {icon && <Icon path={icon} size={iconSize} />}
    </BaseLinkButton>
  );
};

export const LinkIconButton = styled(BaseLinkIconButton)`
  padding: 0.375rem 0.4rem 0.425rem;
`;

/*
const BaseGitHubButton = styled(Button)`
  background-color: #d34399;

  &:hover,
  &:focus {
    background-color: #a43477;
  }
`;

export const GitHubButton: Component<IconButtonProps> = (props) => {
  return <BaseGitHubButton {...props} icon={mdiHeartOutline} />;
};

const BasePayPalButton = styled(Button)`
  background-color: #1a4593;

  &:hover,
  &:focus {
    background-color: #002b7a;
  }
`;

export const PayPalButton: Component<IconButtonProps> = (props) => {
  return <BasePayPalButton {...props} icon={mdiCreditCardOutline} />;
};
*/
