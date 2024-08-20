'use client'

import React,{useEffect, useRef, useState} from 'react'
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';
import { Manrope } from 'next/font/google';

const font = Manrope({
    subsets: ['latin'],
})

const Partners = (props) => {
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
        <animated.div className={`text-black justify-center items-center flex bg-transparent w-full h-screen sm:mt-20 mt-20 lg:mt-0 ${font.className}`} style={animation} ref={ref}>
            <div>
                <div className=" bg-transparent p-5  text-center ">
                    <p className=" lg:text-lg md:text-m sm:text-sm text-sm text-slate-600">-{props.props.subHeader}-</p>
                    <h2 className="tracking-tight lg:text-3xl md:text-xl sm:text-lg text-2xl text-black text-center">{props.props.header}</h2>            
                </div>
                <div className="">
                    <div className="relative inline-flex overflow-x-hidden">
                        <div className="py-12 whitespace-nowrap" id="marquee1">
                          {props.props?.images.map((val ,key) => {
                            return <Image key={key} alt={val.imgAlt} src={val.img} height={200} width={200} className={` object-contain lg:mx-14 md:mx-10 sm:mx-8 mx-2 inline-flex lg:h-30 lg:w-32 ${key < 4 ? 'md:w-24': 'md:w-20'} md:h-20 h-14 w-16 `}/>
                          })}
                        </div>
                        <div className="absolute top-0 py-12 whitespace-nowrap" id="marquee2">
                          {props.props?.images.map((val ,key) => {
                            return <Image key={key} alt={val.imgAlt} src={val.img} height={200} width={200} className={`object-contain lg:mx-14 md:mx-10 sm:mx-8 mx-2 inline-flex lg:h-30 lg:w-32  ${key < 4 ? 'md:w-24': 'md:w-20'} md:h-20 md:w-24 h-14 w-16`}/>
                          })}
                        </div>
                    </div>
                </div>
            </div>        
        </animated.div>
        )
}

export {Partners};