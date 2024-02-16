import React from 'react'
import Form from './Form'
import homeImage from '../assets/celeb.png'
import Nav from './Nav'

function Home() {
    return (
        <div>
            <div>
                <Nav/>
            </div>
            <div className='container'>
            <div className='row'>
            <h1 >Unlock Exclusive Benefits</h1>
            </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6'></div>
                    <Form />
                </div>
                <div className='col-lg-6 col-md-6'>
                    <img src={homeImage} alt="" className='image-form' />
                    </div>
                </div>
            </div>

    )
}

export default Home