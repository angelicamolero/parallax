import React from 'react';
import Style from '../news.css';
import { Parallax } from 'react-parallax';
import { INews } from '../interfaces';

const NewsItem = ({ image, __editorItemTitle, titleColor, buttonLabel, key, parallax, isMobile, imageMobile, url, openNewTab }: INews) => {

  const i = isMobile ? imageMobile : image;

  return <div className={Style.newsContainer} key={key}>
    {
      parallax ? <Parallax
        bgImage={isMobile ? imageMobile : image}
        contentClassName={Style.newsImageContainer}
      >
        <div className={Style.newsImageTitle} style={{ color: titleColor }}>{__editorItemTitle}</div>
      </Parallax> :
        <div className={Style.newsImageContainer} style={{ backgroundImage: "url(" + i + ")" }}>
          <div className={Style.newsImageTitle} style={{ color: titleColor }}>{__editorItemTitle}</div>
        </div>
    }
    <div className={Style.newsFooter}>
      <a className={Style.newsFooterButton} href={url} target={openNewTab ? "_blank" : "_self"}>{buttonLabel}</a>
    </div>
  </div>
}

export default NewsItem;
