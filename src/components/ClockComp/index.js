import React from "react";
import { PieChart, Pie, Label } from "recharts";
import './style.css'
import myimg from '../../clo.jpg';
import line from "../../line.svg"
import cross from "../../cross.svg"

const ClockComp = ({data}) => {
  return (<>
    <div className="img-container">
    <img className="img-style" src={line} alt="" width={220} height={140}/>
    <img className="cross" src={cross} alt="" width={210} height={195}/>
      {/* <img className="img-style" src={myimg} alt="" width={200} height={150} /> */}
    </div>
    <PieChart width={200} height={190}>
      <Pie
        
        data={data}
        cx={100}
        cy={100}
        startAngle={90}
        endAngle={-360}
        cornerRadius={10}
        innerRadius={60}
        outerRadius={77}
        isAnimationActive={true}
        fill="#ededed"
        paddingAngle={-10}
        dataKey="value"
      >
     
      </Pie>
    </PieChart>
    </>
  );
};

export default ClockComp;
