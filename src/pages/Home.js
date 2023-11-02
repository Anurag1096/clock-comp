import React, { useState } from "react"
import ClockComp from "../components/ClockComp";
import "./style.css"
import CardComp from "../components/card";

// This page will contain  a card inside which there will be a clock component
const Home = () => {
    const dataIn = [
        {
            "april": [{ name: "Active", value: 10, fill: "#AB9CE9" },
            { name: "Inactive", value: 5, fill: "#D8D8D8" },
            { name: "Active", value: 4, fill: "#AB9CE9" },
            { name: "Inactive", value: 5, fill: "#D8D8D8" },
            ]
        },
        {
            "may": [{ name: "Active", value: 4, fill: "#AB9CE9" },
            { name: "Inactive", value: 6, fill: "#D8D8D8" },
            { name: "Active", value: 2, fill: "#AB9CE9" },
            { name: "Inactive", value: 12, fill: "#D8D8D8" },
            ]
        },
        {
            "june": [{ name: "Active", value: 8, fill: "#AB9CE9" },
            { name: "Inactive", value: 7, fill: "#D8D8D8" },
            { name: "Active", value: 4, fill: "#AB9CE9" },
            { name: "Inactive", value: 5, fill: "#D8D8D8" },
            ]
        },
    ];

    const [data, setData] = useState(dataIn[0].april)

    const handleChange = (e) => {
        if (e.target.value === "may") {
            setData(dataIn[1].may)
        } else if (e.target.value === "june") {
            setData(dataIn[2].june)
        } else {
            setData(dataIn[0].april)
        }
        // setData()

    }
    return (
        <div className="main-container">


            <CardComp>
                <div className="label-wrapper"><text className="text-night">Night</text></div>
                <div className="clock-wrapper">
                    <div><text className="text-eve">Evening </text></div>
                    <div style={{ 'padding-left': "5px" }}>
                        <ClockComp data={data} />
                    </div>
                    <div><text className="text-morn">Morning</text></div>
                </div>
                <div className="label-wrapper">  <text>Afternoon</text></div>
                <div className="button-style">
                    <select name="months" id="months" onChange={handleChange}>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                    </select>
                </div>
            </CardComp>
        </div>
    )
}

export default Home;