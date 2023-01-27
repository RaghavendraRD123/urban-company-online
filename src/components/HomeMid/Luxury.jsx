import { ImageCard } from "../ImageCard"

const Arr = [
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883165804-025664.png' ,
        head : 'Salon Luxe' ,
        para : ''
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164057-dd5910.png' ,
        head : 'Salon for Men Royale' ,
        para : ''
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164904-165c1e.png' ,
        head : 'Spa for Women Luxe' ,
        para : ''
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164502-08f9f6.png' ,
        head : 'Massage for Men Royale' ,
        para : ''
    },
]

export const Luxury = () => {
    const title = 'UC Luxury Experience';
    const sub = 'Top Professionals | Best Brands | Premium Experience';
    return <ImageCard  title={title} sub={sub} Arr={Arr}  />
}