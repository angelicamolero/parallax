export type contentPosition = 'Top-Left' | 'Top-Center' | 'Top-Right' |
                              'Center-Left' | 'Center-Center' | 'Center-Right' |
                              'Bottom-Left' | 'Bottom-Center' | 'Bottom-Right';

export interface titleBase {
  title?: string;
  url?: string;
  titleColor?: string;
  background?: string;
}

export interface buttonBase extends titleBase {
  isTransparent: boolean;
}

export interface SlidesProps { 
  image: string;
  imageMobile: string;
  useHtml: boolean;
  html?: string;
  title?: titleBase;
  subTitle?: titleBase;
  text?: titleBase;
  button?: buttonBase;
  contentPosition?: contentPosition;
  contentPositionMobile?: contentPosition;
  useBackground?: boolean;
}

export interface WithCarouselProps { 
  height: number;
  heightMobile: number;
  slides: SlidesProps[];
  sliderLayoutProps: any;
  isMobile: boolean;
  goToPage: (url: string) => void;
  blockClass?: string;
  schemaName?: string;
  useBackground?: boolean;
  autoplay?:boolean;
}

export interface HtmlRenderProps {
  html: string;
  image: string;
  height: number;
}

export interface DefaultRenderProps extends SlidesProps {
  height: number;
  goToPage: (url: string) => void;
}
