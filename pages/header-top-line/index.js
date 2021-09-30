import Head from 'next/head'
import './styles.module.css';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { Collapse, CardText, Card } from "reactstrap";

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
export default function Home() {
  const screenWidth = useWindowDimensions().width;
  const [isMobile, setIsMobile] = useState(false);
  const [isNav, setIsNav] = useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const scroll = useWindowScroll().scroll;
  const ref = useRef(null);
  let navbar;
  useEffect(() => {
    screenWidth > 1000 ? setIsMobile(false) : setIsMobile(true);
  }, [screenWidth]);
  useEffect(() => {
    scroll > 40 ? setIsNav(true) : setIsNav(false);
  }, [scroll]);
  if (isMobile)
    navbar = (
      <div className="mt-12" >
        <div className="flex  flex-col fixed top-0 w-full z-20" style={{ backgroundColor: "#FAFAFA" }}>
          <div className="flex flex-row justify-around py-6">
            <a href="#"><img src='logo.svg' style={{ width: "30px" }} /></a>
            <div></div>
            <a href="#" className="text-2xl leading-7" onClick={(e) => {
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
                <hr /><a href = "#" className="py-2">TOKENS</a><hr />
                <a href = "#" className="py-2 ">ROADMAP</a><hr />
                <a href = "#" className="font1 underline py-2">DOCS</a><hr />
                <a href = "#" className="font1 underline py-2">SOCIALS</a><hr />
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  else
    navbar = (
      <div className="mt-12 pt-6 flex flex-row z-20 " style={{ backgroundColor: "#FAFAFA" }} ref = {ref}>
        <div className="flex-1 pl-20">
          <a href="#"><img src='logo.svg' />
            <div className="font-normal text-4xl leading-10 pt-3">DiveSwap</div>
          </a>
        </div>

        <div className={isNav ? "z-20 py-6 flex flex-row font-black text-2xl leading-7 pr-20 fixed top-0 w-full" : "flex-1 pr-20 flex z-20 flex-row font-black text-2xl"}
          style={{ backgroundColor: "#FAFAFA" }}>
          {isNav && <div className="flex-1 pl-20"></div>}
          <div className="flex-1 flex-row flex justify-around">
            <a href = "#" onClick = {(e) => {
              e.preventDefault();
              
            }}>TOKENS</a>
            <a href = "#">ROADMAP</a>
            <a href = "#" className="font1 underline">DOCS</a>
            <a href = "#" className="font1 underline">SOCIALS</a>
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
