import React from 'react';
import Style from '../news.css';
import { INews } from '../interfaces';

const OutAll = ({ image, __editorItemTitle, titleColor, buttonLabel, key, isMobile, imageMobile, url, openNewTab, useBackground, align, alignMobile }: INews) => {

  const i = isMobile ? imageMobile : image;
  const al = isMobile ? alignMobile : align;
  const style = {
    ...useBackground && { backgroundImage: "url(" + i + ")" },
    ...!useBackground && { height: "auto" }
  }

  const styleFooter = {
    alignItems:  al
  }

  return <div className={Style.newsContainer} key={key}>
    <div className={Style.newsImageContainer} style={style}>
        {!useBackground && <img src={i}/>}
    </div>
    <div className={Style.newsFooterAllOut} style={styleFooter}>
      <div className={Style.newsImageTitle} style={{ color: titleColor }}>{__editorItemTitle}</div>
      <a className={Style.newsFooterButton} href={url} target={openNewTab ? "_blank" : "_self"}>{buttonLabel}</a>
    </div>
  </div>
}

export default OutAll;
