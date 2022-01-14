export type contentPosition = 'Top-Left' | 'Top-Center' | 'Top-Right' |
  'Center-Left' | 'Center-Center' | 'Center-Right' |
  'Bottom-Left' | 'Bottom-Center' | 'Bottom-Right';

export type contentGeneralPosition = 'top' |
  'center' |
  'bottom' |
  'left' |
  'right'

  export type textAlignPosition = 'center' |
  'left' |
  'right'

  export type showNavigationArrowsType = 'always' | 'never' | 'desktopOnly' | 'mobileOnly'

export interface titleBase {
  title?: string;
  url?: string;
  titleColor?: string;
  background?: string;
}

export interface buttonBase extends titleBase {
  isTransparent: boolean;
  icon?: string;
  baseIcon?: string;
}

export interface SlidesProps {
  useVideo: boolean;
  videoLink: string;
  videoLinkMobile?: string;
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
  contentGeneralPosition: contentGeneralPosition;
  contentAlign?: textAlignPosition;
  contentAlignMobile?: textAlignPosition;
  goToPage?: (url: string) => void;
  heightB?: number;
  useBackground?: boolean;
  showVideoModal?: boolean;
}

export interface IItemsPerPage {
  desktop: number;
  tablet: number;
  phone: number;
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
  itemsPerPage: IItemsPerPage;
  showNavigationArrows: showNavigationArrowsType;
  margin?: number;
  useBoxShadow?: boolean;
  maxWith?: number;
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
