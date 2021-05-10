import React from 'react';
import PaymentSection from '../PaymentSection';
import RecommendationSection from '../RecommendationSection';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <PaymentSection />
      <RecommendationSection />
    </Container>
  );
};

export default Main;
