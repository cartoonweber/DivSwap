import React from 'react';
import { useEffect, useState, useRef } from 'react';

function getWindowDimensions() {
    let width, height;
    if (typeof window !== "undefined") {
        width = window.innerWidth;
        height = window.innerHeight;
    }
    return {
        width,
        height,
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
function getWindowScroll() {
    let scroll;
    if (typeof window !== "undefined") {
        scroll = window.scrollY;
    }
    return {
        scroll
    };
}
function useWindowScroll() {
    const [windowScroll, setWindowScroll] = useState(getWindowScroll());

    useEffect(() => {
        function handlescroll() {
            setWindowScroll(getWindowScroll());
        }

        window.addEventListener('scroll', handlescroll);
        return () => window.removeEventListener('scroll', handlescroll);
    }, []);

    return windowScroll;
}
const TimeLine = ({ children }) => {
    const screenWidth = useWindowDimensions().width;
    const [isMobile, setIsMobile] = useState(false);
    const [heightt, setHeight] = useState();
    const scroll = useWindowScroll().scroll;
    
    let font = "text-2xl";
    useEffect(() => {
        screenWidth > 800 ? setIsMobile(false) : setIsMobile(true);
        const temp = document.getElementById("tb").offsetTop - document.getElementById("tt").offsetTop;
        setHeight(temp);
    }, [screenWidth]);
    useEffect(() => {
        console.log(document.getElementById("tb").window);
        //  scroll > 40 ? setIsNav(true) : setIsNav(false);
    }, [scroll]);
    if (isMobile) font = "text-1xl";
    return (

        <div className="flex flex-col relative">
            <div className="bg-black absolute border-l z-0" style={{ height: heightt, left: "50%", top: "60px", borderColor: "red" }}></div>
            <div className="flex flex-row pt-14" >
                <div className={"font1  pr-12 font-black flex-1 text-right " + font} >MAY 2021</div>
                <div className="rounded-full bg-red-400 w-5 h-5 border-solid border-2 z-10 flex-shrink-0 mt-1" style={{ borderColor: "red" }} id="tt"></div>
                <div className="flex flex-col pl-12 flex-1">
                    <div className={"font-black " + font}>Medium article</div>
                    <div className=" text-xs pt-2.5">Laying down our mission and vision.</div>
                </div>
            </div>
            <div className="flex flex-row justify-center pt-14">
                <div className="flex flex-col pr-12 flex-1 text-right">
                    <div className={" font-black " + font}>Pre-sale</div>
                    <div className="flex justify-end">
                        <div className=" text-xs pt-2.5" style={{ maxWidth: "220px" }}>Pre-sale of the NOVA token to raise funds for initial liquidity and audits.</div>
                    </div>
                </div>
                <div className="rounded-full bg-red-400 w-5 h-5 border-solid border-2 z-10 flex-shrink-0 " style={{ borderColor: "red" }}></div>
                <div className={"font1  pl-12 font-black flex-1 " + font}>JUNE 2021</div>
            </div>
            <div className="flex flex-row pt-14">
                <div className={"font1  pr-12 font-black flex-1 text-right " + font}>JUNE 2021</div>
                <div className="rounded-full bg-red-400 w-5 h-5 border-solid border-2 z-10 flex-shrink-0 mt-1" style={{ borderColor: "red" }}></div>
                <div className="flex flex-col pl-12 flex-1">
                    <div className={" font-black " + font}>Smart contracts audits</div>
                    <div className=" text-xs pt-2.5">Audits of the DivSwap.io smart contracts by reputable third parties.</div>
                </div>
            </div>
            <div className="flex flex-row justify-center pt-14">
                <div className="flex flex-col pr-12 flex-1 text-right">
                    <div className={" font-black " + font}>We are live!</div>
                    <div className="flex justify-end">
                        <div className=" text-xs pt-2.5" style={{ maxWidth: "220px" }}>Launch of DivSwap dApp</div>
                    </div>
                </div>
                <div className="rounded-full bg-red-400 w-5 h-5 border-solid border-2 z-10 flex-shrink-0 " style={{ borderColor: "red" }}></div>
                <div className={"font1  pl-12 font-black flex-1 " + font}>AUGUST 2021</div>
            </div>
            <div className="flex flex-row pt-14">
                <div className="font1  pr-12 text-2xl font-black flex-1 text-right"></div>
                <div className="rounded-full bg-red-400 w-5 h-5 border-solid border-2 z-10 flex-shrink-0 mt-1" style={{ borderColor: "red" }}></div>
                <div className="flex flex-col pl-12 flex-1">
                    <div className={" font-black " + font}>DivSwap Nova Lift Off</div>
                    <div className=" text-xs pt-2.5">Develop novel use cases for NOVA and unveil DivSwap Nova Launchpad</div>
                </div>
            </div>
            <div className="flex flex-row justify-center pt-14">
                <div className="flex flex-col pr-12 flex-1 text-right">
                    <div className={" font-black " + font}>DivSwap Nova NFT Shop!</div>
                    <div className="flex justify-end">
                        <div className=" text-xs pt-2.5">One-stop-shop NFT Minter +Viewer + Marketplace</div>
                    </div>
                </div>
                <div className="rounded-full bg-red-400 w-5 h-5 border-solid border-2 z-10 flex-shrink-0 " style={{ borderColor: "red" }}></div>
                <div className={"font1  pr-12 font-black flex-1 text-right " + font}></div>
            </div>
            <div className="flex flex-row pt-14">
                <div className="font1  pr-12 text-2xl font-black flex-1 text-right"></div>
                <div className="rounded-full bg-red-400 w-5 h-5 border-solid border-2 z-10 flex-shrink-0 mt-1" style={{ borderColor: "red" }}></div>
                <div className="flex flex-col pl-12 flex-1">
                    <div className={"font-black " + font}>DivSwap Nova goes MultiChain</div>
                    <div className=" text-xs pt-2.5">Build a bridge and launch DivSwap Nova across multiple chains</div>
                </div>
            </div>
            <div className="flex flex-row justify-center pt-14">
                <div className="flex flex-col pr-12 flex-1 text-right">
                    <div className={" font-black " + font} >DivSwap NovaDAO</div>
                    <div className="flex justify-end">
                        <div className=" text-xs pt-2.5" style={{ maxWidth: "250px" }}>Create a full-pledged DAO to usher the next
                            evolution of DivSwap Nova into the future</div>
                    </div>
                </div>
                <div className="rounded-full bg-red-400 w-5 h-5 border-solid border-2 z-10 flex-shrink-0 " style={{ borderColor: "red" }} id="tb"></div>
                <div className={"font1  pr-12 font-black flex-1 text-right " + font}></div>
            </div>
        </div>
    );
};

export default TimeLine;
