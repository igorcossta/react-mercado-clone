import React, { useState } from 'react';

import { Container, SlideShow, MySlide, SlideArrow } from './styles';

import image from '../../assets/banner-1.png';
import image2 from '../../assets/banner-2.png';
import image3 from '../../assets/banner-3.png';
import image4 from '../../assets/banner-4.png';

const banner = [{
  src: image,
  alt: 'banner 1'
},
{
  src: image2,
  alt: 'banner 2'
},
{
  src: image3,
  alt: 'banner 3'
},
{
  src: image4,
  alt: 'banner 4'
}];

function getImage(n: number) {
  return banner[n];
}

const MainBanner: React.FC = () => {
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const timer = setTimeout(() => {

  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, [index]);

  function next(n: number) {
    if (n < banner.length) {
      setIndex(n);
    } else {
      setIndex(0);
    }
  }

  function previus(n: number) {
    if (n >= 0) {
      setIndex(n)
    } else {
      setIndex(0);
    }
  }

  var imagem = getImage(index);
  return (
    <Container>
      <SlideShow>
        <MySlide>
          <img alt={imagem.alt} src={imagem.src} className="fade" />
        </MySlide>

        <SlideArrow onClick={() => previus(index - 1)} className="prev">&#10094;</SlideArrow>
        <SlideArrow onClick={() => next(index + 1)} className="next">&#10095;</SlideArrow>
      </SlideShow>
    </Container>
  );
};

export default MainBanner;
