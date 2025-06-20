import React from "react";
import lisa from "../assets/images/lisa2p2.png";
import star from "../assets/images/star_1.png";
import point from "../assets/images/point_left.png";
import chart from "../assets/images/chart_downward.png";
import book from "../assets/images/blue_book1.png";
function Page2() {
  return (

    <div className="flex flex-col md:flex-row gap-[70px] px-[20px] md:px-[50px] lg:px-[150px] mt-[80px] mb-[80px] ">
      <div className="w-full md:w-1/2">
        <img className="w-full h-auto object-contain" src={lisa} alt="lisa" />
      </div>
      <div className="flex flex-col w-full md:w-1/2 font-stolzl font-medium lg:text-[40px] text-[30px] gap-6">
        <h1>
          Hallo! Ich bin Lisa - Etsy-Expertin & E-Commerce-Unternehmerin
        </h1>
        <ul className="font-stolzl font-normal lg:text-[16px] text-[12px] flex flex-col gap-4 break-words ">
          <li className="flex items-start gap-3">
            <img src={star} alt="" className="w-[20px] h-[20px] mt-1" />
            <span>
              Seit über 10 Jahren baue ich erfolgreiche Online-Businesses auf –
              von nachhaltigen Produkten über Print-on-Demand bis hin zu
              digitalen Bestsellern auf Etsy.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <img src={book} alt="" className="w-[20px] h-[20px] mt-1" />
            <span>
              Ich habe mehrere eigene Brands gegründet (u.a. EcoYou) und
              verkaufe selbst digitale Produkte und POD-Designs auf Etsy – mit
              echter Praxiserfahrung.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <img src={chart} alt="" className="w-[20px] h-[20px] mt-1" />
            <span>
              Meine Mission? Kein Blabla, keine leeren Versprechen – sondern
              klare Strategien, die wirklich funktionieren.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <img src={point} alt="" className="w-[20px] h-[20px] mt-1" />
            <span>
              Ich zeige dir, wie du Produkte findest, die sich wirklich
              verkaufen – und einen Shop aufbaust, der sichtbar ist und
              Ergebnisse bringt.
            </span>
          </li>
        </ul>

        <button className="border border-[#222222] rounded-[10px] bg-[#F4F3ED] font-stolzl font-medium lg:text-[20px] text-[12px] py-[12px] px-[20px] w-fit">
          Erfahre mehr über mich
        </button>
      </div>
    </div>


  );
}

export default Page2;
