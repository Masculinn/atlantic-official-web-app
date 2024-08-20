"use client"

import React, {useState} from 'react';

import { HeroIndustries } from './industries/heroIndustries';
import { FaFileDownload } from "react-icons/fa";

const InvestingComponent = () => {
    const [isClicked, setIsClicked] = useState(false);



    return (
      <section>
        <HeroIndustries 
          top={"Yatırımlarınızı Değerlendirin"}
          main={"Kazancınızın Sınırını Zorlayın"}
          des={" Yatırım dünyasında fark yaratan hizmetlerimizle birikimlerinizi doğru adımlarla değerlendirmenize yardımcı oluyoruz"}
          buttonLink={`https://www.linkedin.com/posts/atlantic-valley-partners_teknoloji-ekonomi-enerji-activity-7056985720854315008-x3um?utm_source=share&utm_medium=member_desktop`}
          buttonText={`${isClicked ? 'İletişime Geçin' : 'Neden Polonya?'}`}
          on={true}
          textSize={6}
        />
        <div className=' w-full h-screen items-center justify-center flex bg-slate-950'>
          <div className={`md:w-full md:h-2/3 sm:w-full sm:h-2/3 w-full h-2/3 lg:w-3/5 bg-transparent shadow-2xl transition-all rounded-lg bg-opacity-50 justify-center items-center flex bg-cover bg-no-repeat investment-bg `}>
          <a
              href={'/main/investment.pdf'}
              download
              className="text-6xl text-white cursor-pointer hover:scale-125 transition-transform duration-300"
              id="section_font"
              onClick={()=> {setIsClicked(true);}}
          >
          <FaFileDownload />
        </a>
      </div>
        </div>
      </section>
    )
}

export {InvestingComponent}