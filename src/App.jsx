import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portafolio from "./pages/Portafolio";
import CalenclyOperation from "./components/components_portafolio/calencly/CalenclyOperation";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portafolio" element={<Portafolio />} />
      {/* rutas portaflio */}
      <Route path="/calencly_ruby" element={<CalenclyOperation />} />
      {/* {fin rrutas portafolio} */}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
