import React from 'react'
import BannerImage from '../assets/banner.jpg'

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage: `url(${BannerImage})` }}></div>
      <div className='rightSide'>
        <h1>Bize Ulaşın</h1>
        <form id='contact-form'>
          <label htmlFor='name'>Ad</label>
          <input name='name' placeholder='İsim Giriniz' type='text' />
          <label htmlFor='email'>E-Mail</label>
          <input name='email' placeholder='E-Mail Giriniz' type='email' />
          <label htmlFor='message'>Mesaj</label>
          <textarea name='message' placeholder='Mesajınız..'></textarea>
          <button type='submit'>Gönder</button>
        </form>
      </div>
    </div>
  )
}

export default Contact