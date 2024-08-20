"use client"

import React, {useRef, useState, useEffect} from 'react'
import { useSpring, animated } from "@react-spring/web";
import { Manrope } from 'next/font/google';

const font = Manrope({
  subsets: ["latin"]
})

const HeroIndustries = (props) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        }, { threshold: 0.1 });
    
        observer.observe(ref.current);
    
        return () => {
          observer.disconnect();
        }
      }, []);
    
      const animation = useSpring({
        from: { opacity: 0 },
        to: { opacity: isVisible ? 1 : 0 },
        config: { duration: 1000 },
      });

    return (
        <animated.div className={`${font.className} items-center justify-center ${props.bgColor} ${props.mid ? 'flex' : ''} w-full h-screen`} style={animation} ref={ref}>
        <div className={`${props.on ? '' : '-mt-40'}`}>
          <center>
            <h3 className={`pt-40 text-slate-600 block ${props.mode ? 'text-slate-300' : 'text-slate-600'}`} >-{props.top}-</h3>
            <h1 className={`text-center lg:text-${props.textSize}xl md:text-4xl px-8 sm:text-3xl text-2xl ${props.mode ? 'text-white' : 'text-black'}  block tracking-tighter`} >{props.main}</h1>  
            <h4 className={`block justify-center ${font.className} lg:pt-10 pt-5 lg:w-1/2 font-mono tracking-tight sm:px-5 px-5 lg:px-0 ${props.mode ? 'text-white' : 'text-black'}`} >{props.des}</h4>
            {props.buttonType ? (
              <button className={`h-20 mx-5 my-5 text-center w-52 text-xl font-thin transform transition-all duration-200 hover:scale-105  rounded-full ${props.mode ? 'bg-white text-black hover:bg-black  hover:text-white ' : 'hover:bg-transparent hover:border hover:border-black hover:text-black bg-black text-white'}`}  style={{display: props.on ? 'block' : 'none'}}>
                <a href={props.buttonLink} rel="noreferrer" target='_blank' >
                  {props.buttonText}
                </a>
              </button>            
            ) : (
              <a href={props.buttonLink} rel='norefferer'>
                <button className={`lg:h-20 h-16 mx-5 my-5 text-center lg:w-52 w-48 lg:text-xl font-thin transform transition-all duration-200 hover:scale-105  rounded-full ${props.mode ? 'bg-white text-black hover:bg-black  hover:text-white ' : 'hover:bg-transparent hover:border hover:border-black hover:text-black bg-black text-white'}`}  style={{display: props.on ? 'block' : 'none'}}>{props.buttonText}</button>            
              </a>
            )}
            <h2 className='hid my-20 text-5xl' id='arr' 
                onClick={() => {}} style={{display: props.arrow ? 'block' : 'none'}}>↓</h2>
          </center>
        </div>
      </animated.div>
    )
}

export {HeroIndustries}