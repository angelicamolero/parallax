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

const DefaultRender = ({ height, image, title, subTitle, text, button, contentPosition, goToPage }: DefaultRenderProps) => {

  const classes = classnames(
    Style.SlideRender,
    CLASSES_Y[contentPosition.split("-")[0]],
    CLASSES_X[contentPosition.split("-")[1]]
  );

  return <div className={classes} style={{ backgroundImage: 'url(' + image + ')', height }}>
    <div className={Style.SlideDefaultRenderContent}>
      <h1 className={Style.SlideDefaultRenderTitle} style={{ color: title?.titleColor }}>{title?.title}</h1>
      <div className={Style.SlideDefaultRenderSubTitle} style={{ color: subTitle?.titleColor }}>{subTitle?.title}</div>
      <p className={Style.SlideDefaultRenderText} style={{ color: text?.titleColor }}>{text?.title}</p>
      <button onClick={() => goToPage(button?.url || '')} className={Style.SlideDefaultRenderButton} style={{ color: button?.titleColor, background: button?.background }}>{button?.title}</button>
    </div>
  </div>
}

export default DefaultRender;