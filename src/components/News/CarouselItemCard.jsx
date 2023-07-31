import React from 'react'

const CarouselItemCard = ({dateCarouselItemCardProps, titleCarouselItemCardProps, infoCarouselItemCardProps}) => {
    return (
        <div class="carousel-item card bort-news-card news__card">
            <span class="bort-news-card__date news__date">{dateCarouselItemCardProps}</span>
            <h3 class="bort-news-card__title news__card__title">
                {titleCarouselItemCardProps}
            </h3>
            <p class="bort-news-card__info news__info">
                {infoCarouselItemCardProps}
            </p>
            <a href="#" class="bort-news-card__link news__link">Подробнее</a>
        </div>
    )
}

export default CarouselItemCard