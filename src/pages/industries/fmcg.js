import React from 'react';
import Head from "next/head";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ButtonUp } from "@/components/buttonUp";
import { HeroIndustries } from "@/components/industries/heroIndustries";
import { ReferancesList } from "@/components/referancesList";


export default function Fmcg() {
    const seo = [
      {
        name:"description",
        content:"Avrupa Operasyonalarında Polonya merkezli çözümler üretmemizin bir çok sebebi var. Ucuz iş gücünden, dinamik bir pazar olmasına; Avrupa ve Doğu arasında köprü olmasından daha nice fazlasına"
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
            imgSrc: "/atlantic/companiesMedia/onur_ayran_ref.png",
            imgAlt: "Onur Ayran",
            name: "Onur Ayran",
            des: "Ukrayna'nın süt ürünleri marketinde ilk sıralarda yer alan Onur Ayran ile Polanya pazarına birlikte girdik ve fabrikalaşma kısmında üretim sürecinde, şirketleşme sürecinde ve Polanya pazarında pazarlama sürecinde birlikte ilerliyoruz.",
            buttonName: "Onur Ayran",
            link: "http://onurayran.com.ua/"
        }
      ]
    return (
        <div>
            <Head>
                <title>Atlantic Valley | Hızlı Tüketim Ürünleri</title>
                {seo.map((val,index) => {
                    return <meta key={index} {...val} />
                })}
            </Head>
            <Header dark={true}/>
            <ButtonUp />
            <HeroIndustries 
                top="Hızlı Tüketim Ürünleri" 
                main="Parkende Ürün Satış Çözümlerimiz"
                buttonText="Referanslarımız"
                textSize={6}
                on={true}
                buttonLink = {"/referances"}
                bgColor={"bg-transparent"}
                mid={false}
                mode={false}
            />
            <HeroIndustries 
                top="Hızlı Tüketim Ürünleri Çözümlerimiz"
                main="Polonya marketinde markalarımızın parekende ürün satışlarındaki operasyonlarını işinin ehli partnerlerimizle birlikte kaynak temininden, lojistik ihtiyaçlarınıza kadar çözüm önerileri üretiyoruz."
                des="Avrupa Operasyonalarında Polonya merkezli çözümler üretmemizin bir çok sebebi var. Ucuz iş gücünden, dinamik bir pazar olmasına; Avrupa ve Doğu arasında köprü olmasından daha nice fazlasına."
                buttonText="Neden Polonya?"
                textSize ={5}
                on={true}
                buttonLink = {"https://www.linkedin.com/feed/update/urn:li:activity:7056985720854315008/"}
                buttonType = {true}
                bgColor={"bg-slate-950"}
                mid={true}
                mode={true}
            />
            <ReferancesList props={referances}/>
            <Footer />
        </div>
    )
}