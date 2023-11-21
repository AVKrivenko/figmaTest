import React from 'react'
import logo from '../assests/logo.png'
import Vector from '../assests/Vector.svg'
import viber from '../assests/viber.svg'
import whatsapp from '../assests/whatsapp.svg'


export default function Header() {
  return (
    <div>
        <div className='header'>
            <div className='logo'>
                <div className='logo-image'>
                    <img src={logo}alt=''/>
                </div>
                 <div className='logo-text'>крупный интегратор CRM <br/>в Росcии и ещё 8 странах</div> 
            </div>
            <div className='menu '>
                <p >Услуги</p>
                <p>Виджеты</p>
                <p>Интеграции</p>
                <p>Кейсы</p>
                <p className='hidden'>Сертификаты</p>
            </div>
            <div className='contacts'>
                <p className='contacts-number'>+7 555 555-55-55</p>
                <div className='contacts-icons'>
                    <img src={Vector} alt=''/>
                    <img src={viber} alt=''/>
                    <img src={whatsapp} alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}
