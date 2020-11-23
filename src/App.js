import React from "react";
import "./styles.css";

import { Board } from "./components/board/Board";
import { Header } from "./components/header/Header";

export default function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <Board />
    </div>
  );
}
