import { ImageCard } from "../ImageCard"

const Arr = [
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg',
        head : 'Salon Prime',
        para : 'Up to 50% Off'
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1622105908059-580fda.jpeg',
        head : 'Salon for Men',
        para : 'Flat ₹100 off'
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png',
        head : 'Spa for Women',
        para : 'Free head massage'
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg',
        head : 'Massage for Men',
        para : 'Starts at ₹499'
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_9b68f7b0.jpeg',
        head : 'Makeup & Styling Studio',
        para : "Artists trained by Zorains's Studio"
    }
]

export const Salon = () => {
    const title = 'Salon, Spa and Massage services';
    const sub = 'Hygienic & Single use products | Low-contact services';
    return <ImageCard title={title} sub={sub} Arr={Arr} />
}