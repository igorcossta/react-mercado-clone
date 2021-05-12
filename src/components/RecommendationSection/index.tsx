import React from 'react';

import { Section } from './styles';
import produto1 from '../../assets/placa.jpg';
import discount from '../../assets/svg/discount.svg';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';

const RecommendationSection: React.FC = () => {
  return (
    <Section>
      <Container maxWidth="lg">

        <Hidden only={["md", "lg", "xl"]}>
          <div className="title offer-title-container">
            <h1>Ofertas do dia</h1>
          </div>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <div className="offer-image-container">
                  <a href="/"><img src={discount} alt="ofertas do dia" /></a>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Hidden>

        <Hidden only={["xs", "sm"]}>
          <div className="title">
            <h1>Ofertas do dia</h1>
            <a href="/">Ver todas</a>
          </div>
          <Grid container spacing={2}>

            <Grid item md={3}>
              <a className="none" href="/35">
                <Card>
                  <CardContent>
                    <div className="image-container">
                      <img src={produto1} alt="oferta 1" />
                    </div>
                    <Divider />
                    <div className="item-content">
                      <div className="price-block">
                        <div className="item-price">
                          <span className="price-tag-symbol">R$</span>
                          <span className="price-tag-fraction">2.199</span>
                        </div>
                        <span className="discount-text">5% OFF</span>
                      </div>
                      <small className="installments">12x de R$ 183,25 sem juros</small>
                      <small className="shipping-free">Frete grátis</small>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>

            <Grid item md={3}>
              <a className="none" href="/35">
                <Card>
                  <CardContent>
                    <div className="image-container">
                      <img src={produto1} alt="oferta 1" />
                    </div>
                    <Divider />
                    <div className="item-content">
                      <div className="price-block">
                        <div className="item-price">
                          <span className="price-tag-symbol">R$</span>
                          <span className="price-tag-fraction">2.199</span>
                        </div>
                        <span className="discount-text">5% OFF</span>
                      </div>
                      <small className="installments">12x de R$ 183,25 sem juros</small>
                      <small className="shipping-free">Frete grátis</small>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>

            <Grid item md={3}>
              <a className="none" href="/35">
                <Card>
                  <CardContent>
                    <div className="image-container">
                      <img src={produto1} alt="oferta 1" />
                    </div>
                    <Divider />
                    <div className="item-content">
                      <div className="price-block">
                        <div className="item-price">
                          <span className="price-tag-symbol">R$</span>
                          <span className="price-tag-fraction">2.199</span>
                        </div>
                        <span className="discount-text">5% OFF</span>
                      </div>
                      <small className="installments">12x de R$ 183,25 sem juros</small>
                      <small className="shipping-free">Frete grátis</small>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>

            <Grid item md={3}>
              <a className="none" href="/35">
                <Card>
                  <CardContent>
                    <div className="image-container">
                      <img src={produto1} alt="oferta 1" />
                    </div>
                    <Divider />
                    <div className="item-content">
                      <div className="price-block">
                        <div className="item-price">
                          <span className="price-tag-symbol">R$</span>
                          <span className="price-tag-fraction">2.199</span>
                        </div>
                        <span className="discount-text">5% OFF</span>
                      </div>
                      <small className="installments">12x de R$ 183,25 sem juros</small>
                      <small className="shipping-free">Frete grátis</small>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          </Grid>
        </Hidden>

      </Container>
    </Section>
  );
};

export default RecommendationSection;
