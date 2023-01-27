import { ImageCard } from "../ImageCard"

const Arr = [
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg' ,
        head : 'Carpenters' ,
        para : ''
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/electrician.jpg' ,
        head : 'Electricians' ,
        para : ''
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg' ,
        head : 'Plumbers' ,
        para : ''
    }
]

export const Repairs = () => {
    const title = 'Home Repairs';
    const sub = '';
    return <ImageCard  title={title} sub={sub} Arr={Arr} box={3} />
}