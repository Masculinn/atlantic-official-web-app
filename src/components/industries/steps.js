'use client'

import React, {useEffect, useRef, useState} from 'react'
import { useSpring, animated} from '@react-spring/web'
import { Manrope } from 'next/font/google'

const font = Manrope({
    subsets: ['latin']
})
const Card = ({stepText, stepNumber,stepSister, stepBg, header, bgImage1, bgImage2}) => {
  return (
      <div className={`px-6 ${font.className} py-12 sm:px-8 md:px-12 lg:px-20 h-auto w-full sm:w-1/2 md:w-1/3 ${stepBg} justify-center items-center text-center flex transition-all duration-500 ${!(stepNumber === "") && 'hover:bg-blue-950'}`}> 
      <h2 className={`font-extrabold text-5xl sm:text-6xl mb-12 sm:mb-24 relative top-0 ${stepSister >= 5 && 'bg-sky-500 text-white'}`} id='section_font'>{(stepSister >= 5 || stepText === "") ? '' : (stepNumber)}</h2>
      <div className='bg-no-repeat bg-gradient-to-r bg-cover hover:bg-center duration-700 transition-all' style={{backgroundImage:`url(${bgImage2})`}}>
          <h2 className='text-center text-xl sm:text-2xl text-slate-300 ' id='section_font'>{header}</h2>
          <br />
          <h3 className='text-center text-sm sm:text-md lg:text-lg' id='section_font'>{stepText}</h3>
          {(stepSister >= 5) && (<a href="/contact">
          <button className="h-12 sm:h-16 tracking-tighter rounded-md w-32 sm:w-48 mt-2 sm:mt-4 text-md sm:text-xl text-white hover:text-white duration-500 bg-transparent hover:translate-x-4" id="section_font">İletişime Geçin →</button></a>)}
      </div>
  </div>
  )
  
}
const Steps = (steps) => {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const animation = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0,0,0)' : 'translate3d(0,25%,0)',
        config: {
          mass: 1,
          tension: 120,
          friction: 40,
          duration: 500,
        },
      });
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
  return (
        <animated.div className='h-auto lg:h-screen w-full flex flex-wrap scale-100 text-white' ref={ref} style={animation}>
            {steps.steps.map((val, key) => {
                return <Card key={key} stepSister={key} stepNumber={val.number} stepText={val.text} header={val.header} stepBg={val.bgColor} bgImage1={val.bgImage1} bgImage2={val.bgImage2}/>
            })}
        </animated.div>
    )
}

export {Steps};