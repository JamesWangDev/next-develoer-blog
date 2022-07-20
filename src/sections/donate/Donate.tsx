import { Section } from '@/components/elements';
import type { FC, RandomPageImage } from '@/types';
import { styled } from '~/stitches';

import { DonateBenefitsAndPurpose } from './DonateBenefitsAndPurpose';
import { DonateButtons } from './DonateButtons';
import { DonateIntro } from './DonateIntro';
import { DonateSponsors } from './DonateSponsors';
import { DonateStats } from './DonateStats';
import { DonateTestimonials } from './DonateTestimonials';

const DonateSection = styled(Section, {
  flex: 'unset',
  gap: 'calc($$verticalContentPadding / 1.5)',
});

export const Donate: FC<{ image: RandomPageImage }> = ({ image }) => {
  return (
    <>
      <DonateSection id={'donate'}>
        <DonateIntro image={image} />
        <DonateButtons />
        <DonateStats />
        <DonateBenefitsAndPurpose />
        <DonateTestimonials />
      </DonateSection>
      <DonateSection id={'thanks'} css={{ mt: '$$verticalContentPadding' }}>
        <DonateSponsors />
      </DonateSection>
    </>
  );
};
