import styled, { css } from 'styled-components';
import { AiFillCreditCard, AiFillPlusCircle } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';

export const Section = styled.section`
  padding-top: 40px;

  .card-title {
    display: block;
    font-size: 18px;
    color: var(--color-black);
    white-space: nowrap;
  }

  .card-subtitle {
    font-size: 14px;
    color: var(--color-gray);
  }

  .fast-payment, .pix-payment, .card-payment, .plus-payment {
    > a {
      text-decoration: none;
      color: var(--color-blue);
    }
  }

  // material-ui override
  .MuiPaper-elevation1 {
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
  }
`;

const iconsCss = css`
  width: 23px;
  height: 23px;
  margin-right: 16px;
  fill: var(--color-blue);
  float: left;
  margin-top: 10px;
  flex-shrink: 0;
`;

export const CardIcon = styled(AiFillCreditCard)`
    ${iconsCss}
`;

export const PixIcon = styled(BsPhone)`
    ${iconsCss}
`;

export const PlusIcon = styled(AiFillPlusCircle)`
    ${iconsCss}
`;