import React from 'react';

const Detail = ({ children, ltitle, ldetail,  rtitle, rdetail, font, index }) => {
    
    const rfont = font + (index % 2 ? " font1": ""), lfont = font + (index % 2 ? "": " font1");
    const maxW = 400 +  "px";
    return (
        <div className="flex flex-row pt-14" >
            <div className="flex flex-col pr-12 flex-1 items-end text-right">
                <div className={"font-black " + lfont}>{ltitle}</div>
                <div className="text-xs pt-2.5" style={{ maxWidth: maxW }}>{ldetail}</div>
            </div>
            <div className="rounded-full bg-red-400 w-5 h-5 border-solid border-2 z-10 flex-shrink-0 mt-1" style={{ borderColor: "red" }}></div>
            <div className="flex flex-col pl-12 flex-1">
                <div className={"font-black " + rfont}>{rtitle}</div>
                <div className=" text-xs pt-2.5">{rdetail}</div>
            </div>
        </div>
    );
};

export default Detail;
