export interface Property {
  title: string;
  imgSrc: string;
  description: string;
  price: string;
  propertyType: PropertyTypes;
  //   children?: Property[];
}

export interface PropertyPage {
  pagePropertyType: PropertyTypes;
  pageTitle: string;
  children: Array<{ childTitle: string; childProperties: Property[] }>;
}

export enum PropertyTypes {
  CommercialProperty,
  ResidentialProperty,
  ResidentialFlat,
  ResidntialHome,
  InvestmentProperty
}
