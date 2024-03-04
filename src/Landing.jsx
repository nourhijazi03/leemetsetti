import React from 'react';
import bac from "./Assets/bg.avif";
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';

//side images 
import s1 from "./Assets/SlideImages/s1.jpg";
import s2 from "./Assets/SlideImages/s2.jpg";
import s3 from "./Assets/SlideImages/s3.jpg";
import s4 from "./Assets/SlideImages/s4.jpg";
import s5 from "./Assets/SlideImages/s5.jpg";

  
  const fadeImages = [
    {
      url: s1,
      caption: 'First Slide'
    },
    {
      url: s2,
      caption: 'Second Slide'
    },
    {
        url: s3,
        caption: 'Second Slide'
      },
      {
        url: s4,
        caption: 'Second Slide'
      },
      {
        url: s5,
        caption: 'Second Slide'
      },
    
  ];
function Landing() {
  return (
    <div>
      <header className='w-full bg-blue-950 text-white h-[40px] flex justify-center items-center'>
       <h2 className='msg'> Ramadan Kareem</h2>
      </header>
      <div className='w-full h-screen bg-black bg-cover bg-no-repeat flex flex-col justify-center p-10'
      style={{ backgroundImage:`url(${bac})`}}>
        <h1 className='text-[100px] text-yellow-200'>Le2met Setti</h1>
        <p className='m-10 font-extrabold text-yellow-50 capitalize'>During the holy days of ramadan le2met setti presents special menu</p>

        <div className="slide-container w-[300px] h-[200px] mx-20">
      <Fade className='w-full h-full'>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%',height:'250px' }} src={fadeImage.url} className='rounded-xl w-full h-full' />
          </div>
        ))}
      </Fade>
        </div>
        
        
      </div>
    </div>
  )
}

export default Landing
