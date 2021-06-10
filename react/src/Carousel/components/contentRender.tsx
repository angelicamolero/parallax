import Style from '../carousel.css';
import { SlidesProps } from '../interfaces';
import Icon from 'tekpro.store-icons/Icons';
import classNames from 'classnames';
import { Fragment } from 'react';

enum aling {
    left= 'flex-start',
    center='center',
    right= 'flex-end'
}

const ContentRender = ({ title, subTitle, text, button, goToPage, contentAlign, contentGeneralPosition }: SlidesProps) => {

    const classesButton = classNames(Style.SlideDefaultRenderButton, button?.isTransparent && Style.buttonTransparent)

    return title?.title || subTitle?.title || text?.title || button?.title ? (
        <div className={Style.SlideDefaultRenderContent} style={{textAlign: contentAlign, justifyContent: contentGeneralPosition !== 'left' && contentGeneralPosition !== 'right' && aling[contentAlign], alignItems: (contentGeneralPosition === 'left' || contentGeneralPosition === 'right') && aling[contentAlign]}}>
        {title?.title && <h2 className={Style.SlideDefaultRenderTitle} style={{ color: title?.titleColor }}><div dangerouslySetInnerHTML={{__html:(title?.title || '')}}></div></h2>}
        {subTitle?.title && <div className={Style.SlideDefaultRenderSubTitle} style={{ color: subTitle?.titleColor }}><div dangerouslySetInnerHTML={{__html:(subTitle?.title || '')}}></div></div>}
        {text?.title && <p className={Style.SlideDefaultRenderText} style={{ color: text?.titleColor }}><div dangerouslySetInnerHTML={{__html:(text?.title || '')}}></div></p>}
        {button?.title && <button onClick={() => goToPage(button?.url || '')} className={classesButton} style={{ color: button?.titleColor, background: button?.isTransparent ? 'transparent': button?.background, border: button?.isTransparent && `1px solid ${button?.background}` }}>
            {button?.icon && button?.baseIcon && <Icon icon={button?.icon} base={button?.baseIcon} blockClass="icon-button-carousel" />}
            {button?.title}
        </button>}
    </div>
    ) : <Fragment/>
}

export default ContentRender;
