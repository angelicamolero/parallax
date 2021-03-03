import DangerousHTML from 'react-dangerous-html';
import Style from '../carousel.css';
import { HtmlRenderProps } from '../interfaces';

const HtmlRender = ({ html, image, height }: HtmlRenderProps) => {
  return <div className={Style.SlideRender} style={{ backgroundImage: 'url(' + image + ')', height}}>
    <DangerousHTML html={html} tagName="div" className={Style.SlideHtmlRenderContent}/>
  </div>
}

export default HtmlRender;
