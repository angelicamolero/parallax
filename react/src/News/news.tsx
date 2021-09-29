import React from 'react';
import { NewsProps } from './interfaces';
import Style from './news.css';
import NewsItem from './ModeView/out';
import NewsOutAll from './ModeView/outall';
import NewsItemInto from './ModeView/into';
import classNames from 'classnames';

const News = ({ news, isMobile, mode, blockClass, viewModeDesktop, gap, fr, title, subTitle, useBackground, goToPage, outType }: NewsProps) => {

  const classes = classNames(Style.newsListContainer, Style.newsListContainer + '--' + blockClass);
  const gclasses = classNames(Style.newsGeneralListContainer, Style.newsGeneralListContainer + '--' + blockClass);


  return <div className={gclasses}>
    {title && <h3 className={Style.newsGeneralTitle}>{title}</h3>}
    {subTitle && <p className={Style.newsGeneralSubTitle}>{subTitle}</p>}
    <div className={classes} style={{ gridTemplateColumns: "repeat(" + viewModeDesktop + ", " + fr + ")", gridGap: gap, display: isMobile ? 'block' : 'grid' }}>{
      news && news.length ?
        news.map((n, i) => {

          if (mode == 'out' && outType == 'all') return <NewsOutAll {...n} key={i} isMobile={isMobile} useBackground={useBackground} goToPage={goToPage}/>

          if (mode == 'out') return <NewsItem {...n} key={i} isMobile={isMobile} useBackground={useBackground} goToPage={goToPage}/>

          return <NewsItemInto {...n} key={i} isMobile={isMobile} useBackground={useBackground} goToPage={goToPage}/>
        }) : <React.Fragment />
    }</div>
  </div>
}

export default News;
