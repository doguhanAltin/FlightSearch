import React, { useEffect, useState } from "react";
import "./App.css";

import { ContextProvider } from "./context/flightContext";
import { HomePage } from "./pages/HomePage";
function App() {
  return (
    <ContextProvider>
      <HomePage />
    </ContextProvider>
  );
}

export default App;
