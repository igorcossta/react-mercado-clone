import React from 'react';

import { Container, Wrapper } from './styles';
import Header from '../Header/index';
import Product from '../Product/index';
import Footer from '../Footer/index';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Product />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Layout;
