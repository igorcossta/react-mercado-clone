import React from 'react';

import { Container, Condition, Row, HeartIcon, DispatchTime, PriceCard, PriceRow, InstallmentsInfo, StockStatus, MethodCard, CheckIcon, Actions, Button, Bene, ShieldIcon } from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>

      </Condition>

      <Row>
        <h1>Placa de vídeo NOVINHA</h1>
        <HeartIcon />
      </Row>

      <DispatchTime>
        Enviando normalmente
      </DispatchTime>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">17,299</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>
          em 10x de R$ MUITA GRANA
        </InstallmentsInfo>
      </PriceCard>

      <StockStatus>Estoque disponível</StockStatus>

      <MethodCard>
        <CheckIcon />
        <div>
          <span className="title">Frete grátis</span>
          <span className="details">Benefício Lorem ipsum</span>
          <a className="more" href="/seemoreoptions">Ver mais opções</a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid>Comprar agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>

      <Bene>
        <li>
          <ShieldIcon />
          <p>
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
          </p>
        </li>
      </Bene>

    </Container>
  );
};

export default ProductAction;
