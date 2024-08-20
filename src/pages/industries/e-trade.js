import React from "react";
import Head from "next/head";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ButtonUp } from "@/components/buttonUp";
import { HeroIndustries } from "@/components/industries/heroIndustries";
import { ReferanceGraph } from "@/components/industries/referanceGraph";
import { Steps } from "@/components/industries/steps";
import { ReferancesList } from "@/components/referancesList";
import eTradeSteps from "@/lib/industries/eTradeSteps";

export default function ETrade() {
    const seo = [
          {
              name:"description",
              content: "E-Ticaret Dunyası, insanların bildiğinin aksine pasif gelir kaynağı olmadığını çok daha kapsamlı ve geniş bir operasyon olduğunun farkındayız."
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
            imgSrc: "/atlantic/companiesMedia/santa_ref.png",
            imgAlt: "Santa Esmeralda",
            name: "Santa Esmeralda",
            des: "E-ticaret ve dijital pazarlama alanındaki en büyük satış hacmine ulaşan markamız Santa Esmeralda'da bu yıl içerisinde 1  Milyon Dolarlık ciroyu geride bırakırken %96 mutluluk oranı ile 4800 müşteriye Pırlanta El Yapımı Yüzüklerimizle buluşturduk",
            buttonName: "Santa",
            link: "https://www.etsy.com/shop/santaesmeralda"
        },
        {
            imgSrc: "/atlantic/companiesMedia/sakura_ref.png",
            imgAlt: "Sakura",
            name: "Sakura",
            des: "Atlantic Valey'e ait olan markalardan biri olan Sakura Garden'da, 2500'den fazla satış ve %98 oranında mutlu müşteri istatisliği ile birlikte ilerliyoruz. Bu markalaşma ve e-ticaret operasyonunu 22'den fazla ülkedeki müşterilerimize ulaştırıyoruz",
            buttonName: "Sakura",
            link: "https://www.etsy.com/shop/SakuraGardens"
        },   
      ]

      return (
        <>
            <Head>
                <title>Atlantic Valley | E-TİCARET</title>
               {seo.map((val,index) => {
                    return <meta key={index} {...val} />
                })}
            </Head>
            <Header dark={true} />
            <ButtonUp />
                <HeroIndustries 
                    top="E Ticaret" 
                    main="Milyarlarca dolarlık işlem hacmiyle..."
                    des="E-Ticaret Dunyasi, insanların bildiğinin aksine pasif gelir kaynağı olmadığını çok daha kapsamlı ve geniş bir operasyon olduğunun farkındayız. Tedarik zinciri planlamasından maliyet kazançlı depo fikrine, depodan marka copyright işlemlerine kadarki bütün alt elementleri ile markalarımıza profesyonel hizmetler veriyoruz."
                    buttonText="Referanslarımız"
                    on={true}
                    textSize={6}
                    buttonLink = {"/referances"}
                    marginTop = {24}
                />
            <ReferanceGraph 
                name2="2019 e-ticaret 578 Trillion $" 
                name1="2021 e-ticaret 870 Trillion $"
                val1={72}
                val2={28}
                worth2={578}
                worth1={870}
                currency={'T'}
                link="Euromonitor International"
                header="Global e-ticaret hacminin 2016-2020 yılları arasında yıllık ortalama büyüme oranı %21 ile toplam 2,5 Trilyon Dolardır"
                desc="2019-2021 Amerika'daki toplam parekende satışların içindeki e-ticaret hacmi"

            /> 
            <Steps steps={eTradeSteps}/>
            <ReferancesList props={referances}/> 
            <Footer />
        </>
      )
}