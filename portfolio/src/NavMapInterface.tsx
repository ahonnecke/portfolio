export interface NavMap {
  [key: string]: {
    link: string;
    image: string;
    text: string;
    category: string;
    detail: () => JSX.Element;
  };
}
