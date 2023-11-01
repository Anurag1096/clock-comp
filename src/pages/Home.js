import React from "react"
import ClockComp from "../components/ClockComp";
import "./style.css"
import CardComp from "../components/card";

// This page will contain  a card inside which there will be a clock component
const Home = () => {
    const data = [
        { name: "Group c", value: 400, fill: "#AB9CE9" },
        { name: "Group c", value: 300, fill: "#D8D8D8" },
        { name: "Group c", value: 200, fill: "#D8D8D8" },
        { name: "Group C", value: 100, fill: "#AB9CE9" },
    ];

    return (<>
    <div className="main-container">
    
    
        <CardComp>
            <div className="label-wrapper"><text className="text-night">Night</text></div>
            <div className="clock-wrapper">
                <div><text className="text-eve">Evening </text></div>
                <div style={{'padding-left':"5px"}}>
                    <ClockComp data={data} />
                </div>
                <div><text className="text-morn">Morning</text></div>
            </div>
            <div className="label-wrapper">  <text>Afternoon</text></div>
            <div className="button-style">
                
                <button>April</button>
                </div>
        </CardComp>
        </div>
    </>)
}

export default Home;