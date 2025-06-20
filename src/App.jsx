import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import image1 from '../src/assets/images/image1.png'
import image2 from '../src/assets/images/image2.png'
import image3 from '../src/assets/images/image3.png'
import lisa from '../src/assets/images/lisa.png'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import './App.css'
import Header from './components/Header'
import Page4 from './components/Page4'
import Footer from './components/Footer'
function App() {


  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <div className="md:flex md:gap-[60px] md:flex-row sm:flex sm:flex-col justify-center items-center  md:pl-[20px] md:pr-[0px] pl-[20px] pr-[20px]">
          <div className="flex flex-col md:gap-[60px] sm:flex sm:flex-col sm:gap-[30px] w-full md:w-1/2 lg:pl-[150px] pl-[0px] pt-[80px]">
            <div className="flex flex-col gap-[20px]">
              <h1 className="font-stolzl sm:inline-flex sm:items-center md:text-[34px] lg:text-[44px] text-[32px]">
                Erfolgreich auf Etsy verkaufen – mit digitalen Produkten und POD 🚀
              </h1>
              <h3 className='font-stolzl text-[16px] text-black font-normal'>Ich zeige dir, wie du Produkte findest, die sich verkaufen – und einen Etsy-Shop aufbaust, der Kunden begeistert.</h3>
              <button className="self-start inline-block w-auto text-white bg-[#FF6109] rounded-[10px] px-[20px] py-[10px] font-stolzl text-[16px]">
                Los gehts!
              </button>
            </div>

            <div className="flex flex-col gap-[16px] pb-[50px]">
              <h2 className="text-[24px]">Bekannt durch</h2>
              <div className="flex  flex-wrap gap-[40px]">
                <img className="w-[79px] h-[25px]" src={image1} alt="img1" />
                <img className="w-[79px] h-[25px]" src={image2} alt="img2" />
                <img className="w-[79px] h-[25px]" src={image3} alt="img3" />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img className="w-full h-auto object-contain" src={lisa} alt="person" />
          </div>
        </div>

      </main>
      <Page1 />
      <Page2 />
      <Page3/>
      <Page4/>
      <Footer/>

    </>
    // </div>
  )
}

export default App
