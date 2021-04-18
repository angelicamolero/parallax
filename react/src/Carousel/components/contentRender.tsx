import Style from '../carousel.css';
import { SlidesProps } from '../interfaces';
import Icon from 'tekpro.store-icons/Icons';
import classNames from 'classnames';

const ContentRender = ({ title, subTitle, text, button, goToPage }: SlidesProps) => {

    const classesButton = classNames(Style.SlideDefaultRenderButton, button?.isTransparent && Style.buttonTransparent)

    return (
        <div className={Style.SlideDefaultRenderContent}>
        {title?.title && <h1 className={Style.SlideDefaultRenderTitle} style={{ color: title?.titleColor }}>{title?.title}</h1>}
        {subTitle?.title && <div className={Style.SlideDefaultRenderSubTitle} style={{ color: subTitle?.titleColor }}>{subTitle?.title}</div>}
        {text?.title && <p className={Style.SlideDefaultRenderText} style={{ color: text?.titleColor }}>{text?.title}</p>}
        {button?.title && <button onClick={() => goToPage(button?.url || '')} className={classesButton} style={{ color: button?.titleColor, background: button?.isTransparent ? 'transparent': button?.background, border: button?.isTransparent && `1px solid ${button?.background}` }}>
            {button?.icon && button?.baseIcon && <Icon icon={button?.icon} base={button?.baseIcon} blockClass="icon-button-carousel" />}
            {button?.title}
        </button>}
    </div>
    )
}

export default ContentRender;
