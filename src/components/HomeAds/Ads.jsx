import { AdsItem } from "./AdsItem"

const adsArr = [
    'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1672826103208-aaaba9.jpeg',
    'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1672826049453-b2c821.jpeg',
    'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/supply/customer-app-supply/1672900497090-a991c4.jpeg',
    'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1672826075039-60761e.jpeg',
    'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/supply/customer-app-supply/1672826478751-ebd467.jpeg',
    'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/supply/customer-app-supply/1672900487729-0e6734.jpeg',
]

export const Ads = () => {
    return <div style={{
        display:'flex',
        gap : '15px',
        padding : '10px',
    }}>
        {
            adsArr.map((el,i)=>{
                return <AdsItem key={i} img={el} />
            })
        }
    </div>
}