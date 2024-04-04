import React, { useState }  from 'react'
//import { Link } from 'react-router-dom'
import rnp_icon from './rnp-log.png'
//import RecoverPassword from './RecoverPassword'
import { useNavigate } from 'react-router-dom'
function ForgotPassword() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState ({
    
    
      email:''
    })
  
    const [errors, setErrors] = useState({
  
    })
  
    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData({
        ...formData, [name] : value
      })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const validationErrors = {}
      
      
      if(!formData.email.trim()){
        validationErrors.email = "email is required"
      } else if (!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "email is not valid"
      }
      
  
      setErrors(validationErrors)
      if(Object.keys(validationErrors).length === 0){
        alert("Got to reset password");
        navigate('/RecoverPassword');
        //window.location.href = '/team';
        //window.open("/login");
        //onClick={() => navigate("/RecoverPassword")}
      }
  
    }

  return (
    
<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 div1" >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-40 w-auto"
            src={rnp_icon}
            alt="Your Company"
          />
          <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">            	
            Please enter your email to search for your account.
          </h1>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  //type="email"
                  autoComplete="email"
                  //required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
              </div>
            </div>

            <div>
              <button 
                type="submit" 
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Search
              </button>
            </div>
          </form>

          
        </div>
      </div>
  )
}

export default ForgotPassword
