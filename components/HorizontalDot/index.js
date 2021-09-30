import React from 'react';
import { useEffect, useState, useRef } from 'react';

const HorizontalDot = ({ children }) => {

    return (
        <div className="flex flex-row">
            <div className="rounded-full bg-red w-1 h-1 mr-0.5" style={{ backgroundColor: "#FE5E5F" }}></div>
            <div className="rounded-full bg-red w-1 h-1 mr-0.5" style={{ backgroundColor: "#FE5E5F" }}></div>
            <div className="rounded-full bg-red w-1 h-1" style={{ backgroundColor: "#FE5E5F" }}></div>
        </div>
    );
};

export default HorizontalDot;
