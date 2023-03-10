import './App.css';
import { Route, Routes } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import Home from './components/Home/Home'
import Order from './components/Order/Order'
import StoreLocator from './components/Location/StoreLocator';
import Menu from './components/Menu/Menu';
import Coupons from './components/Coupons/Coupons';
import Tracker from './components/Tracker/Tracker';
import Navbar from './components/Nav/Navbar';
import Rewards from './components/Coupons/Rewards'

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/order' element={<Order />} />
        <Route path='/location' element={<StoreLocator />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/coupons' element={<Coupons />} />
        <Route path='/rewards' element={<Rewards />} />
        <Route path='/tracker' element={<Tracker />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
