import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/banner.jpg'

function Home() {
  return (
    // AltGR ve virgül işareti ile ters tırnak yapılıyor. JSX kodlarına alttaki satırdaki gibi style verilirken ters tırnaklar koyuluyor! //
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>  
      <div className='headerContainer'>
        <h1>Burger Lezzet</h1>
        <p>Lezzetli Hamburgerler<br></br> Burger Lezzet'te</p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home