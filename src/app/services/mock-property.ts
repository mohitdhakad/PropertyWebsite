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
            id: 1,
            title: 'Residential Home Property',
            description:
              'This house is ready to shift and  it contains 2 room and 1 hall.',
            imgSrc: 'assets/home1.jpg',
            price: '8-10 lakh',
            propertyType: PropertyTypes.ResidntialHome,

            area: '70 gaj',
            size: '15 by 30',
            location: 'Muhana'
          },
          {
            id: 2,
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
            id: 3,
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
  },
  {
    pageTitle: 'Commercial',
    pagePropertyType: PropertyTypes.CommercialProperty,
    children: [
      {
        childTitle: 'Shops',
        childProperties: [
          {
            id: 4,
            title: 'Commercial Shop Property',
            description:
              'This house is ready to shift and  it contains 2 room and 1 hall.',
            imgSrc: 'assets/home1.jpg',
            price: '8-10 lakh',
            propertyType: PropertyTypes.CommercialShops
          }
        ]
      },
      {
        childTitle: 'Plots',
        childProperties: [
          {
            id: 5,
            title: 'Commercial Plots',
            description:
              'This house is ready to shift and  it contains 2 room and 1 hall.',
            imgSrc: 'assets/home2.jpg',
            price: '8-10 lakh',
            propertyType: PropertyTypes.CommercialPlot
          }
        ]
      }
    ]
  },

  {
    pageTitle: 'Investment',
    pagePropertyType: PropertyTypes.InvestmentProperty,
    children: [
      {
        childTitle: 'Land',
        childProperties: [
          {
            id: 6,
            title: 'Major and Minor Lands',
            description:
              'This house is ready to shift and  it contains 2 room and 1 hall.',
            imgSrc: 'assets/home1.jpg',
            price: '8-10 lakh',
            propertyType: PropertyTypes.InvestmentLand
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
