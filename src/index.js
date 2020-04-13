import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import DefaultErrorBoundary from './DefaultErrorBoundary'
import '@babel/polyfill'
import './styles.css'

if (process.env.NODE_ENV === 'development') {
  //  axe-core accessibility testing library. Results will show in the Chrome DevTools console.
  const axe = require('react-axe')
  console.log('dev mode')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)
