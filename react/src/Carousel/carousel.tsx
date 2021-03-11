import { WithCarouselProps } from './interfaces';
import HtmlRender from './components/htmlRender';
import DefaultRender from './components/defaultRender';
import SliderLayout from 'vtex.slider-layout/SliderLayout';
import classNames from 'classnames';
import Style from './carousel.css';

const Carousel = ({ slides, height, heightMobile, sliderLayoutProps, isMobile, goToPage, blockClass }: WithCarouselProps) => {

  const classes = classNames(Style.tekproCarouselContainer, Style.tekproCarouselContainer + '--' + blockClass);

  return <div className={classes}>
    <SliderLayout {...sliderLayoutProps}>
      {slides.map((slide, index) => {
        const image = isMobile ? slide.imageMobile : slide.image;
        const heightB = isMobile ? heightMobile : height;
        const contentPosition = isMobile ? slide.contentPositionMobile : slide.contentPosition;

        if (slide.useHtml) {
          return <HtmlRender key={index} html={slide.html} image={image} height={heightB} />
        }
        return <DefaultRender {...slide} image={image} contentPosition={contentPosition} height={heightB} goToPage={goToPage} />
      })}
    </SliderLayout>
  </div>
}

export default Carousel;
