import tw from 'twin.macro';

import { BackToTop } from '~/components/atoms/complex';
import { Toolbar, DynamicMetaTags, Footer } from '~/components/blocks';
import { Component, PageProps, defaultKeywords } from '~/types';

const defaultSiteDescription =
  'Passionate and creative full-stack software engineer based in Colombia ' +
  '\uD83C\uDDE8\uD83C\uDDF4.\n' +
  'This website includes information about me, my skills and my projects.';

const PageContainer = tw.div`
  flex flex-col
  min-h-screen
  padding-top[calc(var(--toolbar-height) + 1.2rem)]
`;

const SiteContent = tw.main`
  flex flex-col flex-1
  w-full max-w-3xl
  mx-auto my-0
  px-10 py-0
  xl:(px-0)
`;

const defaultMetaTags = {
  title: 'Jahir Fiquitiva 💎',
  description: defaultSiteDescription,
  keywords: defaultKeywords,
};

export const Page: Component<PageProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <>
      <DynamicMetaTags {...defaultMetaTags} {...otherProps} />

      <Toolbar />
      <PageContainer>
        <SiteContent>{children}</SiteContent>
        <Footer />
      </PageContainer>
      <BackToTop />
    </>
  );
};
