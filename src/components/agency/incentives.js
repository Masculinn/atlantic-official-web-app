"use client";

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {useSpring, animated} from "@react-spring/web";
import incentiveData from "@/lib/incentive/incentiveData";
import malText from '@/lib/incentive/malText';
import hizmetText from '@/lib/incentive/hizmetText';
import { Manrope } from 'next/font/google';

const font = Manrope({
    subsets: ["latin"]
  })

const Incentives = () => {
    const [status, setStatus] = useState(true)
    const [info, setInfo] = useState(false)
    const [effectAnimation, setEffectAnimation] = useState(true)
    const [dataQue, setDataQue] = useState(0);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
  
    const animation = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 1000},
    })
    useEffect(() => {
      setIsImageLoaded(true);
    }, []);
  
    
    const efAnim = useSpring({
      opacity: effectAnimation ? 1 : 0,
      transform: effectAnimation ? 'translateX(0)' : 'translateX(-50px)',
    })
  
  
    const Card = ({ text, id, imgSrc}) => {
      return (
        <div 
          className={`scale-95 relative lg:h-72 md:h-64 sm:h-48 lg:w-1/3 h-36 md:w-1/3 sm:w-1/2 w-1/2 bg-transparent hover:shadow-xl hover:scale-100 flex transition-all duration-700 hover:border-none cursor-pointer items-center justify-center text-center bg-no-repeat bg-center bg-cover hover:bg-top`} 
          style={{backgroundImage: `url(${imgSrc})`}} 
          id='section_font' 
          onClick={() => {
            setEffectAnimation(false);
            setDataQue(id);
            setTimeout(() => {
              setEffectAnimation(true);
              setInfo(true);
            }, 200);
          }}>
          <center>
          <h2 className=' lg:text-2xl md:text-xl sm:text-lg text-lg text-white px-4 py-4'>{text}</h2> 
          </center>
        </div>
      )
    }
  
    const Information = ({props}) => {
  
      const StepsLayer = ({text, subHeader}) => {
        return (
          <div className=' lg:px-24 md:px-12 sm:px-8 px-8 py-12 bg-white bg-opacity-90 my-2'>
            <strong className=' font-bold lg:text-2xl md:text-xl sm:text-lg text-md'>{subHeader}</strong>
            <h4 className=' text-sm lg:text-lg'>{text}</h4>
          </div>
        )
      }  
  
      return (
        <div className='lg:mx-6 lg:my-8 overflow-y-scroll bg-slate-950 bg-no-repeat bg-cover bg-center' id='section_font' style={{backgroundImage: `url(${props.imgSrc})`, height: '36rem'}}>
          <div className=' w-full h-auto bg-opacity-90 bg-white top-0 z-auto'>
            <button className='flex lg:px-10 lg:py-4 lg:-mb-12 text-slate-800 transition-all hover:px-12 hover:text-black text-xl duration-200' 
              onClick={
                () => {
                  setEffectAnimation(false);
                  setTimeout(() => {setEffectAnimation(true);setInfo(false);}, 200);
                }
              }>← Geri</button>
            <div className='items-center justify-center text-center'>
              <h2 className=' pt-8 lg:text-4xl md:text-2xl sm:text-xl text-2xl text-black inline-flex tracking-tight'>{props.header}</h2>
              <h3 className=' py-4 text-lg text-slate-800 tracking-tighter lg:text-2xl md:text-xl sm:text-lg'>-{props.subHeader}-</h3>
            </div>
          </div>
            <div className='w-full h-auto bg-white bg-opacity-90  text-black my-40 items-start'>
              <p className='lg:px-24 md:px-12 sm:px-8 px-6 py-8 lg:text-xl md:text-xl sm:text-lg text-lg text-center tracking-tighter'>{props.content}</p>
            </div>
            <div className='justify-center items-center flex mt-12'>
              <ul>
                {props.steps.map((val, key) => {
                  return <StepsLayer key={key} {...val}/>
                })}
              </ul>
            </div>
            <center>
              <Link href='/contact-us'>
                <button className='lg:text-2xl md:text-xl sm:text-lg text-lg bg-opacity-100 items-center bg-white h-auto py-4 hover:translate-x-4 rounded-t-2xl transition-all duration-300 lg:w-64 md:w-48 sm:w-36 px-4 mt-8 text-black'>İLETİŞİME GEÇİN →</button>
              </Link>
            </center>
        </div>
      )
    }
    const CardsLayer = ({props}) => {
      return (
        <div className='flex flex-wrap w-full h-auto justify-between px-6 my-8 mt-4'>
          {props?.map((val) => {
            return <Card key={val.id} {...val}/>
          })}
        </div>
      ) 
    }
        return (
        <animated.div style={animation} className={`${font.className}`}>
          <div className={`items-center justify-center bg-transparent w-full h-screen transition-all duration-200 -mt-16 `}>
            <center>
              <h3 className={`pt-40 text-slate-600 block`} id='section_font'>-Devlet Teşvikleri-</h3>
              {/* <h1 className={`text-center lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-black block tracking-tighter`} id='section_font'>Devlet teşvikleri buraya gelecek</h1>  */}
                <div className='h-auto'>
                  {!isImageLoaded && (
                    <div className="items-center justify-center h-screen w-full flex bg-transparent pb-40">
                      <span className="loader lg:scale-1 md:scale-90 scale-75"></span>
                    </div>
                 )}
                    <video src={"/main/incentive_video.mp4"} height={300} width={500} controls className='rounded-lg my-8' content='Devlet Teşvikleri Nedir?'></video>
                </div>  
              <h2 className='text-5xl' id='arr'>↓</h2>
            </center>
          </div>
          <div className={` h-auto w-full justify-center items-center bg-slate-950  ${isImageLoaded ? 'flex' : 'hidden'} `}>
            <div className=' lg:w-2/3 md:w-full md:mx-12 sm:w-full h-auto shadow-xl'>
              <div className=' w-full h-24 p-4 justify-center items-center flex mt-12'>
              <button 
                className={` 
                  ${status ? 'bg-slate-950 text-white' : 'bg-transparent text-slate-500'} 
                  border border-white h-16 md:h-24 w-full md:w-1/2 mx-2 text-lg md:text-3xl 
                  hover:scale-105 transition-all duration-300 
                `} 
                id='section_font' 
                onClick={() => {
                  setEffectAnimation(false); 
                  setTimeout(() => {
                    setEffectAnimation(true); 
                    setStatus(true); 
                    setInfo(false)
                  }, 200)
                }}>
                Mal İhracatı
              </button>
              <button 
                className={` ${!status ? 'bg-slate-950 text-white' : 'bg-transparent text-slate-500'}  border border-white h-16 md:h-24 w-full md:w-1/2 mx-2 text-md md:text-3xl 
                hover:scale-105 transition-all duration-300  `}
                id='section_font'
                onClick={() => {
                  setEffectAnimation(false); 
                  setTimeout(() => {
                    setEffectAnimation(true); 
                    setStatus(false);
                    setInfo(false)
                  }, 200);
                }}>
                  Hizmet İhracatı
                </button>
              </div>
              <animated.div style={efAnim}>
                {!info && <CardsLayer props={status ? malText : hizmetText}/> }
                {info && <Information props={incentiveData[dataQue]}/>}
              </animated.div>
            </div>
          </div>
        </animated.div>
      )
}

export {Incentives}