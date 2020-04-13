import React from 'react'
import App from './App'
import { render } from '@testing-library/react'

describe('App', () => {
  it('runs and passes', () => {
    render(<App />)
  })
})
