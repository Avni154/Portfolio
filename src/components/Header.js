import React from 'react';
import './css/Header.css';
import CTA from './CTA';
import myPic6 from './images/myPic6.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
        <div className='container headerContainer'>
        <h5>Hey there, it's</h5>
        <h1>Avni Shah</h1>
        <h5 className='text-light'>Computer Science Engineer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='headerPhoto'>
          <img src={myPic6} alt = "me"/>
        </div>
        <a href='#contact' className='headerScroll'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header