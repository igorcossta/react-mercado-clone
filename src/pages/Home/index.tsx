import React, { } from 'react';

import { Container } from './styles';
import MainBanner from '../../components/MainBanner';
import Main from '../../components/Main';

const Home: React.FC = () => {
  return (
    <Container>
      <MainBanner />
      <Main />
    </Container>
  );
};

export default Home;
