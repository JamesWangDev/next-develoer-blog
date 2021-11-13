import styled from '@emotion/styled';
import { mdiWeb } from '@mdi/js';
import Icon from '@mdi/react';
import { theme } from 'twin.macro';

import {
  MasonryGrid,
  MasonryBreakpoints,
  SectionHeading,
} from '~/new-components/atoms/complex';
import {
  Heading,
  Image,
  LinkCard,
  CenteredSection,
} from '~/new-components/atoms/simple';
import { Component, ComponentProps, InspirationSite } from '~/types';

const InspirationGrid = styled(MasonryGrid)`
  margin: var(--content-bottom-margin) 0;
`;

const InspirationCard = styled(LinkCard)`
  border: 1px solid var(--divider);
  padding: 0.8rem 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  & h4,
  & p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover,
  &:focus {
    & h4,
    & p {
      text-decoration: underline;
    }
  }
`;

const FaviconLinkContainer = styled.div`
  display: flex;
  align-items: center;

  & svg,
  & img {
    width: 24px;
    height: 24px;
    margin-right: 0.8rem;
  }
`;

export interface InspirationProps extends ComponentProps {
  inspirationItems?: Array<InspirationSite>;
}

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints['0'] = 1;
masonryBreakpoints[theme`screens.sm`] = 2;
masonryBreakpoints[theme`screens.lg`] = 3;

const formatLink = (link?: string): string => {
  if (!link) return '';
  return link
    .replace(/(^\w+:|^)\/\//, '')
    .replace(/\//g, '')
    .replace('www.', '');
};

export const Inspiration: Component<InspirationProps> = (props) => {
  const { inspirationItems } = props;

  return (
    <CenteredSection id={'inspiration'}>
      <SectionHeading
        size={'3'}
        shadowColor={'brand'}
        gradientColor={'brand-to-blue'}
        emoji={'🌎'}
      >
        Inspiration
      </SectionHeading>
      <p>
        These are some people, websites and tools that have been inspiration to
        build this website and some of my projects 👏
      </p>

      <InspirationGrid breakpoints={masonryBreakpoints} gap={'1rem'}>
        {(inspirationItems || []).map((item, i) => {
          return (
            <InspirationCard
              key={i}
              href={item.link}
              title={`Link to ${item.title}'s website`}
            >
              <Heading size={'4'} fontSize={'6'}>
                {item.title}
              </Heading>
              {(item.description?.length || 0) > 0 && <p>{item.description}</p>}
              <FaviconLinkContainer>
                {item.favicon && (item.favicon?.length || 0) ? (
                  <Image
                    alt={item.title}
                    src={item.favicon ?? ''}
                    avoidNextImage
                  />
                ) : (
                  <Icon path={mdiWeb} size={0.8} />
                )}
                <p className={'small'}>{formatLink(item.link)}</p>
              </FaviconLinkContainer>
            </InspirationCard>
          );
        })}
      </InspirationGrid>
    </CenteredSection>
  );
};
