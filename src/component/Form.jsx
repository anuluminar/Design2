import React from 'react'
 import './Form.css'
 
 function Form() {
   return (
    <>
    
    <div className='form-container'>
    
        <form>
        <div className='exp-date'>
                    <label htmlFor="">PHONE NUMBER</label>
                    <div className='phn-field'>
                        <input type="text"  placeholder='+91 India' />
                        <input type="text"  />
                    </div>
                </div>
            <div className='name-field'>
                <label htmlFor="name"> NAME</label>
                <input type="text" id='name' placeholder='' />
            </div>
            <div className='email-field'>
                <label htmlFor="number">EMAIL [OPTIONAL]</label>
                <input type="text" id='number' placeholder='' />
            </div>
           
            <div>
                <button>CONTINUE</button>
            </div>
        </form>
        <p className='mt-2 fs-6'>Get ready to receive a secret code [OTP] on your phone</p>
    </div>
</>
   )
 }
 
 export default Form