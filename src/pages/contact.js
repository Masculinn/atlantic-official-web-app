import React from "react";
import Head from 'next/head';
import { ContactUsComponent } from "@/components/contactUsComponent"
import { Header } from '@/components/header';

export default function Contact() {
    return (
        <>
          <Head>
            <title>Atlantic Valley | İletişime Geçin</title>
            <meta name="description" content="BÜYÜRKEN YANINIZDAYIZ. Atlantic Valley Partners , küresel bir yönetim danışmanlığı firmasıdır. Önde gelen işletmelerin, hükümetlerin ve kurumların güvenilir danışmanıyız." />
            <meta property="og:title" content="BÜYÜRKEN YANINIZDAYIZ" />
            <meta name='robots' content='index, follow' />
          </Head>
          <Header dark={true}/>
          <main>
            <ContactUsComponent />
          </main>
        </>
    )
}