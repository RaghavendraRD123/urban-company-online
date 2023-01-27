import { ImageCard } from "../ImageCard"

const Arr = [
    {
        img : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg",
        head : "Bathroom & Kitchen Cleaning",
        para :""
    },
    {
        img : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg",
        head : "Full Home Cleaning",
        para :""
    },
    {
        img : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg",
        head : "Sofa & Carpet Cleaning",
        para :""
    },
    {
        img : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg",
        head : "Cockroach, Ant & General Pest Control",
        para :""
    },
    {
        img : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632490257439-ef28d2.jpeg",
        head : "Bed Bugs Control",
        para :""
    },
    {
        img : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632490742113-7c2635.jpeg",
        head : "Termite Control",
        para :""
    },
]

export const Cleaning = () => {
    const title = 'Cleaning & Pest Control ';
    const sub = '';
    return <ImageCard  title={title} sub={sub} Arr={Arr} />
}