"use client"

import { useState, useEffect, useRef } from "react";
import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { SiBloglovin } from "react-icons/si";

const Hero = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [state, setState] = useState(false)
    const [seq, setSeq] = useState(false)

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
        onRest: () => {setSeq(true)}
      });

    const isResponsive = useMediaQuery({
        query: '(max-width:768px)'
    })
    
3
    const MailToButton = () => {        
        const phoneNumber = "+48690148044"; 
        const message = "Merhaba, ";         
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
        return (
            <a className="flex items-center justify-center gap-x-1 py-4 px-6 text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-full md:inline-flex" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Bize Hızlıca Ulaşın 
                <FaArrowRight className="ml-1"/>
            </a>
        );
      };

    const navigation = [
        { title: <FaInstagram className="w-8 h-8 text-white"/>, path: "https://www.instagram.com/atlanticvalleyagency0/" },
        { title: <FaLinkedin  className="w-8 h-8 text-white"/>, path: "https://www.linkedin.com/company/atlantic-valley-marketing-agency/" },
        { title: <SiBloglovin  className="w-8 h-8 text-white"/>, path: "/agency/blogs" },

    ]
    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])


    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <a href="/">
                <Image
                    src={"/agency/avg-agency-logo.png"}
                    width={isResponsive ? 150 : 200}
                    height={isResponsive ? 60 : 80}
                    alt="Atlantic Valley Partners Dijital Ajans Logo"
                />
            </a>
            <li className="gap-4 flex flex-row mr-3 lg:hidden">
                <a href="https://www.instagram.com/atlanticvaleyagency/" target="_blank" rel="norefferer"><FaInstagram className="w-8 h-8 text-white"/></a>
                <a href="https://www.linkedin.com/company/atlantic-valley-marketing-agency/" target="_blank" rel="norefferer"><FaLinkedin  className="w-8 h-8 text-white"/></a>
            </li>
        </div>
    )

    return (
        <div className="bg-gray-900 lg:pb-24 pb-16 min-h-screen" ref={ref} >
            <header className="-mt-4">
                <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                    <Brand />
                </div>
                <nav className={`pb-5 md:text-sm ${state ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                    <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                        <Brand />
                        <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                            <animated.ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0" ref={ref} style={animation}>
                                {
                                    navigation.map((item, idx) => {
                                        return (
                                            <li key={idx} className={`text-gray-300 ${idx == 2 && 'underline underline-offset-4 font-bold'} hover:text-gray-400`}>
                                                <a href={item.path} target="_blank" rel="noreferrer" className="block">
                                                    {item.title}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </animated.ul>
                        </div>
                    </div>
                </nav>
            </header>
            <section className="relative h-3/4">
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 lg:py-28 py-36 md:px-8">
                    <div className="space-y-5 max-w-4xl mx-auto text-center">
                        <animated.h2 className="text-4xl text-white font-extrabold tracking-tighter mx-auto md:text-5xl" style={animation}>
                            Türkiye'nin İlk <span className="money">Finfluencer</span> Pazarlama Ajansı
                        </animated.h2>
                        <p className={`max-w-2xl mx-auto text-gray-400 transition-all duration-500 ${seq && 'animate-pulse'}`}>
                            Atlantic Valley Partners Marketing Agency.
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="justify-center items-center gap-x-3 sm:flex">
                            <MailToButton />
                        </form>
                        </div>
                </div>
                <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
            </section>
        </div>
    )
}

export {Hero}