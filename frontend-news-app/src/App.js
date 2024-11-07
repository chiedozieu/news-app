import "./App.css";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App font-opensans">
        <HomePage />
      </div>
    </BrowserRouter>
  );
}

export default App;
