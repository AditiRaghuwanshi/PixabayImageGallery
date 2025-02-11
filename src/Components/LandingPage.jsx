// import './LandingPage.css';
// import image2 from '../assets/image2.png';
// import ImageGalleryContext from '../context/ImageGalleryContext';
// import { useContext } from 'react';

// const LandingPage = () => {
//   const [inputValue, setInputValue] = useState('');
//   const {searchImgByCategory, setQuery} = useContext(ImageGalleryContext);
//   const handleRefresh = () => {
//     window.location.reload(); // Refresh functionality
//   };

//   return (
//     <>
//       {/* Transparent Background Image */}
//       <div className="imagecover">
//         <img className="img" src={image2} alt="img" />
//       </div>

//       {/* Navbar */}
//       <div className="navbar">
//         <h1 onClick={handleRefresh}>
//           <span className="image">Image</span>
//           <span className="gallery">Gallery</span>
//         </h1>
//         <h2 className="login">Log in</h2>
//       </div>

//       {/* Input Box */}
//       <div className="input" onChange={(e)=>setQuery(e.target.value)}>
//         <input 
//           placeholder="Get your desired images"
//           type="text"
//         />
        
//         <div className='inline'>
//       < button onClick={() => searchImgByCategory("fashion") } className="btn">fashion</ button>
//         < button onClick={() => searchImgByCategory("nature")} className="btn">nature</ button>
//         < button onClick={() => searchImgByCategory("religion")} className="btn">religion</ button>
//         < button onClick={() => searchImgByCategory("places")} className="btn">places</ button>
//         < button onClick={() => searchImgByCategory("animals")} className="btn">animals</ button>
//         < button onClick={() => searchImgByCategory("computer")} className="btn">computer</ button>
//         < button onClick={() => searchImgByCategory("food")} className="btn">food</ button>
//         < button onClick={() => searchImgByCategory("travel")} className="btn">travel</ button>
//       </div>
       
        
//       </div>
      
//     </>
//   );
// };

// export default LandingPage;


import './LandingPage.css';
import image2 from '../assets/image2.png';
import ImageGalleryContext from '../context/ImageGalleryContext';
import { useContext, useState } from 'react';

const LandingPage = () => {
  const { searchImgByCategory, setQuery } = useContext(ImageGalleryContext);
  
  // State to manage the input value
  const [inputValue, setInputValue] = useState('');

  const handleRefresh = () => {
    window.location.reload(); // Refresh functionality
  };

  const handleSearch = (category) => {
    searchImgByCategory(category);
    setInputValue(''); // Clear the input field after the search
    setQuery(category); // Update the context query if needed
  };

  return (
    <>
      {/* Transparent Background Image */}
      <div className="imagecover">
        <img className="img" src={image2} alt="img" />
      </div>

      {/* Navbar */}
      <div className="navbar">
        <h1 onClick={handleRefresh}>
          <span className="image">Image</span>
          <span className="gallery">Gallery</span>
        </h1>
        <h2 className="login">Log in</h2>
      </div>

      {/* Input Box */}
      <div className="input">
        <input 
          placeholder="Get your desired images"
          type="text"
          value={inputValue} // Bind input value to state
          onChange={(e) => setInputValue(e.target.value)} // Update input value
        />

        <div className="inline">
          <button onClick={() => handleSearch("fashion")} className="btn">fashion</button>
          <button onClick={() => handleSearch("nature")} className="btn">nature</button>
          <button onClick={() => handleSearch("religion")} className="btn">religion</button>
          <button onClick={() => handleSearch("places")} className="btn">places</button>
          <button onClick={() => handleSearch("animals")} className="btn">animals</button>
          <button onClick={() => handleSearch("computer")} className="btn">computer</button>
          <button onClick={() => handleSearch("food")} className="btn">food</button>
          <button onClick={() => handleSearch("travel")} className="btn">travel</button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;



