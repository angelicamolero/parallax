import { WithCarouselProps } from './interfaces';
import HtmlRender from './components/htmlRender';
import DefaultRender from './components/defaultRender';
import SliderLayout from 'vtex.slider-layout/SliderLayout';
import classNames from 'classnames';
import Style from './carousel.css';
import { useMemo } from 'react';

const Carousel = ({ slides, height, heightMobile, sliderLayoutProps, isMobile, goToPage, blockClass, useBackground, autoplay }: WithCarouselProps) => {

  const classes = classNames(Style.tekproCarouselContainer, Style.tekproCarouselContainer + '--' + blockClass);

  const config = useMemo(() => {

    if (autoplay) return {
      timeout: 5000,
    stopOnHover: true
    }

    return null
  }, [autoplay]);

  console.log("config", config)

  return <div className={classes}>
    <SliderLayout {...sliderLayoutProps} autoplay={config}>
      {slides.map((slide, index) => {
        const image = isMobile ? slide.imageMobile : slide.image;
        const heightB = isMobile ? heightMobile : height;
        const contentPosition = isMobile ? slide.contentPositionMobile : slide.contentPosition;

        if (slide.useHtml) {
          return <HtmlRender key={index} html={slide.html} image={image} height={heightB} />
        }
        return <DefaultRender {...slide} useBackground={useBackground} image={image} contentPosition={contentPosition} height={heightB} goToPage={goToPage} />
      })}
    </SliderLayout>
  </div>
}

export default Carousel;
