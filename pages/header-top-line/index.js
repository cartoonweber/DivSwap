import Head from 'next/head'
import './styles.module.css';

export default function Home() {
  return (
    <div className="flex mt-16 px-36" style = {{backgroundColor : "#FAFAFA"}}>
      <div className="flex-1">
        <a href="#"><img src='logo.svg' />
          <div className="font-normal text-4xl leading-10 pt-3">DiveSwap</div></a>

      </div>
      <div className="flex-1 flex flex-row justify-between font-black text-2xl leading-7 flex-wrap">
        <div>TOKENS</div>
        <div>ROADMAP</div>
        <div className="font1 underline">DOCS</div>
        <div className="font1 underline">SOCIALS</div>
      </div>
    </div>
  )
}
