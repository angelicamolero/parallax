import { contentSchema, htmlSchema } from './schema';
import { Suspense, Fragment, useMemo, useCallback } from 'react';
import { WithCarouselProps } from './interfaces';
import { useRuntime, NoSSR } from 'vtex.render-runtime';
import Carousel from './carousel';

const WithCarousel = (props: WithCarouselProps) => {
  const RuntimeContext = useRuntime();
  const isMobile = RuntimeContext?.deviceInfo?.isMobile
  const goToPage = useCallback((url: string) => {
    window.location.href = url;
  }, []);
  return useMemo(() => 
    <NoSSR>
      <Suspense fallback={<Fragment/>}>
        <Carousel {...props} isMobile={isMobile} goToPage={goToPage} />
      </Suspense>
    </NoSSR>
  , [props, isMobile])
}

WithCarousel.defaultProps = {
  height: 600,
  heightMobile: 400,
  slides: [],
  useBackground: true,
  autoplay: false
}

WithCarousel.getSchema = ({ schemaName }: WithCarouselProps) => {
  return {
    title: schemaName || "Slider tekpro",
    type: "object",
    properties: {
      autoplay: {
        title: "autoplay",
        type: "boolean",
        default: false
      },
      useBackground: {
        title: 'Usar imagenes como background',
        type: 'boolean',
        default: true
      },
      height: {
        title: 'alto en px (desktop)',
        type: 'number',
        default: 600
      },
      heightMobile: {
        title: 'alto en px (mobile)',
        type: 'number',
        default: 400
      },
      slides: {
        minItems: 0,
        title: 'Slider',
        type: 'array',
        items: {
          title: 'Slide',
          type: 'object',
          properties: {
            image: {
              title: 'Imagen',
              type: 'string',
              widget: {
                'ui:widget': 'image-uploader'
              }
            },
            imageMobile: {
              title: 'Imagen mobile',
              type: 'string',
              widget: {
                'ui:widget': 'image-uploader'
              }
            },
            useHtml: {
              title: 'usar html',
              type: 'boolean'
            },
            ...htmlSchema,
            ...contentSchema
          }
        }
      }
    }
  }
}

export default WithCarousel;
