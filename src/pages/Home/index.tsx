import React from 'react';

import { Container } from './styles';
import BannerSection from '../../components/BannerSection';
import Main from '../../components/Main';

const Home: React.FC = () => (
  <Container>
    <BannerSection />
    <Main />
  </Container>
);

export default Home;
