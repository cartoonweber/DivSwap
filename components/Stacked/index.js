import React, { useState, useEffect, useMemo, useRef } from 'react';

const Nova = ({ children, state, setState }) => {
    return (
        <>
            <div className="relative" style={{ borderRadius: "36px", backgroundColor: state ? "#D5D3D3" : "#4D4D4D", width: "90px", height: "45px" }}>
                <button className="absolute left-1 top-1 rounded-full w-9 h-9" style={{ backgroundColor: state ? "#5BC2C9" : "" }} onClick={() => { setState(1) }}></button>
                <button className="absolute left-12 top-1 rounded-full w-9 h-9" style={{ backgroundColor: !state ? "#5BC2C9" : "" }} onClick={() => { setState(0) }}></button>
            </div>
            <div className="pl-3 text-3xl font-bold">Stacked</div>
        </>
    );
};

export default Nova;
