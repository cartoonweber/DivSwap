import React from 'react';

const Detail = ({ children, title}) => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-row flex-wrap">
                    <img src={img} style={{ width: "125px" }}></img>
                    <div className="flex items-center">
                        <div className="font1 pl-10 text-5xl">{title}</div>
                    </div>
                </div>
                <div className="font-bold text-2xl pt-14">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Detail;
