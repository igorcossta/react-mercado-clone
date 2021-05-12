import React from 'react';

import { Section, CardIcon, PixIcon, PlusIcon } from './styles';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

const PaymentSection: React.FC = () => {
  return (
    <Section>
      <Container maxWidth="lg">
        <Grid container>

          <Hidden only={['xs', 'sm']}>
            <Grid item md={6} lg={3}>
              <Card>
                <Box borderLeft={3} borderColor="primary.main" borderRadius="0">
                  <CardContent>
                    <div className="fast-payment">
                      <span className="card-title">Pagamento rápido e seguro</span>
                      <span className="card-subtitle">com Mercado Pago</span>
                    </div>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          </Hidden>

          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <div className="card-payment">
                  <CardIcon />
                  <span className="card-title">Até 12 vezes sem juros</span>
                  <a href="/" className="card-subtitle">Ver mais</a>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Hidden only={['xs', 'sm']}>
            <Grid item md={6} lg={3}>
              <Card>
                <CardContent>
                  <div className="pix-payment">
                    <PixIcon />
                    <span className="card-title">Via Pix</span>
                    <a href="/" className="card-subtitle">Ver mais</a>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Hidden>

          <Hidden only={['xs', 'sm']}>
            <Grid item md={6} lg={3}>
              <Card>
                <CardContent>
                  <div className="plus-payment">
                    <PlusIcon />
                    <span className="card-title">Mais formas de pagamento</span>
                    <a href="/" className="card-subtitle">Ver todos</a>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Hidden>

        </Grid>
      </Container>
    </Section>
  );
};

export default PaymentSection;
