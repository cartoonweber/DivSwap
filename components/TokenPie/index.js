import React from 'react';
import { Line, Pie } from 'react-chartjs-2';

const TokenPie = ({ children, data, title, details, padding }) => {

    return (
        <div className="flex flex-col">
            <div style={{ width: "310px" }}>
                <Pie data={data} />
            </div>
            <div className={"font-bold text-xl mt-10 pietitle " + padding}>{title}
                <div className="flex flex-col ml-20">
                    {
                        data.datasets[0].backgroundColor.map((color, i) => {
                            return (
                                <div className="flex flex-row" >
                                    <div style={{ backgroundColor: color }} className="w-3 h-3 mt-3.5 text-sm"></div>
                                    <div className="pl-4 text-sm mt-2.5">{details[i]}</div>
                                </div>
                            )
                        })
                    }
                </div></div>

        </div >
    );
};

export default TokenPie;
