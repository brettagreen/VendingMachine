import './VendingMachine.css';

import NavBar from "./NavBar";
import Home from "./Home";
import Turkey from "./Turkey";
import Cheese from "./Cheese";
import Oregano from "./Oregano";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function VendingMachine() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/turkey" element={<Turkey />} />
            <Route path="/cheese" element={<Cheese />} />
            <Route path="/oregano" element={<Oregano />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default VendingMachine