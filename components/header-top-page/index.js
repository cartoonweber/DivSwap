import React, { useState, useEffect, useMemo, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Link from "next/link";

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
export default function TopPage() {
  const screenWidth = useWindowDimensions().width;
  const [isMobile, setIsMobile] = useState(false);
  const [isNav, setIsNav] = useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const scroll = useWindowScroll().scroll;
  const ref = useRef(null);
  let navbar;
  useEffect(() => {
    screenWidth > 1200 ? setIsMobile(false) : setIsMobile(true);
  }, [screenWidth]);
  useEffect(() => {
    scroll > 40 ? setIsNav(true) : setIsNav(false);
  }, [scroll]);
  if (isMobile)
    navbar = (
      <div className="mt-12" >
        <div className="flex flex-col fixed top-0  w-full z-20 left-0" style={{ backgroundColor: "#FAFAFA" }}>
          <div className="flex flex-row justify-between py-6 px-16">
            <a href="#"><img src='logo.svg' style={{ width: "30px" }} /></a>
            <a href="#" className="text-2xl " onClick={(e) => {
              e.preventDefault();
              setCollapseOpen(!collapseOpen);
            }}>
              <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
            </a>
          </div>
          <div style={{ display: collapseOpen ? "" : "none" }}>
            <div className={"flex-1 flex z-20 flex-row font-black text-1xl"}
              style={{ backgroundColor: "#FAFAFA" }}>
              <div className="flex-1 flex-col flex text-center">
                <hr />
                <Link href="/dashboard">
                  <a href="#" className="py-2 font1">DASHBOARD</a>
                </Link><hr />
                <Link href="/dashboard">
                  <a href="#" className="py-2">EXCHANGE</a>
                </Link><hr />
                <Link href="/dashboard">
                  <a href="#" className="py-2">FARMS</a>
                </Link><hr />
                <Link href="/dashboard">
                  <a href="#" className="py-2">POOLS</a>
                </Link><hr />
                <Link href="/dashboard">
                  <a href="#" className="py-2">AUDITS</a>
                </Link><hr />
                <Link href="/dashboard">
                  <a href="#" className="py-2">VAULT PARTNERS</a>
                </Link><hr />
                <Link href="/dashboard">
                  <a href="#" className="py-2">SOCIALS</a>
                </Link><hr />
                <div className="flex justify-center">
                  <div className="pt-1.5"><img src="community.svg" style={{ width: "30px" }} /></div>
                  <div className="topbutton pt-2.5 pl-2 pr-6">$0.892</div>
                  <Link href="/dashboard">
                    <a href="#" className="topbutton active">CONNECT WALLET</a>
                  </Link>
                </div><hr />
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  else
    navbar = (
      <div className="mt-12 pt-4 flex flex-row z-20" style={{ backgroundColor: "#FAFAFA" }} ref={ref}>
        <div className=" pt-8">
          <a href="#" >
            <div className="flex flex-col items-center w-min">
              <img src='logo.svg' />
              <div className="font-normal text-4xl pt-3">DiveSwap</div>
            </div>
          </a>
        </div>

        <div className={isNav ? "z-20 py-3 flex flex-row font-bold text-base fixed top-0 w-full pr-32"
          : " flex z-20 flex-row font-bold text-base w-full"}
          style={{ backgroundColor: "#FAFAFA" }}>
          <div className="justify-between flex w-full">
            <div className="flex justify-between" style = {{width : "calc(100% - 350px)"}}>
              <Link href="/dashboard">
                <a href="#" className="topbutton active">DASHBOARD</a>
              </Link>
              <Link href="/dashboard">
                <a href="#" className="topbutton pt-2.5">EXCHANGE</a>
              </Link>
              <Link href="/dashboard">
                <a href="#" className="topbutton pt-2.5">FARMS</a>
              </Link>
              <Link href="/dashboard">
                <a href="#" className="topbutton pt-2.5">POOLS</a>
              </Link>
              <Link href="/dashboard">
                <a href="#" className="topbutton pt-2.5">AUDITS</a>
              </Link>
              <Link href="/dashboard">
                <a href="#" className="topbutton pt-2.5">VAULT PARTNERS</a>
              </Link>
              <Link href="/dashboard">
                <a href="#" className="topbutton pt-2.5">SOCIALS</a>
              </Link>
            </div>
            <div className="flex">
              <div className="items-start pt-1.5"><img src="community.svg" style={{ width: "30px" }} /></div>
              <div className="topbutton pt-2.5 pl-2 pr-6">$0.892</div>
              <Link href="/dashboard">
                <a href="#" className="topbutton active">CONNECT WALLET</a>
              </Link>
            </div>
          </div>
        </div>
      </div >
    )
  return (
    <>
      {navbar}
    </>
  )
}
