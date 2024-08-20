'use client'

import React, {useRef, useState, useEffect} from 'react'
import { useSpring, animated } from "@react-spring/web";

const Slogan = (props) => {
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
        <animated.div className={`text-white items-center justify-center flex bg-opacity-95 w-full h-screen ${props.bgColor}`} style={animation} ref={ref}>
            <div>
                <h2 id="section_font" className={`lg:text-${props.textSize}xl md:text-5xl sm:text-4xl text-center ${props.textColor1} text-4xl tracking-tighter m-4`}>
                {props.title}
                </h2>
                <h4 id="section_font" className={`lg:text-lg md:text-m sm:text-sm text-center ${props.textColor2} tracking-tight pl-4`}>
                {props.des}
                <br />
                <a href={props.route}>
                    <button className={`lg:h-20 lg:w-60 h-16 w-48 mx-5 my-5 text-center ${props.buttonColor} ${props.buttonTextColor}  lg:text-xl text-lg font-thin transform transition-all duration-200 hover:scale-105 hover:bg-black hover:border hover:border-black hover:text-white hover:pl-6`} id='section_font'>Devlet Teşvikleri  →</button>
                </a>
                </h4>
            </div>
        </animated.div>
    )
}

export {Slogan}