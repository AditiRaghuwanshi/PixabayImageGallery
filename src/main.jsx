import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ImageGalleryState from './context/ImageGalleryState.jsx'

createRoot(document.getElementById('root')).render(
  <ImageGalleryState>
    <App />
  </ImageGalleryState>
)
