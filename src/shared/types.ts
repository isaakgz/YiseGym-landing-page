export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  Pricing = "pricing",
  Contact = "contact",
  OurClasses = "ourClasses",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
