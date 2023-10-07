import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRouter from './Router/Router.jsx'
import AuthProvider from './components/Provider/AuthProvider'
import MyCarousel from './Pages/Home/Carusel/Carusel'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={myCreatedRouter}>
      <MyCarousel></MyCarousel>
    </RouterProvider></AuthProvider>
  </React.StrictMode>,
)
