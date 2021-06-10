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
  autoplay: false,
  useBoxShadow: false,
  itemsPerPage: {
    desktop: 1,
    tablet: 1,
    phone: 1
  }
}

const CustomWigetTitle = (props: any) => {
  return <div style={{borderTop: '1px solid #0e0e0e', padding: '5px 0', borderBottom: '1px solid #0e0e0e'}}>
          <h2 style={{margin: 0, textAlign: 'center'}}>{props?.label}</h2>
        </div>
}

const CustomCopyRight = () => {
  return <div style={{textAlign: 'center'}}>
          <span style={{margin: 0, fontSize: 12}}>Desarrollado por Tekpro eCommerce</span>
        </div>
}

WithCarousel.getSchema = ({ schemaName, useBackground }: WithCarouselProps) => {



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
      useBoxShadow: {
        title: 'Resaltar',
        type: 'boolean',
        default: false,
        description: 'Solo aplica para mobile'
      },
      ...useBackground ? {height: {
        title: 'alto en px (desktop)',
        type: 'number',
        default: 600
      },
      heightMobile: {
        title: 'alto en px (mobile)',
        type: 'number',
        default: 400
      }}: {},
      slides: {
        minItems: 0,
        title: 'Slider',
        type: 'array',
        items: {
          title: 'Slide',
          type: 'object',
          properties: {
            titleImage: {
              title: 'Imagen-Video',
              type: 'string',
              widget: {
                'ui:widget': CustomWigetTitle
              }
            },
            useVideo: {
              title: 'Usar video',
              type: 'boolean',
              default: false
            },
            showVideoModal: {
              title: 'Reproducir en emergente',
              type: 'boolean',
              default: false
            },
            videoLink: {
              title: 'Link video',
              type: 'string',
              description: "Al cargar un video, se recomienda tambien cargar imagenes, esta se motrará mientras se carga el video",
            },
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
            contentPosicionTitle: {
              title: 'Posición del contenido',
              type: 'string',
              widget: {
                'ui:widget': CustomWigetTitle
              }
            },
            contentGeneralPosition: {
              title: 'Posición del contenido',
              type: 'string',
              enum: [
                'top',
                'center',
                'bottom',
                'left',
                'right'
              ],
              description: 'center',
              default: 'center'
            },
            contentPosition: {
              title: "Posición del botón y texto (desktop)",
              type: "string",
              enum: [
                'Top-Left', 'Top-Center', 'Top-Right',
                'Center-Left', 'Center-Center', 'Center-Right',
                'Bottom-Left', 'Bottom-Center', 'Bottom-Right',
              ],
              default: "Center-Center"
            },
            contentPositionMobile: {
              title: "Posición del botón y texto (mobile)",
              type: "string",
              enum: [
                'Top-Left', 'Top-Center', 'Top-Right',
                'Center-Left', 'Center-Center', 'Center-Right',
                'Bottom-Left', 'Bottom-Center', 'Bottom-Right',
              ],
              default: "Center-Center"
            },
            contentAlign: {
              title: 'Alineación del texto',
              type: 'string',
              enum: [
                'left',
                'center',
                'right'
              ],
              default: 'left'
            },
            contentTitle: {
              title: 'Contenido del slide',
              type: 'string',
              widget: {
                'ui:widget': CustomWigetTitle
              }
            },
            ...contentSchema,
            useHtml: {
              title: 'usar html',
              type: 'boolean'
            },
            ...htmlSchema
          }
        }
      },
      itemsPerPage: {
        title: 'items por páginas',
        type: 'object',
        properties: {
          desktop: {
            title: 'Items para desktop',
            type: 'number',
            default: 1
          },
          tablet: {
            title: 'Items para tablet',
            type: 'number',
            default: 1
          },
          phone: {
            title: 'Items para phone',
            type: 'number',
            default: 1
          }
        }
      },
      margin: {
        title: "Separación",
        type: 'number',
        default: 0,
        description: "Se aplicará en px y no se verá reflejado en mobile"
      },
      CopyRight: {
        title: '',
        type: 'string',
        widget: {
          'ui:widget': CustomCopyRight
        }
      }
    }
  }
}

export default WithCarousel;
