import { ImageCard } from "../ImageCard"

const Arr = [
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png',
        head : 'Geyser',
        para : ''
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bf5acc80.png',
        head : 'Refrigerator',
        para : ''
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png',
        head : 'Water Purifier Service',
        para : 'Up to 45% Off'
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_b78221c0.png',
        head : 'Washing Machine',
        para : ''
    },
]

export const Appliances = () => {
    const title = 'Appliances';
    const sub = 'Servicing, Repair, Installation & Uninstallation';
    return <ImageCard  title={title} sub={sub} Arr={Arr}  />
}