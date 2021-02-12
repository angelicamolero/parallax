import React from 'react';
import News from './news';
import { NewsProps } from './interfaces';
import { useRuntime } from 'vtex.render-runtime';

const WithNews = (props: NewsProps) => {
  const RuntimeContext = useRuntime();
  const isMobile = RuntimeContext?.deviceInfo?.isMobile;
  return <News {...props} isMobile={isMobile} />
}

WithNews.defaultProps = {
  mode: 'out'
}

WithNews.getSchema = ({ schemaName, mode }: NewsProps) => {
  return {
    title: schemaName || 'Noticias',
    type: "object",
    properties: {
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
            image: {
              title: "Imagen para dekstop",
              type: "string",
              widget: {
                'ui:widget': 'image-uploader'
              },
              default: "https://dummyimage.com/1920x600/eee/000"
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
            parallax: {
              title: "Efecto parallax",
              type: "boolean",
              default: false
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
