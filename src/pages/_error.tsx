import type { NextPage } from 'next';
import type { ErrorProps } from 'next/error';
import Head from 'next/head';

import { Layout } from '@/components/elements';
import { Error as ErrorSection } from '@/sections';

const Error: NextPage<ErrorProps> = (props) => {
  return (
    <Layout>
      <Head>
        <title>Error {props.statusCode}!</title>
      </Head>
      <ErrorSection error={props.title} />
    </Layout>
  );
};

export default Error;

Error.getInitialProps = ({ res, err }): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode || 500,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    title: err?.message || err?.stackTrace?.toString() || 'Unexpected error',
  };
};
