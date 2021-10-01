import React, { useState, useEffect, useMemo, useRef } from 'react';

const Active = ({ children , state, setState}) => {
    
    return (
        <>
            <div className="relative flex items-center ml-9" style={{ borderRadius: "36px", backgroundColor: "#D5D3D3", width: "233px", height: "56px" }}>
                <button className="text-3xl font-bold px-2.5 py-3" style={{ borderRadius: "44px", backgroundColor: state ? "#5BC2C9" : "" }} onClick={() => { setState(1)}}>Active</button>
                <button className="text-3xl font-bold px-1.5 py-3" style={{ borderRadius: "44px", backgroundColor: !state ? "#5BC2C9" : "" }} onClick={() => { setState(0) }}>InActive</button>
            </div>
        </>
    ); 
};

export default Active;
