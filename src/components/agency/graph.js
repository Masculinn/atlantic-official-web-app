"use client"

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { GraphLine } from "./graphLine";
import { useMediaQuery } from "react-responsive";

const Graph = () => {
    const [activate, setActivate] = useState(false);
    const res = useMediaQuery({
        query: "(max-width:768px)",
    })
    return (
        <section className="relative w-full h-auto mx-auto bg-gray-900 -mt-1 lg:-mt-0">
            <div className="relative z-10 gap-5 items-center lg:flex lg:justify-center lg:-mt-36 lg:items-center h-screen w-full">
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left lg:px-16 items-center justify-center">
                    <h3 className="text-3xl text-white font-semibold md:text-4xl text-center lg:text-start">
                    Markanı <span className="text-indigo-600 font-bold">Büyüt</span>, Etkileşimini <span className="text-indigo-600 font-bold">Arttır!</span>
                    </h3>
                    <p className="text-slate-400 leading-relaxed mt-3 lg:px-0 px-4 text-center lg:text-start">           
                        Markanızı <span className="text-slate-200">güçlendirmek</span> ve etkileşimi <span className="text-slate-200">arttırmak</span> için buradayız! Sunduğumuz stratejik çözümlerle <span className="text-slate-200">markanızın potansiyelini ortaya çıkarıyor</span>, hedef kitlenizle daha yakın bağlar kurmanıza yardımcı oluyoruz.
                    </p>
                    {res ? (
                    <center>
                        <button
                            className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center transition-all duration-100 hover:bg-gray-900 hover:text-white border-white border"
                            onClick={() => {setActivate(true)}}>
                            Etkileşimi Arttır
                            <FaArrowRight className="ml-2"/>
                        </button>

                    </center>): (                    
                        <button
                            className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center transition-all duration-100 hover:bg-gray-900 hover:text-white border-white border"
                            onClick={() => {setActivate(true)}}>
                            Etkileşimi Arttır
                            <FaArrowRight className="ml-2"/>
                        </button>
                    )}
                </div>
                <div className="flex-1 mt-24  lg:mt-5 mx-auto sm:w-auto lg:w-auto lg:mx-16">
                    <GraphLine activate={activate} />
                </div>
            </div>
        </section>
    )
}
export {Graph};

