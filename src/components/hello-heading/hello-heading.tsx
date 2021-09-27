import { useEffect, useState } from 'react';

import { Component } from '~/elements/base/fc';
import { Heading } from '~/elements/simple/heading';

const hellos = [
  'Hello, world',
  'Hola, mundo',
  'Ciao, mondo',
  'Hallo, Welt',
  'Salut, monde',
  'Olá, mundo',
];

export const HelloHeading: Component = () => {
  const [hello, setHello] = useState(0);

  useEffect(() => {
    const changeHello = setInterval(() => {
      setHello((helloo) => (helloo >= hellos.length - 1 ? 0 : helloo + 1));
    }, 2500);
    return () => clearInterval(changeHello);
  }, []);

  return (
    <Heading size={'3'} shadowColor={'yellow'}>
      <span className={'wave'}>👋</span>
      &nbsp;&nbsp;{hellos[hello]}!
    </Heading>
  );
};
