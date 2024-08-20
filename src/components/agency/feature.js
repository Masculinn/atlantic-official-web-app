"use client"

import { useState, useEffect, useRef } from "react";
import { useTrail, animated, useSpring } from "@react-spring/web";

import { IoShareSocialOutline } from "react-icons/io5";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsGraphUpArrow } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";

const Feature = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isFaded, setIsFaded] = useState(false)

    const isResponsive = useMediaQuery({
        query: "(max-width:768px)"
    })
    const features = [
        {
            icon: <IoShareSocialOutline className="h-7 w-7" />,
            title: "Sosyal Medya Yönetimi",
            desc: "İnfluencerları titizlikle katagorize ediyor ve işletmelerin belirli ihtiyaçlarına uygun işbirlikleri yaratıyoruz.",
            delay: 200
        },
        {
            icon: <VscWorkspaceTrusted className="h-7 w-7" />,
            title: "Reklam yönetimi",
            desc: "Hizmetlerimiz ile reklam vermek isteyen şirketleri doğru influencer kitleleri ile buluşturuyoruz.",
            delay: 400
        },
        {
            icon: <BsGraphUpArrow className="h-7 w-7" />,
            title: "Markalaşma",
            desc: "Sosyal medya hesaplarını yöneterek trendleri SEO için optimize ederek online varlığınızı yükseltiyoruz.",
            delay: 600
        },
    ]

    const definition = {
        title: <><span className="money lg:text-7xl text-5xl">Finfluencer</span><br /><span className="lg:text-6xl">Nedir?</span></>,
        exp: "Finfluencer yani finans influencerı, dijital çevrede var olan ve finans alanında etki sahibi olan dinamik bireylerdir. Bu uzman içerik üreticileri, yatırımlar, tasarruf stratejileri ve ekonomik eğilimler konusunda bilgili bakış açıları ile izleyici kitlesini etkileşime sokarlar. Finansal uzmanlıklarının yanı sıra kitle hitabeti ile kendi topluluklarını oluşturmuşlardır. Bu topluluklarını güçlendirmeye devam ederek daha çok kişiye hitap edip bu takipçilerini bilinçli finansal kararlar konusunda yönlendirmeye devam ederler."
    }

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
      
      useEffect(() => {
        setIsVisible((prev) => !!prev);
      }, [isVisible]);
    
      const animation = useSpring({
        from: { opacity: 0 },
        to: { opacity: isVisible ? 1 : 0 },
        config: { duration: 1000 },
        onRest: () => { setIsFaded(true) }
      });

      const trail = useTrail(features.length, {
        from: { opacity: 0, transform: 'translateX(40px)' },
        to: [
          { opacity: isFaded ? 1 : 0, transform: isFaded ? 'translateY(0)' : 'translateX(40px)' },
          { opacity: isFaded ? 1 : 0, transform: isFaded ? 'translateY(0)' : 'translateX(40px)' },
          { opacity: isFaded ? 1 : 0, transform: isFaded ? 'translateY(0)' : 'translateX(40px)' },
        ],
        config: { duration: 1000 },
        delay: (index) => index * 100,
      });
      
      const DesktopLayer = () => {
        return (
        <>
            {trail.map((style, index) => (
                <animated.li key={index} style={{ opacity: style.opacity, transform: style.transform }}>
                    <div className="w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center">
                        {features[index].icon}
                    </div>
                    <div className="mt-4">
                        <h4 className="text-lg text-gray-100 font-semibold">
                            {features[index].title}
                        </h4>
                        <p className="mt-3">
                            {features[index].desc}
                        </p>
                    </div>
                </animated.li>
                ))}
        </>)

      }

      const MobileLayer = () => {
        return (
            <>
                {features.map((val, index) => (
                    <li key={index}>
                        <div className="flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center">
                        {val.icon}
                        </div>
                        <div className="mt-4 lg:my-0">
                            <h4 className="text-lg text-gray-100 font-semibold ">
                                {val.title}
                            </h4>
                            <p className="mt-3">
                                {val.desc}
                            </p>
                        </div>
                    </li>
                ))}
            </>
        )
      }

    return (
        <section className="relative py-28 bg-gray-900 lg:h-screen h-auto w-full flex items-center -mt-1 lg:mt-0  justify-center" ref={ref}>
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
                <animated.div className="lg:max-w-md max-w-lg" style={animation}>
                    <h3 className="text-white text-4xl font-semibold sm:text-4xl">
                        {definition?.title}
                    </h3>
                    <p className="mt-3">
                        {definition?.exp}
                    </p>
                </animated.div>
                <div className="mt-12 lg:mt-12">
                    <ul className="gap-8 lg:grid flex flex-col sm:grid-cols-2">
                        {isResponsive ? <MobileLayer /> : <DesktopLayer />}                        
                    </ul>
                </div>
            </div>
            <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
        </section>
    )
}

export {Feature};