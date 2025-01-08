export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  Pricing = "pricing",
  Contact = "contact",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
