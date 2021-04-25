import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import './carouselStyles.css';
import styles from './Carousel.module.css';
import bindStyles from 'classnames/bind';

type CarouselProps = {
  children?: React.ReactChild[];
  images: string[];
}

const styleNames = bindStyles.bind(styles);

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <ReactCarousel
      className={styleNames('root')}
      axis='horizontal'
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      verticalSwipe='standard'
      autoFocus
      showIndicators
      useKeyboardArrows
      dynamicHeight
    >
      {
        images.map(i =>
          <div className={styleNames('wrapper')}>
            <img
              key={i}
              src={i}
              alt={`${i} Breed`}
              className={
                styleNames('img')
              }
            />
          </div>
        )
      }
    </ReactCarousel>
  );
};