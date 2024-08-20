"use client"

import React,{useEffect, useRef, useState} from 'react'
import { useSpring, animated } from '@react-spring/web';
import dynamic from 'next/dynamic';

const CountUp = dynamic(() => import('react-countup'), { ssr: false });

const AgencyStats = () => {
    const stats = [
        {
            data: 1.15,
            curr: "M+",
            desc: "toplam takipçi"
        },
        {
            data: 300,
            curr: "K+",
            desc: "hikaye erişimi"
        },
        {
            data: 5,
            curr: "M+",
            desc: "aylık hesaba erişim"
        },
    ]

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        }, { threshold: 0.5 });
    
        observer.observe(ref.current);
    
        return () => {
          observer.disconnect();
        }
      }, []);

    const animation = useSpring({
      from: {opacity: 0},
      to: {opacity: isVisible ? 1 : 0},
      delay: 500,
      config: {
        duration: 500,
      }
    })


    return (
        <animated.section className=" bg-gray-900 h-screen w-full flex items-center -mt-1 lg:-mt-0 justify-center" ref={ref}>
            <div className="relative mx-auto px-4 md:px-8">
                <div className="max-w-2xl xl:mx-auto xl:text-center">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        Finans Dünyasına Bizimle Ulaşın!
                    </h3>
                </div>
                <div className="mt-12">
                    <ul className="flex-wrap lg:text-xl text-base lg:gap-x-36 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="sm:max-w-[15rem]">
                                    <h4 className="text-4xl text-white font-semibold"><CountUp start={0} end={isVisible ? item.data : 0} duration={4}/>{item.curr}</h4>
                                    <animated.p style={animation} className="mt-3 text-gray-400 font-medium">{item.desc}</animated.p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </animated.section>
    )
}

export {AgencyStats};