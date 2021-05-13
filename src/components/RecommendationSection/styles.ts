import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 40px;

  .none {
    text-decoration: none;
  }

  .offer-title-container {
    display: flex;
    justify-content: center;
  }

  .offer-image-container {
    > a img {
      height: 150px;
      width: 100%;
    }
  }

  .title {
    display: flex;
    align-items: center;
    padding-bottom: 20px;

    > h1 {
      color: var(--color-gray);
      padding-right: 10px;
    }

    > a {
      color: var(--color-blue);
      text-decoration: none;
      margin-top: 6px;

      &:hover {
        color: var(--color-hover);
      }
    }
  }

  .image-container img {
    width: 224px;
    height: 224px;
  }

  .item-content {
    padding: 20px 16px;
  }

  .price-block {
    display: flex;
    align-items: center;
  }

  .item-price {
    color: var(--color-black);
    font-size: 24px;
    padding-right: 10px;
  }

  .price-tag-symbol {
    padding-right: 5px;
  }

  .discount-text {
    font-size: 14px;
    vertical-align: 3px;
    color: var(--color-green);
  }

  .installments {
    display: block;
    font-size: 14px;
    color: var(--color-black);
  }

  .shipping-free {
    color: #00a650;
    font-size: 14px;
    line-height: 16px;
    margin: 2px 0 0;
  }

  .MuiGrid-item:hover {
    cursor: pointer;
  }
`;
