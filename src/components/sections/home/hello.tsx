import styled from '@emotion/styled';
import { mdiPlayCircle } from '@mdi/js';
import Icon from '@mdi/react';
import { useMemo } from 'react';
import useSound from 'use-sound';

import { Photo } from './photo';

import { Heading, GradientSpan, Link } from '~/components/atoms/simple';
import { HelloHeading } from '~/components/elements';
import { useTheme } from '~/providers/theme';
import { Component, mediaQueries } from '~/types';

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;

  ${mediaQueries.tablet.sm} {
    grid-template-columns: minmax(0, 1fr) auto;
    column-gap: 1.6rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  grid-row: 2;

  ${mediaQueries.tablet.sm} {
    grid-row: 1;
  }

  & > p:last-of-type {
    margin: 0.8rem 0 0.4rem;
  }
`;

export const AudioButton = styled.button`
  padding: 0;
  margin: 0;
  font-family: var(--manrope-font);
  font-weight: 700;
  border: none;
  background: rgba(0, 0, 0, 0);
  cursor: pointer;
  text-shadow: inherit;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
  & > svg {
    color: inherit;
    filter: drop-shadow(
      var(--text-shadow-size) var(--text-shadow-size) 0 var(--text-shadow-blue)
    );
    .dark & {
      color: var(--gradient-blue);
    }
  }
`;

const IntroParagraph = styled.p`
  max-width: 432px;
`;

export const audioButtonTitle = "Press to hear Jahir's name pronunciation";

export const Hello: Component = () => {
  const { isDark, themeReady } = useTheme();
  const [playName] = useSound('/static/audio/name-pronunciation.mp3', {
    interrupt: true,
  });

  const shouldForceGradient = useMemo<boolean>(() => {
    if (!themeReady) return false;
    return isDark;
  }, [themeReady, isDark]);

  return (
    <Container>
      <ContentContainer>
        <HelloHeading />
        <Heading size={'3'} shadowColor={'blue'}>
          I am{' '}
          <AudioButton
            title={audioButtonTitle}
            name={audioButtonTitle}
            aria-label={audioButtonTitle}
            onClick={() => {
              playName();
            }}
          >
            <GradientSpan
              gradientColor={'brand-to-blue'}
              forceGradient={shouldForceGradient}
            >
              Jahir Fiquitiva
            </GradientSpan>
            <Icon path={mdiPlayCircle} size={1.25} />
          </AudioButton>
        </Heading>
        <IntroParagraph>
          Passionate and creative full-stack software engineer based in{' '}
          <Link
            title={'Colombia on Google Maps'}
            href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
          >
            Colombia 🇨🇴
          </Link>
          .
        </IntroParagraph>
      </ContentContainer>
      <Photo />
    </Container>
  );
};
