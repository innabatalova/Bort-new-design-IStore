import React from 'react'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

import AboutCompanyImgOne from '../../static/image/about-company-one.jpg'
import AboutCompanyImgTwo from '../../static/image/about-company-two.jpg'
import AboutCompanyImgThree from '../../static/image/about-company-three.jpg'

const AboutCompany = () => {
    const breadcrumbListItemProps = [
        ['index', 'onelevel-breadcrumb-nav', 'Главная'],
        ['about-company', 'onelevel-breadcrumb-nav onelevel-breadcrumb-nav-last', 'О компании']
    ]

    return (
        <main className="about-company">
            <div className="grid-container">
                <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps}/>
                <div className="about-company-wrapper">
                    <div className="about-company-info-wrapper">
                        <h2 className="about-company-title">О компании</h2>
                        <span className="media-title-line"></span>
                        <div className="about-company__info__block">
                            <p>
                                Международная группа компаний « Bort Global» – один из успешных
                                игроков российского рынка электроинструмента, который один из
                                немногих удачно реализует свою продукцию под торговой маркой
                                Bort в Европе, странах ближнего и дальнего зарубежья, городах
                                России.
                            </p>
                            <p>
                                Представительства компании находятся в нескольких странах:
                                Москва - Россия, Германия и Гонконг. Крупный и основной склад
                                группы компаний находится в столице Латвии – Риге. История
                                холдинга уходит своими корнями в далекий 1996 год. Первоначально
                                компания создавалась под именем SBM Group.
                            </p>
                            <p>
                                В первые годы основной деятельностью холдинга была продажа
                                стройматериалов и электроинструментов во многие страны мира. В
                                течение небольшого срока SBM Group, насчитывающая несколько
                                человек по тем временам, разрастается до успешной компании на
                                рынке электроинструментов.
                            </p>
                            <p>
                                Торговая марка Bort появилась на рынке электроинструментов
                                России в 2001 году. Как известно, это время характеризуется
                                очень активным ростом рынка электроинструмента, что благополучно
                                сказывается на развитии широкого ассортимента компании. Начинают
                                появляться разные модификации инструментов: дрели, перфораторы,
                                пилы, лобзики, углошлифовальные машины, сварочные аппараты.
                            </p>
                        </div>
                        <div className="about-company__info__image">
                            <img
                                src={AboutCompanyImgOne}
                                alt="about-company picture"
                                className="about-company__info__img"
                            />
                            <img
                                src={AboutCompanyImgTwo}
                                alt="about-company picture"
                                className="about-company__info__img"
                            />
                        </div>
                        <div className="about-company__info__block">
                            <p>
                                В 2006 году компания разрабатывает собственный дизайн для всей
                                линейки электроинструментов, который находит одобрение у
                                потребителей.
                            </p>
                            <p>
                                В 2012 году принимается решение о реорганизации холдинга SBM
                                group в международную компанию Bort Global.
                            </p>
                            <p>
                                Тенденции рынка в 2015 году, обусловленные повышением объемов
                                продаж и интенсивным спросом на продукцию, диктуют новые этапы
                                развития для международной компании. В этом году появляется
                                новая линейка продукции – клининговая техника. Разрабатываются
                                первые модели хозяйственных, промышленных и строительных
                                пылесосов.
                            </p>
                            <p>
                                В 2017 году появляется новая линейка в группе товаров – eXtreme
                                серия.
                            </p>
                            <p>
                                Серия отличается повышенной эргономичностью и надежностью
                                изделий. В ассортимент линейки входят товары, пользующиеся
                                большой популярностью и включают в себя аккумуляторные
                                инструменты, перфораторы, углошлифовальные машины и другие
                                электроинструменты.
                            </p>
                            <p>
                                На сегодняшний день Bort Global — одна из ведущих компаний на
                                рынке электроинструментов и представляет широкий ассортимент
                                высококачественных товаров для полупрофессионального и бытового
                                применения в сфере электрооборудования, клининговой техники,
                                автомобильных товаров и товаров для сада.
                            </p>
                            <p>
                                С момента основания команда Bort Global преследует главные цели
                                - доступность, эргономичность и качество инструментов,
                                создаваемых для вас и вашего бизнеса.
                            </p>
                        </div>
                        <div className="about-company__info__image">
                            <img
                                src={AboutCompanyImgThree}
                                alt="about-company picture"
                            />
                        </div>
                        <div className="about-company__info__block">
                            <p>
                                Постоянно улучшается качество моделей и их эргономичность.
                                Инженеры офиса Bort Global в Германии разрабатывают и
                                совершенствуют технические показатели каждой группы товаров,
                                испытывают модель на стендах при максимальной нагрузке, а
                                специалисты нашего головного офиса в Гонконге, заботятся о 100%
                                проверке заказов, что свидетельствует о качестве сервиса.
                            </p>
                            <p>
                                Комплексный подход и грамотный менеджмент позволяют осуществлять
                                доставку товара на самых выгодных для клиента условиях. На
                                предприятиях внедрена система ISO 9001. В новые разработки и
                                усовершенствование существующих ассортиментных групп постоянно
                                вкладываются средства. Компания старается предоставлять своим
                                клиентам необходимый товар с качественными характеристиками, по
                                доступной цене и организовывать оптимальный сервис. В нашем
                                понимании, сервис – это не только гибкая система скидок,
                                логистика, но и качественное гарантийное и постгарантийное
                                обслуживание.
                            </p>
                            <p>
                                На каждый инструмент ТМ Bort распространяется стандартная
                                гарантия – 2 года и расширенная гарантия - до 5 лет.
                            </p>
                            <p>
                                Разветвленная сеть авторизованных сервисных центров, более 550
                                объектов по всему миру и 700 дилеров, позволяют оперативно
                                выполнять ремонт инструмента в любом регионе и обеспечивают
                                бесперебойные поставки товара в любую точку мира.
                            </p>
                            <p>
                                За время существования компании был пройден нелегкий путь, на
                                котором было немало сложностей. Благодаря доверию покупателей,
                                партнеров и нашему труду, было произведено и осуществлено
                                поставок более чем на 29 миллионов единиц разнообразного
                                инструмента.
                            </p>
                            <p>
                                Изделия под торговыми марками Bort Global получили известность и
                                признание во всем мире.
                            </p>
                        </div>
                    </div>
                    <div className="dealer-wrapper">
                        <div className="dealer-board">
                            <h3 className="dealer-board-title">Будьте нашим партнером!</h3>
                            <p className="dealer-board-info">
                                Компания Bort Global имеет обширную дилерскую сеть на территории
                                Российской Федерации и за рубежом. Мы заинтересованы в её
                                развитии и приглашаем московские и региональные организации к
                                долгосрочному и взаимовыгодному сотрудничеству.
                            </p>
                            <button
                                className="bort-button-orange45 dealer-board-button be-dealer-button-link">
                                Стать дилером
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutCompany