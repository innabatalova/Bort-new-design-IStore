import React from 'react'
import { createRoot } from 'react-dom/client';
import store from '../src/store/store'
import { Provider } from 'react-redux'

import "./js/guarantee"
import "./js/news-view"
import "./js/paralla"
import "./js/partners"
import "./js/product-card"
import "./js/main"
import "./js/index"

import "../css/foundation.scss"
import "../css/highlight.scss"
import "../css/owl.carousel.min.scss"
import "../css/owl.theme.default.min.scss"
import "../css/owl.theme.green.scss"
import './scss/style.scss'

import LayoutBlock from "./LayoutBlock"

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <LayoutBlock />
  </Provider>
);



