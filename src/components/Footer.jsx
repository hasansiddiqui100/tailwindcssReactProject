import React from 'react'
import logo from '../assets/images/siteLogo2.png';
import inslogo from '../assets/images/instaLogo.png';
import insLinkedin from '../assets/images/mdiLinkedin.png';
import insYoutube from '../assets/images/mdiYoutube.png';
function Footer() {
    return (
        // <div className='w-full flex  gap-[50px] px-[20px] md:px-[50px] lg:px-[150px] py-[50px]'>
        //     <div className='w-[40%]  flex flex-col gap-[40px]'>
        //         <img src={logo} className='w-[153px] h-[66px]' alt="" />
        //         <h1 className='font-stolzl font-medium text-[18px]'>Deine Etsy-Expertin</h1>
        //         <p className='font-stolzl font-regular text-[14px]'>
        //             Ich helfe dir, erfolgreich auf Etsy zu verkaufen – mit digitalen Produkten und Print-on-Demand. Starte deinen Shop, steigere deine Sichtbarkeit und mache mehr Verkäufe mit klaren, bewährten Strategien!
        //         </p>
        //         <div className='flex items-center'>
        //             <img className='w-[32px] h-[32px]' src={inslogo} alt="" />
        //             <img className='w-[32px] h-[32px]' src={insLinkedin} alt="" />
        //             <img className='w-[32px] h-[32px]' src={insYoutube} alt="" />
        //         </div>
        //     </div>
        //     <div className='flex  w-[60%] flex-col justify-between'>
        //         <div className='flex flex-row'>
        //             <div className='flex-1 '>
        //                 <h1 className='font-stolzl font-medium text-[18px] mb-[17px]'>Wichtige Links</h1>
        //                 <ul className='font-stolzl font-regular text-[14px] mb-[6px]'><li>Neu hier</li>
        //                     <li className='mb-[6px]'>Über mich</li>
        //                     <li className='mb-[6px]'>Tools</li>
        //                     <li className='mb-[6px]'>Blog</li>
        //                     <li className='mb-[6px]'>Durchstarten</li></ul></div>
        //             <div className='flex-1 '>
        //                 <h1 className='font-stolzl font-medium text-[18px] mb-[17px]'>Ressourcen</h1>
        //                 <ul className='font-stolzl font-regular text-[14px] '><li>Etsy-SEO-Tipps</li>
        //                     <li className='mb-[6px]'>Produktideen für Etsy</li>
        //                     <li className='mb-[6px]'>Etsy Ads Anleitung</li>
        //                     <li className='mb-[6px]'>Kostenlose Checklisten</li>
        //                 </ul></div>
        //             <div className='flex-1 ' >
        //                 <h1 className='font-stolzl font-medium text-[18px] mb-[17px]'>Rechtliches</h1>
        //                 <ul className='font-stolzl font-regular text-[14px] '><li>Impressum</li>
        //                     <li className='mb-[6px]' >Datenschutz</li>
        //                     <li className='mb-[6px]'>AGB (Allgemeine
        //                         Geschäftsbedingungen)</li>
        //                     <li className='mb-[6px]'>Kontakt</li>
        //                 </ul>
        //             </div>
        //         </div>
        //         <div>
        //             <h2 className='font-stolzl font-regular text-[14px]'>© 2025 Lisa Zachmann. Alle Rechte vorbehalten.</h2>
        //         </div>
        //     </div>

        // </div>
        <div className='flex flex-col md:flex-row lg:gap-[50px] lg:px-[150px] md:px-[20px] px-[20px] gap-[50px] py-[50px]'>
            <div className='flex flex-col md:w-[40%] gap-[40px]'>
                <img src={logo} className='w-[153px] h-[66px]' alt="" />
                <h1 className='font-stolzl font-medium text-[18px]'>Deine Etsy-Expertin</h1>
                <p className='font-stolzl font-regular text-[14px]'>
                    Ich helfe dir, erfolgreich auf Etsy zu verkaufen – mit digitalen Produkten und Print-on-Demand. Starte deinen Shop, steigere deine Sichtbarkeit und mache mehr Verkäufe mit klaren, bewährten Strategien!
                </p>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px]' src={inslogo} alt="" />
                    <img className='w-[32px] h-[32px]' src={insLinkedin} alt="" />
                    <img className='w-[32px] h-[32px]' src={insYoutube} alt="" />
                </div>
            </div>
            <div className='flex flex-col md:w-[60%] justify-between  gap-[40px]'>
                <div className='flex flex-col md:flex-row '>
                    <div className='flex-1 '>
                        <h1 className='font-stolzl font-medium text-[18px] mb-[17px]'>Wichtige Links</h1>
                        <ul className='font-stolzl font-regular text-[14px] mb-[6px]'><li>Neu hier</li>
                            <li className='mb-[6px]'>Über mich</li>
                            <li className='mb-[6px]'>Tools</li>
                            <li className='mb-[6px]'>Blog</li>
                            <li className='mb-[6px]'>Durchstarten</li></ul></div>
                    <div className='flex-1 '>
                        <h1 className='font-stolzl font-medium text-[18px] mb-[17px]'>Ressourcen</h1>
                        <ul className='font-stolzl font-regular text-[14px] '><li>Etsy-SEO-Tipps</li>
                            <li className='mb-[6px]'>Produktideen für Etsy</li>
                            <li className='mb-[6px]'>Etsy Ads Anleitung</li>
                            <li className='mb-[6px]'>Kostenlose Checklisten</li>
                        </ul></div>
                    <div className='flex-1 ' >
                        <h1 className='font-stolzl font-medium text-[18px] mb-[17px]'>Rechtliches</h1>
                        <ul className='font-stolzl font-regular text-[14px] '><li>Impressum</li>
                            <li className='mb-[6px]' >Datenschutz</li>
                            <li className='mb-[6px]'>AGB (Allgemeine
                                Geschäftsbedingungen)</li>
                            <li className='mb-[6px]'>Kontakt</li>
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <h2 className='font-stolzl font-regular text-[14px]'>© 2025 Lisa Zachmann. Alle Rechte vorbehalten.</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer
