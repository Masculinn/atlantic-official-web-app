import React from "react";
import blogsData from "@/lib/agency/blogsData";
import { Header } from "@/components/header";
import { BlogsChild } from "@/components/agency/blogsChild";
import { Footer } from "@/components/footer";
import Head from "next/head";
import { AgencyHeader } from "@/components/agency/agencyHeader";

export default function BlogPage() {
    const seo = [
      {
        name: "description",
        content: "Borsa İstanbul'da Endeksler"
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
          <title>Atlantic Valley | BLOG FINFLUENCER</title>
          {seo.map((val,index) => {
            return <meta key={index} {...val} />
          })}
        </Head>
        <AgencyHeader />
        <section className="w-full h-auto bg-gray-900 pb-16">
            {blogsData.map((blog, index) => (
              <BlogsChild key={index} {...blog}/>
            ))}
        </section>    
        <Footer />
      </>
  );
};
