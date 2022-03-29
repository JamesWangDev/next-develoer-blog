import { allProjects, Project } from 'contentlayer/generated';
import { GetStaticProps } from 'next';

import { Page } from '~/components/blocks';
import { Projects } from '~/components/sections';
import pick from '~/lib/pick';
import { Component, ComponentProps, ProjectProps } from '~/types';

interface HomePageProps extends ComponentProps {
  projects?: Array<ProjectProps>;
}

const HomePage: Component<HomePageProps> = (props) => {
  return (
    <Page
      title={'Projects ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/projects'}
    >
      <Projects projects={props.projects} showFullList />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = allProjects
    .sort((a: Project, b: Project) => a.order - b.order)
    .map((project: Project) =>
      pick(project, [
        'slug',
        'name',
        'description',
        'icon',
        'preview',
        'link',
        'color',
        'darkColor',
        'stack',
        'hide',
        'repo',
        'owner',
      ]),
    );

  return {
    props: { projects },
  };
};

export default HomePage;
