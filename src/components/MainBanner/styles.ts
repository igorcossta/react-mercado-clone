import styled from 'styled-components';

export const Container = styled.div`
`;

export const SlideShow = styled.div`
  position: relative;

  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
  }
`;

export const MySlide = styled.div`
  display: block;

  > img {
    width: 100%;
  }
`;

export const SlideArrow = styled.button``;