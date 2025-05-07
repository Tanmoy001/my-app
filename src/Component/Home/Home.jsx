import React from 'react'
import home from '../../assets/home.png'
import './Home.css'
const Home = () => {
    return (
        <section className='home container' id='home'>
            <div className='home-container '>
                <div className='home-container-left'>
                    <div className='home-container-left-content'>
                        <h1>Tailored White Label Solutions</h1>
                        <h1> for Digital &nbsp;<span className="underline-red">Success.</span></h1>
                        
                        <p>A top-tier Best Digital Marketing and Website Design Company that serves as your reliable coding partner, offering solutions to your business challenges and providing ongoing support for your long-term success. With a comprehensive range of web development, Digital advertising and Social media marketing expertise, we're here to manage your projects, freeing you to concentrate on growing your business.</p>
                    </div>
                    <div className='home-container-left-button'>
                        <button className='button-two'>Get In Touch</button>
                        <button className='button-one'>Get In Touch</button>
                    </div>
                </div>
                <div className='home-container-right'>
                    <img src={home} alt='home' className='home-image' />
                </div>
            </div>
        </section>
    )
}

export default Home