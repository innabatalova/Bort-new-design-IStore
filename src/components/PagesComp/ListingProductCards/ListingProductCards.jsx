import React from 'react'

import ListingProductCardItem from './ListingProductCard'

import ListingCardOne from '../../../static/listing_image/listing-card-one.jpg'
import ListingCardTwo from '../../../static/listing_image/listing-card-two.jpg'
import ListingCardThree from '../../../static/listing_image/listing-card-three.jpg'
import ListingCardFour from '../../../static/listing_image/listing-card-four.jpg'

const ListingProductCards = () => {
    const listingProductCardItemProps = [
        [ListingCardOne, 'BLK-250D-LI', 'КОМПРЕССОР АВТОМОБИЛЬНЫЙ BLK-250D-LI'],
        [ListingCardTwo, 'BTK-82', 'НАБОР РУЧНОГО ИНСТРУМЕНТА BTK-82'],
        [ListingCardOne, 'BLK-250D-LI', 'КОМПРЕССОР АВТОМОБИЛЬНЫЙ BLK-250D-LI'],
        [ListingCardThree, 'BWS-18LI-125', 'МАШИНА ШЛИФОВАЛЬНАЯ УГЛОВАЯ АККУМУЛЯТОРНАЯ BWS-18LI-125'],
        [ListingCardFour, 'BOF-1080N', 'ФРЕЗЕР ЭЛЕКТРИЧЕСКИЙ BOF-1080N'],
        [ListingCardOne, 'BLK-250D-LI', 'КОМПРЕССОР АВТОМОБИЛЬНЫЙ BLK-250D-LI'],
        [ListingCardTwo, 'BTK-82', 'НАБОР РУЧНОГО ИНСТРУМЕНТА BTK-82'],
        [ListingCardThree, 'BWS-18LI-125', 'МАШИНА ШЛИФОВАЛЬНАЯ УГЛОВАЯ АККУМУЛЯТОРНАЯ BWS-18LI-125'],
        [ListingCardFour, 'BOF-1080N', 'ФРЕЗЕР ЭЛЕКТРИЧЕСКИЙ BOF-1080N']
    ]
    const sortListingProductCardItemProps = listingProductCardItemProps.map((item, index) =>
        <ListingProductCardItem key={index} imgListingProductCardItemProps={item[0]} altListingProductCardItemProps={item[1]}
        titleListingProductCardItemProps={item[2]} />
    )

    return (
        <section className="listing-product-cards">

            <div className="grid-container">

                <div className="listing-product-cards-wrapper">
                    {sortListingProductCardItemProps}
                </div>

                <p className="listing-product-info">
                    Аккумуляторная дрель-шуруповерт поможет быстро открутить и закрутить
                    гайки, винты, саморезы и прочий крепеж. Безударные модели работают с
                    деревом, пластиком, гипсокартном, а для работы с твердыми материалами,
                    такими как камень, бетон или кирпичная кладка, подойдут ударные
                    дрель-шуруповерты. Использование аккумулятора в качестве источника
                    питания обеспечивает мобильность и автономность. С таким инструментом
                    можно работать в поле, на улице, при выключенном электричестве.
                    Компания Bort выпускает широкий ассортимент аккумуляторных
                    дрелей-шуруповертов с различными техническими характеристиками, что
                    позволит подобрать оптимальную модель, исходя из решаемых задач. Так,
                    шуропуверт с максимальным крутящим моментом 50 Нм позволит вкручивать
                    даже очень большие болты, в то время как модели с крутящим моментом
                    30–35 Нм подойдут для большинства типовых задач. Аккумуляторные
                    дрели-шуруповерты Bort обладают современными функциями, такими как
                    реверс, быстрозажимной патрон, подсветка рабочей зоны, 2 скорости
                    работы.
                </p>

            </div>
        </section>
    )
}

export default ListingProductCards