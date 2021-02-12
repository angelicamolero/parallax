import React from 'react';
import { NewsProps } from './interfaces';
import Style from './news.css';
import NewsItem from './ModeView/out';
import NewsItemInto from './ModeView/into';
import classNames from 'classnames';

const News = ({ news, isMobile, mode, blockClass, viewModeDesktop, viewModeMobile, gap, fr }: NewsProps) => {

  const classes = classNames(Style.newsListContainer, Style.newsListContainer + '--' + blockClass);


  return <div className={classes} style={{gridTemplateColumns: "repeat("+viewModeDesktop+", "+ fr +")", gridGap: gap, display: isMobile ? 'block' : 'grid'}}>{
    news && news.length ?
      news.map((n, i) => {
        return mode == 'out' ? <NewsItem {...n} key={i} isMobile={isMobile} /> : <NewsItemInto {...n} key={i} isMobile={isMobile} />
      }) : <React.Fragment />
  }</div>
}

export default News;
