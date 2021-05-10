import React from 'react';

import { Section } from './styles';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const Recommendations: React.FC = () => {
  return (
    <Section>
      <Container maxWidth="lg">
        <h1>Recommendations</h1>
      </Container>
    </Section>
  );
};

export default Recommendations;
