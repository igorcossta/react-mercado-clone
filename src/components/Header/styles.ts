import styled, { css } from "styled-components";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiShoppingCartLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Section = styled.header`
  background: var(--color-header);

  .header-logo {
    margin-top: 8px;
  }

  .header-voucher {
    margin-top: 8px;
    margin-left: -85px;
    border: 1px solid;
  }

  .image {
    max-width: 340px;
    max-height: 39px;
  }
`;

export const SearchBar = styled.form`
  max-width: 600px;
  width: 100%;
  height: 56px;
  padding: 8px 1px;

  > input {
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    width: 100%;
    height: 100%;

    background-color: var(--color-white);
    padding: 7px 60px 9px 15px;
    color: var(--color-gray);

    &:focus {
      color: var(--color-black);
      outline: 0;
    }

  }
`;

const iconsCss = css`
  fill: var(--color-black);
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const CartIcon = styled(RiShoppingCartLine)`
  ${iconsCss}
`;

export const BurgerIcon = styled(GiHamburgerMenu)`
  ${iconsCss}
  margin-top: 17px;
  float: right;
`;