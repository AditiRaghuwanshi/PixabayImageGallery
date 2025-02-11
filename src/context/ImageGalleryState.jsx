import React, { useEffect, useState } from 'react'
import ImageGalleryContext from './ImageGalleryContext'

const ImageGalleryState = (props) => {


    const[saveImg, setSaveImg] = useState([]);
    const[query, setQuery] = useState('yellow+flowers');

    const key = "48086101-b3fb4e16561cdd23932d9b5e7"

    useEffect(() => { 
        const image = async () => {
            const api = await fetch(
                `https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo&pretty=true&per_page=100`
                );
            const data = await api.json();
            console.log(data.hits);
            setSaveImg(data.hits);
        }
       
       image();
    },[query]);


    const searchImgByCategory = async (cat) => {

        const api = await fetch(
            `https://pixabay.com/api/?key=${key}&category=${cat}&image_type=photo&pretty=true&per_page=100`
            );
        const data = await api.json();
        console.log(data.hits);
        setSaveImg(data.hits);
    
    }

    searchImgByCategory('');
    
  return (
    <ImageGalleryContext.Provider 
    value={{saveImg, searchImgByCategory, setQuery}}>{props.children}
    </ImageGalleryContext.Provider>
  )
}

export default ImageGalleryState

















// import { useEffect, useState } from "react";
// import ImageGalleryContext from "./ImageGalleryContext";


// const ImageGalleryState = (props) => {
//        const[save, setSave] =  useState([]);
//     useEffect(() => {

//         const gallery = async () => {
//             const api = await fetch("");
//             const response = api.json();
//             console.log(response);
//             setSave(response.gallery);
//         }

//         gallery();

//     }, []);
//   return (
//     <div>


//     <ImageGalleryContext.Provider value={{save}}>
//         {props.children}


//     </ImageGalleryContext.Provider>

//     </div>
//   )
// }

// export default ImageGalleryState


