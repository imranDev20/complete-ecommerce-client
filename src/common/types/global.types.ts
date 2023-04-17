export type HeaderLinkType = {
  name: string;
  route: string;
  showInNav: boolean;
};

export type HeaderLinksType = {
  [key: string]: HeaderLinkType;
};
