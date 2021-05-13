import styled, { css } from 'styled-components';
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
    float: right;
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
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
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

export const UnorderedList = styled.ul`
  display: flex;
  list-style: none;
  padding: 12px 0 12px;
  margin: 0;
  white-space: nowrap;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: auto;
  float: left;
  padding-right: 16px;
  line-height: 22px;
  font-size: 14px;

  > a {
    text-decoration: none;
    color: var(--color-gray);
    outline: 0;

    transition: color 0.3s ease-out;

    &:hover {
      color: var(--color-black);
    }
  }
`;

const iconsCss = css`
  fill: var(--color-black);
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 17px;
  float: right;
`;

export const CartIcon = styled(RiShoppingCartLine)`
  ${iconsCss}
  margin-left: 12px;
`;

export const BurgerIcon = styled(GiHamburgerMenu)`
  ${iconsCss}
`;

export const ArrowIcon = styled(MdKeyboardArrowDown)`
  fill: var(--color-gray);
`;

export const Nav = styled.nav`
  float: right;
  display: flex;
`;

export const NavItem = styled.a`
  text-decoration: none;
  line-height: 65px;
  font-size: 14px;
  padding: 0 10px;
  color: var(--color-black);
`;
