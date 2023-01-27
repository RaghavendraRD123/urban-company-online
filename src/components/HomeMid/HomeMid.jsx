import { Line } from "../Line";
import { Appliances } from "./Appliances";
import { Category } from "./Category.jsx";
import { Cleaning } from "./Cleaning";
import { Salon } from "./Salon";
import { Luxury } from './Luxury';
import {Repairs} from './Repairs';

import { Image} from "@chakra-ui/react"


const homeMidArr = [
    {
        head : '' ,
        para : '' ,
        div : [
            {
                img : '' ,
                h : '' ,
                p : ''
            },
            {
                img : '' ,
                h : '' ,
                p : ''
            },
            {
                img : '' ,
                h : '' ,
                p : ''
            },
            {
                img : '' ,
                h : '' ,
                p : ''
            },
        ]
    },
    {
        head : 'New Category Launches' ,
        para : '' ,
        div : [
            {
                img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1646140571372-aa78b8.png' ,
                h : 'Hair Studio for Women' ,
                p : 'Expert Stylists'
            },
            {
                img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1632078772568-9b444d.png' ,
                h : 'Expert Counselling' ,
                p : 'Advanced Skin Treatments'
            },
            {
                img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1634213703742-6b4c23.jpeg' ,
                h : 'Ayurvedic Massage' ,
                p : ''
            },
            {
                img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg' ,
                h : 'RO Water Purifier' ,
                p : ''
            },
        ]
    },
    {
        head : 'Appliances' ,
        para : 'Servicing, Repair, Installation & Uninstallation' ,
        div : [
            {
                img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png' ,
                h : 'Geyser' ,
                p : ''
            },
            {
                img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bf5acc80.png' ,
                h : 'Refrigerator' ,
                p : ''
            },
            {
                img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png' ,
                h : 'Water Purifier Service' ,
                p : 'Up to 45% Off'
            },
            {
                img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_b78221c0.png' ,
                h : 'Washing Machine' ,
                p : ''
            },
        ]
    },
    {
        head : 'Salon, Spa and Massage services' ,
        para : 'Hygienic & Single use products | Low-contact services' ,
        div : [
            {
                img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg' ,
                h : 'Salon Prime' ,
                p : 'Up to 50% Off'
            },
            {
                img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1622105908059-580fda.jpeg' ,
                h : 'Salon for Men' ,
                p : 'Flat ₹100 off'
            },
            {
                img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png' ,
                h : 'Spa for Women' ,
                p : 'Free head massage'
            },
            {
                img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg' ,
                h : 'Massage for Men' ,
                p : 'Starts at ₹499'
            },
            {
                img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_9b68f7b0.jpeg' ,
                h : 'Makeup & Styling Studio' ,
                p : "Artists trained by Zorains's Studio"
            },
        ]
    },
    {
        head : 'Cleaning & Pest Control ' ,
        para : '' ,
        div : [
            {
                img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg' ,
                h : 'Bathroom and Kitchen Cleaning' ,
                p : ''
            },
            {
                img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg' ,
                h : 'Full Home Cleaning' ,
                p : ''
            },
            {
                img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg' ,
                h : 'Sofa & Carpet Cleaning' ,
                p : ''
            },
            {
                img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg' ,
                h : 'Cockroach, Ant & General Pest Control' ,
                p : ''
            },
            {
                img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632490257439-ef28d2.jpeg' ,
                h : 'Bed Bugs Control' ,
                p : ''
            },
            {
                img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632490742113-7c2635.jpeg' ,
                h : 'Termite Control' ,
                p : ''
            },
        ]
    },
]


export const HomeMid = () => {
    return <div>
        <Line />
        <Category />
        <Line />
        <Appliances />
        <Line />
        <Salon />
        <Line />
        <Cleaning />
        <Line />
        <Luxury />
        <Line />
        <Image w='100%' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2304/t_high_res_template/images/growth/home-screen/1602763387610-2c1c7e.jpeg' alt='Ad' />
        <Line />
        <Repairs />
        <Line />
        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2304/t_high_res_template/categories/category_v2/category_a4e46fa0.png" alt="Insurence Protection" />
        <Line />
        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2304/t_high_res_template/images/growth/home-screen/1624344861242-558286.png" alt="Anti discrimination policy" />
        <Line />
        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2304/t_high_res_template/categories/category_v2/category_3cffdf20.png" alt="Partners" />
        <Line />
    </div>
}