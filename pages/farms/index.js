
import HeaderTopPage from '../../components/header-top-page';
import HorizontalDot from '../../components/HorizontalDot';
import Link from "next/link";
import Stacked from "../../components/Stacked";
import Active from "../../components/Active";
import FarmData from "../../components/FarmData";
import React, { useState, useEffect, useMemo, useRef } from 'react';
import Animation from '../../components/Animation';

export default function farms() {
    const [state, setState] = useState(1);
    const [active, setActive] = useState(1);
    let imgs1 = [["community.svg", "blackbusd.svg"], ["community.svg", "blackwbnb.svg"], ["wbnb.svg", "blackbusd.svg"], ["t.svg", "blackwbnb.svg"],
    ["wbnb.svg", "blacks.svg"], ["wbnb.svg", "blackeraser.svg"], ["wbnb.svg", "blackb.svg"], ["busd.svg", "blackt.svg"], ["wbnb.svg", "blackrachim.svg"],
    ["rachim.svg", "blackbusd.svg"], ["b.svg", "blackrachim.svg"], ["mcircle.svg", "blackwbnb.svg"], ["mcircle.svg", "blackbusd.svg"],
    ["mcircle.svg", "blackt.svg"], ["d.svg", "blackbusd.svg"], ["d.svg", "blackwbnb.svg"], ["mrect.svg", "blackwbnb.svg"], ["p.svg", "blackwbnb.svg"], ["diamond.svg", "blackwbnb.svg"], ["fire.svg", "blackwbnb.svg"], ["mround.svg", "blackwbnb.svg"]];
    let titles1 = ["NOVA-BUSD LP", "NOVA-BNB LP", "BNB-BUSD LP", "USDT-BNB LP", "MATIC-BNB LP", "CAKE-BNB LP", "BTCB-BNB LP",
        "USDT-BUSD LP", "ETH-BNB-LP", "ETH-BUSD-LP", "ETH-BTCB LP", "USDC-BNB-LP", "USDC-BUSD-LP", "USDT-USDC LP", "DAI-BNB LP", "DAI-BUSD LP",
        "ADA-BNB LP", "DOT-BNB LP", "LINK-BNB-LP", "CRUDE-BNB LP", "JAWS-BNB LP"];
    let xs1 = ["8X", "8X", "2X", "2X", "1.5X", "1.5X", "1X", "1X", "0.5X", "0.5X", "0.5X", "0.5X", "0.5X", "0.5X", "0.5X", "0.5X", "0.5X", "0.5X", "0.5X", "0.2X", "0.2X"];
    let values1 = [["269.71%", "sNOVA", "$280,477.45"], ["262.16%", "sNOVA", "$288,550.56"], ["67.13%", "NOVA", "$281,536.49"], ["113.87%", "NOVA", "$165,966.87"],
    ["140.42%", "sNOVA", "$280,477.45"], ["134.75%", "sNOVA", "$105,189.2"], ["63.76%", "NOVA", "$148,195.17"], ["40.76%", "NOVA", "$231,815.34"], ["54.52%", "NOVA", "$36,589.83"],
    ["133.33%", "NOVA", "$35,436.53"], ["129.13%", "NOVA", "$36,589.83"], ["180.56%", "NOVA", "$26,167.02"], ["75.71%", "NOVA", "$62,405.46"], ["105.85%", "NOVA", "$44,635.29"],
    ["142.15%", "NOVA", "$33,206.15"], ["60.49%", "NOVA", "$78,035.03"], ["269.71%", "NOVA", "$55,163.51"], ["83.38%", "NOVA", "$56,615.13"], ["183.02%", "NOVA", "$25,823.22"], ["457.05%", "NOVA", "$4,131.13"], ["495.46%", "NOVA", "$3,810.86"]];
    const imgs2 = [["community.svg", "blackbusd.svg"], ["community.svg", "blackwbnb.svg"], ["wbnb.svg", "blackbusd.svg"], ["t.svg", "blackwbnb.svg"], ["mround.svg", "blackwbnb.svg"]];
    const titles2 = ["USDT-BUSD LP", "NOVA-ETH LP", "NOVA-BTCB LP", "NOVA-MATIC LP", "NOVA-CAKE LP"];
    const xs2 = ["0X", "0X", "0X", "0X", "0X"];
    const values2 = [["NOVA", "$230,534.19"], ["NOVA", "$10.64"], ["NOVA", "$438.75"], ["NOVA", "$48.88"], ["NOVA", "$3,810.86"]]

    if (active == 0) { imgs1 = imgs2, titles1 = titles2, xs1 = xs2, values1 = values2 }
    return (
        <div className="relative px-16 dashboardpage" style={{ backgroundColor: "#FAFAFA" }}>
            <HeaderTopPage active={2} />
            <Animation/>
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
            <div className="font-black text-center text-4xl">FARMS</div>
            <div className="text-center font-black text-3xl pt-11" style={{ color: "#787878" }}>Stake LP Tokens to Earn NOVA and sNOVA</div>
            <div className="text-center font-bold text-2xl pt-3 font1">Deposit Fees are distributed to sNOVA holders</div>
            <div className="flex justify-center pt-7 flex-wrap  items-center">
                <Stacked state={state} setState={setState} />
                <Active state={active} setState={setActive} />
            </div>
            <div className="flex flex-wrap justify-between farmd">
                {
                    state === 1 ? imgs1.map((data, i) => {
                        if (i < imgs1.length - 1)
                            return <div className="pt-10"><FarmData
                                title={titles1[i]}
                                imgs={imgs1[i]}
                                x={xs1[i]}
                                value={values1[i]} />
                            </div>
                    }) : ""
                }
            </div>
            {state === 1 ? <div className="flex justify-center pt-10">
                <FarmData
                    title={titles1[imgs1.length - 1]}
                    imgs={imgs1[imgs1.length - 1]}
                    x={xs1[imgs1.length - 1]}
                    value={values1[imgs1.length - 1]} />
            </div> : ""}
        </div>
    )
}