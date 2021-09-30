import React, { useState, useEffect, useMemo, useRef } from 'react';

const Nova = ({ children }) => {
    const [state, setState] = useState(1);
    return (
        <>
            <div className="relative" style={{ borderRadius: "36px", backgroundColor: "#D5D3D3", width: "90px", height: "45px" }}>
                <a href="#" className="absolute left-1 top-1 rounded-full w-9 h-9" style={{ backgroundColor: state ? "#5BC2C9" : "" }} onClick={() => { setState(1) }}></a>
                <a href="#" className="absolute left-12 top-1 rounded-full w-9 h-9" style={{ backgroundColor: !state ? "#5BC2C9" : "" }} onClick={() => { setState(0) }}></a>
            </div>
            <div className="pl-3 text-3xl font-bold">Stacked</div>
        </>
    );
};

export default Nova;
