import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from './Carousel.module.css';
import bindStyles from 'classnames/bind';

type CarouselProps = {
  children?: React.ReactChild[];
  images: { url: string, name: string }[];
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
      showIndicators={images.length > 1}
      useKeyboardArrows
      dynamicHeight
      infiniteLoop
    >
      {
        images.map(({ url, name }, i) => (
          <img
            key={url}
            src={url}
            alt={`${name} pic #${i + 1}`}
          />
        ))
      }
    </ReactCarousel>
  );
};
