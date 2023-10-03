import React from 'react'
import { useNavigate } from 'react-router-dom'

const RoutesProject = () => {
  const navigate = useNavigate()

  const onMain = () => { navigate('/main') }
  const onCategory = () => { navigate('/category') }
  const onListing = () => { navigate('/listing') }
  const onProductCard = () => { navigate('/product-card') }
  const onAboutCompany = () => { navigate('/about-company') }
  const onPolitics = () => { navigate('/politics') }
  const onGuarantee = () => { navigate('/guarantee') }
  const onContacts = () => { navigate('/contacts') }
  const onProfiles = () => { navigate('/profiles') }
  const onOrders = () => { navigate('/orders') }
  const onCart = () => { navigate('/cart') }
  const onCheckout = () => { navigate('/checkout') }
  const onRegistration = () => { navigate('/registration') }
  const onFeedback = () => { navigate('/feedback') }
  const onShippingAndPayment = () => { navigate('/shipping-and-payment') }
  const onNewsPreview = () => { navigate('/news-preview') }
  const onNewsView = () => { navigate('/news-view') }


  return (
    <div className="routes-project">
      <div className="grid-container">
        <ul>
          <li onClick={onMain} className="routes-project__item">Главная страница</li>
          <li onClick={onCategory} className="routes-project__item">Категория товаров</li>
          <li onClick={onListing} className="routes-project__item">Листинг товаров</li>
          <li onClick={onProductCard} className="routes-project__item">Карточка товара</li>
          <li onClick={onAboutCompany} className="routes-project__item">О компании</li>
          <li onClick={onPolitics} className="routes-project__item">Политика конфиденциальности</li>
          <li onClick={onGuarantee} className="routes-project__item">Гарантия</li>
          <li onClick={onContacts} className="routes-project__item">Контакты</li>
          <li onClick={onProfiles} className="routes-project__item">Учетная запись</li>
          <li onClick={onOrders} className="routes-project__item">Заказы</li>
          <li onClick={onCart} className="routes-project__item">Корзина</li>
          <li onClick={onCheckout} className="routes-project__item">Оформление заказа </li>
          <li onClick={onRegistration} className="routes-project__item">Регистрация</li>
          <li onClick={onFeedback} className="routes-project__item">Обратная связь</li>
          <li onClick={onShippingAndPayment} className="routes-project__item">Доставка и оплата</li>
          <li onClick={onNewsPreview} className="routes-project__item">Список новостей</li>
          <li onClick={onNewsView} className="routes-project__item">Новость</li>
        </ul>
      </div>
    </div>
  )
}

export default RoutesProject