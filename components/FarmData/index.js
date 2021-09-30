import React, { useState, useEffect, useMemo, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
const Nova = ({ children, title, imgs, x, value }) => {
    const [state, setState] = useState(1);
    const mtitle = ["APR", "EARN", "Total Value Locked:"];
    return (
        <div className="border-2 px-8 py-9 farmdata" style={{ borderRadius: "55px", borderColor: "#4D4D4D", width: "680px", height: "323px" }}>
            <div className="flex flex-row w-full justify-between">
                <div >
                    <img src={imgs[1]} style={{ marginLeft: "40px", width: "60px" }}></img>
                    <img src={imgs[0]} style={{ marginTop: "-60px", width: "60px" }}></img>
                </div>
                <div className="items-end flex flex-col pl-10">
                    <div className="font-black text-2xl">{title}</div>
                    <div className="mt-0.5 text-white font-bold text-2xl flex justify-center items-center" style={{ borderRadius: "21px", backgroundColor: "#5BC2C9", width: "70px", height: "40px" }}>{x}</div>
                </div>
            </div>
            {
                mtitle.map((data, i) => {
                    return <div className="flex flex-row justify-between">
                        <div className={(i == 1 ? "font-bold " : "font-black ") + (i == 2 ? "text-xl " : "text-lg ")}>{data}</div>
                        <div className={(i == 1 ? "font-bold " : "font-black ") + (i == 2 ? "text-xl " : "text-lg ") + "font1"}>{value[i]}</div>
                    </div>
                })
            }
            <hr className="mt-7 border-black" />
            <div className="flex flex-row font1 pt-7 text-2xl justify-center">
                <div className="">DETAILS&nbsp;&nbsp;</div>
                <div className="flex items-center"><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></div>
            </div>
        </div>
    );
};

export default Nova;
