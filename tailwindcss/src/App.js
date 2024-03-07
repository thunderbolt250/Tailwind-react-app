
import './cssfile.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './ContactUs'
import Navbar from './Navbar'
import LoginSignUp from './LoginSignUp'
import Home from './Home'
import Projects from './Projects';
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
        <Route path="Projects" element={<Projects />}/>
        
      </Routes>
    </BrowserRouter>
    </>
  )
}
