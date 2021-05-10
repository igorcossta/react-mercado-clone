import React from 'react';
import PaymentSection from '../PaymentSection';
import Recommendations from '../Recommendations';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <PaymentSection />
      <Recommendations />
    </Container>
  );
};

export default Main;
