import React, { useState } from 'react';

import { Section, SlideShow, MySlide, SlideArrow } from './styles';

import banner1 from '../../assets/banner/banner-1.png';
import banner2 from '../../assets/banner/banner-2.png';
import banner3 from '../../assets/banner/banner-3.png';
import banner4 from '../../assets/banner/banner-4.png';
import banner5 from '../../assets/banner/banner-5.png';
import banner6 from '../../assets/banner/banner-6.png';
import banner7 from '../../assets/banner/banner-7.png';
import Grid from '@material-ui/core/Grid';

const banner = [{
  src: banner1,
  alt: 'banner 1'
},
{
  src: banner2,
  alt: 'banner 2'
},
{
  src: banner3,
  alt: 'banner 3'
},
{
  src: banner4,
  alt: 'banner 4'
},
{
  src: banner5,
  alt: 'banner 5'
},
{
  src: banner6,
  alt: 'banner 6'
},
{
  src: banner7,
  alt: 'banner 7'
}];

function getImage(n: number) {
  return banner[n];
}

const BannerSection: React.FC = () => {
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
    <Section>
      <Grid container>
        <Grid item xs={12}>
          <SlideShow>
            <MySlide>
              <img alt={imagem.alt} src={imagem.src} />
            </MySlide>

            <SlideArrow onClick={() => previus(index - 1)} className="prev">&#10094;</SlideArrow>
            <SlideArrow onClick={() => next(index + 1)} className="next">&#10095;</SlideArrow>
          </SlideShow>
        </Grid>
      </Grid>
    </Section>
  );
};

export default BannerSection;
