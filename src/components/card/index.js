
import React from "react";
import "./style.css"
import { Tooltip } from 'react-tooltip'
import infoIcon from "../../info-button_6056271.png"
const CardComp=({children})=>{
    return(
    <div className="card-wrapper">    
    <div className="card-header">  
      <h3>Flow Peaks</h3>
      <div className="info-img">
        <img src={infoIcon} data-tooltip-id="my-tooltip" data-tooltip-content="This is a 24 hour clock for tracking active hours on app" alt="" width={20} height={20}/>
        <Tooltip id="my-tooltip"  
         style={{ backgroundColor: "#d8d8d8", color: "#222", fontSize:'10px', width:"100px", borderRadius:"10px" }}
        />

        </div>
    </div>
        {children}
    </div>)
}

export default CardComp