import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portafolio from "./pages/Portafolio";
import CalenclyOperation from "./components/components_portafolio/calencly/CalenclyOperation";
import CliviaOperation from "./components/components_portafolio/clivia_generator/CliviaOperation";
import InsigthOperation from "./components/components_portafolio/insight/InsigthOperation";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portafolio" element={<Portafolio />} />
      {/* rutas portaflio */}
      <Route path="/calencly_ruby" element={<CalenclyOperation />} />
      <Route path="/clivia_generator" element={<CliviaOperation />} />
      <Route path="/insight" element={<InsigthOperation />} />
      {/* {fin rrutas portafolio} */}
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
