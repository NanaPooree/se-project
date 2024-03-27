import React from "react";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import HomeEng from "./components/teameng/homeEng";
import TravelEng from "./components/teameng/travelEng";
import "./assets/font/Kanit Regular.ttf";
import StatusProject from "./components/teameng/statusproject";
import Reportproject from "./components/teameng/reportproject";
import Statusform from "./components/teameng/statusproform";
import Reportform from "./components/teameng/reportform";
import HomeCEO from "./components/CEO/homeceo";
import Navbarceo from "./components/Navbar/Navbarceo";
import ReportCeosale from "./components/CEO/reportceosale";
import Reportceoeng from "./components/CEO/reportceoeng";
import Statusengforceo from "./components/CEO/statusengforceo";
import Reporttravelsale from "./components/CEO/reporttravelsale";
import Reporttraveleng from "./components/CEO/reporttraveleng";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*<Route path="/" element={<Login />} />*/}
          <Route path="/homes" element={<HomeEng />} />
          <Route path="/traveleng" element={<TravelEng />} />
          <Route path="/statuspro" element={<StatusProject />} />
          <Route path="/reportpro" element={<Reportproject />} />
          <Route path="/statusform" element={<Statusform />} />
          <Route path="/reportform" element={<Reportform />} />
          <Route path="/homeceo" element={<HomeCEO />} />
          <Route path="/reportceosale" element={<ReportCeosale />} />
          <Route path="/reportceoeng" element={<Reportceoeng/>} />
          <Route path="/statusengforeng" element={<Statusengforceo/>}/>
          <Route path="/reporttravelsale" element={<Reporttravelsale />}/>
          <Route path="/reporttraveleng" element={<Reporttraveleng />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
