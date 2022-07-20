import { mdiHeartOutline } from '@mdi/js';

import { Heading } from '@/components/atoms';
import { LinkStatCard, StatCard } from '@/components/compounds';
import { useSponsors } from '@/providers/sponsors';
import type { FC } from '@/types';
import { icons } from '@/utils';
import { styled } from '~/stitches';

const StatsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 'calc($$verticalContentPadding / 4)',
});

const StatsCardsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: 'calc($$verticalContentPadding / 4)',
  '@mobile-md': {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
  '@tablet-sm': {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  },
});

export const DonateStats: FC = () => {
  const { sponsorsCount, totalEarningsPerMonth, loading } = useSponsors();
  return (
    <StatsContainer>
      <Heading as={'h4'}>Stats</Heading>
      <p>For transparency, these are the latest stats from GitHub Sponsors:</p>
      <StatsCardsContainer>
        <LinkStatCard
          title={'View sponsors'}
          href={'#thanks'}
          text={'sponsors'}
          value={`${sponsorsCount || 'X'}`}
          iconPath={mdiHeartOutline}
          color={'#c94091'}
          loading={loading}
        />
        <StatCard
          text={'earned per month'}
          value={`$${totalEarningsPerMonth || 0}`}
          iconPath={icons.money}
          color={'#26de81'}
          loading={loading}
        />
      </StatsCardsContainer>
    </StatsContainer>
  );
};
