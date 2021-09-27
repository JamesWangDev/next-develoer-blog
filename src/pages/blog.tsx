import { GetStaticProps } from 'next';

import { Page } from '~/blocks/page';
import { Component, ComponentProps } from '~/elements/base/fc';
import { BlogGrid } from '~/sections/blog/blog-grid';
import { SimpleBlogPost } from '~/types';
import { getAllPosts } from '~/utils/get-posts';

interface BlogProps extends ComponentProps {
  posts?: SimpleBlogPost[];
}

const Blog: Component<BlogProps> = (props) => {
  const { posts } = props;
  return (
    <Page title={'Blog ~ Jahir Fiquitiva 💎'}>
      <BlogGrid posts={posts} />
    </Page>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'hero',
    'excerpt',
    'color',
    'link',
    'time',
    'inProgress',
  ]);
  return {
    props: { posts: allPosts },
  };
};
