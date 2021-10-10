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
export default function TopPage({ children, active }) {
  const screenWidth = useWindowDimensions().width;
  const [isMobile, setIsMobile] = useState(false);
  const [isNav, setIsNav] = useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const scroll = useWindowScroll().scroll;
  const ref = useRef(null);
  const menus = ["DASHBOARD", "EXCHANGE", "FARMS", "POOLS", "AUDITS", "VAULT PARTNERS", "SOCIALS"];
  let navbar;
  useEffect(() => {
    screenWidth > 1350 ? setIsMobile(false) : setIsMobile(true);
  }, [screenWidth]);
  useEffect(() => {

    console.log(scroll);
    scroll > 60 ? setIsNav(true) : setIsNav(false);
  }, [scroll]);
  if (isMobile)
    navbar = (
      <div className="mt-12" >
        <div className="flex flex-col fixed top-0 w-full z-20 left-0" style={{ backgroundColor: "#FAFAFA" }}>
          <div className="flex flex-row justify-between py-6 px-16">
            <Link href="/"><a href="#"><img src='logo.svg' style={{ width: "30px" }} /></a></Link>
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
                {
                  menus.map((data, i) => {
                    return <>
                      <Link href={"/" + data.toLowerCase()}>
                        <a href="#" onClick={() => { window.scrollTo(0, 0); }} className={"py-2 " + (i === 0 ? "font1" : "")}>{data}</a>
                      </Link><hr />
                    </>
                  })
                }
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
      <div className="pt-24 flex flex-row" style={{ backgroundColor: "#FAFAFA" }} ref={ref}>
        <div className=" pt-8 z-20">
          <Link href="/">
            <a href="#">
              <div className="flex flex-col items-center w-min">
                <img src='logo.svg' />
                <div className="font-normal text-4xl pt-3">DiveSwap</div>
              </div>
            </a>
          </Link>
        </div>
        <div className={isNav ? " py-3 flex flex-row font-bold text-base z-20 fixed top-0 justify-between w-full toppage"
          : " flex flex-row font-bold text-base w-full justify-between"}
          style={{ backgroundColor: "#FAFAFA", paddingLeft: isNav && "158px" }}>
          <div className="flex justify-between" style={{ width: "calc(100% - 350px)" }}>
            {
              menus.map((data, i) => {
                return <>
                  <Link href={"/" + data.toLowerCase()}>
                    <a href="#" onClick={() => { window.scrollTo(0, 0); }} className={"topbutton z-20 " + (i === 0 ? "font1 " : "") + (i === active ? "active" : "pt-2.5 ")}>{data}</a>
                  </Link>
                </>
              })
            }
          </div>
          <div className="flex">
            <div className="items-start pt-1.5"><img src="community.svg" style={{ width: "30px" }} /></div>
            <div className="topbutton pt-2.5 pl-2 pr-6">$0.892</div>
            <Link href="/dashboard">
              <a href="#" className="topbutton active z-20">CONNECT WALLET</a>
            </Link>
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
