import React from "react";
import Head from "next/head";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ButtonUp } from "@/components/buttonUp";
import { InvestingComponent } from "@/components/investingComponent";
import { Blog } from "@/components/blog";
import ayData from "@/lib/ayData";

export default function Investing() {
    const seo = [
        {
            name: "description",
            content: "Avrupa'da yatırım danışmanlığı"
        },
        {
            name:"robots",
            content: "index, follow"
        },
        {
            name:"geo.country",
            content: "TR",
        },
        {
            name:"geo.placename",
            content: "Turkey",
        },          
        {
            name:"author",
            content: "Atlantic Valley Partners",
        },  
    ]
    return (
        <>
            <Head>
                <title>Atlantic Valley | Avrupa&apos;da Yatırım</title>
                {seo.map((val,index) => {
                    return <meta key={index} {...val} />
                })}
            </Head>
            <Header dark={true}/>
            <ButtonUp />
            <InvestingComponent />
            <Blog blogs={ayData} dark={true}/>
            <Footer />
        </>
    )
}