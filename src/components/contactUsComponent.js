'use client'

import React from "react";
import swal from "sweetalert";
import Image from 'next/image';

import { useSpring, animated } from "@react-spring/web";
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { Manrope } from "next/font/google";
import { Playfair_Display } from "next/font/google";


const font = Manrope({
  subsets: ["latin"]
})

const subFont = Playfair_Display({
  subsets: ["latin"]
}) 

const ContactUsComponent = () => {

    const animation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000},
      })

    const data = {
        number: '+48 731 384 284',
        email: 'atlanticvalleypartners@info.com',
        location: 'Marszalkowska 83 Warsaw/Poland',
        hrefEmail: 'ozay.yilmaz.bau@gmail.com',
        hrefLocation: 'https://www.google.com/maps/@52.2190047,21.051371,13z',
        message: "Merhaba Özay Bey",
    }
    const redirectToWhatsApp = () => {
      const encodedMessage = encodeURIComponent(data.message);
      const url = `https://api.whatsapp.com/send?text=${encodedMessage}&phone=${data.number}`;
      window.location.href = url;
  };
    return (
        <animated.div className={`lg:h-screen lg:w-full h-auto w-full bg-transparent ${font.className}`} style={animation}>
        <div className=" lg:flex md:hidden sm:hidden hidden w-full h-1/2 text-white justify-center items-center">
          <h1 className={`absolute text-5xl bg-black text-white px-16 py-16 bg-opacity-50 ${subFont.className} rounded-lg`}>Atlantic Valley Partners Co.</h1>
          <Image src={"/atlantic/bg-mountain.jpg"} height={1600} width={1600} alt="Atlantic Valley" className=" -z-50 sticky"/>
        </div>
        <div className="w-full h-1/2 bg-blue-600 absolute flex flex-wrap">
          <div className="h-full lg:w-1/3 md:w-full w-full bg-blue-800 transition-all duration-500 hover:scale-105">
              <iframe title="Atlantic Valley Office" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16561.788007914936!2d21.01820974344891!3d52.224072128855106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccee01562a97%3A0xfdfd3ecc0a8f0435!2sMarsza%C5%82kowska%2083%2C%2000-683%20Warszawa!5e0!3m2!1sen!2spl!4v1682409984018!5m2!1sen!2spl" className="relative h-full w-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="h-full lg:w-1/3 sm:w-full w-full bg-white justify-center flex items-center">
              <div className="h-2/3 w-2/3 mt-8 font-light">
                  <h2 className="text-4xl text-black">İletişim</h2>
                  <div className=" py-4 ">
                      <button onClick={redirectToWhatsApp} target="_blank" rel="noopener noreferrer" className=" flex items-center py-3">
                        <FaWhatsapp className=" text-sky-500 lg:h-8 lg:w-8 h-8 w-8 min-w-max min-h-max" role="button" height={'2rem'} width={'2rem'}/>
                        <span className=" text-slate-500 text-md pl-2 hover:text-sky-900">{data.number}</span>  
                      </button>
                      <a href={`mailto:${data.hrefEmail}`} target="_blank" rel="noopener noreferrer" className=" flex items-center py-3">
                        <MdEmail className=" text-sky-500 lg:h-8 lg:w-8 h-8 w-8 min-w-max min-h-max" height={'2rem'} width={'2rem'}/>
                        <span className=" text-slate-500 text-md pl-2 hover:text-sky-900">{data.email}</span>  
                      </a>
                      <a href={data.hrefLocation} target="_blank" rel="noopener noreferrer" className=" flex items-center py-3">
                        <MdLocationOn  className=" text-sky-500 lg:h-8 lg:w-8 h-8 w-8 min-w-max min-h-max" height={'2rem'} width={'2rem'}/>
                        <span className=" text-slate-500 text-md pl-2 hover:text-sky-900">{data.location}</span>  
                      </a>
                  </div>
              </div>
          </div>
          <div className="h-full lg:w-1/3 md:w-full sm:w-full w-full bg-slate-200 justify-center flex items-center">
              <div className="h-auto w-2/3 mt-8 font-light sm:h-auto lg:h-2/3 md:h-2/3 pb-8">
                  <h2 className="text-4xl text-black">Bize hemen ulaşın!</h2>
                  <p className="text-slate-500 text-md py-6">Merhaba,</p>
                  <h3 className="text-slate-500 text-md transition-all duration-200">Ben  <input className="text-sky-500 bg-transparent outline-none focus:border-blue-500 w-14 h-auto transition-all duration-200" placeholder="isminiz" type="text"/>, <br /> Email adresim <input className="text-sky-500 bg-transparent outline-none focus:border-blue-500" placeholder="e-mail adresim" type="email"/></h3>
                  <button className="rounded-full bg-white h-12 w-24 text-black border-none mt-4 transition-all duration-300 hover:bg-sky-500 hover:text-white" onClick={() => {swal({icon: "success"});}}>Gönder</button>
              </div>
          </div>
        </div>
      </animated.div>
    )
}

export {ContactUsComponent}