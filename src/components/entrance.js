'use client'

import React, {useState} from "react";
import { useTrail, animated, useSpring } from "@react-spring/web";
import { Playfair_Display } from 'next/font/google'
import { Manrope } from "next/font/google";
import { Geologica } from "next/font/google";

const geolica = Geologica({
  subsets: ['latin']
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  style: 'normal'   
});

const manrope = Manrope({
  subsets: ['latin'],
})

const Entrance = () => {
  const [activeBanner, setActiveBanner] = useState(1);
  const handleBannerChange = (index) => {
    setActiveBanner(index);
  };

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
   });
  
  const itemsBanner = [
    { text: <p>BÜYÜRKEN YANINIZDAYIZ</p>  ,delay: 200 },
  ];

  const itemsBannerDesc = [
    {   text: <strong> Atlantic Valley Partners</strong>, delay:200  },
    {   text: ", küresel bir" , delay:400  },
    {   text: <strong>yönetim danışmanlığı</strong>, delay:600  },
    {   text: " firmasıdır. Önde gelen işletmelerin, hükümetlerin ve kurumların ", delay:800  },
    {   text: <strong>güvenilir danışmanıyız.</strong>, delay:1000  },
  ]

  const itemsBanner2 = [
    { text: <p>Avrupa'nin ilk <br /><span className="money">Finfluencer</span> Pazarlama Ajansı</p>  ,delay: 200 },
  ]

  const itemsBannerDesc2 = [
    {   text: <strong> Atlantic Valley Partners</strong>, delay:200  },
    {   text: "Markating Agency" , delay:400  },
    {   text: <strong>Önde gelen <br /></strong>, delay:600  },
    {   text: " Finans İçerik Üreticileri “Finfluencer” ", delay:800  },
    {   text: <strong>ile Dijital Dünya'da Kalıcı İz Bırak!</strong>, delay:1000  },
  ]
  const ButtonHolder = ({link, text}) => {
    return (
      <a href={link}>
        <button className={`h-16 bg-black text-white mx-5 my-5 text-center w-44 text-xl font-thin transform transition-all duration-300 hover:scale-105 hover:bg-transparent hover:border hover:border-black hover:text-black rounded-full ${manrope.className}`}>{text} </button>
      </a>
    )
  }

  const trail = useTrail(itemsBanner.length, {
    from: { opacity: 0, transform: 'translateX(40px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
    delay: (index) => index * 100,
  });
  
  const trail2 = useTrail(itemsBannerDesc.length, {
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 400 },
    delay: (index) => index * 100,
  });

  const Banner1 = () => {
    return (
      <animated.div className="-mt-40 " style={fade}>
      {trail.map((style, index) => (
        <animated.header key={index} className={`text-center lg:text-6xl md:text-4xl sm:text-3xl text-3xl text-black ${playfair.className}`} style={style}>
          {itemsBanner[index].text}
        </animated.header>
      ))}
      <main className="text-gray-600 mt-5 lg:text-lg md:text-lg sm:text-sm text-xs lg:px-52 text-center">
        <p className={`${manrope.className}`}>
          {trail2.map((style, index) => (
            <animated.span key={index} style={style}>
              {itemsBannerDesc[index].text}{" "}
            </animated.span>
          ))}
        </p>
      </main>
      <center>
        <ButtonHolder link={"/who-we-are"} text={"Biz Kimiz?"}/>
      </center>
    </animated.div>
    )
  }

  const Banner2 = () => {
    return (
      <div className="-mt-40" style={fade}>
      {trail.map((style, index) => (
        <animated.header key={index} className={`text-center lg:text-6xl md:text-4xl sm:text-3xl font-extrabold tracking-tighter text-3xl text-black ${geolica.className}`} style={style}>
          {itemsBanner2[index].text}
        </animated.header>
      ))}
      <main className="text-gray-600 mt-5 lg:text-lg md:text-lg sm:text-sm text-xs lg:px-52 text-center">
        <p className={`${manrope.className}`}>
          {trail2.map((style, index) => (
            <animated.span key={index} style={style}>
              {itemsBannerDesc2[index].text}{" "}
            </animated.span>
          ))}
        </p>
      </main>
      <center>
        <ButtonHolder link={"/agency"} text={"Sayfaya Git"}/>
      </center>
    </div>
    )
  }

  return (
    <>
      {activeBanner === 1 ? <Banner1 /> : <Banner2 />}
      <div className="absolute bottom-0 items-center justify-center ">
        <input type="radio" className="mx-2 cursor-pointer w-4 h-4 bg-black border-2 border-white  focus:outline-none focus:border-black" name="banner" checked={activeBanner === 1} onChange={() => handleBannerChange(1)} />
        <input type="radio" className="mx-2 -mb-24 cursor-pointer w-4 h-4 bg-blue-500 border-2 border-black focus:outline-none focus:border-blue-500" name="banner" checked={activeBanner === 0} onChange={() => handleBannerChange(0)} />
      </div>
    </>
  );
};

export {Entrance};
