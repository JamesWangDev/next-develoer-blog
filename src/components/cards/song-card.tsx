import styled from '@emotion/styled';
import { mdiSpotify } from '@mdi/js';
import Icon from '@mdi/react';
import { usePalette } from 'react-palette';

import { Heading, Image, LinkCard } from '~/new-components/atoms/simple';
import { useTheme } from '~/providers/theme';
import { Component, ComponentProps, TrackData } from '~/types';
import buildShadowColors from '~/utils/build-shadow-colors';
import buildStyles from '~/utils/build-styles';
import getReadableColor from '~/utils/get-readable-color';
import hexToRGB from '~/utils/hex-to-rgb';

interface SongCardProps extends ComponentProps, TrackData {
  isForNowPlaying?: boolean;
}

const BaseSongCard = styled(LinkCard)``;

const CurrentlyPlayingTitle = styled.p`
`;

export const SongCard: Component<SongCardProps> = (props) => {
  const { isForNowPlaying, isPlaying = false } = props;
  const shouldRenderDetails = !isForNowPlaying || isPlaying;

  const { isDark } = useTheme();
  const { data: paletteData } = usePalette(
    shouldRenderDetails ? props.image?.url ?? '' : '',
  );

  const backgroundColor: string | undefined = shouldRenderDetails
    ? paletteData
      ? isDark
        ? paletteData?.darkMuted || undefined
        : paletteData?.vibrant || undefined
      : undefined
    : undefined;

  const textColor: string | null | undefined = shouldRenderDetails
    ? getReadableColor(
        paletteData
          ? isDark
            ? paletteData?.vibrant || undefined
            : paletteData?.darkMuted || undefined
          : undefined,
        isDark,
      )
    : undefined;

  const shadowColors = buildShadowColors(backgroundColor, 0.25, 0.45, isDark);

  const renderAlbumImage = () => {
    if (shouldRenderDetails && props.image) {
      return (
        <Image
          src={props.image?.url ?? ''}
          alt={props.title}
          size={64}
          objectFit={'cover'}
          objectPosition={'center'}
        />
      );
    }
    return (
      <Icon
        path={mdiSpotify}
        size={2}
        color={'#1ED760'}
        style={{ opacity: 0.85 }}
      />
    );
  };

  const renderActualCard = () => {
    return (
      <BaseSongCard
        underline={false}
        className={
          [!shouldRenderDetails ? 'not-playing' : ''].join(' ').trim() ||
          undefined
        }
        title={`Link to spotify song: ${props.title || 'unknown'}`}
        href={props.url || '#'}
        style={buildStyles({
          ...shadowColors,
          backgroundColor: hexToRGB(backgroundColor, isDark ? 0.2 : 0.1),
          color: textColor,
          borderColor: textColor,
        })}
      >
        <div className={'overlay'}>
          <div
            className={'album'}
            style={{ minWidth: shouldRenderDetails ? 64 : 0 }}
          >
            {renderAlbumImage()}
          </div>
          <div
            className={'details'}
            style={buildStyles({ color: textColor, borderColor: textColor })}
          >
            <Heading size={'5'} fontSize={'6'}>
              {(props.title?.length ?? 0) > 0 && shouldRenderDetails
                ? props.title
                : 'Silence'}
            </Heading>
            {shouldRenderDetails && (
              <p>
                {props.artist}
                {props.album && (
                  <>
                    {' • '}
                    {props.album}
                  </>
                )}
              </p>
            )}
          </div>
        </div>
      </BaseSongCard>
    );
  };

  if (!isForNowPlaying) return renderActualCard();

  return (
    <div>
      <CurrentlyPlayingTitle style={buildStyles({ color: textColor })}>
        🎧&nbsp;&nbsp;Currently listening to...
      </CurrentlyPlayingTitle>
      {renderActualCard()}
    </div>
  );
};
