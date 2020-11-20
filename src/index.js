import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { AppProviders } from 'context'
import './bootstrap-app'

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
)
