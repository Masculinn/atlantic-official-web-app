import React from "react"
import Head from "next/head"

import { Graph } from "@/components/agency/graph"
import { Hero } from "@/components/agency/hero"
import { AgencyStats } from "@/components/agency/agencyStats"
import { ClientHolder } from '@/components/agency/clientHolder'
import { Feature } from "@/components/agency/feature"
import { BlogHolder } from "@/components/agency/blogHolder"
import { Geologica } from "next/font/google"
import { Footer } from "@/components/footer"
import { ButtonUp } from "@/components/buttonUp"

const font = Geologica({
    subsets: ['latin']
})

export default function Home() {
    const seo = [
        {
          name: "description",
          content: "Türkiye'nin İlk Finfluencer Pazarlama Ajansı Atlantic Valley Partners Marketing Agency"
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
        <main className={`${font.className}`}>
            <Head>
              <title>Atlantic Valley | Pazarlama Ajansımız</title>
              {seo.map((val,index) => {
                  return <meta key={index} {...val} />
              })}
            </Head>
            <Hero />
            <Feature />
            <ClientHolder />
            <AgencyStats />
            <Graph />
            <BlogHolder />
            <Footer />
            <ButtonUp />
        </main>
    )
}