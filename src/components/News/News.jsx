import React from 'react'
import OwlCarousel from 'react-owl-carousel'

import CarouselItemCard from '../DesignComponents/CarouselItemCard'

const News = () => {
    const options = {
        items: 1,
        margin: -30,

        responsive: {
            530: {
                items: 2,
            },

            740: {
                items: 3,
                margin: 0,
            },

            866: {
                items: 4,
                margin: 0,
            },
        },
    }

    const CarouselItemCardProps = [
        ['05/11/2020', 'Сам себе клиннер! Проводим профессиональную очистку помещения при помощи строительного пылесоса bort.',
            'Вы знаете, что для того, чтобы полностью устранить из помещения все следы ремонта, не навредив при этом своему здоровью, нужно проводить профессиональную очистку?'],
        ['05/11/2020', 'Строительные пылесосы, пароочистители и многое другое. Что нужно для открытия клинингового бизнеса?',
            'Вы знаете, что для того, чтобы полностью устранить из помещения все следы ремонта, не навредив при этом своему здоровью, нужно проводить профессиональную очистку?'],
        ['05/11/2020', 'Почему важна чистота на заводе, как ее навести и как в этом поможет мойка высокого давления bort?',
            'Вы знаете, что для того, чтобы полностью устранить из помещения все следы ремонта, не навредив при этом своему здоровью, нужно проводить профессиональную очистку?'],
        ['05/11/2020', 'Как выбрать мойку высокого давления для автомобиля и помещения? В чем отличие?',
            'Вы знаете, что для того, чтобы полностью устранить из помещения все следы ремонта, не навредив при этом своему здоровью, нужно проводить профессиональную очистку?']
    ]
    const sortCarouselItemCardProps = CarouselItemCardProps.map((item, index) =>
        <CarouselItemCard key={index} dateCarouselItemCardProps={item[0]} titleCarouselItemCardProps={item[1]}
            infoCarouselItemCardProps={item[2]} />
    )
    return (
        <section className="news">
            <div className="grid-container">
                <h2 className="news__title">Новости компании / блог</h2>
                <OwlCarousel {...options} className="slide-category">
                    {sortCarouselItemCardProps}
                </OwlCarousel>
            </div>
        </section>
    )
}

export default News