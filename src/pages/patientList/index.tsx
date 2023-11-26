import React, { useEffect, useState } from 'react';
import InoutCostome from './../../components/inoutCostome/index';
import SubmitButton from './../../components/Buttons/SubmitButton';
import { api, useGetPatientListQuery } from '../../api/Api';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../api/slice/loadingSlice';

function PatientList() {
    const { data, error, isLoading, isSuccess } = useGetPatientListQuery('');
    const [recentBlog, getRecentBlog] = useState([])
    console.log('data',data)
    let dispatch=useDispatch()
  
  
    useEffect(() => {
        dispatch(setLoading(true))

      if (isSuccess && data) {
        getRecentBlog(data.slice((recentBlog.length) - 8))
        dispatch(setLoading(false))
      }
    }, [data, isSuccess]);


    return (
        <div>
            <div className='my-4 mx-2 container container flex flex-wrap flex-no-wrap sm:flex-wrap md:flex-wrap lg:flex-no-wrap xl:flex-wrap ...' >

{isSuccess ? recentBlog.map((item: any, index: any) => {
  return (
    <div className="w-full lg:w-1/2  md:w-1/2 sm:w-1/2 p-3" key={index}>
      <div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
        <img className="block h-auto w-full lg:w-48 flex-none bg-cover h-24" src={item.url} />
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
    );
}

export default PatientList;