import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { List } from "./components/List/List";

function App() {
  return (
    <div className="App">
      <List />
      <Footer />
    </div>
  );
}

export default App;
