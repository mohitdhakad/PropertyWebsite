import {
  Property,
  PropertyTypes,
  PropertyPage
} from '../models/property.model';

export var PropertyPages: PropertyPage[] = [
  {
    pageTitle: 'Residential',
    pagePropertyType: PropertyTypes.ResidentialProperty,
    children: [
      {
        childTitle: 'Home property',
        childProperties: [
          {
            title: 'Residential Home Property',
            description:
              'This house is ready to shift and  it contains 2 room and 1 hall.',
            imgSrc: 'assets/home1.jpg',
            price: '8-10 lakh',
            propertyType: PropertyTypes.ResidntialHome
          },
          {
            title: 'Residential Home Property',
            description:
              'This house is ready to shift and  it contains 2 room and 1 hall.',
            imgSrc: 'assets/home1.jpg',
            price: '8-10 lakh',
            propertyType: PropertyTypes.ResidntialHome
          }
        ]
      },
      {
        childTitle: 'Flat Property',
        childProperties: [
          {
            title: 'Residential Flat Property',
            description:
              'This house is ready to shift and  it contains 2 room and 1 hall.',
            imgSrc: 'assets/home2.jpg',
            price: '8-10 lakh',
            propertyType: PropertyTypes.ResidentialFlat
          }
        ]
      }
    ]
  }
];

// export var PROPERTIES: Property[] = [

//     {
//         title: 'Commercial property',
//         description: 'In main location.',
//         imgSrc: 'assets/home1.jpg',
//         price:'5-50 lakh',
//         propertyType: PropertyTypes.CommercialProperty,
//     },
//     {

//         title: 'Commercial property',
//         description: 'In main location.',
//         imgSrc: 'assets/home1.jpg',
//         price:'5-50 lakh',
//         propertyType: PropertyTypes.CommercialProperty,

//     },
//     {

//         title: 'Residential Home Property',
//         description: 'This house is ready to shift and  it contains 2 room and 1 hall.',
//         imgSrc: 'assets/home1.jpg',
//         price:'8-10 lakh',
//         propertyType: PropertyTypes.ResidntialHome,
//         isChild:true,
//         parentPropertyType: PropertyTypes.ResidentialProperty,

//     },
//     {

//         title: 'Residential Home Property',
//         description: 'This house is ready to shift and  it contains 2 room and 1 hall.',
//         imgSrc: 'assets/home1.jpg',
//         price:'8-10 lakh',
//         propertyType: PropertyTypes.ResidntialHome,
//         isChild:true,
//         parentPropertyType: PropertyTypes.ResidentialProperty,

//     },
//     {

//         title: 'Residential Flat Property',
//         description: 'This house is ready to shift and  it contains 2 room and 1 hall.',
//         imgSrc: 'assets/home2.jpg',
//         price:'8-10 lakh',
//         propertyType: PropertyTypes.ResidentialFlat,
//         isChild:true,
//         parentPropertyType: PropertyTypes.ResidentialProperty,

//     },

//     {

//         title: 'investment Property',
//         description: 'This house is ready to shift and  it contains 2 room and 1 hall.',
//         imgSrc: 'assets/home2.jpg',
//         price:'7-10 lakh',
//         propertyType: PropertyTypes.InvestmentProperty,
//         isChild:false,
//         parentPropertyType: PropertyTypes.InvestmentProperty,

//     },
//     {

//         title: 'investment Property',
//         description: 'This house is ready to shift and  it contains 2 room and 1 hall.',
//         imgSrc: 'assets/home2.jpg',
//         price:'7-10 lakh',
//         propertyType: PropertyTypes.InvestmentProperty,
//         isChild:false,
//         parentPropertyType: PropertyTypes.InvestmentProperty,

//     },
// ]
