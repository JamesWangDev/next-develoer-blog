import styled from '@emotion/styled';
import Icon from '@mdi/react';

import { SectionHeading } from '~/components/section-heading';
import { Component } from '~/elements/base/fc';
import { Chip, ChipGroup, buildChipStyles } from '~/elements/simple/chip';
import { Divider } from '~/elements/simple/divider';
import { skills } from '~/types';

const SkillsHeading = styled(SectionHeading)`
  margin-top: 0.6rem;
`;

export const Skills: Component = () => {
  return (
    <section id={'skills'}>
      <Divider gradientColor={'brand-to-blue'} />
      <SkillsHeading
        size={'3'}
        shadowColor={'blue'}
        gradientColor={'blue-to-green'}
        emoji={'🚀'}
      >
        Skills
      </SkillsHeading>
      <ChipGroup>
        {skills
          .filter((skill) => !skill.hide)
          .map((skill, index) => {
            return (
              <li key={index}>
                <Chip style={buildChipStyles(skill.color)}>
                  <Icon path={skill.iconPath} size={0.8} />
                  {skill.name}
                </Chip>
              </li>
            );
          })}
      </ChipGroup>
    </section>
  );
};
