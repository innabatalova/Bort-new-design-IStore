import React from 'react'
import { useNavigate } from 'react-router-dom'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import TextParagraph from '../../components/TextParagraph/TextParagraph'
import Button from '../../components/DesignComponents/Button'

const Partners = () => {
  const breadcrumbListItemProps = [
    ['/main', 'onelevel-breadcrumb-nav', 'Главная'],
    ['#', 'onelevel-breadcrumb-nav onelevel-breadcrumb-nav-last', 'Наши партнеры']
  ]

  const navigate = useNavigate()
  const onBeDealer = () => { navigate('/be-dealer') }

  return(
    <main className="partners">
      <div className="grid-container">
        <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
        <div className="partners-wrapper">
          <div className="partners-info-wrapper">
            <h2 className="partners-title">Наши партнеры</h2>
            <TextParagraph classTextParagraphProps='partners-text'
              textTextParagraphProps='Мы используем передовые технологии производства и отточенные
              логистические цепочки поставок на рынки разных стран.
              Присоединяйтесь, мы уверены, что сможем найти подход, который
              поможет вам достичь ваших бизнес целей.'
            />
            <h3 className="partners-subtitle">
              Мы работаем с лучшими партнерами по всему миру:
            </h3>
            <h4 className="partners-country-title">Беларусь</h4>
            <div className="partners-country-block"></div>
          </div>
          <div className="partners-board-wrapper">
            <div className="partners-board-desk">
              <h4 className="partners-board-title">Будьте нашим партнером!</h4>
              <TextParagraph classTextParagraphProps='partners-board-text'
                textTextParagraphProps='Компания Bort Global имеет обширную дилерскую сеть на территории
                Российской Федерации и за рубежом. Мы заинтересованы в её
                развитии и приглашаем московские и региональные организации к
                долгосрочному и взаимовыгодному сотрудничеству.'
              />
              <Button clickDesignButtonProps={onBeDealer}  classDesignButtonProps='orange' classSizeButtonProps='45'
                classButtonProps='partners-board-button' titleButtonProps='Стать дилером'/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Partners