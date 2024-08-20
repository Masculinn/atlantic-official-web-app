import Head from 'next/head';
import Script from 'next/script';
import { Entrance } from '@/components/entrance';
import { Partners } from '@/components/partners';
import { Header } from '@/components/header';
import { Manrope } from 'next/font/google';
import { Slogan } from '@/components/slogan';
import {Stats} from '@/components/stats';
import { Blog } from '@/components/blog';
import { ButtonUp } from '@/components/buttonUp';
import { Footer } from '@/components/footer';

import atlanticBlogsData from '@/lib/atlanticBlogsData';
import companiesData from '@/lib/companiesData';

const manrope = Manrope({ subsets: ['latin'] });

export default function Home() {
  const seo = [
    {
      name:"description",
      content:"BÜYÜRKEN YANINIZDAYIZ. Atlantic Valley Partners , küresel bir yönetim danışmanlığı firmasıdır",
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
        <title>Atlantic Valley</title>
          {seo.map((val,index) => {
            return <meta key={index} {...val} />
          })}
        <Script 
            async 
            id="ga-script"
            src={"https://www.googletagmanager.com/gtag/js?id=G-R9FY9KSY4R"} 
            strategy="afterInteractive"
          />  
        <Script 
            strategy="afterInteractive"
            id="ga-script"
        >
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R9FY9KSY4R');
            `}
        </Script>
      </Head>
      <Header dark={true}/>
      <main className={`text-white items-center justify-center bg-transparent w-full h-screen flex ${manrope.className}`} id='main'>
        <Entrance/>
      </main>
        <Slogan 
          title={"Avrupada'ki faaliyetlerinizin %60'ının devlet desteği ile karşılandığını biliyor muydunuz?"}
          textSize={"5"}
          textColor1={`text-white`}
          textColor2={"text-white"}
          buttonColor={"bg-white"}
          buttonTextColor={"text-black"}
          des={"Size en uygun devlet teşviklerinin neler olduğunu öğrenmek ister misiniz?"}
          buttonText={"Devlet Teşvikleri"}
          bgColor={"bg-slate-950"}
          route={"/incentive"}
        />
      <Partners props={companiesData} />
      <Stats />
      <Blog blogs={atlanticBlogsData}/>
      <ButtonUp />
      <Footer />
    </>
  )
}

