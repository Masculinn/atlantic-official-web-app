'use client'

import React from 'react';
import Image from 'next/image';
import { Manrope } from 'next/font/google';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

const manrope = Manrope({ subsets: ['latin'] });

const AgencyHeader = () => {
    const isResponsive = useMediaQuery({
        query: "(max-width:768px)"
    })
    
    return (
        <header className={`top-0 w-full transition-opacity z-50 duration-500 relative ${manrope.className} bg-gray-900`}>
            <nav className="flex items-center justify-between flex-wrap-reverse px-4">
                <a href="/agency">
                    <Image
                        src={"/agency/avg-agency-logo.png"}
                        width={isResponsive ? 150 : 200}
                        height={isResponsive ? 60 : 80}
                        alt="Atlantic Valley Partners Dijital Ajans Logo"
                    />
                </a>
                <li className='gap-4 flex flex-row mr-3'>
                    <a href="https://www.instagram.com/atlanticvaleyagency/" target="_blank" rel="norefferer"><FaInstagram className="w-8 h-8 text-white"/></a>
                    <a href="https://www.linkedin.com/company/atlantic-valley-marketing-agency/" target="_blank" rel="norefferer"><FaLinkedin  className="w-8 h-8 text-white"/></a>
                </li>
            </nav> 
        </header>
    );
  }

  export {AgencyHeader};