import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { Heading, SimpleGrid } from '@chakra-ui/react'
import { Navbar } from './components/Navbar/Navbar';
import { NavbarMid } from './components/Navbar/NavbarMid';
import { NavImage } from './components/Navbar/NavImage';
import { Services } from './components/HomeServices/Services1';
import { Ads } from './components/HomeAds/Ads';
import { Line } from './components/Line';
import { HomeMid } from './components/HomeMid/HomeMid';
import { Category } from './components/HomeMid/Category';

function App() {
  // const todos = useSelector(store=>store);
  // console.log(todos)
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
      <img width='100%' src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_1425/t_high_res_template/images/growth/luminosity/1673009046648-97887b.jpeg' alt='Ad'  />
      <HomeMid />
    </div>
  );
}

export default App;
