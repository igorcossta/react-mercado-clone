import React from "react";

import LogoImg from '../../assets/logo-pt__large_plus.png';
import VoucherImg from '../../assets/voucher.png';

import { Container, Wrapper, Column, SearchBar, NavMenu, NavMenuList, NavMenuItem, DropdownArrow, NavMenuAccountList, NavMenuAccountItem, ShopCart } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Column>
          <a href="/" className="header-logo">
            <img src={LogoImg} alt="Mercado Livre Brasil - Onde comprar e vender de Tudo" />
          </a>
        </Column>

        <Column>
          <SearchBar>
            <input type="text" name="search" id="searchbar" placeholder="Buscar produtos marcas e muito mais..." />
          </SearchBar>

          <NavMenu>
            <NavMenuList>
              <NavMenuItem>
                <a href="/"> Categorias <DropdownArrow />  </a>
              </NavMenuItem>

              <NavMenuItem>
                <a href="/"> Ofertas do dia </a>
              </NavMenuItem>

              <NavMenuItem>
                <a href="/"> Histórico </a>
              </NavMenuItem>

              <NavMenuItem>
                <a href="/"> Supermercado </a>
              </NavMenuItem>

              <NavMenuItem>
                <a href="/"> Moda </a>
              </NavMenuItem>

              <NavMenuItem>
                <a href="/"> Vender </a>
              </NavMenuItem>
            </NavMenuList>
          </NavMenu>
        </Column>

        <Column>
          <a href="/" className="header-voucher">
            <img src={VoucherImg} alt="Selos e Cupons" />
          </a>

          <NavMenu>
            <NavMenuAccountList>
              <NavMenuAccountItem>
                <a href="/" >Crie a sua conta</a>
              </NavMenuAccountItem>

              <NavMenuAccountItem>
                <a href="/" >Entre</a>
              </NavMenuAccountItem>

              <NavMenuAccountItem>
                <a href="/" >Compras</a>
              </NavMenuAccountItem>

              <NavMenuAccountItem>
                <a href="/carrinho"> <ShopCart /> </a>
              </NavMenuAccountItem>
            </NavMenuAccountList>
          </NavMenu>
        </Column>

      </Wrapper>
    </Container>
  );
};

export default Header;