import React from 'react';
import { useEffect, useState, useRef } from 'react';

const DotTitle = ({ children }) => {

    useEffect(() => {

    }, []);


    return (

        <div className="flex flex-row justify-center ">
            <div className="flex flex-col mt-4 mr-5">
                <div className="rounded-full bg-red w-1 h-1" style={{ backgroundColor: "#FE5E5F" }}></div>
                <div className="rounded-full bg-red w-1 h-1 mt-1" style={{ backgroundColor: "#FE5E5F" }}></div>
                <div className="rounded-full bg-red w-1 h-1 mt-1" style={{ backgroundColor: "#FE5E5F" }}></div>
            </div>
            <div className="font-black text-4xl title">
                {children}
            </div>
            <div className="flex flex-col mt-4 ml-5">
                <div className="rounded-full bg-red w-1 h-1" style={{ backgroundColor: "#FE5E5F" }}></div>
                <div className="rounded-full bg-red w-1 h-1 mt-1" style={{ backgroundColor: "#FE5E5F" }}></div>
                <div className="rounded-full bg-red w-1 h-1 mt-1" style={{ backgroundColor: "#FE5E5F" }}></div>
            </div>
        </div>
    );
};

export default DotTitle;
