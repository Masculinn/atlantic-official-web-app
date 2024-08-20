"use client"

import React,{useEffect, useRef, useState} from 'react'
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';
import { Manrope } from "next/font/google";

const font = Manrope({
    subsets: ["latin"]
})


const Blog = ({blogs,dark}) => {

  const BlogDiv = ({title, des, imgAlt, imgSource, sector, linkedinUrl}) => {

    const Loader = () => {
        const [isLoad, setLoad] = useState(true);
      
        const handleImageLoad = () => {
          setLoad(false);
        };
      
        return (
          <div className={`w-full h-auto  ${dark && 'lg:border lg:border-white lg:border-t-0'}`}>
            <center>
              {isLoad && <span className="loader top-auto mt-20"></span>}
              <Image
                src={imgSource}
                alt={imgAlt}
                height={600}
                width={600}
                priority={false}
                className={`h-auto w-full mx-auto transform transition-all duration-500 hover:scale-105 ${
                  isLoad ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={handleImageLoad}
              />
            </center>
          </div>
        );
      };
    return (
      <div className={`w-full max-w-md h-full my-16 lg:shadow-2xl mx-4 lg:mx-12 lg:w-1/4 ${dark ? 'text-white' : 'text-black bg-transparent'} cursor-pointer ${font.className}`}>
        <a href={linkedinUrl} rel="noreferrer" target='_blank'>
          <div className={`w-full text-start h-1/3 lg:px-8 justify-center tracking-tight hover:underline hover:text-blue-400 ${dark && 'lg:border-t-2 lg:border-r-2 lg:border-l-2'}`}>
            <h2 className=' text-2xl py-4 transition-all duration-300'>{title}</h2>
            <p className={`py-2 ${dark ? ' text-slate-200' : ' text-black'} `}>{des}</p>
          </div>
        <div className={`w-full text-start h-1/6 ${dark ? 'text-white lg:border-l-2 lg:border-r-2' : 'text-slate-900'}  text-2xl lg:px-8 py-4`}>
        | {sector}
        </div>
        <Loader />
        </a>
      </div>
  )
  }
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
    <animated.div className={`w-full min-h-screen ${dark ? 'bg-gray-900' : 'bg-transparent' } `} style={animation} ref={ref}>  
        <div className={`flex flex-wrap justify-center items-center ${dark ? 'text-white' : 'text-black'}  -mt-6`}>
          {blogs.map((val, key) => {
              return <BlogDiv {...val} key={key} />
          })}
      </div>
    </animated.div>
  
  )
}

export {Blog}