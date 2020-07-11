export interface Property {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  price: string;
  propertyType: PropertyTypes;
  area?: string;
  size?: string;
  location?: string;

  //   children?: Property[];
}

export interface PropertyPage {
  pagePropertyType: PropertyTypes;
  pageTitle: string;
  children: Array<{ childTitle: string; childProperties: Property[] }>;
}

export enum PropertyTypes {
  CommercialProperty,
  CommercialShops,
  CommercialPlot,
  ResidentialProperty,
  ResidentialFlat,
  ResidntialHome,
  InvestmentProperty,
  InvestmentLand
}
