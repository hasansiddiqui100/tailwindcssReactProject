import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import com from '../assets/images/comorg.png';
import avatar from '../assets/images/avatar1.png';
import ledger from '../assets/images/ledger1.png';
import announce from '../assets/images/announce.png';

function Page4() {
    return (
        <>
            <div className='flex flex-col justify-center items-center px-[20px] md:px-[50px] lg:px-[150px] pt-[80px] gap-[20px] pb-[50px]'>
                <h1 className='font-stolzl font-medium text-[30px] lg:text-[40px] '>Das sagen andere<img src={announce} className="inline-block h-[50px] w-[50px]" alt="announce"></img></h1>
                <p className='font-stolzl font-regular text-[16px] text-center'>Meine Strategien haben schon hunderten Etsy-Sellern geholfen, ihre Träume zu verwirklichen – von den ersten Verkäufen bis hin zu einem nachhaltig wachsenden Shop. Lies, wie meine Kunden ihre Herausforderungen gemeistert und beeindruckende Ergebnisse erzielt haben.
                    Dein Erfolg könnte der nächste sein!</p>
            </div>
            <div className='flex overflow-x-hidden '>
                <Swiper
                    spaceBetween={20}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                >
                    {/* Slide 1 */}
                    <SwiperSlide>
                        <div className='flex flex-col bg-[#F4F3ED] px-[24px] py-[24px] rounded-[20px] gap-[20px]'>
                            <img className="w-[23px] h-[17px]" src={com} alt="comma" />
                            <p className='font-stolzl font-regular text-[16px]'>
                                Seit über 7 Jahren baue ich Online-Businesses auf – von nachhaltigen physischen Produkten über Print-on-Demand bis hin zu digitalen Produkten auf
                            </p>
                            <div className='flex items-center'>
                                <img className="w-[48px] h-[48px] object-contain mr-[10px]" src={avatar} alt="avatar" />
                                <div>
                                    <p className='font-stolzl font-medium text-[20px]'>Tina</p>
                                    <p className='font-stolzl font-medium text-[14px]'>Etsy Shop</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <div className='flex flex-col bg-[#F4F3ED] px-[24px] py-[24px] rounded-[20px] gap-[20px]'>
                            <img className="w-[23px] h-[17px]" src={com} alt="comma" />
                            <p className='font-stolzl font-regular text-[16px]'>
                                Seit über 7 Jahren baue ich Online-Businesses auf – von nachhaltigen physischen Produkten über Print-on-Demand bis hin zu digitalen Produkten auf
                            </p>
                            <div className='flex items-center'>
                                <img className="w-[48px] h-[48px] object-contain mr-[10px]" src={avatar} alt="avatar" />
                                <div>
                                    <p className='font-stolzl font-medium text-[20px]'>Tina</p>
                                    <p className='font-stolzl font-medium text-[14px]'>Etsy Shop</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide>
                        <div className='flex flex-col bg-[#F4F3ED] px-[24px] py-[24px] rounded-[20px] gap-[20px]'>
                            <img className="w-[23px] h-[17px]" src={com} alt="comma" />
                            <p className='font-stolzl font-regular text-[16px]'>
                                Seit über 7 Jahren baue ich Online-Businesses auf – von nachhaltigen physischen Produkten über Print-on-Demand bis hin zu digitalen Produkten auf
                            </p>
                            <div className='flex items-center'>
                                <img className="w-[48px] h-[48px] object-contain mr-[10px]" src={avatar} alt="avatar" />
                                <div>
                                    <p className='font-stolzl font-medium text-[20px]'>Tina</p>
                                    <p className='font-stolzl font-medium text-[14px]'>Etsy Shop</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='px-[20px] lg:px-[50px] md:px-[150px] pt-[50px]'>
                <div className="flex flex-col px-[50px] bg-[#0E3A31] py-[50px] lg:mx-[190px] md:mx-[50px] justify-center items-center rounded-[30px] gap-[20px]  ">
                    <h1 className="flex-wrap justify-center text-white text-[40px] font-stolzl text-center">Du startest gerade ein neues Business und brauchst: Einmal alles? <img className="inline-block w-[50px] h-[50px]" src={ledger} alt="emoji" /></h1>
                    <p className=" text-white text-[16px] font-stolzl font-light text-center">
                        Ich weiß, wie überwältigend es sein kann, einen Etsy-Shop von Grund auf aufzubauen – vor allem, wenn du nicht weißt, wo du anfangen sollst. Mein Etsy
                        Erfolgs-Bootcamp gibt dir alles, was du brauchst, in einem klaren Schritt-für-Schritt-Plan: von der perfekten Produktidee über einen professionellen
                        Shop-Aufbau bis hin zu mehr Sichtbarkeit und Verkäufen mit Etsy Ads. Kein Rätselraten, kein unnötiger Stress – nur bewährte Strategien, die funktionieren.
                        Bereit, deinen Etsy-Traum in die Tat umzusetzen?
                    </p>
                    <button className="  text-white font-stolzl text-[16px] md:text-[20px] px-[20px] py-[10px] bg-[#FF6109] rounded-[10px]">Starte jetzt mit dem Bootcamp!</button>
                    <h3 className='font-stolzl font-light text-[16px] text-white'>Nur noch 10 Plätze verfügbar!</h3>
                </div>
            </div>
        </>
    );
}

export default Page4;

