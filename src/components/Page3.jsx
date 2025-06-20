import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import money from "../assets/images/money.png";
import pic3 from "../assets/images/pic3.png";
function Page3() {
    return (
        <div className="bg-[#4A51C3] flex flex-col justify-center items-center px-[20px] md:px-[50px] lg:px-[150px] gap-[50px] pt-[80px] pb-[80px]">
            <h1 className="font-stolzl font-medium text-[40px] text-white text-center">
                Meine Angebote für dich!
                <img
                    className="inline-block ml-[5px] w-[50px] h-[50px]"
                    src={money}
                    alt="inline emoji"
                />
            </h1>
            <div className="flex gap-[30px]  flex-col md:flex-row">
                <div className="bg-white p-[24px]  flex flex-col gap-[20px] rounded-[20px] justify-center items-center">
                    <img className="w-[56px] h-[56px]" src={pic3} alt="" />
                    <h3 className="font-stolzl font-medium text-[20px] text-center ">Produktideen & Shopaufba</h3>
                    <p className="font-stolzl font-medium text-[16px] text-center">
                        Starte mit Etsy – aber richtig! Finde heraus, welche Produkte und
                        Designs wirklich gefragt sind. Ich zeige dir, wie du deinen Shop von
                        Anfang an strategisch aufbaust – ohne Rätselraten oder stundenlanges
                        Trial & Error.
                    </p>
                    <p className="font-stolzl font-regular text-[16px] text-center">
                        Für alle, die noch keine Produktidee haben oder sicher starten
                        wollen.
                    </p>
                    <button className=" bg-[#FF6109] px-[20px] py-[12px] rounded-[10px] font-stolzl font-medium text-[16px] text-white ">Mehr erfahren</button>
                </div>
                <div className="bg-white p-[24px]  flex flex-col gap-[20px] rounded-[20px] justify-center items-center">
                    <img className="w-[56px] h-[56px]" src={pic3} alt="" />
                    <h3 className="font-stolzl font-medium text-[20px] text-center">Produktideen & Shopaufba</h3>
                    <p className="font-stolzl font-medium text-[16px] text-center">
                        Starte mit Etsy – aber richtig! Finde heraus, welche Produkte und
                        Designs wirklich gefragt sind. Ich zeige dir, wie du deinen Shop von
                        Anfang an strategisch aufbaust – ohne Rätselraten oder stundenlanges
                        Trial & Error.
                    </p>
                    <p className="font-stolzl font-regular text-[16px] text-center">
                        Für alle, die noch keine Produktidee haben oder sicher starten
                        wollen.
                    </p>
                    <button className="bg-[#FF6109] px-[20px] py-[12px] rounded-[10px] font-stolzl font-medium text-[16px] text-white ">Mehr erfahren</button>
                </div>
                <div className="bg-white p-[24px]  flex flex-col gap-[20px] rounded-[20px] justify-center items-center">
                    <img className="w-[56px] h-[56px]" src={pic3} alt="" />
                    <h3 className="font-stolzl font-medium text-[20px] text-center">Produktideen & Shopaufba</h3>
                    <p className="font-stolzl font-medium text-[16px] text-center">
                        Starte mit Etsy – aber richtig! Finde heraus, welche Produkte und
                        Designs wirklich gefragt sind. Ich zeige dir, wie du deinen Shop von
                        Anfang an strategisch aufbaust – ohne Rätselraten oder stundenlanges
                        Trial & Error.
                    </p>
                    <p className="font-stolzl font-regular text-[16px] text-center">
                        Für alle, die noch keine Produktidee haben oder sicher starten
                        wollen.
                    </p>
                    <button className="bg-[#FF6109] px-[20px] py-[12px] rounded-[10px] font-stolzl font-medium text-[16px] text-white ">Mehr erfahren</button>
                </div>
            </div>
        </div>
    );
}

export default Page3;
