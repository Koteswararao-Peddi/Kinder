import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ClassesPage from "./pages/ClassesPage";
import SchoolFacilities from "./pages/SchoolFacilities";
import Teachers from "./pages/Teachers";
import MakeAppointment from "./pages/MakeAppointment";
import ContactUs from "./pages/ContactUs";
import Error from "./pages/Error";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/classes" element={<ClassesPage/>} />
      <Route path="/facilities" element={<SchoolFacilities/>} />
      <Route path="/teachers" element={<Teachers/>} />
      <Route path="/appointment" element={<MakeAppointment/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
