
import DivSwapis from '../components/DivSwapis'
import DotTitle from '../components/DotTitle';
import TimeLine from '../components/TimeLine';
import Nova from '../components/Nova';
import TokenPie from '../components/TokenPie';
import { Line, Pie } from 'react-chartjs-2';
import HeaderTopLine from '../components/header-top-line';
import Link from 'next/link'

const piedata1 = {
    datasets: [{
        data: [90000, 10000],
        backgroundColor: [
            '#5BC2C9',
            '#77F4F7',
        ],
        hoverBackgroundColor: [
            '#5BC2C9',
            '#77F4F7',
        ],
        borderColor: [
            '#5BC2C9',
            '#77F4F7',
        ]
    }]
};

const piedata2 = {
    datasets: [{
        data: [60000, 20000, 50000],
        backgroundColor: [
            '#C41829',
            '#FE2B2D',
            '#FE5E5F'
        ],
        hoverBackgroundColor: [
            '#C41829',
            '#FE2B2D',
            '#FE5E5F'
        ],
        borderColor: [
            '#C41829',
            '#FE2B2D',
            '#FE5E5F'
        ]
    }]
};
const fundsimgs = ["pec.svg", "a logo.svg", "gnosis safe.svg", "either.svg", "ctdsec.svg", "immu.svg"];
const piedetail1 = ["Pre-Sale (90,000 NOVA)", "Initial Liquidity (10,000 NOVA)"];
const piedetail2 = ["Audits ($60,000)", "Liquidity ($20,000)", "Marketing ($50,000)"];
export default function Home() {
    return (
        <div className="relative">
            <HeaderTopLine />
            <div style={{ backgroundColor: "#FAFAFA", paddingTop: "70px" }}>
                <div className="flex flex-col items-center pagepadding">
                    <div className="text-4xl font-bold leading-10 title"> DivSwap </div>
                    <div className="back1 text-2xl font-bold leading-7 px-2.5 py-1.5 mt-4"> Daily Dividends AMM  </div>
                    <div className="mt-4 divswap"> EVER WONDERED WHAT LIES BEYOND THE MOON? </div>
                    <Link href="/dashboard"><button className="rounded-3xl border-solid border px-5 py-3 mt-8 back1" style={{ borderColor: "#4D4D4D" }}>Go To Dapp</button></Link>
                </div>
            </div>
            <div className="pt-24 " style={{ backgroundColor: "#FAFAFA" }}>
                <div className="flex flex-col">
                    <div className="flex flex-col items-center">
                        <div className="text-4xl font-black leading-10 title"> DivSwap is DeFi 2.0</div>
                    </div>
                    <div className="flex flex-row defipadding justify-between flex-wrap px-36">
                        <DivSwapis title="DeFi 2.0 is Community" src="./community.svg">
                            DeFi 2.0 is full of energy! We don't take
                            ourselves too seriously (that's for TradFi!) So we sprinkle in a healthy dose of
                            education and true community
                            building - both locally and globally. The future of Finance belongs to the
                            People - and we are building towards a
                            full-pledged DAO to help shape the future of DivSwap.
                        </DivSwapis>
                        <DivSwapis title="DeFi 2.0 is Security" src="./security.svg">
                            DeFi 2.0 is creating the new standard for SAFU! We have three completed audits before we launch - including Peckshield,
                            arguably the most trusted name in blockchain security. And that's just part of our Strategic Security Stack! Everyday, our Team Members dedicate ourselves to evaluating/adding to our security features in order to provide the safest space to invest in all of DeFi!
                        </DivSwapis>
                        <DivSwapis title="DeFi 2.0 is Dynamic" src="./dynamic.svg">
                            DeFi 2.0 is creative - we embrace new ideas! Giving back 75% of all transaction fees
                            collected in our platform as daily dividends to our shareholders is a revolutionary idea! We employ the most innovative solutions,
                            including gamification, in order to produce
                            results that exceed expectations. With
                            DivSwap, everyone wins - from the
                            smallest investor to the biggest whales!
                        </DivSwapis>
                    </div>
                    <a href="#" className="font1 underline mt-6 text-center font-black">Find out more</a>
                </div>
            </div>
            <div className="mt-14 pagepadding">
                <DotTitle>Your Funds are SAFU!</DotTitle>
                <div className="mt-14 flex flex-col">
                    <div className="flex flex-row justify-between px-36 flex-wrap fundpadding">
                        {
                            fundsimgs.map((data, index) => {
                                return <img className="mt-6 fundimg" src={data}></img>
                            })
                        }
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <a href="#" className="font1 underline font-black">Find out more</a>
                </div>
            </div>
            <div className="mt-28" style={{ backgroundColor: "#FAFAFA" }}>
                <DotTitle>Tokens</DotTitle>
                <div className="mt-20 flex flex-row px-36 justify-between img1 flex-wrap novapadding">
                    <Nova title="NOVA" img="community.svg">Native Token</Nova>
                    <Nova title="dNOVA" img="dnova.svg">LP Farming Reward Token</Nova>
                </div>
            </div>
            <div className="pt-28" style={{ backgroundColor: "#FAFAFA" }}>
                <DotTitle>Tokenomics</DotTitle>
                <div className="flex flex-row justify-between mt-7 flex-wrap px-36 piepadding">
                    <TokenPie data={piedata1}
                        title="Pre-minted tokens distribution (100,000)"
                        details={piedetail1} />
                    <TokenPie data={piedata2}
                        title="Allocation of Funds"
                        details={piedetail2}
                        padding="pl-6" />
                </div>
            </div>
            <div className="border-bottom-4 border-solid border mt-20" style={{ borderColor: "#F3F3F3" }}></div>
            <div className="mt-24">
                <DotTitle>Roadmap</DotTitle>
                <TimeLine></TimeLine>
            </div>
            <div className="mt-28 text-white" style={{ backgroundColor: "#4D4D4D" }}>
                <div className="flex flex-row justify-around pt-6 flex-wrap">
                    <div className="flex flex-col w-1/2">
                        <div className="border-solid border-b-4 border-light-blue pb-8" style={{ width: "100%" }}>Get in touch with us:</div>
                        <div className="py-10 flex flex-row flex-wrap">
                            <img src="facebook.svg" className="pr-8"></img>
                            <img src="twitter.svg" className="pr-8"></img>
                            <img src="instg.svg" className="pr-8"></img>
                            <img src="teleg.svg" className="pr-8"></img>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div>Quick Links</div>
                        <div className="mt-10">Terms</div>
                        <div>Privacy</div>
                        <div>Documentation</div>
                    </div>
                </div>
            </div>
            <div className=" bg-black absolute w-full bottom-0" style={{ backgroundColor: "#FAFAFA", height: "225px", zIndex: -1, bottom: "-70px" }} >
                <div className="text-center font1" style={{ paddingTop: "180px" }}>Copyright © 2021 . All rights reserved. DivSwap.io</div>
            </div>
        </div>
    )
}