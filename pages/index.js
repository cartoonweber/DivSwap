import Head from 'next/head'
import DivSwapis from '../components/DivSwapis'
import { Line, Pie } from 'react-chartjs-2';
import DotTitle from '../components/DotTitle';
const data = {
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

const data1 = {
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

export default function Home() {
    return (
        <div className="relative">
            <Head >
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
            </Head>
            <div className="pt-12" style={{ backgroundColor: "#FAFAFA" }}>
                <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold leading-10"> DivSwap </div>
                    <div className="back1 text-2xl font-bold leading-7 px-2.5 py-1.5 mt-4"> Daily Dividends AMM  </div>
                    <div className="mt-4"> EVER WONDERED WHAT LIES BEYOND THE MOON? </div>
                    <button className="rounded-3xl border-solid border px-5 py-3 mt-8 back1" style={{ borderColor: "#4D4D4D" }}>Go To Dapp</button>
                </div>
            </div>
            <div className="pt-24" style={{ backgroundColor: "#FAFAFA" }}>
                <div className="flex flex-col">
                    <div className="flex flex-col items-center">
                        <div className="text-4xl font-black leading-10"> DivSwap is DeFi 2.0</div>
                    </div>
                    <div className="flex flex-row justify-between px-40 flex-wrap">
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
                    <div className="font1 underline mt-6 text-center font-black">Find out more</div>
                </div>
            </div>
            <div className="mt-14">
                <DotTitle>Your Funds are SAFU!</DotTitle>
                <div className="mt-20 flex flex-row justify-between px-36 flex-wrap">
                    <img src="./pec.svg" ></img>
                    <img src="./a logo.svg"></img>
                    <img src="./gnosis safe.svg"></img>
                </div>
                <div className="mt-7 flex flex-row justify-between px-36 flex-wrap">
                    <img src="./either.svg"></img>
                    <img src="./ctdsec.svg"></img>
                    <img src="./immu.svg" ></img>
                </div>
                <div className="font1 underline mt-8 text-center font-black">Find out more</div>
            </div>
            <div className="mt-28" style={{ backgroundColor: "#FAFAFA" }}>
                <DotTitle>Tokens</DotTitle>
                <div className="mt-20 flex flex-row justify-between px-36 img1">
                    <div className="flex flex-col">
                        <div className="flex flex-row flex-wrap">
                            <img src="community.svg" style={{ width: "125px" }}></img>
                            <div className="flex items-center">
                                <div className="font1 pl-10 text-5xl justify-center">NOVA</div>
                            </div>
                        </div>
                        <div className="font-bold text-2xl pt-14">
                            Native-token
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row flex-wrap">
                            <img src="dNova.svg" style={{ width: "125px" }}></img>
                            <div className="flex items-center">
                                <div className="font1 pl-10 text-5xl justify-center">dNOVA</div>
                            </div>
                        </div>
                        <div className="font-bold text-2xl pt-14">
                            LP Farming Reward Token
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-28 px-36" style={{ backgroundColor: "#FAFAFA" }}>
                <DotTitle>Tokenomics</DotTitle>
                <div className="flex flex-row justify-between pt-7 flex-wrap">
                    <div className="flex flex-col">
                        <div style={{ width: "311px" }}>
                            <Pie data={data} />
                        </div>
                        <div className="font-bold text-xl mt-10">Pre-minted tokens distribution (100,000)</div>
                        <div className="flex flex-col ml-16 ">
                            <div className="flex flex-row">
                                <div style={{ backgroundColor: '#5BC2C9' }} className="w-3 h-3 mt-3.5 text-sm"></div>
                                <div className="pl-4 text-sm mt-2.5">Pre-Sale (90,000 NOVA)</div>
                            </div>
                            <div className="flex flex-row ">
                                <div style={{ backgroundColor: '#77F4F7', }} className="w-3 h-3 mt-3.5 text-sm"></div>
                                <div className="pl-4 text-sm mt-2.5">Initial Liquidity (10,000 NOVA)</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div style={{ width: "311px" }}>
                            <Pie data={data1} />
                        </div>
                        <div className="font-bold text-xl mt-10 ml-4">Allocation of Funds</div>
                        <div className="flex flex-col ml-20 ">
                            <div className="flex flex-row">
                                <div style={{ backgroundColor: '#C41829' }} className="w-3 h-3 mt-3.5 text-sm"></div>
                                <div className="pl-4 text-sm mt-2.5">Audits ($60,000)</div>
                            </div>
                            <div className="flex flex-row ">
                                <div style={{ backgroundColor: '#FE2B2D', }} className="w-3 h-3 mt-3.5 text-sm"></div>
                                <div className="pl-4 text-sm mt-2.5">Liquidity ($20,000)</div>
                            </div>
                            <div className="flex flex-row ">
                                <div style={{ backgroundColor: '#FE5E5F', }} className="w-3 h-3 mt-3.5 text-sm"></div>
                                <div className="pl-4 text-sm mt-2.5">Marketing ($50,000)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-bottom-4 border-solid border mt-20" style={{ borderColor: "#F3F3F3" }}></div>
            <div className="mt-24">
                <DotTitle>Roadmap</DotTitle>
                <div className="flex flex-col">
                    <div className="flex flex-row pt-14">
                        <div className="font1  pr-12 text-2xl font-black flex-1 text-right">MAY 2021</div>
                        <div className="rounded-full bg-red-400 w-5 h-5 border-solid border-2 flex-shrink-0 mt-1" style={{ borderColor: "red" }}></div>
                        <div className="flex flex-col pl-12 flex-1">
                            <div className=" text-2xl font-black">Medium article</div>
                            <div className=" text-xs pt-2.5">Laying down our mission and vision.</div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-col pr-12 flex-1 text-right">
                            <div className=" text-2xl font-black">Pre-sale</div>
                            <div className="flex justify-end">
                                <div className=" text-xs pt-2.5" style = {{maxWidth : "220px"}}>Pre-sale of the NOVA token to raise funds for initial liquidity and audits.</div>
                            </div>

                        </div>
                        <div className="rounded-full bg-red-400 w-5 h-5 border-solid border-2 flex-shrink-0 " style={{ borderColor: "red" }}></div>
                        <div className="font1  pl-12 text-2xl font-black flex-1">JUNE 2021</div>
                    </div>
                </div>
            </div>
            <div className="mt-28 mx-40 text-white" style={{ backgroundColor: "#4D4D4D" }}>
                <div className="flex flex-row justify-between mx-12 pt-6 flex-wrap">
                    <div className="border-solid border-b-4 border-light-blue pb-8 w-1/2">Get in touch with us:</div>
                    <div style={{ width: "110px" }}>Quick Links</div>
                </div>
                <div className="flex flex-row justify-between mx-12 pt-10 ">
                    <div className="pb-8 flex flex-row flex-wrap">
                        <img src="facebook.svg" className="pr-8"></img>
                        <img src="twitter.svg" className="pr-8"></img>
                        <img src="instg.svg" className="pr-8"></img>
                        <img src="teleg.svg" className="pr-8"></img>
                    </div>
                    <div className="flex flex-col leading-4" style={{ width: "110px" }}>
                        <div>Terms</div>
                        <div>Privacy</div>
                        <div>Documentation</div>
                    </div>
                </div>
            </div>
            <div className=" bg-black absolute w-full bottom-0" style={{ backgroundColor: "#FAFAFA", height: "225px", zIndex: -1, bottom: "-70px" }} >
                <div className="text-center" style={{ paddingTop: "180px", color: "#E5E4E4" }}>Copyright © 2021 . All rights reserved. DivSwap.io</div>
            </div>
        </div>
    )
}