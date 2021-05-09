import styled from "styled-components";
import { FiMapPin } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiShoppingCartLine } from 'react-icons/ri';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: var(--color-header);
  /* border-bottom: 1px solid var(--color-border); */
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1220px;

  display: flex;
`;

export const Column = styled.div`
  height: fit-content;
  
  &:nth-child(1) {
    /* border: 1px solid red; */
    
    max-width: 134px;
    margin-top: 8px;
  }

  &:nth-child(2) {
    /* border: 1px solid blue; */

    display: flex;
    flex-direction: column;
    margin: 0 125px 0 60px;
  }

  &:nth-child(3) {
    /* border: 1px solid green; */
    margin-top: 8px;

    > a img {
      max-width: 340px;
      max-height: 39px;
    }
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

export const NavMenu = styled.div`
  font-size: 13px;
  font-weight: 400;
`;

export const NavMenuList = styled.ul`
  list-style: none;
  padding: 12px 0 0 0;

  display: flex;
  align-items: center;
`;

export const NavMenuItem = styled.li`
  line-height: 22px;
  font-size: 14px;
  padding-right: 18px;

  > a {
    text-decoration: none;
    color: rgba(51,51,51,.6);

    display: flex;
    align-items: center;

    &:hover {
      color: var(--color-black);
    }

    transition: color .3s ease-out;
  }
`;

export const PinIcon = styled(FiMapPin)``;

export const DropdownArrow = styled(MdKeyboardArrowDown)`
  fill: var(--color-gray);
  width: auto;
  height: auto;
  flex-shrink: 0;
`;

export const NavMenuAccountList = styled.ul`
  list-style: none;
  padding: 18px 0 0 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavMenuAccountItem = styled.li`
  line-height: 22px;
  font-size: 14px;
  padding-right: 25px;

  display: flex;

  > a {
    text-decoration: none;
    color: var(--color-black);

    display: flex;
    align-items: center;

  }
`;

export const ShopCart = styled(RiShoppingCartLine)`
  fill: var(--color-black);
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;
