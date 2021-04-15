import Style from '../carousel.css';
import { DefaultRenderProps } from '../interfaces';
import classnames from 'classnames';
import ContentRender from './contentRender';

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

const DefaultRender = (props: DefaultRenderProps) => {

  const { height, image, contentPosition,contentGeneralPosition } = props;

  const classes = classnames(
    Style.SlideRender,
    CLASSES_Y[(contentPosition || "Center-Center").split("-")[0]],
    CLASSES_X[(contentPosition || "Center-Center").split("-")[1]],
    Style.defaultContentRender
  );

  return <div className={classes} style={{ backgroundImage: 'url(' + image + ')', height }}>
    {(!contentGeneralPosition || contentGeneralPosition === 'center') && <ContentRender {...props} />}
  </div>
}

export default DefaultRender;