import React from 'react';
import Style from '../news.css';
import { Parallax } from 'react-parallax';
import { INews } from '../interfaces';
import classnames from 'classnames';

const CLASSES_Y = {
  Top: Style.newsFlexTop,
  Center: Style.newsFlexMiddle,
  Bottom: Style.newsFlexBottom,
}

const CLASSES_X = {
    Left: Style.newsFlexStart,
    Center: Style.newsFlexCenter,
    Right: Style.newsFlexEnd,
}

const NewsItem = ({ image, __editorItemTitle, titleColor, buttonLabel, key, parallax, isMobile, imageMobile, buttonPosition, buttonPositionMobile, url, goToPage   }: INews) => {

  const i = isMobile ? imageMobile : image;
  const classes = classnames(
    Style.newsImageContainer,
    CLASSES_Y[
    (!isMobile ? buttonPosition : buttonPositionMobile).split("-")[0]],
    CLASSES_X[
    (!isMobile ? buttonPosition : buttonPositionMobile).split("-")[1]]
  );

  return <div className={Style.newsContainer} key={key}>
    {
      parallax ? <Parallax
        bgImage={isMobile ? imageMobile : image}
        contentClassName={classes}
        bgStyle={{justifyContent: "flex-start"}}
      >
        <div className={Style.newsImageTitle} style={{ color: titleColor }}>
          {__editorItemTitle}
          <button className={Style.newsFooterButton}>{buttonLabel}</button>
        </div>
      </Parallax> :
        <div className={classes} style={{ backgroundImage: "url(" + i + ")" }}>
          <div className={Style.newsImageTitle} style={{ color: titleColor }}>
            {__editorItemTitle}
            <button className={Style.newsFooterButton} onClick={() => goToPage(url)}>{buttonLabel}</button>
          </div>
        </div>
    }
  </div>
}

export default NewsItem;
