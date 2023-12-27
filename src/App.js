import CirclesList from "./Components/All_Circles/CirclesList";
import CircleDetail from "./Components/All_Circles/DetailCircle/CircleDetail";
// import NewCircle from "./Components/All_Circles/New_Circle/NewCircle";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewCircle from "./Components/New_Circle/NewCircle";
import AllSignalList from "./Components/Signal_Status/AllSignalList";


function App() {
  return (
    <div className="bg-slate-700">
      <BrowserRouter>
        <Routes>
          <Route path="/AllCircles/" element={<><Navbar /><CirclesList /></>}></Route>
          <Route path="/AllCircles/*" element={<><Navbar /><CircleDetail /></>}></Route>
          <Route path="/" element={<><Navbar /><CirclesList /></>}></Route>
          <Route path="/AddCircle" element={<><Navbar /><NewCircle /></>}></Route>
          <Route path="/SignalStatus" element={<><Navbar /><AllSignalList /></>}></Route>
        </Routes >
      </BrowserRouter >
    </div>
  );
}

export default App;
