export interface IAppState {
  inputValue: string;
  isLoading: boolean;
  data: IArticles[];
}

export interface IResponse {
  status: string;
  totalResults: number;
  articles: IArticles[];
}

export interface IArticles {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ICardProps {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ICard {
  name: string;
  surname: string;
  birthdate: string;
  position: PositionEnum;
  switch: boolean;
  agree: boolean;
  file: string;
}

export type EmptyObject = Record<string, never>;

enum PositionEnum {
  frontend = 'frontend',
  backend = 'male',
  fullStack = 'fullStack',
}

export interface IFormInput {
  name: string;
  surname: string;
  birthdate: string;
  position: PositionEnum;
  switch: boolean;
  agree: boolean;
  file: string;
}

export interface IFormPageState {
  cards: ICard[];
}

export interface MainState {
  isModalActive: boolean;
  content?: IArticles;
}
export interface IPaginationProps {
  pageSize?: number;
  portionSize?: number;
}

enum SortEnum {
  publishedAt = 'publishedAt',
  relevancy = 'relevancy',
  popularity = 'popularity',
}

export interface ISortFormInput {
  sort?: SortEnum;
}
