import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useMemo } from 'react';

import { Layout } from '@/components/elements';
import { Contact as ContactSection } from '@/sections';
import type { RandomPageImage } from '@/types';
import { getRandomItem } from '@/utils';

const Contact: NextPage<{ images: Array<RandomPageImage> }> = (props) => {
  const { images } = props;
  const image = useMemo(() => {
    return getRandomItem(images);
  }, [images]);
  return (
    <Layout>
      <Head>
        <title>Contact | Jahir Fiquitiva</title>
      </Head>
      <ContactSection image={image} />
    </Layout>
  );
};

export default Contact;

const imagesAlts: Array<string> = [
  'Person taking a selfie with a t-shirt that says hi',
  'Person laying on the floor and checking their phone',
  'Person reading a book',
  'Person walking like a zombie',
];

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      images: imagesAlts.map((alt, key) => ({
        key,
        alt,
        width: 384,
        height: 384,
      })),
    },
  };
};
