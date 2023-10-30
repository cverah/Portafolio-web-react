import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portafolio from "./pages/Portafolio";
import CalenclyOperation from "./components/components_portafolio/calencly/CalenclyOperation";
import CliviaOperation from "./components/components_portafolio/clivia_generator/CliviaOperation";
import InsigthOperation from "./components/components_portafolio/insight/InsigthOperation";
import Contact from "./pages/Contact";
import ButtonWhatsapp from "./components/ButtonWhatsapp";
import SomeplashOperation from "./components/components_portafolio/someplash/SomeplashOperation";
import TweetableOperation from "./components/components_portafolio/Tweetable/TweetableOperation";
import DoableJSOperation from "./components/components_portafolio/DoableJs/DoableJSOperation";
import ChairDNBOperation from "./components/components_portafolio/ChairDNB/ChairDNBOperation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portafolio" element={<Portafolio />} />
        {/* rutas portaflio */}
        <Route path="/calencly_ruby" element={<CalenclyOperation />} />
        <Route path="/clivia_generator" element={<CliviaOperation />} />
        <Route path="/insight" element={<InsigthOperation />} />
        <Route path="/someplash" element={<SomeplashOperation />} />
        <Route path="/tweetable" element={<TweetableOperation />} />
        <Route path="/doable" element={<DoableJSOperation />} />
        <Route path="/chairdnb" element={<ChairDNBOperation />} />
        {/* {fin rrutas portafolio} */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ButtonWhatsapp />
    </>
  );
}

export default App;
