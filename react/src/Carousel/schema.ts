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
      },
      icon: {
        title: 'ícono del ' + name,
        type: 'string'
      },
      baseIcon: {
        title: 'Base ícono del ' + name,
        type: 'string'
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
      ...TITLE("Botón del slide", true, true),
      isTransparent: {
        title: 'Fondo transparente',
        type: 'boolean',
        default: false,
        description: 'Si se usa el fondo transparente, el campo Fondo del botón, solo afectará el borde del botón'
      }
    }
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


export const columnImage = {
  title: 'Imagen',
  type: 'object',
  properties: {
    image: {
      title: 'Image',
      type: 'string'
    }
  }
}



