import React from 'react'
import './About.css'
import about_one from '../../assets/about_one.png'
import about_two from '../../assets/about_two.png'
import about_three from '../../assets/about_three.png'
export const About = () => {
    return (
        <section className='about container' id='aboutus'>
            <div className='about-container'>
                <div className='about-container-one'>
                    <div className='about-container-one-left'>
                        <h1>About Us</h1>
                        <p>
                            Welcome to White L Agency, where creativity meets functionality!
                            We are known to be the top-notch Web Development, Digital Marketing and Advertising Agency around. Our team of experts is here to elevate your brand to new heights with cutting-edge web development, strategic digital marketing campaigns, and a captivating social media presence.
                            Need to boost your online visibility? Look no further than our Facebook Ads Service Google Ads Service and stunning Websites Designs. Understanding the ever-evolving digital landscape, we'll ensure your ads reach the right audience at the right time, maximizing your ROI and staying miles ahead of your competition.So whether you're a small business looking to make a big impact or a seasoned corporation aiming to stay ahead of the curve, trust White L Agency to deliver results that speak volumes. Let's make magic happen together!
                        </p>
                        <button className='button-two'>Get In Touch</button>
                    </div>
                    <div className='about-container-one-right'>
                        <img src={about_one} alt='about' className='about-image' />
                    </div>
                </div>
                <div className='about-container-two'>
                    <div className='about-container-two-right'>
                        <img src={about_two} alt='about' className='about-image' />
                    </div>
                    <div className='about-container-two-left'>

                        <h1><span className="underline-red">So, Why Us?</span></h1>
                        <p>
                            Well, picture this: You've got big dreams for your business, but you need the right team to bring them to life. That's where we come in. As the best web development, digital marketing, and advertising agency in the game, we've got the skills, creativity, and experience to take your brand to the next level. With our dedication and pursuit of excellence, we consistently exceed expectations. Choose us for an exceptional experience that propels your brand forward.
                            Web Health
                        </p>
                        <img src={about_three} alt='about' className='about-image' />
                    </div>
                </div>
            </div>
        </section>
    )
}
