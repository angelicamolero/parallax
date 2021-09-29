import React, { Suspense, Fragment, useMemo, useCallback } from 'react';
import News from './news';
import { NewsProps } from './interfaces';
import { useRuntime, NoSSR } from 'vtex.render-runtime';

const WithNews = (props: NewsProps) => {
  const RuntimeContext = useRuntime();
  const isMobile = RuntimeContext?.deviceInfo?.isMobile;

  const goToPage = useCallback((url: string, openNewTab: boolean = false) => {
    if (!openNewTab) window.location.href = url;
    else window.open(url, '_blank');
  }, []);
  
  return useMemo(() => 
    <NoSSR>
      <Suspense fallback={<Fragment/>}>
        <News {...props} isMobile={isMobile} goToPage={goToPage}/>
      </Suspense>
    </NoSSR>
  , [props, isMobile, goToPage]);
}

WithNews.defaultProps = {
  mode: 'out',
  useBackground: false
}

WithNews.getSchema = ({ schemaName, mode , outType }: NewsProps) => {
  return {
    title: schemaName || 'Noticias',
    type: "object",
    properties: {
      mode: {
        title: 'modo',
        type: 'string',
        enum: [
          'out',
          'into'
        ]
      },
      useBackground: {
        title: 'Usar imagen como background',
        type: 'boolean',
        default: true
      },
      title: {
        title: 'Título seccion',
        type: 'string'
      },
      subTitle: {
        title: 'SubTítulo seccion',
        type: 'string'
      },
      news: {
        minItems: 0,
        title: 'Noticias',
        type: 'array',
        items: {
          title: 'Noticia',
          type: 'object',
          properties: {
            __editorItemTitle: {
              title: "Título",
              type: "string"
            },
            titleColor: {
              title: "Color del título",
              type: "string",
              widget: {
                'ui:widget': 'color'
              }
            },
            buttonLabel: {
              title: "Título botón",
              type: "string",
              default: "LEER MÁS"
            },
            ...outType !== 'all' && {
              buttonPosition: {
                title: "Posición del botón y texto (Desktop)",
                type: "string",
                enum: [
                  'Top-Left', 'Top-Center', 'Top-Right',
                  'Center-Left', 'Center-Center', 'Center-Right',
                  'Bottom-Left', 'Bottom-Center', 'Bottom-Right',
                ],
                default: "Center-Center"
              },
              buttonPositionMobile: {
                title: "Posición del botón y texto (Mobile)",
                type: "string",
                enum: [
                  'Top-Left', 'Top-Center', 'Top-Right',
                  'Center-Left', 'Center-Center', 'Center-Right',
                  'Bottom-Left', 'Bottom-Center', 'Bottom-Right',
                ],
                default: "Center-Center"
              },
            },
            image: {
              title: "Imagen para dekstop",
              type: "string",
              widget: {
                'ui:widget': 'image-uploader'
              },
              default: "https://dummyimage.com/1920x700/eee/000"
            },
            imageMobile: {
              title: "Imagen para mobile",
              type: "string",
              widget: {
                'ui:widget': 'image-uploader'
              },
              default: mode == 'into' ? "https://dummyimage.com/400x600/706f70/fff" : "https://dummyimage.com/400x300/000/fff"
            },
            url: {
              title: "url",
              type: "string"
            },
            openNewTab: {
              title: "Abrir en una nueva pestaña",
              type: "boolean",
              default: false
            },
            ...outType !== 'all' && {
              parallax: {
              title: "Efecto parallax",
              type: "boolean",
              default: false
            }},
            ...outType === 'all' && {
              align: {
                title: 'Alinear texto',
                type: 'string',
                enumNames: [
                  "left",
                  "center",
                  "right"
                ],
                enum: [
                  "flex-start",
                  "center",
                  "flex-end"
                ]
              },
              alignMobile: {
                title: 'Alinear texto Mobile',
                type: 'string',
                enumNames: [
                  "left",
                  "center",
                  "right"
                ],
                enum: [
                  "flex-start",
                  "center",
                  "flex-end"
                ]
              }
            }
          }
        }
      },
      viewModeDesktop: {
        title: 'Items por fila (desktop)',
        type: 'number',
        default: 1
      },
      gap: {
        title: 'Espacio entre cada item',
        type: 'string',
        description: 'Recuerda poner unidad de medida: Ejemplor: px, %',
        default: '0'
      },
      fr: {
        title: 'Tamaño de cada item',
        type: 'string',
        description: 'Recuerda poner unidad de medida: Ejemplor: px, %',
        default: '100%'
      }
    }
  };
}

export default WithNews;
