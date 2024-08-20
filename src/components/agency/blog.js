"use client";

import React from "react";
import Image from "next/image";

const Blog = ({items , count}) => {

    return (
        <article className={`max-w-md mx-auto mt-4 shadow-lg rounded-md duration-300 hover:shadow-sm ${count >= 3  ? 'hidden' : ''}`}>
            <a href={items.href}>
                <Image src={items.img} loading="lazy" alt={items.title} height={400} width={400}  className="w-full h-60 rounded-t-md object-cover object-center rounded-lg" />
                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                    <div className="flex-none w-10 h-10 rounded-full">
                        <Image src={items.authorLogo} loading="lazy" height={64} width={64} className="w-full h-full rounded-full" alt={items.authorName} />
                    </div>
                    <div className="ml-3">
                        <span className="block text-white">{items.authorName}</span>
                        <span className="block text-gray-400 text-sm">{items.date}</span>
                    </div>
                </div>
                <div className="pt-3 ml-4 mr-2 mb-3">
                    <h3 className="text-xl text-white">
                        {items.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                </div>
            </a>
        </article>
    )
}

export {Blog};