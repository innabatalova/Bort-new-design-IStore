import React from 'react'

const CarouselItemCard = ({dateCarouselItemCardProps, titleCarouselItemCardProps, infoCarouselItemCardProps}) => {
    return (
        <div className="carousel-item card bort-news-card news__card">
            <span className="bort-news-card__date news__date">{dateCarouselItemCardProps}</span>
            <h3 className="bort-news-card__title news__card__title">
                {titleCarouselItemCardProps}
            </h3>
            <p className="bort-news-card__info news__info">
                {infoCarouselItemCardProps}
            </p>
            <a href="#" className="bort-news-card__link news__link">Подробнее</a>
        </div>
    )
}

export default CarouselItemCard