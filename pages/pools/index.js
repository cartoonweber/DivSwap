
import HeaderTopPage from '../../components/header-top-page';
import HorizontalDot from '../../components/HorizontalDot';
import Link from "next/link";
import Stacked from "../../components/Stacked";
import Active from "../../components/Active";
import FarmData from "../../components/FarmData";
import React, { useState, useEffect, useMemo, useRef } from 'react';

export default function pools() {
    const [state, setState] = useState(1);
    const [active, setActive] = useState(1);
    const imgs = [["", "community.svg"]];
    const titles = ["NOVA-CAKE LP"];
    const xs = ["1X"];
    const values = [["262.16", "NOVA", "$230,534.19"]]

    return (
        <div className="relative px-16 dashboardpage" style={{ backgroundColor: "#FAFAFA" }}>
            <HeaderTopPage active={3} />
            <div className="flex justify-between flex-row dashboarddotparent">
                <div className="pt-5 dashboarddot" style={{ paddingLeft: "50%" }}>
                    <HorizontalDot />
                </div>
                <Link href="/dashboard">
                    <a href="#" className="topbutton active">TOTAL DEPOSITED</a>
                </Link>
            </div>
            <div className="flex flex-col items-end pt-2 text-4xl font-bold">
                <div>$2,551,015.87</div>
                <HorizontalDot />
            </div>
            <div className="font-black text-center text-4xl">POOLS</div>
            <div className="text-center font-black text-3xl pt-11" style={{ color: "#787878" }}>Stake LP Tokens to Earn NOVA and sNOVA</div>
            <div className="text-center font-bold text-2xl pt-3 font1">Deposit Fees are distributed to sNOVA holders</div>
            <div className="flex justify-center pt-7 flex-wrap items-center">
                <Stacked state={state} setState={setState} />
                <Active state={active} setState={setActive} />
            </div>
            <div className="flex flex-wrap justify-center farmd pt-8">
                {
                    state === 1 ? imgs.map((data, i) => {

                        return <div className="pt-10"><FarmData
                            title={titles[i]}
                            imgs={imgs[i]}
                            x={xs[i]}
                            value={values[i]} />
                        </div>
                    }) : ""
                }

            </div>
        </div>
    )
}