import React from "react"
import Head from "next/head";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ButtonUp } from "@/components/buttonUp";
import { Story } from "@/components/story";

export default function WhoWeAre() {
    const seo = [
        {
            name: "description",
            conent: "Biz Kimiz? Atlantic Valley Partner kimdir?"
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
                <title>Atlantic Valley | Biz Kimiz?</title>
                {seo.map((val,index) => {
                    return <meta key={index} {...val} />
                })}
            </Head>
            <Header dark={true}/>
            <ButtonUp />
            <Story />
            <Footer />
        </>
    )
}