import React from 'react';
import { useEffect, useState, useRef } from 'react';

const Stat = ({ children, title, index }) => {
    let image, pending;
    const data = [["MARKET CAP", "TOTAL MINTED", "TOTAL BURNED", "CIRCULATING SUPPLY", "NOVA/BLOCK"], ["TOTAL MINTED", "TOTAL BURNED", "CIRCULATING SUPPLY"], ["USD/sNOVA", "YOUR SHARE", "LAST REWARD BLOCK"]]
    const detail = [["$445,955.35", "559,199.65", "65,784.58", "493,415.06", "0.40"], ["289,375.65", "40,371.72", "249,003.93"], ["$0.00", "0.00%", "11168778"]]
    pending = (
        <>
            <div className="pt-2 text-sm">{index === 0 ? "Pending NOVA" : "Pending sNOVA"}</div>
            <div className="pt-2 text-sm" style={{ color: "#999999" }}>{index === 0 ? "LOCKED ~ $0.00" : "LOCKED"}</div>
            <div className="pt-2 text-sm">{index === 0 ? "NOVA Balance" : "sNOVA Balance"} </div>
            <div className="pt-2 text-sm" style={{ color: "#999999" }}>{index === 0 ? "LOCKED ~ $0.00" : "LOCKED"}</div>
        </>
    )
    if (index == 0) {
        image = (<img src="community.svg" style={{ width: "100px" }} />)
    }
    if (index == 1) {
        image = (<img src="dnova.svg" style={{ width: "100px" }} />)
    }
    if (index == 2) {
        image = (
            <>
                <div className="flex justify-between">
                    <div>
                        <img src="wbnb.svg" style={{ width: "100x" }}></img>
                        <div className="font-black text-center pt-2.5">WBNB</div>
                        <div className="font1 text-sm text-center">0.0000</div>
                    </div>
                    <div>
                        <img src="wbnb.svg" style={{ width: "100x" }}></img>
                        <div className="font-black text-center pt-2.5">BUSD</div>
                        <div className="font1 text-sm text-center ">0.0000</div>
                    </div>
                </div>
            </>
        )
    }
    let moneybottom = (
        <div className="flex text-xs px-5 py-3 border-2 border-solid text-center mt-4" style={{ borderRadius: "26px", borderColor: "#4D4D4D" }}>Next Moneypot starts rewarding at block <div className="font1">#11183980</div></div>
    )
    return (
        <div className="border-4 stat mt-6" style={{ borderRadius: "55px", width: "418px", height: "600px", padding: "44px 36px 44px 36px", borderColor: "#4D4D4D" }}>
            <div className="flex flex-col items-center">
                <div className="text-3xl font-black text-center" style={{ width: index == 2 ? "150px" : "" }}>{title}</div>
                {index == 2 && <div className="font-black">Daily ROI 0.14%</div>}
            </div>
            <div className={"flex flex-col " + (index === 2 ? "justify-between" : "items-center")}>
                <div className="pt-6">{image}</div>
                {index < 2 && pending}
            </div>
            <button className="w-full mt-4 text-lg text-center py-2.5 font-bold" style={{ borderRadius: "26px", backgroundColor: "#C4C4C4" }}>Unlock Wallet</button>
            <div className="pt-5">
                {
                    data[index].map((d, j) => {
                        return (<div className="flex justify-between pb-3">
                            <div className="font-bold">{data[index][j]}</div>
                            <div className="font-bold font1">{detail[index][j]}</div>
                        </div>)
                    })
                }
            </div>
            {index === 2 && moneybottom}
        </div >
    );
};

export default Stat;
