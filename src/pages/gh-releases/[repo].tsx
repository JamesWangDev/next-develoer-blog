import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';

import { Heading, Link, Section } from '@/components/atoms';
import { Layout } from '@/components/molecules';
import { useRequest } from '@/hooks';
import { FourOhFour as FourOhFourSection } from '@/sections';

interface ReleaseData {
  success?: boolean;
  url?: string;
  download?: string;
}

const GitHubRelease: NextPage<{ repo?: string }> = ({ repo }) => {
  const { data, loading } = useRequest<ReleaseData>(
    `/api/release?repo=${repo}`,
  );

  if (data && data.download) {
    window.location.href = data.download;
  }

  const renderContent = () => {
    if (!repo || (!data && !loading)) return <FourOhFourSection />;
    if (loading) return <Heading as={'h3'}>Loading…</Heading>;
    return (
      <>
        <Heading>{data?.success ? '🎉' : '😮'}</Heading>
        <Heading as={'h3'}>
          {data?.success ? 'Download started!' : 'Oh no!'}
        </Heading>
        <br />
        <p>
          {data?.success
            ? 'Feel free to close this tab 😉'
            : 'Direct download is not available right now 😕'}
        </p>
        {data?.success ? (
          <></>
        ) : (
          <p>
            Please follow this link to&nbsp;
            <Link title={'GitHub releases link'} href={data?.download || '#'}>
              GitHub Releases
            </Link>{' '}
            …
          </p>
        )}
      </>
    );
  };

  return (
    <Layout>
      <Head>
        <title>{`${repo} Download ~ Jahir Fiquitiva 💎`}</title>
      </Head>
      <Section id={'github-release'} centered>
        {renderContent()}
      </Section>
    </Layout>
  );
};

export default GitHubRelease;

const releasesRepos = ['Frames', 'Blueprint', 'Kuper', 'ChipView', 'FABsMenu'];

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { repo } = params;
  return { props: { repo } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = releasesRepos.map(
    (slug) => `/gh-releases/${slug.toLowerCase()}`,
  );
  return { paths, fallback: false };
};
