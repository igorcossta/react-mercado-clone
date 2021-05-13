import React from 'react';

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
} from './styles';

const SellerInfo: React.FC = () => (
  <Container>
    <Title>Informações sobre o vendedor</Title>

    <LocationCard>
      <LocationIcon />

      <div>
        <p>Localização</p>
        <strong>São Paulo, São Paulo</strong>
      </div>
    </LocationCard>

    <ReputationCard>
      <ReputationThermometer>
        <li />
        <li />
        <li />
        <li />
        <li className="active" />
      </ReputationThermometer>

      <ReputationRow>
        <div>
          <strong>451</strong>
          <span>venda nos últimos 4 meses</span>
        </div>

        <div>
          <strong>
            <SupportIcon />
          </strong>
          <span>Presta um bom atendimento</span>
        </div>

        <div>
          <strong>
            <ClockIcon />
          </strong>
          <span>venda nos últimos 4 meses</span>
        </div>
      </ReputationRow>
    </ReputationCard>

    <More href="/moreaboutseller">Ver mais dados do vendedor</More>
  </Container>
);

export default SellerInfo;
