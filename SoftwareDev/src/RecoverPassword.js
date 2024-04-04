import React, { useState } from 'react'
import rnp_icon from './rnp-log.png'
import { Link } from 'react-router-dom'
function RecoverPassword() {
  const [formData, setFormData] = useState ({
    
    password: '',
    confirmPassword:''
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
    
    if(!formData.password.trim()){
      validationErrors.password = "password is required"
    } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)){
      validationErrors.password = "Password must contain at least one number, one uppercase and lowercase letter, a symbol and at least 8 or more characters"
    }
    if (formData.confirmPassword !== formData.password){
      validationErrors.confirmPassword = "password not matched"
    }

    setErrors(validationErrors)
    if(Object.keys(validationErrors).length === 0){
      alert("Password reset successfully")
      window.open('/login')
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
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Reset your password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>

            <div>             
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  New Password
                </label>                
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  //required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
              </div>
            </div>

            <div>             
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Comfirm Password
                </label>                
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  //required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Reset
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/Login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
  )
}

export default RecoverPassword
