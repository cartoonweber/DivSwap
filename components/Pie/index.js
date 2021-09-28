import React from 'react';
import { useEffect, useState, useRef } from 'react';

const Pie = ({ children, title, src }) => {

    useEffect(() => {

    }, []);


    return (
        <div className="flex flex-col text-center mt-7" style = {{maxWidth : "325px"}}>
            <div className = "flex justify-center"><img src = {src}></img></div>
            <div className="text-3xl font-black pt-7">{title}</div>
            <div className="text-base pt-5">{children}</div>
        </div >
    );
};

export default Pie;
