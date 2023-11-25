import React, { useState } from 'react'
import NavBar from '../../components/layouts/NavBar'
import lifeS from "../../assets/Lifestyle.webp"
import Gift from "../../assets/Gift.webp"
import PIMG from "../../assets/image-4.jpg"
import { useGetServicesQuery } from '../../api/Api'
import { useEffect } from 'react';

function HomePage() {
  const { data, error, isLoading, isSuccess } = useGetServicesQuery('/');
  const [recentBlog, getRecentBlog] = useState([])


  useEffect(() => {
    if (isSuccess && data) {
      getRecentBlog(data?.posts)

    }
  }, [data, isSuccess]);

  return (
    <div>

      <div className="App bg-white dark:bg-slate-900  ">
        <div className=" grid sm:grid-cols-2  md:grid-cols-3 md:gap-4 grid-auto-columns ... ">
          <div className="...  col-span-2 gap-y-2">
            <img className="w-full aspect-square h-full object-cover" src={Gift} />
          </div>
          <div className="  col-span-1 ...  gap-y-2">
            <img className="w-full aspect-square h-full object-cover" src={lifeS} />
          </div>
        </div>
      </div>
      <h1 className="  mx-2 my-6 text-left text-black font-bold text-xl mb-2 leading-tight">Latest Blogs</h1>
      <div className='my-4 mx-2 container container flex flex-wrap flex-no-wrap sm:flex-wrap md:flex-wrap lg:flex-no-wrap xl:flex-wrap ...' >

        {isSuccess ? recentBlog.slice((recentBlog.length) - 4, recentBlog.length).map((item: any, index: any) => {
          return (
            <div className="w-full lg:w-1/2 p-3" key={index}>
              <div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
                <img className="block h-auto w-full lg:w-48 flex-none bg-cover h-24" src={PIMG} />
                <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="text-black font-bold text-xl mb-2 leading-tight">{item?.title}</div>
                  <p className="text-grey-darker text-base">Read more</p>
                </div>
              </div>
            </div>
          )
        }) : <></>}

      </div>
    </div>

  )
}
export default HomePage
