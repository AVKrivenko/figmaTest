import React from 'react'

export default function Section() {
  return (
    <div>
        <div className='section'>
            <div className='section-right'>
                <p className='right_text-large'>Зарабатывайте <br/> больше
               <br/><span> c WELBEX</span></p>
                <p className='right_text-mini'>Развиваем и контролируем <br/>продажи за вас</p>
            </div>
        <div className='section-left'>
            <p className='left_text'>Вместе с <span>бесплатной<br/> консультацией </span> мы дарим: </p>
            <div className='left_grids'>
                <div className='grids'>
                    <div className='grids-line'></div>
                    ВИДЖЕТЫ
                    <p>30 готовых <br/>решений</p>
                </div>
                <div className='grids'>
                <div className='grids-line'></div>
                Dashboard
                    <p>с показателями<br/>
                    вашего бизнеса</p>
                </div>
                <div className='grids'>
                <div className='grids-line'></div>
                Skype Аудит
                    <p> отдела продаж <br/>и CRM системы</p>
                </div>
                <div className='grids'>
                <div className='grids-line'></div>
                35 дней
                    <p>использования<br/>CRM</p>
                </div>
            </div>
            <button>Получить консультацию</button>
        </div>
        </div>
    </div>
  )
}
