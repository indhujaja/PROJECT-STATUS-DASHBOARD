import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './UserReducer.jsx'

const store = configureStore({
  reducer:{
    user: UserReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
