export interface INews {
  buttonLabel: string;
  image: string;
  titleColor: string;
  url: string;
  __editorItemTitle: string;
  parallax: boolean;
  key?: any;
  isMobile?: boolean;
  imageMobile: string;
  mode?: 'into' | 'out';
  buttonPosition: string;
  buttonPositionMobile: string;
  useBackground?: boolean;
}

export interface NewsProps {
  title?: string;
  news: INews[];
  isMobile: boolean;
  mode: 'into' | 'out';
  schemaName: string;
  blockClass?: string;
  viewModeDesktop: number;
  viewModeMobile: number;
  gap: string;
  fr: string;
  useBackground?: boolean;
}