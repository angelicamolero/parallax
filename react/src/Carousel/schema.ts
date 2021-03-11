export const TITLE = (name: string, urlProps: boolean = false, showBackgrund: boolean = false) => {
  return {
    title: {
      title: name,
      type: 'string'
    },
    ...urlProps ? {
      url: {
        title: 'url del ' + name,
        type: 'string'
      }
    } : {},
    titleColor: {
      title: "Color del " + name,
      type: "string",
      widget: {
        'ui:widget': 'color'
      }
    },
    ...showBackgrund ? {
      background: {
        title: 'Fondo del ' + name,
        type: 'string',
        widget: {
          'ui:widget': 'color'
        }
      }
    } : {}
  }
}

export const contentSchema = {
  title: {
    title: 'Título',
    type: 'object',
    properties: {
      ...TITLE("Título del slide")
    }
  },
  subTitle: {
    title: 'SubTítulo',
    type: 'object',
    properties: {
      ...TITLE("SubTítulo del slide")
    }
  },
  text: {
    title: 'Texto',
    type: 'object',
    properties: {
      ...TITLE("Texto del slide")
    }
  },
  button: {
    title: 'Texto',
    type: 'object',
    properties: {
      ...TITLE("Botón del slide", true, true)
    }
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
  }
}

export const htmlSchema = {
  html: {
    title: 'HTML+CSS+JS',
    type: 'string',
    widget: {
      'ui:widget': 'textarea'
    },
    description: 'si se activa el check "Usar html", solo es necesario usar este campo'
  }
}




