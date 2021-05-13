import React from 'react';

import { Container, Wrapper } from './styles';
import Product from '../Product/index';

const Layout: React.FC = () => (
  <Container>
    <Wrapper>
      <Product />
    </Wrapper>
  </Container>
);

export default Layout;
