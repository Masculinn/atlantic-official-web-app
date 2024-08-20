import React from "react";
import Image from "next/image";
import { AuthUI } from "@/components/authUI";

export default function Admin() {
    const imageArray = [
        {
            src: "/agency/partners/devburak.jpg",
            size: 50,
        },
        {
            src: "/agency/partners/mukan.jpg",
            size: 50,
        },
        {
            src: "/agency/partners/eren.jpg",
            size: 50,
        },
        {
            src: "/agency/partners/gokce.png",
            size: 50,
        },
        {
            src: "/agency/partners/ozay.png",
            size: 50,
        },
    ]

    const ImageHolder = ({size, src}) => {
        return <Image width={size} height={size} src={src} alt="atlantic valley partners" className="w-10 h-10 rounded-full border-2 border-white" />
    }

    return (
        <main className="w-full flex">
            <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
                <div className="relative z-10 w-full max-w-md">
                    <Image src={"/main/atlantic-white-logo.png"} width={150} height={150} alt="alternative"/>
                    <div className=" mt-16 space-y-3">
                        <h3 className="text-white text-3xl font-bold">Atlantic Valley Partners Adminastration.</h3>
                        <p className="text-gray-300">
                            Kayıtlı şifrenizi girin ve bloglar aynı zamanda verileri eklemeye hemen başlayın!
                        </p>
                        <div className="flex items-center -space-x-2 overflow-hidden">
                            {imageArray.map((val,index) => (
                                <ImageHolder {...val} key={index}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-0 my-auto h-[500px]"
                    style={{
                        background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)", filter: "blur(118px)"
                    }}
                >
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center h-screen bg-transparent backdrop-blur-lg">
                <div className="w-full max-w-md space-y-8 px-4 bg-transparent text-gray-600 sm:px-0 ">
                    <AuthUI />
                </div>
            </div>
        </main>
    )
}

