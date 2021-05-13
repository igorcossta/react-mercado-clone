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

  .fast-payment,
  .pix-payment,
  .card-payment,
  .plus-payment {
    > a {
      text-decoration: none;
      color: var(--color-blue);

      &:hover {
        color: var(--color-hover);
      }
    }
  }

  // material-ui override
  .MuiBox-root-2 {
    // arrumar
    border-left: 3px solid #3483fa;
  }
  .MuiPaper-rounded {
    border-radius: 0;
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
