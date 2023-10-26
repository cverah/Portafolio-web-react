import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionPaddingMd from "../components/SectionPaddingMd";
import ContainerLg from "../components/ContainerLg";
import Calencly from "../components/components_portafolio/calencly/Calencly";
import CliviaGenerator from "../components/components_portafolio/clivia_generator/CliviaGenerator";
import Insigth from "../components/components_portafolio/insight/Insigth";

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
            <Calencly />
            <CliviaGenerator />

            <Insigth />

            <article className="article-grid-portafolio">
              <div className="navbar">
                <div className="header-article-portafolio">
                  <img
                    className="img-1.5"
                    src="./assets/images/icons/icon-terminal-ubuntu.svg"
                    alt="icon-terminal-ubuntu"
                  />
                  <img
                    className="img-1.5"
                    src="./assets/images/icons/icon-ruby.svg"
                    alt="icon-ruby"
                  />
                  <img
                    className="img-1.5"
                    src="./assets/images/icons/icon-github.svg"
                    alt="icon-github"
                  />
                </div>
                <div className="margin-right">
                  <img
                    className="img-1.5"
                    src="./assets/images/icons/flecha-rigth-45.svg"
                    alt="flecha-right-45"
                  />
                </div>
              </div>
              <div className="content-article-portafolio">
                <h3 className="text-xl semi-bold text-uppercase">
                  Esperando New Proyect
                </h3>
                <p className="text-lg light">En espera de new proyect.</p>
              </div>
              <div className="footer-article-portafolio mt-auto">
                <Link
                  to="https://github.com/cverah/insights-ruby-postgres"
                  target="_blank"
                >
                  Ver Repositorio
                </Link>
                <a href="proyect_page_insight.html">Pasos de Funcionamiento</a>
              </div>
            </article>
          </div>
        </ContainerLg>
      </SectionPaddingMd>
      <Footer />
    </>
  );
};

export default Portafolio;
