import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesPage from "./routes";
import "./styles/global.css";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesPage />
      <Footer />
    </BrowserRouter>
  );
}

export default App;