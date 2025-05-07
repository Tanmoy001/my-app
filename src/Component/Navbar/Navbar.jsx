import React, { useState } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
    const [active, setActive] = useState('Home');
    return (
        <div className='Navbar container'>
            <div className='Navbar-container '>
                <div className='navbar-container-left'>
                    <div className='Navbar-logo'>
                        <img src={logo} alt='logo' className='Navbar-logo-image' />
                        <h3><span>White &nbsp;</span>L</h3>
                    </div>
                    <div className='Navbar-links'>
                        <a
                            href='#home'
                            className={active === 'Home' ? 'active' : ''}
                            onClick={() => setActive('Home')}
                        >
                            Home
                        </a>
                        <a
                            href='#aboutus'
                            className={active === 'About Us' ? 'active' : ''}
                            onClick={() => setActive('About')}
                        >
                            About
                        </a>
                        <a
                            href='#service'
                            className={active === 'Service' ? 'active' : ''}
                            onClick={() => setActive('Services')}
                        >
                            Services
                        </a>
                        <a
                            href='#ourwork'
                            className={active === 'ourwork' ? 'active' : ''}
                            onClick={() => setActive('ourwork')}
                        >
                            Our Work
                        </a>
                        <a
                            href='#contanctus'
                            className={active === 'contanctus' ? 'active' : ''}
                            onClick={() => setActive('contancus')}
                        >
                            Contanct Us
                        </a>
                    </div>
                </div>
                <div className='navbar-container-right'>

                    <div className='Navbar-button'>
                        <button className='button-one'>Get A Conversation</button>
                        <button className='button-two'>Get A Quote</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Navbar