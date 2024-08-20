"use client"

import React from 'react';
import Image from 'next/image';

const BlogsChild = ({ title, exp, img, authorLogo, authorName, date, subs}) => {
  return (
    <article className="max-w-3xl mx-auto lg:py-24 py-12  lg:bg-transparent lg:scale-110 lg:px-16">
        <Image
          src={img}
          loading="lazy"
          alt={title}
          height={400}
          width={400}
          className="w-full h-60 rounded-t-md object-fill lg:rounded-lg rounded-none"
        />
        <div className="flex items-center lg:ml-0 ml-2 mt-2 pt-3 mr-2">
          <div className="flex-none w-10 h-10 rounded-full">
            <Image
              src={authorLogo}
              height={64}
              width={64}
              className="w-full h-full rounded-full"
              alt={authorName}
            />
          </div>
          <div className="ml-3">
            <span className="block text-white">{authorName}</span>
            <span className="block text-gray-400 text-sm">{date}</span>
          </div>
        </div>
        <div className="pt-3 ml-2 lg:ml-0 mr-2 mb-3">
          <h3 className="text-2xl  text-gray-200 ">{title}</h3>
          <p className="lg:text-slate-300 text-gray-300 text-md mt-4 tracking-tight">{exp}</p>
          {subs.map((val, index) => (
            <>
              <h4 key={index} className='pt-8 text-lg lg:text-white tracking-tight text-white'>{val.header}</h4>
              <p className=' lg:text-slate-400 text-gray-300  text-sm'>{val.exp}</p>
            </>
          ))}
        </div>
    </article>
  );
};

export {BlogsChild};
