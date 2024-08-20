import React from 'react';
import Head from "next/head";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ButtonUp } from "@/components/buttonUp";
import { HeroIndustries } from "@/components/industries/heroIndustries";
import { ReferancesList } from "@/components/referancesList";
import { Steps } from '@/components/industries/steps';
import { Blog } from '@/components/blog';
import { Partners } from '@/components/partners';

import itSteps from '@/lib/industries/itSteps';
import techData from '@/lib/industries/techData';
import techBlogsData from '@/lib/industries/techBlogsData';

export default function InformationTechnology() {
    const seo = [
        {
          name: "description",
          content: "Bilgi hizmetlerimiz, işletmenizin büyümesine yardımcı olacak bilgi, araçlar ve teknolojiler sunar. İhtiyaçlarınızı karşılamak için esnek, özelleştirilebilir çözümler sunuyoruz"
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

      const referances = [
        {
            imgSrc: "/atlantic/companiesMedia/edm_ref.png",
            imgAlt: "EDM",
            name: "EDM",
            des: "İş ortaklarımızdan olan EDM Technologies ile birlikte Polanya pazarında bir çok alanda birlikte ilerlemekteyiz. Yazılım ve iş geliştirme kısmında Avrupa pazarında EDM ekibine destek veriyoruz",
            buttonName: "EDM",
            link: "https://www.edmbilisim.com.tr/"
        }
      ]
    return (
        <>
            <Head>
                <title>Atlantic Valley | Bilgi Teknolojileri</title>
                {seo.map((val,index) => {
                    return <meta key={index} {...val} />
                })}
            </Head>
            <Header dark={true}/>
            <ButtonUp />
            <HeroIndustries 
                top="IT Hizmetleri" 
                main="Bilgi Teknolojilerine çözümler sunuyoruz"
                des="Dunyanin en buyuk yatirim sektorlerinden bir tanesinin bilgi teknolojileri oldugu gercegi herkes tarafindan biliniyor. Biz de bu yolda yaratici farkli ve orijinal cozumler sunuyoruz."  
                buttonText="Referanslarımız"
                textSize ={6}
                on={true}
                buttonLink = {"/referances"}
            />   
            <HeroIndustries 
                top="IT Hizmetleri" 
                main="Yazılım"            
                des="Bilgi hizmetlerimiz, işletmenizin büyümesine yardımcı olacak bilgi, araçlar ve teknolojiler sunar. İhtiyaçlarınızı karşılamak için esnek, özelleştirilebilir çözümler sunuyoruz."
                buttonText="Referanslarımız"
                textSize ={6}
                on={false}
                bgColor={"bg-slate-950"}
                mid={true}
                mode={true}
                buttonLink={"/"}  
            />
            <Steps steps={itSteps} />
            <Partners props={techData} />            
            <ReferancesList props={referances} />
            <Blog blogs={techBlogsData} dark={true}/>
            <Footer />
        </>
    )
}