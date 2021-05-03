import React from 'react';

import image from '../../assets/placa.jpg';
import SellerInfo from '../SellerInfo/index';
import ProductAction from '../ProductAction/index';
import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="/share">Compartilhar</a>
        <a href="/sell">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="t-shirt" src={image} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">lorem ipsum dolor sit amet.</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">lorem ipsum dolor sit amet.</p>
      </span>
    </div>

    <a href="/about">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus amet tenetur fugiat. Error quo molestiae placeat dicta optio odio, molestias omnis iure harum obcaecati rerum dolorum dolorem tenetur et quas.
      <br />
      <br />
      items lorems:
      <br />
      - 1x lorem ipsum
      <br />
      - 1x lorem ipsum
      <br />
      - 1x lorem ipsum
      <br />
      - 1x lorem ipsum
      <br />
      - 1x lorem ipsum

      <br />
      <br />
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus distinctio doloremque dolor commodi, impedit, tenetur dolorem eveniet iusto hic, consequatur officia. Molestiae aspernatur et temporibus fugit illum nostrum, architecto at.
    </p>
  </Description>
);

export default Product;
