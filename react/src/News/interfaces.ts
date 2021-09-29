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
  goToPage: (url: string, openNewTab?: boolean) => void;
  useBackground?: boolean;
  openNewTab?: boolean;
  align?: 'flex-start' | 'center' | 'flex-end'
  alignMobile?: 'flex-start' | 'center' | 'flex-end'
}

export interface NewsProps {
  title?: string;
  subTitle?: string;
  news: INews[];
  isMobile: boolean;
  mode: 'into' | 'out';
  schemaName: string;
  blockClass?: string;
  viewModeDesktop: number;
  viewModeMobile: number;
  gap: string;
  fr: string;
  goToPage: (url: string, openNewTab?: boolean) => void;
  useBackground?: boolean;
  openNewTab?: boolean;
  outType?: string
}