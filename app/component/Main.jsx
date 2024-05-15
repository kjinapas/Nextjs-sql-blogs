"use client";
import React, { useState, useEffect,useRef } from "react";



import axios from "axios";
import {Image} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {CircularProgress} from "@nextui-org/react";
import Link from 'next/link'

const Main = () => {
  const [articles, setArticles] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(8); // Number of articles initially visible
  const [isLoading, setIsLoading] = useState(false);
  const [Loading,set_Loading] = useState(true)

  async function getArticles() {
	set_Loading(true)
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/article`
    );
    setArticles(res.data);
		set_Loading(false);

  }

  useEffect(() => {

    getArticles();
  }, []);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleArticles(articles.length); // Show 10 articles
      setIsLoading(false);
    }, 1000); // Simulate loading delay
  };

  return (
    <>
     

  <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800 ">
	<div className="container p-6 mx-auto space-y-4">
		<div className="space-y-2 text-center">
			<h2 className=" xl:text-2xl text-2xl 2xl:text-4xl font-bold">Science, Digital Technology and Innovation</h2>
			<p className="font-serif text-sm dark:text-gray-600">วิทยาศาสตร์ เทคโนโลยีดิจิทัล และนวัตกรรม </p>
		</div>
		{Loading?<CircularProgress aria-label="Loading..." className="mx-auto" />:
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
		{articles.slice(0,visibleArticles).map((article,index)=>(
			<article key={index} className="flex flex-col dark:bg-gray-50">
			
				<Image isZoomed width={300} alt={article.Nid} className="object-cover w-full h-52  rounded-md" src={article.image_url} />
			<div className="flex flex-col flex-1 p-6 ">
				<div className="text-xs tracking-wider uppercase dark:text-violet-600">{article.category}</div>
				<p className="flex-1 py-2 text-md font-semibold leading-snug text-gray-800 ">{article.title} <Link  className=" text-blue-700 hover:text-blue-200" target="_blank"  href={`/content/${article.Nid}`}>อ่านต่อ...</Link></p>
       
				<div className="flex flex-wrap justify-between pt-1 space-x-2 text-xs dark:text-gray-600">
					<span>{article.date}</span>
				</div>

			</div>
     
		</article>
		))}
		
		
	</div>
		}
		
	</div>
</section>
<div className=" text-center">
{visibleArticles < articles.length && (
        <Button color="primary"
          onClick={loadMore}
          disabled={isLoading}
        >
          {isLoading ?   <Button color="primary" isLoading/> : "Load More..."}
        </Button>
      )}
  </div>
    </>
  );
};

export default Main;
