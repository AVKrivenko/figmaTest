import React from 'react'
import Vector from '../assests/Vector.svg'
import viber from '../assests/viber.svg'
import whatsapp from '../assests/whatsapp.svg'


export default function Foother() {
  return (
    <div className='foother-container'>
        <div className='foother'>
          <div className='foother-about'> <span>О компании</span>
            <p>Партнерская программа</p>
            <p>Вакансии</p>
          </div>
          <div className='foother-menu'> <span>Меню</span>
          <div className='foother-menu-widgets'>
            <div className='part1'>
            <p>Расчет стоимости</p>
            <p>Услуги</p>
            <p>Виджеты</p>
            <p>Интеграции</p>
            <p>Наши клиенты</p>
            </div>
            <div className='part2'>
            <p>Кейсы</p>
            <p>Благодарственные письма</p>
            <p>Сертификаты</p>
            <p>Блог на Youtube</p>
            <p>Вопрос/Ответ</p>
            </div>
            </div>

          </div>
          <div className='foother-contacts'> <span>Контакты</span>
          <p>+7 555 555-55-55</p>
          <div className='contacts-icons'>
                    <img src={Vector} alt=''/>
                    <img src={viber} alt=''/>
                    <img src={whatsapp} alt=''/>
                </div>
          <p>Москва, Путевой проезд 3с1, к 90</p>
          </div>
          </div>
          <div className='foother-down'>©WELBEX 2022. Все права защищены.<br/>
          <span>Политика конфиденциальности </span></div>
    </div>
  )
}
