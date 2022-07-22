import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from '@/components/elements';
import { FourOhFour as FourOhFourSection } from '@/sections';

const FourOhFour: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Site not found</title>
      </Head>
      <FourOhFourSection />
    </Layout>
  );
};

export default FourOhFour;
