import React from 'react'

import TextParagraph from '../TextParagraph/TextParagraph';

const Banner = () => {
    return (
        <section className="banner">
            <div className="grid-container">
                <div className="banner-wrapper">
                    <div onClick={() => window.open('/listing')} className="card banner-card banner-card_one">
                        <h2 className="banner__title">Лобзики электрические</h2>
                        <TextParagraph classTextParagraphProps='banner__info'
                            textTextParagraphProps='Также при выборе следует обратить внимание на такие
                            характеристики, как максимальная глубина пропила, скорость
                            резания.'/>
                        <div className="banner__arrow"></div>
                    </div>

                    <div onClick={() => window.open('/category')} className="card banner-card banner-card_two">
                        <h2 className="banner__title">Мойки высокого давления</h2>
                        <TextParagraph classTextParagraphProps='banner__info'
                            textTextParagraphProps='Мойки высокого давления подходят и для уборки животноводческих
                            помещений, складов.'/>
                        <div className="banner__arrow"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;