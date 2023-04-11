import React from 'react'
import CTA from './CTA'
import ME from '../../assets/ape4.png'
import HeaderSocials from './HeaderSocials'
import "./Header.css"
const Header = () => {
  return (
    <header>
      <div className="container header_container" id='Home'>
        <h5>Hello I'm</h5>
        <h1>Asim Ali Khan</h1>
        <h5 className="text-light">I'm a Computer Science Student , a privacy advocate and a Machine Learning Enthusiast </h5>
        <h5 className='text-light-2'>I'm currently interning at an AI startup called ConverseNow as an Automation Engineer.</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href='#Contact' className = 'scroll__down'>Scroll to Bottom</a>


        </div>
    </header>
  )
}

export default Header