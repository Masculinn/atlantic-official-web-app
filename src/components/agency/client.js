'use client'

import React,{ useState, useEffect} from 'react'
import { useSpring, animated } from '@react-spring/web';
import Image from "next/image";
import {  FaArrowLeft, FaInstagram, FaTelegram, FaTiktok, FaTwitter, FaXTwitter } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoStatsChart } from "react-icons/io5";
import { ClientStatistic } from './clientStatistic';    
import { ClientGraph } from './clientGraph';

const Client = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    
    const animation = useSpring({
        from: {opacity: 0},
        to: {opacity: isVisible ? 1 : 0},
        delay: 500,
        config: {
        duration: 500,
        }
    })

    const Tag = ({tag}) => {
        return (
            <span key={tag} className={`bg-blue-500/60 text-white rounded-s-full rounded-e-full px-4 py-1`}>#{tag}</span>
        )
    }

    const TagShower = ({ tags, intervalTime }) => {
        const [visibleIndex, setVisibleIndex] = useState(0);
      
        const springProps = useSpring({
          opacity: 1,
          from: { opacity: 0 },
        });
      
        useEffect(() => {
          const interval = setInterval(() => {
            setVisibleIndex(prevIndex => (prevIndex + 1) % tags.length);
          }, intervalTime);
      
          return () => clearInterval(interval);
        }, [tags, intervalTime, isVisible]);
      
        return (
          <div>
            <animated.span style={springProps} className={` text-white lg:text-lg text-sm rounded-xl lg:px-4 px-2 py-0 lg:py-1 hidden lg:block`}>
              #{tags[visibleIndex]}
            </animated.span>
          </div>
        );
      };

    const Modal = () => {
        return (
            <>
                <div className="fixed inset-0 z-50 ">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="fixed inset-0 bg-black/50 lg:backdrop-blur-xl backdrop-blur-md md:backdrop-blur-lg transition-all duration-150"></div>
                    <div className="relative bg-white/10 p-8 lg:w-3/4 md:w-3/4 md:h-4/5 lg:h-4/5 w-full h-screen rounded-lg z-50 flex flex-col justify-center items-center">
                        <main className='relative flex-wrap items-center justify-between flex  w-full h-auto'>
                            <div className='rounded-lg w-full h-24 bg-black/50 mb-4 items-center flex justify-between text-white'>
                                <span className='text-start font-bold lg:text-xl text-sm lg:pl-8 pl-4'>{props.clientName}</span>
                                <TagShower tags={props.tags} intervalTime={2000} />
                                <li className='text-start font-bold text-xl  lg:pr-8 pr-4 lg:gap-4 gap-2 flex flex-row z-50'>
                                    {props.stats.some(stat => stat.name === "instagram") && (<a href={props.social.instagram} target='_blank' rel='norefferer' className='cursor-pointer w-auto h-auto'><FaInstagram className={`lg:w-8 lg:h-8 w-6 h-6  text-pink-500`}/></a>)}
                                    {props.stats.some(stat => stat.name === "telegram") && (<a href={props.social.telegram} target='_blank' rel='norefferer' className='cursor-pointer w-auto h-auto'><FaTelegram className='lg:w-8 lg:h-8 w-6 h-6  text-sky-400' /></a>)}
                                    {props.stats.some(stat => stat.name === "twitter") && (<a href={props.social.twitter} target='_blank' rel='norefferer' className='cursor-pointer w-auto h-auto'><FaXTwitter className='lg:w-8 lg:h-8 text-white'/></a>)}
                                    {props.stats.some(stat => stat.name === "community") && (<a href={props.social.community} target='_blank' rel='norefferer' className='cursor-pointer w-auto h-auto'><HiMiniUserGroup className='lg:w-8 lg:h-8 text-sky-400'/></a>)}
                                        {props.stats.some(stat => stat.name === "tiktok") && (<a href={props.social.tiktok} target='_blank' rel='norefferer' className='cursor-pointer w-auto h-auto'><FaTiktok className='lg:w-8 lg:h-8 text-pink-500'/></a>)}
                                </li>
                            </div>
                            <div className='lg:rounded-r-none lg:rounded-l-lg rounded-lg lg:w-1/2 w-full lg:h-80 h-60 flex flex-col bg-black/50 items-center text-center justify-center'>
                                <animated.div style={animation}>
                                    {isVisible && <ClientStatistic stats={props.stats} />}
                                </animated.div>
                            </div>
                            <div className='lg:w-1/2 w-full lg:rounded-r-lg lg:rounded-l-none rounded-lg lg:h-80 h-52 bg-black/50 flex lg:flex-col lg:mt-0 mt-4 flex-row items-center text-center justify-center '>
                                <ClientGraph stats={props.graphData}/>
                            </div>
                        </main>                            
                        <button className="mt-4 items-center self-start z-50 bottom text-center flex justify-center bg-black/50 hover:bg-white hover:text-black transition-all duration-75 text-white font-bold py-2 px-4 rounded-lg" onClick={() => {setIsVisible(prev => !prev)}} >
                            <FaArrowLeft className='mr-2'/> Geri
                        </button>
                    </div>  
                </div>
                </div>
            </>
        );
        };

    return (
        <animated.main className={'mb-8'}>
            <div className={`w-full h-60 sm:h-52 md:h-56 ${isVisible ? 'block': 'hidden'}  `}>
                {isVisible && <Modal />}
            </div>
            <div className={`w-full h-60 sm:h-52 md:h-56 ${isVisible ? 'hidden': 'block'}`}>
                <Image
                    src={props.avatar}
                    className={`w-full h-full object-cover object-center shadow-md rounded-xl`}
                    alt={props.clientName}
                    height={480}
                    width={480}
                />
            </div>
            <div className="mt-4">
                <h4 className={`text-lg text-slate-200 pb-2 font-semibold duration-300 transition-all  ${isVisible ? 'hidden': 'block'}`}>{props.clientName}</h4>
                <div className="justify-center flex flex-col  overflow-hidden">
                    <ul className={`text-white text-center font-semibold  text-lg tracking-tight ${isVisible ? 'hidden': 'block'} text-start`}>
                        <li className='list-none'><span className='text-xl text-sky-400 font-bold'>{props.follower}K</span> instagram takipçi sayısı</li>
                        <li className='list-disc'><span className='text-xl text-sky-400 font-bold'>{props.story}K</span> instagram story izlenmesi</li>
                    </ul> 
                </div>
                <button onClick={() => {setIsVisible(prev => !prev)}} className="w-full lg:w-auto flex items-center justify-center gap-x-2 mt-4 py-2  px-4 text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-md md:inline-flex">
                    İstatistikleri Görüntüle <IoStatsChart />
                </button>
            </div>
        </animated.main>
    )
}

export {Client};

