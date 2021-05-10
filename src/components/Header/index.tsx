import React from "react";
import { Section, SearchBar, BurgerIcon } from "./styles";

import Logo from '../../assets/logo-pt__large_plus.png';
import Voucher from '../../assets/voucher.png';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';

const Header: React.FC = () => {
  return (
    <Section>
      <Container maxWidth="lg">
        <Grid container>

          <Hidden only={["xs", "sm"]}>
            <Grid item md={2}>
              <a href="/">
                <img src={Logo} alt="Mercado Livre Brasil - Onde comprar e vender de Tudo" className="header-logo" />
              </a>
            </Grid>
          </Hidden>

          <Grid item xs={10} sm={6}>
            <SearchBar>
              <input type="text" name="search" id="searchbar" placeholder="Buscar produtos, marcas e muito mais..." />
            </SearchBar>
          </Grid>

          <Hidden only={["xs", "sm"]}>
            <Grid item md={4}>
              <a href="/">
                <img src={Voucher} alt="Selos e Cupons" className="image header-voucher" />
              </a>
            </Grid>
          </Hidden>

          <Hidden only={["md", "lg"]}>
            <Grid item xs={2} sm={6}>
              <BurgerIcon />
            </Grid>
          </Hidden>

        </Grid>
      </Container>
    </Section>
  );
};

export default Header;