import React from "react";
import Head from "next/head";
import { Header } from '@/components/header';
import { Footer } from "@/components/footer";
import { Incentives } from "@/components/agency/incentives";

export default function Incentive() {
    const seo = [
        {
            name: "description",
            content: "Türkiye Cumhuriyeti'nin İş Seyahat Teşvikleri, Türk firmalarının yurt dışındaki iş potansiyellerini değerlendirmeleri için seyahatlerini teşvik etmektedir..."
        },
        {
            name:"robots",
            content: "index, follow",
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
            <title>Atlantic Valley | Devlet Teşvikleri</title>
            {seo.map((val,index) => {
                return <meta key={index} {...val} />
            })}
          </Head>
          <Header dark={true}/>
          <Incentives />  
          <Footer />
        </>
    )
}