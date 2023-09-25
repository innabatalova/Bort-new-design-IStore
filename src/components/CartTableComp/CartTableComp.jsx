import React, { useEffect, useState } from 'react'

import CountPlus from '../../static/image/plus-circle.svg'
import CountMinus from '../../static/image/minus-circle.svg'

const CartTableComp = ({ imgCartTableCompProps, nameCartTableCompProps, codeCartTableCompProps, priceCartTableCompProps, stockCartTableCompProps }) => {

  const [stock, setStock] = useState(stockCartTableCompProps)
  const [sum, setSum] = useState((priceCartTableCompProps * stockCartTableCompProps))

  const incStock = () => {
    setStock(Number(stock) + 1)
  }
  const decStock = () => {
    stock === 0 ? setStock(0) : setStock(Number(stock) - 1)
  }

  useEffect(() => {
    setSum((priceCartTableCompProps * stock))
  });

  return (
    <div className="cart-table__comp">
      <div className="cart-table__comp__item">
        <img src={imgCartTableCompProps} className="cart-table__comp__img" alt={nameCartTableCompProps} />
        <div className="cart-table__comp__text">
          <span className="cart-table__comp__name">{nameCartTableCompProps}</span>
          <span className="cart-table__comp__code">Артикул: {codeCartTableCompProps}</span>
        </div>
      </div>
      <div className="cart-table__comp__item">{priceCartTableCompProps} ₽</div>
      <div className="cart-table__comp__item cart-table__comp__item_three">
        <img src={CountMinus} className="cart-table__comp__count" onClick={decStock} />
        <span className="cart-table__comp__stock">{stock}</span>
        <img src={CountPlus} className="cart-table__comp__count" onClick={incStock} />
      </div>
      <div className="cart-table__comp__item cart-table__comp__item_four">{sum} ₽</div>
    </div>
  )
}

export default CartTableComp