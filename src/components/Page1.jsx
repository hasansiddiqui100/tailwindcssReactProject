import React from "react";
import frame from "../assets/images/frame.png";
import frame4 from "../assets/images/frame4.png";
import frame2 from "../assets/images/frame2.png";
import frame3 from "../assets/images/frame3.png";
import pic from "../assets/images/starStruck.png";
function Page1() {
  return (
    <div className="flex flex-col pt-[50px] px-[20px] justify-center items-center  md:py-[50px] gap-[50px]">
      <h1 className="font-stolzl text-[32px] pb-[50px] text-center">
        Steckst du hier fest?
      </h1>
      <div className="flex flex-wrap gap-[40px] justify-center items-center">
        <div className="relative  w-full md:w-[255px] font-stolzl text-[16px] flex flex-col items-center text-center">
          <img src={frame} className="mb-[30px]" alt="" />
          <h3>
            Du willst auf Etsy starten – aber weißt nicht, was du verkaufen
            sollst?
          </h3>
        </div>
        <div className="relative w-full md:w-[255px] font-stolzl text-[16px] flex flex-col items-center text-center">
          <img src={frame4} alt="" className="mb-[30px]"/>
          <h3>Dein Shop ist online, aber die Verkäufe bleiben aus?</h3>
        </div>
        <div className="relative w-full md:w-[255px] font-stolzl text-[16px] flex flex-col items-center text-center">
          <img src={frame2} alt="" className="mb-[30px]"/>
          <h3>Statt Seite 1 landen deine Produkte irgendwo im Etsy-Nirwana?</h3>
        </div>
        <div className="relative w-full md:w-[255px] font-stolzl text-[16px] flex flex-col items-center text-center">
          <img src={frame3} alt="" className="mb-[30px]" />
          <h3>
            Du willst auf Etsy starten – aber weißt nicht, was du verkaufen
            sollst?
          </h3>
        </div>
      </div>
      <div className="py-[50px] px-[50px] flex flex-col  bg-[#0E3A31]  md:mx-[50px] lg:mx-[190px]  justify-center items-center rounded-[30px] gap-[20px]  ">
        <h1 className="flex-wrap justify-center text-white text-[40px] font-stolzl text-center">Du bist hier genau richtig! <img className="inline-block w-[50px] h-[50px]" src={pic} alt="emoji" /></h1>
        <p className=" text-white text-[16px] font-stolzl font-light text-center">
          Ich zeige dir, wie du auf Etsy durchstartest – mit Produkten, die sich
          wirklich verkaufen. Egal ob du gerade erst beginnst oder bereits einen
          Shop hast: Hier bekommst du Klarheit darüber, was du verkaufen kannst,
          wie du deinen Shop professionell aufbaust und endlich sichtbar wirst. 
        </p>
        <button className="  text-white font-stolzl text-[20px] px-[20px] py-[10px] bg-[#FF6109] rounded-[10px]">Zeig mir, wie’s geht!</button>
      </div>
    </div>
  );
}

export default Page1;
