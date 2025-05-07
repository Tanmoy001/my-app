import React from 'react'
import './Client.css'
import map from '../../assets/map.png'
export const Client = () => {
  return (
    <section className='client-section container'>
      <div className='client-title'>
        <h2>Our Clients</h2>
        <p>Join our exclusive club of 1000+ digital agencies worldwide, from the bustling streets of the US to the charming<br/>corners of Ireland. We've got the secret sauce to skyrocket your agency's success, so sit back, relax, and let's make<br/> magic happen together!</p>
      </div>
      <div className='client-logo container'>
        <img src={map}alt="Client Logos" />
      </div>
    </section>
  )
}
