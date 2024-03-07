import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import user_icon from './user-icon.png';
import rnp_icon from './rnp-log.png'
import './cssfile.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './ContactUs'
import Navbar from './Navbar'
import LoginSignUp from './LoginSignUp'
import Home from './Home'
export default function Example() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navbar />}/>  */}
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="ContactUs" element={<ContactUs />}/>
        <Route path="LoginSignUp" element={<LoginSignUp />}/> 
          
        
      </Routes>
    </BrowserRouter>
    </>
  )
}
