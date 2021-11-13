import { FC } from 'react';

import { Page } from '~/new-components/blocks';
import { Donate } from '~/new-components/sections';

const DonatePage: FC = () => {
  return (
    <Page
      title={'Donate ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/donate'}
    >
      <Donate />
    </Page>
  );
};

export default DonatePage;
