"use client"

import React from "react"
import blogsData from "@/lib/agency/blogsData"
import { Blog } from "./blog"

const BlogHolder = () => {
    return (
        <section className=" w-full h-auto bg-gray-900 pb-16 -mt-1 lg:-mt-0">
            <div className="text-center">
                <h1 className="text-4xl text-white font-semibold">
                    Blog
                </h1>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    blogsData.map((items, key) => (
                        <Blog items={items} key={key} count={key} />
                    ))
                }
            </div>
        </section>
    )
}

export {BlogHolder};