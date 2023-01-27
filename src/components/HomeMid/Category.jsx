import { ImageCard } from "../ImageCard"

const Arr = [
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1646140571372-aa78b8.png',
        head : 'Hair Studio for Women',
        para : 'Expert Stylists'
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1632078772568-9b444d.png',
        head : 'Expert Counselling',
        para : 'Advanced Skin Treatments'
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1634213703742-6b4c23.jpeg',
        head : 'Ayurvedic Massage',
        para : ''
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg',
        head : 'RO Water Purifier',
        para : ''
    }
]

export const Category = () => {
    const title = 'New Category Launches';
    const sub = '';
    return <ImageCard title={title} sub={sub} Arr={Arr} />
}