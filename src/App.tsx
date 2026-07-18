import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JoinVolunteer from "./pages/JoinVolunteer";

function App() {
  return (
    <>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-volunteer" element={<JoinVolunteer />} />
      </Routes>
    </>
  );
}

export default App;