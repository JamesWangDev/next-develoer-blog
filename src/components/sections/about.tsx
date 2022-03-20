import styled from '@emotion/styled';
import { useMemo } from 'react';
import useSound from 'use-sound';

import {
  Heading,
  Section,
  Image,
  Link,
  baseLinkStyles,
} from '~/components/atoms/simple';
import { SocialLinks } from '~/components/elements';
import { AudioButton, audioButtonTitle } from '~/components/sections/home';
import useHasMounted from '~/hooks/useHasMounted';
import getRandomItem from '~/lib/random';

interface AboutPhoto {
  key: string;
  alt: string;
}

const possibleImages: Array<AboutPhoto> = [
  {
    key: '0',
    alt: "Visiting Lima, Perú – Oct '19",
  },
  {
    key: '1',
    alt: "Visiting Sativa Norte, Boyacá, Colombia – Jan '22",
  },
  {
    key: '2',
    alt: "Hiking in my hometown – Mar '20",
  },
  {
    key: '3',
    alt: "Hanging out with friends at a cafe – Dec '20",
  },
  {
    key: '4',
    alt: "Hanging out with friends in Iza, Boyacá, Colombia – Mar '21",
  },
  {
    key: '5',
    alt: "Hanging out with friends in Playa Blanca, Boyacá, Colombia – Jul '21",
  },
  {
    key: '6',
    alt: "Hanging out with friends at a cafe – Feb '22",
  },
  {
    key: '7',
    alt: "Visiting a small town – Dec '22",
  },
  {
    key: '8',
    alt: "Trip to San Andrés – Dec '22",
  },
];

const Intro = styled.p`
  color: var(--text-primary);
  margin: 0.4rem 0 1.2rem;
  font-size: calc(var(--base-font-size) * 1.15);
`;

const Paragraph = styled(Intro)`
  color: var(--text-secondary);
  margin: 0.6rem 0;
  font-size: var(--font-xs);
`;

const CuriousParagraph = styled(Paragraph)`
  background-color: var(--primary);
  border: 1px dashed var(--accent-light);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  margin-bottom: 2.4rem;
  font-size: var(--font-2xs);
  & > ul {
    margin-top: 0.4rem;
    list-style: disc;
    padding-inline-start: 1.2rem;
  }
`;

const Photo = styled(Image)`
  border-radius: 10px;
  border: 1px solid var(--divider) !important;
  margin: 0 auto !important;
`;

const PhotoFigure = styled.figure`
  display: flex;
  flex-direction: column;
  margin: 1.2rem calc(-1.2rem + 2px);

  & > span {
    width: 100% !important;
    border-radius: 10px;
    overflow: auto !important;
    margin: 0 auto !important;
  }
`;

const AboutAudioButton = styled(AudioButton)`
  gap: 0;
  font-family: var(--inter-font);
  &:hover,
  &:focus {
    & > span {
      text-decoration: underline;
    }
  }
`;

export const About = () => {
  const hasMounted = useHasMounted();
  const [playName] = useSound('/static/audio/name-pronunciation.mp3', {
    interrupt: true,
  });

  const rightImage: AboutPhoto = useMemo<AboutPhoto>(() => {
    return getRandomItem(possibleImages);
  }, []);

  const photoComponent = useMemo(() => {
    if (!hasMounted) return null;
    return (
      <PhotoFigure>
        <Photo
          src={`/static/images/about/ab-${rightImage.key}.jpg`}
          alt={rightImage.alt}
          width={768}
          height={320}
          quality={100}
          objectFit={'cover'}
          objectPosition={'center'}
          layout={'intrinsic'}
        />
        <figcaption>📸 {rightImage.alt}</figcaption>
      </PhotoFigure>
    );
  }, [hasMounted, rightImage]);

  return (
    <Section id={'about'}>
      <Heading size={'3'} shadowColor={'blue'} gradientColor={'blue-to-green'}>
        About
      </Heading>

      {photoComponent}

      <Intro>
        I am{' '}
        <Link title={'Home page'} href={'/'}>
          Jahir Fiquitiva
        </Link>
        , a full-stack software engineer based in{' '}
        <Link
          title={'Colombia on Google Maps'}
          href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
        >
          Colombia 🇨🇴
        </Link>
        .
      </Intro>

      <Paragraph>
        I am creative and passionate about design and technology so I always try
        to craft great-looking software products 🎨
      </Paragraph>

      <Paragraph>
        Before getting into software development, I wanted to be a mechatronics
        engineer and build robots 🤖 When I started programming my first robots,
        I realized what my real passion was and started learning more about
        software development 👨‍💻
      </Paragraph>

      <Paragraph>
        When not coding, I like to watch TV shows and movies, play some games
        with friends or hang out with them 🤝 I&apos;m also{' '}
        <Link title={'Dashboard page'} href={'/dashboard'}>
          listening to music
        </Link>{' '}
        most of the time 🎧 According to Spotify Wrapped, I listened to 130437
        minutes of music in 2021 😱
      </Paragraph>

      <Paragraph>
        I consider myself a curious and inquisitive person, so on my spare time
        I like to work on{' '}
        <Link title={'Projects page'} href={'/projects'}>
          side projects
        </Link>
        , try to contribute to open source software and aim to constantly learn
        something new to improve my skillset 🤓
      </Paragraph>

      <Paragraph>
        Learn even more about me on{' '}
        <Link title={'Polywork timeline'} href={'https://timeline.jahir.dev/'}>
          my timeline
        </Link>{' '}
        and please don&apos;t hesitate to{' '}
        <Link title={'Contact page'} href={'/contact'}>
          contact me
        </Link>
        !
      </Paragraph>

      <Paragraph>
        You can also follow my work, projects and occassional insights into my
        life on my social networks:
      </Paragraph>
      <SocialLinks />

      <br />

      <CuriousParagraph>
        If feeling curious, you can:
        <ul>
          <li>
            Hear my name{' '}
            <AboutAudioButton
              title={audioButtonTitle}
              name={audioButtonTitle}
              aria-label={audioButtonTitle}
              onClick={() => {
                playName();
              }}
            >
              <span css={baseLinkStyles}>pronunciation by clicking here</span>
            </AboutAudioButton>
            .
          </li>
          <li>
            Check out the{' '}
            <Link title={'Uses page'} href={'/blog/uses'}>
              tools, software and hardware
            </Link>{' '}
            that I use.
          </li>
        </ul>
      </CuriousParagraph>
    </Section>
  );
};
