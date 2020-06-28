export interface Property {
    title:string;
    imgSrc:string;
    description:string;
    price:string;
    propertyType: PropertyTypes;
    isChild: boolean;
    parentPropertyType: PropertyTypes;
}


export enum PropertyTypes {

CommercialProperty,
CommercialPlot,
ResidentialProperty,
ResidentialFlat,
ResidntialHome,
ResidentialPlot,
InvestmentProperty,
InvestmentLand,


}