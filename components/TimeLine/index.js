import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Detail from './Detail';

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
    const [heightt, setHeight] = useState("820px");
    const scroll = useWindowScroll().scroll;

    let font = "text-2xl";
    useEffect(() => {
        screenWidth > 800 ? setIsMobile(false) : setIsMobile(true);
    }, [screenWidth]);
    if (isMobile) font = "text-1xl";
    const ltitle = ["MAY 2021", "Pre-sale", "JUNE 2021", "We are live!", "", "DivSwap Nova NFT Shop!", "",];
    const ldetail = ["", "Pre-sale of the NOVA token to raise funds for initial liquidity and audits.", "", "Launch of DivSwap dApp", "", "One-stop-shop NFT Minter +Viewer + Marketplace", "",];
    const rtitle = ["Medium article", "JUNE 2021", "Smart contracts audits", "AUGUST 2021", "DivSwap Nova Lift Off", "","DivSwap Nova goes MultiChain"];
    const rdetail = ["Laying down our mission and vision.", "", "Audits of the DivSwap.io smart contracts by reputable third parties.", "", "Develop novel use cases for NOVA and unveil DivSwap Nova Launchpad", "", "Build a bridge and launch DivSwap Nova across multiple chains"]
    return (

        <div className="flex flex-col relative">
            <div className="relative">
                <div className="bg-black absolute border-l z-0" style={{ height: "100%", left: "50%", top: "60px", borderColor: "red" }}></div>
                {
                    ltitle.map((data, i) => {
                        return <Detail ltitle={ltitle[i]}
                            ldetail={ldetail[i]}
                            rtitle={rtitle[i]}
                            rdetail={rdetail[i]}
                            font={font}
                            index={i} />
                    })
                }
            </div>
            <Detail ltitle="DivSwap NovaDAO"
                ldetail="Create a full-pledged DAO to usher the next evolution of DivSwap Nova into the future"
                rtitle= ""
                rdetail=""
                font={font}
                index={7} />
        </div>
    );
};

export default TimeLine;
