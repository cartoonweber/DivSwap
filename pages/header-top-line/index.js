import Head from 'next/head'
import './styles.module.css';
import React, { useState, useEffect, useMemo } from 'react';

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

export default function Home() {
  const screenWidth = useWindowDimensions().width;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    screenWidth > 650 ? setIsMobile(false) : setIsMobile(true);
  }, [screenWidth]);
  return (
    <div className=" mt-12 pt-6 flex flex-row fixed top-0 z-10 w-full" style={{ backgroundColor: "#FAFAFA" }}>
      {!isMobile && <div className="flex-none pl-20">
        <a href="#"><img src='logo.svg' />
          <div className="font-normal text-4xl leading-10 pt-3">DiveSwap</div>
        </a>
      </div>}
      <div className="flex-1 flex flex-row justify-around font-black text-2xl leading-7 flex-wrap">
        <div>TOKENS</div>
        <div>ROADMAP</div>
        <div className="font1 underline">DOCS</div>
        <div className="font1 underline">SOCIALS</div>
      </div>
    </div>
  )
}
