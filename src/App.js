import CirclesList from "./Components/All_Circles/CirclesList";
import CircleDetail from "./Components/All_Circles/DetailCircle/CircleDetail";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="bg-slate-700">
      <BrowserRouter>
        <Routes>
          <Route path="/AllCircles/" element={<><Navbar /><CirclesList /></>}></Route>
          <Route path="/AllCircles/*" element={<><Navbar /><CircleDetail /></>}></Route>

          <Route path="/" element={<><Navbar /><CirclesList /></>}></Route>
          <Route path="/AddCircle" element={<><Navbar /><CircleDetail /></>}></Route>
        </Routes >
      </BrowserRouter >
    </div>
  );
}

export default App;
