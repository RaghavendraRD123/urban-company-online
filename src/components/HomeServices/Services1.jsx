import { SimpleGrid } from "@chakra-ui/react";
import { HomeDrawer } from "./HomeDrawer";
import { ServiceItem } from "./ServiceItem";

const serviceArr = [
    // {
            //     sumImg:'',
            //     subPara : ''
            // },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png' ,
        para : 'Salon for Women',
        other : [
                {
                    sumImg:'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg',
                    subPara : 'Salon Prime'
                },
                {
                    sumImg:'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078787966-226e17.jpeg',
                    subPara : 'Salon Classic'
                }
        ]
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png' ,
        para : 'Hair, Skin & Nails',
        other : [
            {
                sumImg:'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/luminosity/1646140571372-aa78b8.png',
                subPara : 'Hair Studio for Women'
            },
            {
                sumImg:'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1632078772568-9b444d.png',
                subPara : 'Laser Hair Reduction'
            },
            {
                sumImg:'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/luminosity/1633451331611-b1d2ef.png',
                subPara : 'Nail Studio for Women'
            }
        ]
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1672911239762-895917.jpeg' ,
        para : "Women's Therapies",
        other : []
    },
    {
        img :'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png' ,
        para : 'Salon for Men',
        other : []
    },{
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png',
        para : "Men's Therapies",
        other : []
    },
    {
        img :'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1672912455342-3123f1.jpeg' ,
        para : `AC/Appliance Repair`,
        other : []
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png',
        para : 'Home Painting',
        other : []
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png',
        para : 'Cleaning & Pest Control',
        other : [
                {
                    sumImg:'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg',
                    subPara : 'Bathroom & Kitchen Cleaning'
                },
                {
                    sumImg:'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/luminosity/1631159612066-53b210.jpeg',
                    subPara : 'Cockroach, Ant & General Pest Control'
                },
                {
                    sumImg:'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg',
                    subPara : 'Full Home Cleaning'
                },
                {
                    sumImg:'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg',
                    subPara : 'Sofa & Carpet Cleaning'
                },
                {
                    sumImg:'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_ccbf81d0.jpeg',
                    subPara : 'Disinfection Services'
                }
        ]
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg',
        para : 'Electricians',
        other : []
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1672912452485-cbbbc5.jpeg' ,
        para : 'Plumbers & Carpenters',
        other : [
            {
                sumImg:'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/home_screen/plumber.jpg',
                subPara : 'Plumbers'
            },
            {
                sumImg:'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/home_screen/carpenter.jpg',
                subPara : 'Carpenters'
            }
        ]
    },
]

export const Services = () =>{
    return <SimpleGrid boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' bg='white' columns={[1,2,4,5,5]} w='84%' margin='auto' marginTop='80px' justifyContent='center' padding='20px' >
        {
            serviceArr.map((el,i)=>{
                return <HomeDrawer key={i} {...el}/> 
            })
        }
    </SimpleGrid>
}
