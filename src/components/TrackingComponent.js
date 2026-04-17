import React, { useEffect } from "react";
import { connectSocket, sendLocation, disconnectSocket } from "../services/socketService";

function TrackingComponent() {

  useEffect(() => {

    connectSocket((data) => {
      console.log("📡 Received in component:", data);
    });

    return () => {
      disconnectSocket(); // cleanup
    };

  }, []);

  const handleSend = () => {
    sendLocation(12.9716, 77.5946, 1);
  };

  return (
    <div>
      <h2>Tracking</h2>
      <button onClick={handleSend}>Send Location</button>
    </div>
  );
}

export default TrackingComponent;