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
    const ltitle = ["Oct 2021", "Multichain Bridge Integration", "Q1 2022", "Multichain Liquidity Aggregation", "Q3 2022"];
    const rtitle = ["Fair Launch on FTM Mainnet", "Q4 2021", "Crosschain Swap Integration", "Q2 2022", "Governance Protocol Integration"];
    const ldetail = ["", "Goal: Divswap users can move tokens between multiple chains", "", "Goal: Divswap users can seamlessly swap tokens between multiple chains and multiple liquidity pool. The AMM returnd the best possible price,", ""];
    const rdetail = ["Goal: Divswap is a secure and stable platform with a vibrant community. ", "", "Goal: Divswap users can seamlessly swap tokens between two chains,", "", "Goal: DIVx holders can vote on all decisions regarding the future direction of Divswap,"]
    return (

        <div className="flex flex-col relative">
            <div className="relative">
                <div className="bg-black absolute border-l z-0" style={{ height: "100%", left: "50%", top: "60px", borderColor: "red" }}></div>
                {
                    ltitle.map((data, i) => {
                        if (i === 4) return ""
                        return <Detail ltitle={ltitle[i]}
                            ldetail={ldetail[i]}
                            rtitle={rtitle[i]}
                            rdetail={rdetail[i]}
                            font={font}
                            index={i} />
                    })
                }
            </div>
            <Detail ltitle={ltitle[4]}
                ldetail={ldetail[4]}
                rtitle={rtitle[4]}
                rdetail={rdetail[4]}
                font={font}
                index={4} />
        </div>
    );
};

export default TimeLine;
