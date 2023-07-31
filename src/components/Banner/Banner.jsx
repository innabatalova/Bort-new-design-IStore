import React from 'react'

const Banner = () => {
    return (
        <section class="banner">
            <div class="grid-container">
                <div class="banner-wrapper">
                    <div class="card banner-card banner-card_one">
                        <h2 class="banner__title">Лобзики электрические</h2>

                        <p class="banner__info">
                            Также при выборе следует обратить внимание на такие
                            характеристики, как максимальная глубина пропила, скорость
                            резания.
                        </p>
                        <div class="banner__arrow"></div>
                    </div>

                    <div class="card banner-card banner-card_two">
                        <h2 class="banner__title">Мойки высокого давления</h2>

                        <p class="banner__info">
                            Мойки высокого давления подходят и для уборки животноводческих
                            помещений, складов.
                        </p>
                        <div class="banner__arrow"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;