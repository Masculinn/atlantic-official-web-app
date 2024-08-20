'use client'

import React, { useState, useEffect} from 'react';
import { useTransition, animated } from '@react-spring/web';
import { FaWhatsapp } from 'react-icons/fa';
import { HiArrowCircleUp } from "react-icons/hi";

const WhatsAppWidget = () => {
    const data = {
        number: '+48 731 384 284',
        message: 'Merhaba Özay Bey,'
    }
    const redirectToWhatsApp = () => {
        const encodedMessage = encodeURIComponent(data.message);
        const url = `https://api.whatsapp.com/send?text=${encodedMessage}&phone=${data.number}`;
        window.location.href = url;
    };
  return (
    <div className="relative z-50 h-auto ">
      <button
        className="hover:scale-105 transition-transform duration-300 bg-green-600 rounded-full lg:h-16 lg:w-16 md:h-16  md:w-16 sm:h-14 sm:w-14 h-14 w-14 items-center justify-center flex"
        onClick={redirectToWhatsApp}>
        <FaWhatsapp className='lg:h-12 lg:w-12 md:h-16 md:w-16 sm:h-12 sm:w-12 h-12 w-12 text-white' />
      </button>
    </div>
  );
};

const Button = () => {
    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
        className={` hover:scale-105 transition-transform duration-300`}
        onClick={handleClick}
        id='scrollUp'
        >
            <HiArrowCircleUp className=' lg:h-16 lg:w-16 md:h-16 md:w-16 sm:h-12 sm:w-12 h-12 w-12 text-blue-900'/>
        </button>
    )
}
const ButtonUp = () => {          
    const [showButton, setShowButton] = useState(false);
    const [visibleComponent, setVisibleComponent] = useState(1);

  const transitions = useTransition(visibleComponent, {
    from: { opacity: 0, transform: 'translateY(-100%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(10%)' },
    config: { mass: 1, tension: 1000, friction: 30 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleComponent((prevComponent) => (prevComponent === 1 ? 2 : 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
    const handleScroll = () => {
      if (window.pageYOffset > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    
    return (
        <div className={`${showButton ? 'opacity-100' : 'opacity-0'} lg:w-16 md:w-16 w-12 h-auto fixed lg:bottom-4 lg:right-4 bottom-2 right-2 md:bottom-2 md:right-2 z-50`}>
            {transitions((style, item) =>
                item === 1 ? (
                <animated.div style={style}>
                    <WhatsAppWidget />
                </animated.div>
                ) : (
                <animated.div style={style}>
                    <Button />
                </animated.div>
                )
            )}
        {/* {visibleComponent === 1 && <ChildComponent1 />}
        {visibleComponent === 2 && <ChildComponent2 />} */}
        </div>
    )
}

export {ButtonUp};