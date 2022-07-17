import {
  mdiBookmark,
  mdiHeart,
  mdiBookmarkOutline,
  mdiHeartOutline,
  mdiThumbUp,
  mdiThumbUpOutline,
} from '@mdi/js';
import Icon from '@mdi/react';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

import { Button } from '@/components/atoms';
import { useHasMounted, useWindowDimensions } from '@/hooks';
import { type ReactionType, useReactions } from '@/providers/reactions';
import { useTheme } from '@/providers/theme';
import type { FC } from '@/types';
import { icons } from '@/utils';
import { styled } from '~/stitches';

const ReactionsGroup = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$6',
  '@mobile-lg': {
    gap: '$10',
  },
});

const ReactionButton = styled(Button, {
  $$reactionColor: '56 103 214',
  order: 2,
  py: '$10',
  px: '$12',
  borderRadius: '9999px',
  fontSize: '$3xs',
  color: '$text-secondary',
  boxShadow: 'none',
  backgroundColor: '$transparent',
  gap: '$6',
  lineHeight: 1,
  '@mobile-lg': {
    gap: '$10',
  },
  '& > span': {
    pt: 1,
  },
  '& > svg': {
    transition: 'all .15s ease-in-out',
  },
  dark: {
    backgroundColor: '$transparent',
  },
  hocus: {
    transform: 'none',
    boxShadow: 'none',
    backgroundColor: '$transparent',
    color: '$text-primary',
    borderColor: 'rgba($$reactionColor / .45)',
    '& > svg': {
      color: 'rgba($$reactionColor / 1)',
      fill: 'rgba($$reactionColor / 1)',
      transform: 'scale(1.1)',
    },
    dark: {
      backgroundColor: '$transparent',
      borderColor: 'rgba($$reactionColor / .45)',
    },
  },
  variants: {
    outlined: {
      true: {
        border: '1px solid $divider',
        backgroundColor: '$transparent',
        dark: {
          backgroundColor: '$transparent',
        },
      },
    },
    reacted: {
      true: {
        backgroundColor: 'rgba($$reactionColor / .08)',
        color: '$text-primary',
        borderColor: 'rgba($$reactionColor / .45)',
        dark: {
          backgroundColor: 'rgba($$reactionColor / .08)',
        },
        hocus: {
          backgroundColor: 'rgba($$reactionColor / .08)',
          dark: {
            backgroundColor: 'rgba($$reactionColor / .08)',
          },
        },
        '& > svg': {
          color: 'rgba($$reactionColor / 1)',
          fill: 'rgba($$reactionColor / 1)',
          transform: 'scale(1.05)',
        },
      },
    },
    thumbsUp: {
      true: {
        $$reactionColor: '26 153 86',
        dark: { $$reactionColor: '32 191 107' },
      },
    },
    love: {
      true: {
        $$reactionColor: '212 53 81',
        dark: { $$reactionColor: '235 59 90' },
      },
    },
    award: {
      true: {
        $$reactionColor: '225 117 44',
        dark: { $$reactionColor: '247 183 49' },
      },
    },
    bookmark: {
      true: {
        $$reactionColor: '136 84 208',
        dark: { $$reactionColor: '160 118 217' },
      },
    },
  },
});

const confettiOptions = {
  particleCount: 50,
  spread: 60,
  colors: ['#6085de'],
  disableForReducedMotion: true,
  scalar: 0.5,
  gravity: 0.85,
  decay: 0.75,
  ticks: 100,
};

const getConfettiColor = (
  key: ReactionType,
  isDark: boolean,
): Array<`#${string}`> => {
  switch (key) {
    case 'like': {
      return [isDark ? '#20BF6B' : '#1A9956'];
    }
    case 'love': {
      return [isDark ? '#EB3B5A' : '#D43551'];
    }
    case 'award': {
      return [isDark ? '#F7B731' : '#E1752C'];
    }
    case 'bookmark': {
      return [isDark ? '#A076D9' : '#8854D0'];
    }
    default: {
      return [isDark ? '#afc2ef' : '#2d52ab'];
    }
  }
};

const iconSize = 0.73;
// eslint-disable-next-line max-lines-per-function
export const Reactions: FC = (props) => {
  const hasMounted = useHasMounted();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const { reactions, incrementReaction, slug, submitting } = useReactions();
  const { isDark } = useTheme();

  const clickReaction = (
    key: ReactionType,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    event?: MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    // Do nothing in SSR
    if (!hasMounted) return;

    const hostname = window?.location?.hostname || 'localhost';
    // Submit reactions in production website only
    if (hostname !== 'jahir.dev') return;

    // Do nothing if being submitted to db or already pressed
    if (submitting || reactions[key]) return;

    if (event) {
      const x = event.clientX / windowWidth;
      const y = event.clientY / windowHeight;
      confetti({
        ...confettiOptions,
        origin: { x, y },
        colors: getConfettiColor(key, isDark),
      });
    }

    if (incrementReaction) incrementReaction(key);
  };

  useEffect(() => {
    fetch(`/api/reactions/${slug}`, {
      method: 'POST',
    });
  }, [slug]);

  useEffect(() => {
    return () => {
      try {
        confetti.reset();
      } catch (e) {}
    };
  }, []);

  if (!reactions) return null;
  return (
    <ReactionsGroup {...props}>
      <ReactionButton
        outlined
        thumbsUp
        reacted={!!reactions?.like}
        title={'Like'}
        onClick={(e) => {
          clickReaction('like', e);
        }}
      >
        <Icon
          path={reactions?.like ? mdiThumbUp : mdiThumbUpOutline}
          size={iconSize}
        />
        {reactions.likes || '0'}
      </ReactionButton>
      <ReactionButton
        outlined
        love
        reacted={!!reactions?.love}
        title={'Love'}
        onClick={(e) => {
          clickReaction('love', e);
        }}
      >
        <Icon
          path={reactions?.love ? mdiHeart : mdiHeartOutline}
          size={iconSize}
        />
        {reactions.loves || '0'}
      </ReactionButton>
      <ReactionButton
        outlined
        award
        reacted={!!reactions?.award}
        title={'Award'}
        onClick={(e) => {
          clickReaction('award', e);
        }}
      >
        <Icon
          path={reactions?.award ? icons.award : icons.awardOutline}
          size={iconSize}
        />
        {reactions.awards || '0'}
      </ReactionButton>
      <ReactionButton
        outlined
        bookmark
        reacted={!!reactions?.bookmark}
        title={'Bookmark'}
        onClick={(e) => {
          clickReaction('bookmark', e);
        }}
      >
        <Icon
          path={reactions?.bookmark ? mdiBookmark : mdiBookmarkOutline}
          size={iconSize}
        />
        {reactions.bookmarks || '0'}
      </ReactionButton>
    </ReactionsGroup>
  );
};
