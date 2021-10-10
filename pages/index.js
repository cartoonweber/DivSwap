
import DotTitle from '../components/DotTitle';
import TimeLine from '../components/TimeLine';
import Animation from '../components/Animation';
import HeaderTopLine from '../components/header-top-line';
import HorizontalDot from '../components/HorizontalDot';
import Token from '../components/Token';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';

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
        <div className="relative" style={{ backgroundColor: "#FAFAFA" }}>
            <HeaderTopLine />
            <Animation />
            <div style={{ paddingLeft: "12%" }} className="pt-20">
                <HorizontalDot /></div>
            <div className="items-center flex flex-col">
                <img src="logo.svg" style={{ width: "90px" }} />
                <div className="text-4xl font-semibold pt-10">DivSwap</div>
            </div>
            <div style={{ paddingTop: "110px" }} className="text-center text-8xl font-bold benefit">
                DEX WITH BENEFITS
            </div>
            <div className="justify-center flex">
                <Link href="/dashboard"><button className="rounded-3xl border-solid border px-5 py-3 mt-16 back1" style={{ borderColor: "#4D4D4D" }}>Go To Dapp</button></Link>
            </div>
            <div style={{ paddingTop: "200px" }} className="justify-around flex flex-wrap">
                <div>
                    <img src="communityblue.svg" />
                </div>
                <div style={{ width: "500px" }} className="px-4">
                    <div className="font-black text-3xl">
                        About Divswap
                    </div>
                    <div className="font-bold pt-6">
                        <div>Divswap is the first decentralised exchange on Fantom Mainnet to redistribute transaction fees directly back to platform users.</div>
                        <br />
                        <div>Most other platforms offer reward tokens that get dumped whenever the farming reward pool starts drying up.</div>
                        <br />
                        <div>The Divswap protocol provides a sustainable solution to this issue by distributing the majority of profits back to users via a dividend system.</div>
                        <br />
                        <div>Stake Divs, receive DivX, and get passively rewarded with FTM and FUSD every day!</div>
                    </div>
                    <div className="px-5 py-3 border-2 border-black mt-20" style={{ borderRadius: "18px", background: "#C4C4C4", width: "fit-content" }}>
                        Read More
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "130px", backgroundImage: "url(back1.png)" }} className="bg-cover">
                <div style={{ paddingTop: "120px" }}>
                    <DotTitle>The Divswap Protocol</DotTitle></div>
                <div className="flex justify-center pt-12" style={{ paddingBottom: "200px" }}>
                    <div style={{ maxWidth: "500px" }} className="font-bold protocol px-4">
                        <div>In the Divswap farms and staking pools, you're rewarded with the Divswap (DIVs) token, like any other DEX. What makes Divswap different is DIVs big brother: DIVx.</div>
                        <br />
                        <div>Holding this token makes you a shareholder in Divswap, giving you dividends in FTM and FUSD straight to your wallet every day.</div>
                        <br />
                        <div>The protocol collects 75% of all platform fees in a big pot and redistributes them to all DIVx holders. Your share of this daily reward pool increases with your share of DIVx supply.</div>
                        <br />
                        <div>By becoming a DIVx shareholder you have a stake in the platform’s success. Word of mouth from shareholders alone has the potential to create an upward demand spiral that could shake up the entire defi-space: the more users the platform has the more rewards users will receive.</div>
                    </div>
                </div>
            </div>
            <div >
                <DotTitle>Tokenomics</DotTitle>
                <div className="flex justify-around pt-7 flex-wrap">
                    <Token title="Divswap Token (DIVs)" img="community.svg">
                        <div className="font-bold">
                            <div>DIVs is the native platform of Divswap. It is used for farming and staking.</div>
                            <br />
                            <br />
                            <div>The initial Divs supply on Fantom Mainnet is 20000.  20 400 Tokens were minted but 400 Divs were instantly burnt due to the autoburn mechanism.</div>
                            <br />
                            <br />
                            <div>DIVs has an automatic 2% burn on all transactions and transfers.</div>
                            <br />
                            <br />
                            <div>Initial Liquidity provided to the platform was $20 000. This was distributed equally between DIVs/FTM & DIVx/FUSD</div>
                            <br />
                            <br />
                            <div>In future DIVs will become a multi-chain token that exists on multiple blockchains.</div>
                        </div>
                    </Token>
                    <Token title=" Divswap Governance Token (DIVx)" img="dnova.svg">
                        <div className="font-bold">
                            <div>DIVx is DIVs rarer and more valuable big brother.Owning it gives you</div>
                            <div>a unique opportunity to become an early shareholder in a major new defi protocol.</div>
                            <br />
                            <div>Not only do DIVx holders receive a share of profits from the DEX now, they will receive a share in all future fees and profits generated by the platform as it grows in to a multi-chain liquidity aggregator providing cross-chain token swaps.</div>
                            <br />
                            <div>DIVx can't be bought  like a normal token, it can only be farmed. We believe in rewarding users who provide liquidity. DIVx rewards are delivered automatically, just by holding the token.</div>
                            <br />
                            <div>Rewards come from three different sources: </div>
                            <div>Deposit fees</div>
                            <div>Swap fees</div>
                            <div>75% of any other platform revenue.</div>
                            <br />
                            <div>DIVx can’t be sold but it can be swapped for DIVs anytime at a ratio of 1DIVs to 0.7Divx.Those who hold DIVx for 30 days can swap with a 1: 1 ratio.</div>
                        </div>
                    </Token>
                </div>
                <div className="flex justify-center">
                    <div className="px-5 py-3 border-2 border-black mt-20 " style={{ borderRadius: "18px 0px", background: "#C4C4C4", width: "fit-content" }}>
                        Read More
                    </div>
                </div>
            </div >
            <div className="mt-12 bg-cover pt-24 pb-48" style={{ backgroundImage: "url(back1.png)" }}>
                <DotTitle>Roadmap</DotTitle>
                <TimeLine></TimeLine>

            </div>
            <div className="mt-4 text-white" style={{ backgroundColor: "#4D4D4D" }}>
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
        </div >
    )
}