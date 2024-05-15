"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@nextui-org/react";

export default function page({ params }) {
  const id = params.slug;
  const [article, setArticles] = useState([]);
  const [Loading, set_Loading] = useState(true);

  async function getArticles() {
    set_Loading(true);
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/article/${id}`
    );
    setArticles(res.data[0]);
    set_Loading(false);
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        {Loading ? (
          <CircularProgress aria-label="Loading..." className="mx-auto" />
        ) : (
          <>
            
              <div
                className="bg-cover bg-center text-center overflow-hidden"
                style={{
                  minHeight: 500,
                  backgroundImage: `url(${article.image_url})`,
                }}
                title="Woman holding a mug"
              ></div>
              <div className="max-w-3xl mx-auto">
                <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                  <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
                    <h1
                      href="#"
                      className="text-gray-900 font-bold text-3xl mb-2"
                    >
                      {article.title}
                    </h1>
                    <p className="text-gray-700 text-xs mt-2">
                      publishing :
                      <a
                        href="#"
                        className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                      >
                        {article.date}
                      </a>
                    </p>
                    <p className="text-xs  font-medium ">
                      category : {article.category}
                    </p>
                    <span
                      className="text-md leading-8 my-5 "
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {article.detail}
                    </span>
                  </div>
                </div>
              </div>
            </>
          
        )}
      </div>
    </>
  );
}
