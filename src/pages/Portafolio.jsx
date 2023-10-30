import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionPaddingMd from "../components/SectionPaddingMd";
import ContainerLg from "../components/ContainerLg";
import Calencly from "../components/components_portafolio/calencly/Calencly";
import CliviaGenerator from "../components/components_portafolio/clivia_generator/CliviaGenerator";
import Insigth from "../components/components_portafolio/insight/Insigth";
import Someplash from "../components/components_portafolio/someplash/Someplash";
import Tweetable from "../components/components_portafolio/Tweetable/Tweetable";
import DoableJS from "../components/components_portafolio/DoableJs/DoableJS";

const Portafolio = () => {
  return (
    <>
      <Header />
      <SectionPaddingMd>
        <ContainerLg>
          <div className="center mb-1">
            <h2 className="heading-2rem mb-1/4">Portafolio</h2>
            <p className="text-lg">La práctica construye el dominio</p>
          </div>
          <div className="article-grid-2columns">
            <DoableJS />
            <Tweetable />
            <Someplash />
            <Insigth />
            <CliviaGenerator />
            <Calencly />
          </div>
        </ContainerLg>
      </SectionPaddingMd>
      <Footer />
    </>
  );
};

export default Portafolio;
