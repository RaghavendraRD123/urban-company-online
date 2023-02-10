import { Heading, SimpleGrid, Image } from '@chakra-ui/react'
import { HomeMid } from '../components/HomeMid/HomeMid';
import { Line } from '../components/Line';
import { Ads } from '../components/HomeAds/Ads';
import { Services } from '../components/HomeServices/Services1';
import { NavbarMid } from '../components/Navbar/NavbarMid';
import { Navbar } from '../components/Navbar/Navbar';
import { NavImage } from '../components/Navbar/NavImage';

const HomePage = () =>{
  return (
    <div className="App">
      <SimpleGrid id='one' className='NavbarText' style={{
        color:'white'
      }}>
        <NavImage />
        <Navbar />
        <Heading marginTop='10%' as = 'h2' size='2xl' >Home services, on demand.</Heading>
        <NavbarMid />
      </SimpleGrid>
      <Services />
      <Line />
      <Ads />
      <Line />
      <Image p='0px 10px' w='100%' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_1425/t_high_res_template/images/growth/luminosity/1673009046648-97887b.jpeg' alt='Ad'  />
      <HomeMid />
    </div>
  );
}

export default HomePage;