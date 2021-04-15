import Style from '../carousel.css';
import { DefaultRenderProps } from '../interfaces';
import classnames from 'classnames';

const CLASSES_Y = {
  Top: Style.SlideDefaultNewsFlexTop,
  Center: Style.SlideDefaultNewsFlexMiddle,
  Bottom: Style.SlideDefaultNewsFlexBottom,
}

const CLASSES_X = {
    Left: Style.SlideDefaultNewsFlexStart,
    Center: Style.SlideDefaultNewsFlexCenter,
    Right: Style.SlideDefaultNewsFlexEnd,
}

const DefaultRender = ({ height, image, title, subTitle, text, button, contentPosition, goToPage, useBackground }: DefaultRenderProps) => {

  const classes = classnames(
    Style.SlideRender,
    CLASSES_Y[contentPosition.split("-")[0]],
    CLASSES_X[contentPosition.split("-")[1]],
    Style.defaultContentRender
  );

  return <>
  {!useBackground && <img src={image}/>}
  <div className={classes} style={{ backgroundImage: useBackground && 'url(' + image + ')', height: useBackground && height, position: !useBackground ? 'absolute' : null }}>
    <div className={Style.SlideDefaultRenderContent}>
      {title?.title && <h1 className={Style.SlideDefaultRenderTitle} style={{ color: title?.titleColor }}>{title?.title}</h1>}
      {subTitle?.title && <div className={Style.SlideDefaultRenderSubTitle} style={{ color: subTitle?.titleColor }}>{subTitle?.title}</div>}
      {text?.title && <p className={Style.SlideDefaultRenderText} style={{ color: text?.titleColor }}>{text?.title}</p>}
      {button?.title && <button onClick={() => goToPage(button?.url || '')} className={Style.SlideDefaultRenderButton} style={{ color: button?.titleColor, background: button?.isTransparent ? 'transparent': button?.background, border: button?.isTransparent && `1px solid ${button?.background}` }}>{button?.title}</button>}
    </div>
  </div>
  </>
}

export default DefaultRender;