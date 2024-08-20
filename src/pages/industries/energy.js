import React from 'react';
import Head from "next/head";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ButtonUp } from "@/components/buttonUp";
import { HeroIndustries } from "@/components/industries/heroIndustries";
import { ReferancesList } from "@/components/referancesList";
import { Blog } from '@/components/blog';
import energyBlogs from '@/lib/industries/energyBlogs';

export default function Energy() {
    const seo = [
        {
            name:"description",
            content:"Avrupa'da gün geçtikçe büyüyen Yenilenebilir Enerji Dönüşümü ve aynı zamanda savaş sonrası gelişen Enerji ihtiyacında gelişen Kömür açığında aktif rol oynamaya çalışıyoruz.",
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
            imgSrc: "/atlantic/companiesMedia/masis_ref.png",
            imgAlt: "MASIS",
            name: "MASIS",
            des:"MASİS ile bir Avrupa Birliği projesinde bir araya gelip kendilerini Polonya Katowice Bolgesindeki Touran Maden İşletmeleri ve GIPH (Polanya İşçi ve İşveren Sendikası) ile buluşturduk. Sektör dinamikleri ve iki ülke arasında kurulabilecek ticari köprüler hakkında fikir alışverişinde bulunduk",
            buttonName: "Masis",
            link: "https://masis.org.tr/"
        },
        {
            imgSrc: "/atlantic/companiesMedia/carewind_ref.png",
            imgAlt: "Carewind",
            name: "Carewind",
            des: "Avrupa'da kurumsallaşma ve şirketleşme ayağını tamamladığımız onlarca şirketten biri olan Carewind şirketimizle birlikte Avrupa'daki yolumuza birlikte devam ettik ve kendileriyle birlikte bir çok Enerji Fuarına katılarak kendilerini temsil ettik",
            buttonName: "Carewind",
            link: "https://www.carewindservice.com/"
        },   
      ]

    return (
        <>
            <Head>
                <title>Atlantic Valley | Enerji</title>
                {seo.map((val,index) => {
                    return <meta key={index} {...val} />
                })}
            </Head>
            <Header dark={true} />
            <ButtonUp />
            <HeroIndustries 
              top="Enerji" 
              main="Yenilenebilir Enerji ve Doğal Kaynaklar "
              des="Avrupa'da gün geçtikçe büyüyen Yenilenebilir Enerji Dönüşümü ve aynı zamanda savaş sonrası gelişen Enerji ihtiyacında gelişen Kömür açığında aktif rol oynamaya çalışıyoruz."
              buttonText="Referanslarımız"
              textSize ={6}
              on={true}
              buttonLink = {"/referances"}
            />
           <HeroIndustries 
                top="Enerji" 
                main="Enerji Sektörü"            
                des="Enerji alanındaki müşterilerimizle birlikte, sektörün ileri gelen firmalarını aynı masada oturtmak bu alandaki başlıca görevlerimizden. Daha önce partnerlerimizle ve firmalarımızla bir çok toplantı gerçekleştirdik ve 2022 yılı Enerji Sektörü adına Atlantic Valley için en verimli geçen yıllarından biri oldu."
                buttonText="Referanslarımız"
                textSize ={6}
                on={false}
                bgColor={"bg-slate-950"}
                mid={true}
                mode={true}           
                buttonLink = {"/"}       
            />
            <ReferancesList props={referances}/>
            <Blog blogs={energyBlogs} dark={false}/>
            <Footer />
        </>
    )
}