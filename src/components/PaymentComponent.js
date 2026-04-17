import React from "react";

function PaymentComponent({amount}){

function handlePayment(){

const options={

key:"YOUR_RAZORPAY_KEY",

amount:amount*100,

currency:"INR",

name:"YRD Taxi",

description:"Taxi Ride Payment",

handler:function(response){

alert("Payment Successful");

console.log(response);

}

};

const rzp = new window.Razorpay(options);

rzp.open();

}

return(

<button onClick={handlePayment}>

Pay ₹{amount}

</button>

)

}

export default PaymentComponent;