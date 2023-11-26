import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../api/store';

export const SuspenseLoading = () => {


    return (
        <div className="h-screen w-screen flex  justify-center items-center	fixed opacity-20 bg-gray-100 ">
            <div className="relative  ">
                <div className="w-20 h-20 border-gray-200 border-2 rounded-full"></div>
                <div className="w-20 h-20 border-gray-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
            </div>

            <div className="relative">
                <div className="w-10 h-10 border-gray-200 border-2 rounded-full"></div>
                <div className="w-10 h-10 border-gray-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
            </div>

            <div className="relative">
                <div className="w-5 h-5 border-gray-200 border-2 rounded-full"></div>
                <div className="w-5 h-5 border-gray-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
            </div>
        </div>
    );
};


export const ServiceLoading = () => {
    const isLoading = useSelector((s: RootState) => s.loading)

    return (
        <>
            {isLoading ? <div className="h-screen w-screen inset-0 fixed flex justify-center items-center	opacity-20 bg-gray-500 ">
                <div className="relative  ">
                    <div className="w-20 h-20 border-gray-200 border-2 rounded-full"></div>
                    <div className="w-20 h-20 border-gray-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
                </div>

                <div className="relative">
                    <div className="w-10 h-10 border-gray-200 border-2 rounded-full"></div>
                    <div className="w-10 h-10 border-gray-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
                </div>

                <div className="relative">
                    <div className="w-5 h-5 border-gray-200 border-2 rounded-full"></div>
                    <div className="w-5 h-5 border-gray-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
                </div>
            </div> : <></>}

        </>

    );
};

