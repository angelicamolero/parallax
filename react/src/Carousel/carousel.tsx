import { WithCarouselProps } from './interfaces';
import HtmlRender from './components/htmlRender';
import DefaultRender from './components/defaultRender';
import SliderLayout from 'vtex.slider-layout/SliderLayout';
import classNames from 'classnames';
import Style from './carousel.css';
import RenderContent from './components/contentRender';
import VideoRender from './components/videoRender';

const GENERAL_POSITION = {
  "top": Style.pTop,
  "left": Style.pLeft,
  "bottom": Style.pBottom,
  "right": Style.pRight,
  "center": Style.pCenter
}

const Carousel = ({ slides, height, heightMobile, sliderLayoutProps, isMobile, goToPage, blockClass }: WithCarouselProps) => {
  
  const classes = classNames(Style.tekproCarouselContainer, Style.tekproCarouselContainer + '--' + blockClass);

  return <div className={classes}>
    <SliderLayout {...sliderLayoutProps}>
      {slides.map((slide, index) => {
        const image = isMobile ? slide.imageMobile : slide.image;
        const heightB = isMobile ? heightMobile : height;
        const contentPosition = isMobile ? slide.contentPositionMobile : slide.contentPosition;
        const postionClasses = classNames(Style.contentGenearlPosition, GENERAL_POSITION[slide.contentGeneralPosition])

        if (slide.useHtml) {
          return <HtmlRender key={index} html={slide.html} image={image} height={heightB} />
        }
        return <div className={postionClasses}>
                {slide.useVideo ? <VideoRender {...slide} image={image} heightB={heightB}/> : <DefaultRender {...slide} image={image} contentPosition={contentPosition} height={heightB} goToPage={goToPage} />}
                {slide.contentGeneralPosition && slide.contentGeneralPosition !== 'center' && <RenderContent {...slide} goToPage={goToPage}/>}
              </div>
      })}
    </SliderLayout>
  </div>
}

export default Carousel;
