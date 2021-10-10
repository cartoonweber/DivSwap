import React, { useState, useEffect, useMemo, useRef } from 'react';

const Token = ({ children, title, img }) => {
    return (
        <div style={{ borderRadius: "55px", height: "650px", borderColor: "#4D4D4D", width: "600px" }} className="border-4 token pb-8 mt-8 mx-4">
            <div className="pr-4 flex justify-end pt-4"><img src={img} style={{ width: "70px" }} /></div>
            <div className="px-6">
                <div className="font-black text-3xl" style={{ marginTop: "-10px" }}>{title} </div>
                <div className="pt-8">{children}</div>
            </div>
        </div>
    );
};

export default Token;
