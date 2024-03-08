
import './cssfile.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './ContactUs'
import Navbar from './Navbar'
import Login from './Login'
import Home from './Home'
import Projects from './Projects';
import Team from './Team'
import Profile from './Profile'
import Settings from './Settings'
import Signup from './Signup'
import ForgotPassword from './ForgotPassword'
import RecoverPassword from './RecoverPassword'
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
        <Route path="Login" element={<Login />}/> 
        <Route path="Projects" element={<Projects />}/>
        <Route path="Team" element={<Team />}/>
        <Route path="Profile" element={<Profile />}/>
        <Route path="Settings" element={<Settings />}/>
        <Route path="ForgotPassword" element={<ForgotPassword />}/>
        <Route path="Signup" element={<Signup />}/>
        <Route path="RecoverPassword" element={<RecoverPassword />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
