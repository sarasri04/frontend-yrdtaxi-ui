import React from "react";

function Tariff(){

return(

<div style={{padding:"40px"}}>

<h2>Taxi Tariff</h2>

<table border="1" cellPadding="10">

<thead>

<tr>
<th>Car Type</th>
<th>Price Per KM</th>
</tr>

</thead>

<tbody>

<tr>
<td>SEDAN</td>
<td>₹14</td>
</tr>

<tr>
    <td>ETIOS</td>
    <td>₹15</td>
</tr>

<tr>
<td>SUV</td>
<td>₹19</td>
</tr>

<tr>
<td>INNOVA</td>
<td>₹20</td>
</tr>

</tbody>

</table>

</div>

)

}

export default Tariff;