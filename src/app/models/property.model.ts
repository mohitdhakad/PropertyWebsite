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
<<<<<<< HEAD

CommercialProperty,
CommercialPlot,
ResidentialProperty,
ResidentialFlat,
ResidntialHome,
ResidentialPlot,
InvestmentProperty,
InvestmentLand,


}
||||||| merged common ancestors

CommercialProperty,
ResidentialProperty,
ResidentialFlat,
ResidntialHome,
InvestmentProperty,

}
=======
  CommercialProperty,
  CommercialShops,
  CommercialPlot,
  ResidentialProperty,
  ResidentialFlat,
  ResidntialHome,
  InvestmentProperty,
  InvestmentLand,
}
>>>>>>> 862d269ec901673e7737b990c1ba12d75796331b
