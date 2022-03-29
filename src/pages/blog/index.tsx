import { GetStaticProps } from 'next';

import { Page } from '~/components/blocks';
import { Blog } from '~/components/sections';
import { Component, ComponentProps, Post } from '~/types';
import { getAllPosts } from '~/utils/posts/get-all';

interface BlogProps extends ComponentProps {
  posts?: Post[];
}

const BlogPage: Component<BlogProps> = (props) => {
  const { posts } = props;
  return (
    <Page
      title={'Blog ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/blog'}
    >
      <Blog posts={posts} />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'hero',
    'excerpt',
    'color',
    'link',
    'readingTime',
    'inProgress',
    'year',
    'devToId',
    'heroMeta',
  ]);
  return {
    props: { posts: allPosts },
  };
};

export default BlogPage;
