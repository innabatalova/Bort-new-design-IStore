import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';

import MenuArrow from '../../../static/image/menu-arrow.svg'

const Filters = () => {
  const BortSlider = styled(Slider)({
    color: '#D9760F',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      }
    },
    '& .MuiSlider-rail': {
      backgroundColor: '#B9B9B9',
    },
    '& .MuiSlider-valueLabel': {
      display: 'none'
    },
  });

  const [filterStock, setFilterStock] = useState('open')
  const openFilterStock = () => {
    filterStock === '' ? setFilterStock('open') : setFilterStock('')
  }
  const [filterPrice, setFilterPrice] = useState('open')
  const openFilterPrice = () => {
    filterPrice === '' ? setFilterPrice('open') : setFilterPrice('')
  }
  const [filterWeight, setFilterWeight] = useState('')
  const openFilterWeight = () => {
    filterWeight === '' ? setFilterWeight('open') : setFilterWeight('')
  }
  const [filterPower, setFilterPower] = useState('open')
  const openFilterPower = () => {
    filterPower === '' ? setFilterPower('open') : setFilterPower('')
  }

  return (
    <>
      <div className="filter">
        <div className="filter__title" onClick={openFilterStock}>
          <span className="filter__name">Наличие</span>
          <img className={`filter__arrow filter__arrow_` + filterStock} src={MenuArrow} />
        </div>
        <div className={`filter__content filter__content_` + filterStock}>
          <input type="checkbox" className="bort-checkbox filter-checkbox" id="stockCheck" />
          <label for="stockCheck" className="bort-checkbox-label filter-checkbox-label">В наличии</label>
        </div>
      </div>
      <div className="filter">
        <div className="filter__title" onClick={openFilterPrice}>
          <span className="filter__name">Цена</span>
          <img className={`filter__arrow filter__arrow_` + filterPrice} src={MenuArrow} />
        </div>
        <div className={`filter__content filter__content_` + filterPrice}>
          <div className="filter-slider">
            <div className="filter-slider__values">
              <div className="filter-slider__field">600 ₽</div>
              <div className="filter-slider__dash"></div>
              <div className="filter-slider__field">19 190 ₽</div>
            </div>
            <div className="filter-slider__bar">
              <BortSlider
                defaultValue={[0, 90]}
              />
              <div className="filter-slider__bar_price">
                <span>600 ₽</span>
                <span>19 190 ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filter">
        <div className="filter__title" onClick={openFilterWeight}>
          <span className="filter__name">Вес изделия, кг</span>
          <img className={`filter__arrow filter__arrow_` + filterWeight} src={MenuArrow} />
        </div>
        <div className={`filter__content filter__content_` + filterWeight}>
          <input type="checkbox" className="bort-checkbox filter-checkbox" id="Weight1" />
          <label for="Weight1" className="bort-checkbox-label filter-checkbox-label">16.8 кг</label>
          <input type="checkbox" className="bort-checkbox filter-checkbox" id="Weight2" />
          <label for="Weight2" className="bort-checkbox-label filter-checkbox-label">8 кг</label>
          <input type="checkbox" className="bort-checkbox filter-checkbox" id="Weight3" />
          <label for="Weight3" className="bort-checkbox-label filter-checkbox-label">3.25 кг</label>
          <input type="checkbox" className="bort-checkbox filter-checkbox" id="Weight4" />
          <label for="Weight4" className="bort-checkbox-label filter-checkbox-label">0.56 кг</label>
        </div>
      </div>
      <div className="filter">
        <div className="filter__title" onClick={openFilterPower}>
          <span className="filter__name">Потребляемая мощность, Вт</span>
          <img className={`filter__arrow filter__arrow_` + filterPower} src={MenuArrow} />
        </div>
        <div className={`filter__content filter__content_` + filterPower}>
          <input type="checkbox" className="bort-checkbox filter-checkbox" id="Power1" />
          <label for="Power1" className="bort-checkbox-label filter-checkbox-label">1 600</label>
          <input type="checkbox" className="bort-checkbox filter-checkbox" id="Power2" />
          <label for="Power2" className="bort-checkbox-label filter-checkbox-label">1 900</label>
          <input type="checkbox" className="bort-checkbox filter-checkbox" id="Power3" />
          <label for="Power3" className="bort-checkbox-label filter-checkbox-label">2 000</label>
          <input type="checkbox" className="bort-checkbox filter-checkbox" id="Power4" />
          <label for="Power4" className="bort-checkbox-label filter-checkbox-label">2 300</label>
        </div>
      </div>
    </>
  )

}

export default Filters