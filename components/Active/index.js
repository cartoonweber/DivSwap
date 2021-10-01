import React, { useState, useEffect, useMemo, useRef } from 'react';

const Active = ({ children, state, setState }) => {

    return (
        <>
            <div className="relative flex items-center ml-9 activepage" style={{ borderRadius: "36px", backgroundColor: "#D5D3D3", height: "56px" }}>
                <button className="text-3xl font-bold px-4 z-10" onClick={() => { setState(1) }}>Active</button>
                <button className="text-3xl font-bold px-1 z-10" onClick={() => { setState(0) }}>InActive</button>
                <div className={"absolute z-0 transition-all "} style={{ borderRadius: "44px", backgroundColor: "#5BC2C9", width: "50%", height: "100%", left: state === 1 ? "0" : "50%" }}></div>
            </div>
        </>
    );
};

export default Active;
