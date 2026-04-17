import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

let stompClient = null;

// 🔌 Connect WebSocket
export const connectSocket = (onMessage) => {

  const socket = new SockJS("http://localhost:8080/ws");

  stompClient = new Client({
    webSocketFactory: () => socket,
    reconnectDelay: 5000,

    onConnect: () => {
      console.log("✅ Connected to WebSocket");

      stompClient.subscribe("/topic/driver-location", (msg) => {
        const data = JSON.parse(msg.body);
        console.log("📍 Driver Location:", data);

        if (onMessage) {
          onMessage(data);
        }
      });
    },

    onStompError: (frame) => {
      console.error("❌ Broker error:", frame);
    }
  });

  stompClient.activate();
};

// 📤 Send location
export const sendLocation = (lat, lng, driverId) => {
  if (stompClient && stompClient.connected) {
    stompClient.publish({
      destination: "/app/driver-location",
      body: JSON.stringify({
        driverId: driverId,
        latitude: lat,   // ✅ FIXED
        longitude: lng    // ✅ FIXED
      })
    });
  } else {
    console.warn("⚠️ WebSocket not connected");
  }
};

// 🔌 Disconnect (IMPORTANT)
export const disconnectSocket = () => {
  if (stompClient) {
    stompClient.deactivate();
    console.log("🔌 Disconnected WebSocket");
  }
};