'use client'

import React from "react";
import { Client } from "./client";
import clientData from "@/lib/agency/clientData";

const ClientHolder = () => {
    return (
        <section className=" bg-gray-900 -mt-1 lg:-mt-0">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-xl">
                <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                    Önde gelen Finans İçerik Üreticileri <span className="money">“Finfluencer”</span> ile Dijital Dünya'da Kalıcı İz Bırak!                
                </h3>
                <p className="text-gray-300 mt-3">
                    Atlantic Valley Partners Influencer hub oluşumu  
                </p>
            </div>
            <div className="mt-12">
                <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {
                        clientData.map((item, index) => (
                            <Client {...item} key={index} />
                        ))
                    }
                </ul>
            </div>
        </div>
    </section>
    )
}

export {ClientHolder};


