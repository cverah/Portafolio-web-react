import { Link } from "react-router-dom";
import ContainerLg from "../../ContainerLg";
import SectionPaddingSm from "../../SectionPaddingSm";
import ChairDNB from "../../../assets/images/photos/chairdnb/chairdnb.webp";

const ChairDNBOperationDescription = () => {
  return (
    <SectionPaddingSm background="bg-green-150">
      <ContainerLg>
        <div
          className="section-general-proyect"
          style={{ alignItems: "center" }}
        >
          <div className="section-description-proyect">
            <h2 className="heading-2xl semi-bold mb-1.25 ">CHAIRDNB</h2>
            <p className="text-lg mb-1 justify">
              El proyecto <strong>CHAIR DNB</strong> es una aplicacion de
              lugares a donde puedes realizar viajes puesto que muestra las
              imagenes, precios las puntuaciones, el lugar, y otros mas datos,
              esta informacion se logro sacar de consumiendo una API que esta en
              la URL(https://chairdnb-api.herokuapp.com) cuya peticion post
              devuevle la lista de lugares con sus caracteristicas.
              <br />
              Asimismo se aplico la parte de fetch para consumir los servicios,
              el diseño de la aplicacion se encuentra en{" "}
              <Link
                to={
                  "https://www.figma.com/file/rsZ8zNqH3eiWl802dBtX9f/Chairdnb?node-id=1%3A12"
                }
                target="_blank"
              >
                Aqui
              </Link>
              <br />
              <br />
              Este trabajo esta desarrolado en el lenguaje de programacion
              JAVASCRIPT con la libreria REACT + VITE, usando las tecnologias de
              HTML5 y CSS, consumiendo y guardando los datos en una API JSON y
              usando las librerias de RouterDOM y Proptypes para los props.
            </p>

            <div className="section-footer-buttons">
              <Link
                className="button--xl button--primary text-decoration-none inline-block br-1/2"
                to="https://github.com/cverah/Chairdnb"
                target="_blank"
              >
                Ir al repositorio
              </Link>
              <Link
                className="button--xl button--primary text-decoration-none inline-block br-1/2"
                to="https://chairdnb-cmvh.netlify.app/"
                target="_blank"
              >
                VER DEMO
              </Link>
            </div>
          </div>
          <img
            className="br-1/2"
            style={{ border: "1px solid black" }}
            src={ChairDNB}
            alt="img-chairdnb-principal"
          />
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default ChairDNBOperationDescription;
