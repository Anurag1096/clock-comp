
import React from "react";
import "./style.css"
import infoIcon from "../../info-button_6056271.png"
const CardComp=({children})=>{
    return(<>
    <div className="card-wrapper">    
    <div className="card-header">  
      <h3>Flow Peaks</h3>
      <div className="info-img"><img src={infoIcon} alt="" width={20} height={20}/></div>
    </div>
        {children}
    </div>
    </>)
}

export default CardComp