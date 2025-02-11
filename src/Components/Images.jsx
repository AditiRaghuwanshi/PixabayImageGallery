import React, { useContext } from 'react'
import './Images.css';
import ImageGalleryContext from '../context/ImageGalleryContext'

const Images = () => {
   const {saveImg} =  useContext(ImageGalleryContext)
  return (
    <div className="container">

   
    <div className='flex'>

        {
            saveImg.map((gallery) => 
                <div key={gallery.id}>
                  <div className="item">
                <img src={gallery.largeImageURL} alt="image" />    
                    </div>  
                </div>
            )
        }
    </div>

    </div>
  )
}

export default Images