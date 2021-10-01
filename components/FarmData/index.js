import React, { useState, useEffect, useMemo, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faChevronDown, faChevronUp, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
const Nova = ({ children, title, imgs, x, value }) => {
    const [collapse, setCollpase] = useState(1);
    let mtitle = ["APR", "EARN", "Total Value Locked:"], mtitlei = 1;
    if (value.length < 3) mtitle = ["EARN", "Total Value Locked:"], mtitlei = 0;
    return (
        <div className="border-2 px-8 py-9 farmdata" style={{ borderRadius: "55px", borderColor: "#4D4D4D", width: "680px", height: "auto" }}>
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
                        <div className={(i == mtitlei ? "font-bold " : "font-black ") + (i == mtitlei + 1 ? "text-xl " : "text-lg ")}>{data}</div>
                        <div className={(i == mtitlei ? "font-bold " : "font-black ") + (i == mtitlei + 1 ? "text-xl " : "text-lg ") + "font1"}>{value[i]}</div>
                    </div>
                })
            }
            <hr className="mt-7 border-black" />
            <div className="flex justify-center">
                {collapse ? <button className="flex flex-row font1 pt-7 text-2xl" onClick={() => { setCollpase(!collapse) }}>
                    <div className="">DETAILS&nbsp;&nbsp;</div>
                    <div className="flex items-center"><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></div>
                </button> :
                    <button className="flex flex-row font1 pt-7 text-2xl" onClick={() => { setCollpase(!collapse) }}>
                        <div className="">HIDE&nbsp;&nbsp;</div>
                        <div className="flex items-center"><FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon></div>
                    </button>}
            </div>
            {!collapse ? <div className="pt-16">
                <div className="flex flex-row justify-between">
                    <div className="text-lg font-bold">DEPOSIT:</div>
                    <div className="text-lg font-bold">NOVA-BUSD LP&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="text-lg font-bold">DEPOSIT FEE:</div>
                    <div className="text-lg font-bold">0%</div>
                </div>
                <div className="text-sm">(75% to sNova Rewards, 25% Marketing)</div>
                <div className="text-lg font1">View on BscScan</div>
                <div className="flex flex-row font-bold text-sm pt-8">
                    SNOVA
                    <div className="font1 pl-2" >EARNED</div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-4xl text-bold" style={{ color: "#D5D3D3" }}>0</div>
                    <div className="text-white font-bold text-3xl py-4 px-10" style={{ borderRadius: "15px", backgroundColor: "#999999" }}>Harvest</div>
                </div>
                <div className="flex flex-row font-bold text-sm pt-9">
                    NOVA-BUSD LP
                    <div className="font1" >STAKED</div>
                </div>
                <div className="flex justify-center items-center font-bold text-2xl py-4 mx-6 mt-10" style={{ backgroundColor: "#C4C4C4", borderRadius: "26px" }}>Unlock Wallet</div>
            </div> : ""}
        </div>
    );
};

export default Nova;
