import React from 'react'
import BannerImage from '../assets/banner.jpg'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}></div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>Deneme metni</p>
      </div>
    </div>
  )
}

export default About