import React from 'react';
import Page from './Page.jsx';
import Wrapper from './Wrapper.jsx';
import Carousel from '../Carousel.jsx';

const images = ['first.jpeg', 'second.jpeg', 'third.jpeg'];

const CarouselPage = () => (
  <Page>
    <Wrapper>
      <Carousel images={images} />
    </Wrapper>
  </Page>
);

export default CarouselPage;
