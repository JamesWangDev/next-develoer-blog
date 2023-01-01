import { LinkStatCard } from '@/components/compounds';
import { useImmutableRequest } from '@/hooks/useRequest';
import { twitterOutline } from '@/icons';
import type { FC } from '@/types';

export const TwitterStats: FC = () => {
  const { data, loading } = useImmutableRequest<{ followers?: number }>('/api/twitter');
  return (
    <>
      <LinkStatCard
        title={'Twitter'}
        href={'https://twitter.com/jahirfiquitiva'}
        text={'followers on Twitter'}
        value={`${data?.followers || '?'}`}
        iconPath={twitterOutline}
        color={'#1da1f2'}
        loading={loading}
      />
    </>
  );
};
