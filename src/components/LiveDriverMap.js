import React, { useEffect, useState } from "react";
import { connectSocket } from "../services/socketService";

const LiveDriverMap = () => {

  const [driverPosition, setDriverPosition] = useState(null);

  useEffect(() => {
    connectSocket((data) => {
      setDriverPosition({
        lat: data.latitude,
        lng: data.longitude
      });
    });
  }, []);

  return (
    <div>
      <h2>Live Driver Location 🚖</h2>
      {driverPosition && (
        <p>
          Lat: {driverPosition.lat}, Lng: {driverPosition.lng}
        </p>
      )}
    </div>
  );
};

export default LiveDriverMap;