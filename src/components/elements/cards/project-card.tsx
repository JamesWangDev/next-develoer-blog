import styled from '@emotion/styled';
import { mdiStar } from '@mdi/js';
import Icon from '@mdi/react';
import { useMemo, CSSProperties, memo } from 'react';

import { LinkCard, Image, Heading } from '~/components/atoms/simple';
import useRequest from '~/hooks/useRequest';
import { useTheme } from '~/providers/theme';
import { Component, ComponentProps, ProjectProps } from '~/types';
import getReadableColor from '~/utils/colors/get-readable-color';
import buildShadowStyles from '~/utils/styles/build-shadow-styles';
import buildStyles from '~/utils/styles/build-styles';

const BaseProjectCard = styled(LinkCard)`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.2rem;
  color: var(--text-secondary);
  border-radius: 10px;
  border-color: var(--divider);
  background-color: rgba(var(--divider-opaque), 0.006);

  & * {
    transition: all 0.25s ease-in-out;
  }
  & p,
  & .stars {
    color: var(--text-secondary);
    border-color: var(--divider);
  }
  & img {
    filter: saturate(0.95) opacity(0.85);
  }

  &:hover,
  &:focus {
    padding: calc(1rem - 1px) calc(1.2rem - 1px);
    color: var(--text-primary);
    background-color: var(--bg-color);
    border-color: var(--border-color, var(--divider));
    border-width: 2px;
    box-shadow: var(--shadow);

    & h4 {
      text-decoration: underline;
      color: var(--hl-color);
    }
    & p,
    & .stars {
      color: var(--text-primary);
      border-color: var(--border-color, var(--divider));
      border-left-width: 2px;
      border-bottom-width: 2px;
    }
    & img {
      transform: scale(1.05);
      filter: saturate(1) opacity(1);
    }
    & img,
    & ul {
      opacity: 1 !important;
    }
  }
`;

const IconHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.6rem;
  margin-left: -0.2rem;
  gap: 0.8rem;

  & img {
    opacity: 0.9;
    filter: drop-shadow(0 1px 2px var(--border-color));
  }
`;

const ProjectHeading = styled(Heading)`
  color: var(--text-primary);
  font-size: var(--font-sm);
  left: calc(48px + 0.6rem);
  text-shadow: 1px 2px 2px var(--projects-card-text-shadow);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProjectDescription = styled.p`
  font-size: var(--font-2xs);
`;

const ProjectStarsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--bg-color);
  border-bottom-left-radius: 10px;
  font-size: var(--font-2xs);
  font-family: var(--manrope-font);
  border: 1px solid;
  border-color: var(--border-color, var(--divider));
  border-top-width: 0;
  border-right-width: 0;
  display: flex;
  align-items: center;
  padding: 0.2rem 0.4rem;
  gap: 0.2rem;
  transition-duration: 0.1s;

  & > * {
    transition-duration: 0.1s;
  }
  & > svg {
    padding-bottom: 0.1rem;
  }
`;

interface ProjectCardProps extends ComponentProps, ProjectProps {}

const DefaultProjectCard: Component<ProjectCardProps> = (props) => {
  const { name, description, link, icon, color, darkColor, repo, owner } =
    props;
  const { data } = useRequest<{ stars?: string }>(
    `/api/repo/${repo}${owner ? `?owner=${owner}` : ''}`,
  );

  const { isDark, themeReady } = useTheme();

  const projectColor = useMemo<string | null | undefined>(() => {
    if (!themeReady) return null;
    return isDark ? darkColor || color : color;
  }, [isDark, color, darkColor, themeReady]);

  const titleColors = useMemo<CSSProperties>(() => {
    if (!themeReady || !projectColor) return {};
    const textColor = getReadableColor(projectColor, isDark);
    return buildStyles({ '--hl-color': textColor || undefined });
  }, [themeReady, isDark, projectColor]);

  const shadowColors = useMemo<CSSProperties>(() => {
    if (!themeReady || !projectColor) return {};
    return buildShadowStyles(projectColor, isDark, {
      border: 0.5,
      bg: 0.035,
    });
  }, [themeReady, isDark, projectColor]);

  return (
    <BaseProjectCard
      title={`Link to project: ${name}`}
      href={link}
      style={shadowColors}
      underline={false}
    >
      <IconHeadingContainer>
        <Image src={`/static/images/projects/${icon}`} alt={name} size={44} />
        <ProjectHeading size={'4'} style={titleColors}>
          {name}
        </ProjectHeading>
      </IconHeadingContainer>
      <ProjectDescription>{description}</ProjectDescription>
      {data?.stars ? (
        <ProjectStarsContainer className={'stars'}>
          <Icon path={mdiStar} size={0.7} />
          <span>{data?.stars}</span>
        </ProjectStarsContainer>
      ) : null}
    </BaseProjectCard>
  );
};

export const ProjectCard = memo(DefaultProjectCard);
