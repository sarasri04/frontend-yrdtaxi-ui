import React from "react";
import {Bar, Line} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';


// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function RevenueAnalytics(){

const data={

labels:["Mon","Tue","Wed","Thu","Fri"],

datasets:[

{
label:"Revenue",
data:[2000,3500,4200,3100,5000]

}

]

};

return(

<div>

<h2>Revenue Analytics</h2>

<Bar data={data}/>

</div>

)

}

export default RevenueAnalytics;