'use client'

import React, {useState} from 'react';
import Image from 'next/image';
import { useSpring, animated, useTransition } from "@react-spring/web";
import { useMediaQuery } from 'react-responsive';
import { IoMenu } from "react-icons/io5";
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

const Header = (dark) => {

  const industryNav = [
    { path: '/incentive', title: "Devlet Teşvikleri" },
    { path: '/industries/e-trade', title: "E-Ticaret" },
    { path: '/industries/information-technology', title: "IT Hizmetleri" },
    { path: '/industries/digital-marketing', title: "Dijital Pazarlama" },
    { path: '/industries/fmcg', title: "Hızlı Tüketim Ürünleri" },
    { path: '/industries/energy', title: "Enerji" },
  ]

  const mainNav = [
    { path: '/contact', title: "İLETİŞİME GEÇİN" },
    { path: '/who-we-are', title: "BİZ KİMİZ?" },
    { path: '/investing', title: "AVRUPA'DA YATIRIM" },
    { path: '/agency', title: <span className='money font-bold underline'>FİNFLUENCER AJANSIMIZ</span> },
  ]
    const isResponsive = useMediaQuery({
      query: "(min-width: 768px)"
    })

    const [hoverMobile, setHoverMobile] = useState(false)
    const [showMenu, setShowMenu] = useState(false);
    const [color, setColor] = useState(true)
    const [bar, setBar] = useState(false)
  
    const mobileStyle = {
      backgroundColor: color ? '#FFFFFF' : '#000000',
      color: color ? '#000000' : '#FFFFFF'
    }
  
    const animBar = useSpring({
      transform: bar ? 'scale(1.05)' : 'scale(1)',
      backgroundColor: bar ? 'transparent' : 'transparent',
      boxShadow: bar
        ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        : '0 10px 30px -12px rgba(0, 0, 0, 0.1)',
    })
  
    const HeaderMobile = () => {
    const transitions = useTransition(showMenu, {
      from: { opacity: 0, transform: 'translateY(-50%)' },
      enter: { opacity: 1, transform: 'translateY(0)' },
      leave: { opacity: 0, transform: 'translateY(-50%)' }
    });
  
    return (
      <div className={`top-0 text-sm ml-10 bg-transparent backdrop-blur-md shadow-gray-500 hover:h-auto lg:hidden md:inline-block sm:inline-block ${hoverMobile ? 'inline-block' : 'hidden'} transition-all duration-300 lg:hidden md:hidden sm:inline-block inline-block ${manrope.className}`}>
        <button className={`lg:mt-0 ${dark.dark ? 'text-black hover:text-slate-600' : 'text-white hover:text-slate-300'}  mr-4`} onClick={() => {setShowMenu(prev => !prev)}}>
          {showMenu ? 'ENDÜSTRİLER ↑' : 'ENDÜSTRİLER ↓'}
        </button>
        {transitions(
          (style, item) => item && (
            <animated.div className="bg-transparent bg-opacity-50 justify-center items-center" style={style}>
              <div className="px-2">
                <div className="inline-block">
                  {industryNav.map((val, index) => (
                    <a href={val.path} key={index}>
                      <button onClick={() => {setShowMenu(prev => !prev );setHoverMobile(false )}} className={` ${dark.dark ? 'text-black hover:text-slate-600' : 'text-white hover:text-slate-300'}py-1 my-2 px-2 block border border-black rounded-sm bg-black text-white tracking-tight font-semibold`}>{val.title}</button>
                    </a>
                  ))}
                </div>
              </div>
              
            </animated.div>
          )
        )}
        {mainNav.map((val, index) => (
          <a href={val.path} key={index}>
            <button className={`block mt-4 lg:mt-0 text-black hover:text-slate-600 mr-4 ${dark.dark ? 'text-black hover:text-slate-600' : 'text-white hover:text-slate-300'}`} onClick={()=> {setHoverMobile(false)} }>{val.title}</button>
          </a>
        ))}
      </div>  
    )
  }
    return (
      <header className={`top-0 w-full transition-opacity z-50 duration-500 relative ${manrope.className}`} 
      >
          <nav className="flex items-center justify-between flex-wrap p-6"
              onMouseLeave={() => {
                  isResponsive && setBar(false)
          }}>
        <div className="flex items-center flex-shrink-0 ">
          <a href={"/"}> 
            {
            dark.dark ? <Image priority={true} src={"/main/logo.png"} height={96} width={176} alt='Atlantic Valley Partners Logo' className='ml-5 lg:w-44 lg:h-24 md:w-40 md:h-24 sm:h-12 sm:w-24 w-auto h-16'/>
            : 
            <Image priority={true} src={"/main/atlantic-white-logo.png"} height={96} width={176} alt='Atlantic Valley Partners Logo' className='ml-5 lg:w-44 lg:h-24 md:w-40 md:h-24 w-auto h-16'/>
            }
          </a>
        </div>
        <div className="flex lg:hidden">
          <br />
          <button className={`flex items-center px-3 py-2 ${dark.dark ? 'text-black hover:text-slate-600' : 'text-white hover:text-slate-300'} rounded-lg bg-white border border-white hover:text-white hover:bg-black hover:border-black`} 
            onClick={() => 
              {
                setColor(prev => !prev)
                setHoverMobile(prev => !prev)
            }}
            style={mobileStyle}
            >
            <IoMenu />
          </button>
        </div>
        <div className="w-full flex-grow lg:items-center lg:w-auto hidden lg:block">
          <div className="text-sm lg:flex-grow lg:justify-end">            
            {mainNav.map((val, index) => (
              <a href={val.path} key={index} className={`block mt-4 pt-2.5 lg:inline-block lg:mt-0 mr-10 float-right ${dark.dark ? 'text-black hover:text-slate-600' : 'text-white hover:text-slate-300'}`}>
                {val.title}
              </a>
            ))}
            <a href={"/"} className={`block mt-4 pt-2.5 lg:inline-block lg:mt-0 ${dark.dark ? 'text-black hover:text-slate-600' : 'text-white hover:text-slate-300'} mr-10 float-right`} onMouseEnter={() => {{isResponsive && setBar(true)}}}>{bar ? 'ENDÜSTRİLER ↑' : 'ENDÜSTRİLER ↓'}</a>
          </div>
        </div>
        {bar  && (
          <animated.div className="absolute top-full w-full h-38 backdrop-blur-sm -mt-6 shadow-xl " style={animBar}>
            <a href={'/incentive'}>
              <animated.button className={`h-16 w-1/6 bg-transparent text-center justify-center ${dark.dark ? 'text-black hover:text-slate-600 ' : 'text-white hover:text-slate-900 hover:bg-white '} tracking-tighter font-semibold transform transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white`}>
                Devlet Teşvikleri
              </animated.button>
            </a>
            <a href={'/industries/e-trade'}>
              <animated.button className={`h-16 w-1/6 bg-transparent text-center justify-center ${dark.dark ? 'text-black hover:text-slate-600' : 'text-white hover:text-slate-900 hover:bg-white'} tracking-tighter font-semibold transform transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white `}>
                E-Ticaret
              </animated.button>
            </a>
            <a href={'/industries/information-technology'}>
              <animated.button className={`text-sm h-16 w-1/6 bg-transparent text-center justify-center ${dark.dark ? 'text-black hover:text-slate-600' : 'text-white hover:text-slate-900 hover:bg-white'} tracking-tighter font-semibold transform transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white`}>
                IT Hizmetleri
              </animated.button>
            </a>
            <a href={'/industries/digital-marketing'}>
              <animated.button className={`text-sm h-16 w-1/6 bg-transparent text-center justify-center ${dark.dark ? 'text-black hover:text-slate-600' : 'text-white hover:text-slate-900 hover:bg-white'} tracking-tighter font-semibold transform transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white `}>
                Dijital Pazarlama
              </animated.button>
            </a>
            <a href={'/industries/fmcg'}>
              <animated.button className={`text-sm h-16 w-1/6 bg-transparent text-center justify-center ${dark.dark ? 'text-black hover:text-slate-600' : 'text-white hover:text-slate-900 hover:bg-white'} tracking-tighter font-semibold transform transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white`}>
                Hızlı Tüketim Ürünleri
              </animated.button>
            </a>
            <a href={'/industries/energy'}>
              <animated.button className={`h-16 w-1/6 bg-transparent text-center justify-center ${dark.dark ? 'text-black hover:text-slate-600' : 'text-white hover:text-slate-900 hover:bg-white'} tracking-tighter font-semibold transform transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white`}>
                Enerji
              </animated.button>
            </a>
          </animated.div>
        )}
      </nav>  
      <HeaderMobile />
    </header>
    );
  }

  export {Header};