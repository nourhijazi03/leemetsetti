import React from 'react';
import bac from "./Assets/bg.avif";
import bac1 from "./Assets/tall.jpg"
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import {MoonIcon} from "@heroicons/react/outline"

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
        <header className='w-full h-[30px] bg-blue-950 text-yellow-50 font-bold
        flex justify-center items-center'>
          <h2 className='msg flex text-[15px]'>
            <MoonIcon className='h-5 w-5 text-yellow-400'/>
            Ramadan Kareem
            <MoonIcon className='h-5 w-5 text-yellow-400'/>
            </h2>
            
        </header>

        <div 
        className="h-screen w-[100%] flex flex-col justify-start md:items-start items-center
        bg-[url('/src/Assets/tall.jpg')]
        md:bg-[url('/src/Assets/bg.avif')] bg-cover " >

          <h1 className=' font-semibold text-[40px] md:w-full md:text-center
          md:text-[77px] mainTitle'>Le2met Setti</h1>

          <p className=' capitalize text-[12px] font-semibold p-2 text-center md:m-10 
          md:text-[20px] text-white'>
            During the holy days of ramadan le2met setti presentes special menu</p>

          <div className="slide-container w-[250px] h-[250px] my-10 md:mx-10 md:my-20
            drop-shadow-2xl slide1">
      <Fade className='w-full h-full drop-shadow-2xl'>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%',height:'250px' }} src={fadeImage.url} 
            alt="Plate"className='rounded-[35px] w-full h-full' />
          </div>
        ))}
      </Fade>
        </div>
        </div>    
    </div>
  )
}

export default Landing
