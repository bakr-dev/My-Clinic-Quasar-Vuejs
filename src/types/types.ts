export interface INavLink {
  title: string;
  link: string;
  separator: boolean;
}

export interface IService {
  imgLink: string;
  title: string;
}

export interface IServicesProps {
  service: IService;
}
