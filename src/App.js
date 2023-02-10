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
import { AllRoutes } from './pages/AllRoutes';
import { useParams } from 'react-router-dom';
import { ChatSection } from './components/ChatApp/ChatSection';

function App() {
  // const todos = useSelector(store=>store);
  // console.log(todos)
  return (
    <AllRoutes />
  );
}

export default App;
