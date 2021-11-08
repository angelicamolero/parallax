import { WithCarouselProps } from './interfaces';
import HtmlRender from './components/htmlRender';
import DefaultRender from './components/defaultRender';
import SliderLayout from 'vtex.slider-layout/SliderLayout';
import classNames from 'classnames';
import Style from './carousel.css';
import RenderContent from './components/contentRender';
import VideoRender from './components/videoRender';
import { useMemo } from 'react';

const GENERAL_POSITION = {
  top: Style.pTop,
  left: Style.pLeft,
  bottom: Style.pBottom,
  right: Style.pRight,
  center: Style.pCenter
};

const Carousel = ({
  slides,
  height,
  heightMobile,
  sliderLayoutProps,
  isMobile,
  goToPage,
  blockClass,
  useBackground,
  autoplay,
  itemsPerPage,
  margin,
  useBoxShadow
}: WithCarouselProps) => {
  const classes = classNames(
    Style.tekproCarouselContainer,
    Style.tekproCarouselContainer + '--' + blockClass,
    Style.tekproCarouselContainer + '--' + `slide-${itemsPerPage.desktop}`,
    useBoxShadow && Style.tekproCarouselContainerShadow
  );

  const config = useMemo(() => {
    if (autoplay)
      return {
        timeout: 5000,
        stopOnHover: true
      };

    return null;
  }, [autoplay]);

  return (
    <div className={classes}>
      <SliderLayout {...sliderLayoutProps} autoplay={config} itemsPerPage={itemsPerPage}>
        {slides.map((slide, index) => {
          const image = isMobile ? slide.imageMobile : slide.image;
          const heightB = isMobile ? heightMobile : height;
          const contentPosition = isMobile ? slide.contentPositionMobile : slide.contentPosition;
          const contentAlign = (isMobile && slide.contentAlignMobile) ? slide.contentAlignMobile : slide.contentAlign
          const postionClasses = classNames(
            Style.contentGenearlPosition,
            GENERAL_POSITION[slide.contentGeneralPosition]
          );
          if (slide.useHtml) {
            return <HtmlRender key={index} html={slide.html} image={image} height={heightB} />;
          }
          return (
            <div className={postionClasses} style={{ padding: !isMobile && '0 ' + margin / 2 + 'px', cursor: slide?.button?.url ? 'pointer' : 'initial' }} onClick={() => {
              goToPage(slide?.button?.url)
            }}>
              {slide.useVideo ? (
                <VideoRender {...slide} image={image} heightB={heightB} />
              ) : (
                <DefaultRender
                  {...slide}
                  goToPage={goToPage}
                  useBackground={useBackground}
                  image={image}
                  contentPosition={contentPosition}
                  height={heightB}
                  contentAlign={contentAlign}
                />
              )}
              {slide.contentGeneralPosition && slide.contentGeneralPosition !== 'center' && (
                <RenderContent {...slide} contentAlign={contentAlign} goToPage={goToPage} />
              )}
            </div>
          );
        })}
      </SliderLayout>
    </div>
  );
};

export default Carousel;
