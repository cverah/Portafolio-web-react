import { Link } from "react-router-dom";
import SectionPaddingSm from "../../SectionPaddingSm";
import ContainerLg from "../../ContainerLg";
import Doable from "../../../assets/images/photos/doable/doable.png";

const DoableJSOperationDescription = () => {
  return (
    <SectionPaddingSm background="bg-green-150">
      <ContainerLg>
        <div
          className="section-general-proyect"
          style={{ alignItems: "center" }}
        >
          <div className="section-description-proyect">
            <h2 className="heading-2xl semi-bold mb-1.25 ">DOABLE</h2>
            <p className="text-lg mb-1 justify">
              El proyecto <strong>Doable</strong> es una aplicacion de un todo
              list donde tiener la opcion de crear usuario y loguearte y
              asimismo tener disponible tu lista de tareas en el cual tendras la
              opcion crear tareas y ordenarlas por varias opciones y asimismo se
              cuenta con la opcion de marcar como importante y asimismo marcar
              la tarea que esta completada. Este proyecto se realizo segun el
              diseño figma que se encuentra en este{" "}
              <Link
                to={
                  "https://www.figma.com/file/NNdVoofP8u1kqw3zXAIkek/Doable?type=design&node-id=1-624&mode=design"
                }
                target="_blank"
              >
                Link
              </Link>
              <br />
              <br />
              Este trabajo esta desarrolado en el lenguaje de programacion
              JAVASCRIPT, usando las tecnologias de HTML5 y CSS basado en una
              pagina singple page (que no requiere page reload) consumiendo y
              guardando los datos en una API JSON que fue desarrollada en Ruby
              On Rails
            </p>

            <div className="section-footer-buttons">
              <Link
                className="button--xl button--primary text-decoration-none inline-block br-1/2"
                to="https://github.com/cverah/Doable-JS"
                target="_blank"
              >
                Ir al repositorio
              </Link>
              <Link
                className="button--xl button--primary text-decoration-none inline-block br-1/2"
                to="https://doable-cmvh.netlify.app/"
                target="_blank"
              >
                Ver Proyecto
              </Link>
            </div>
          </div>
          <img
            className="br-1/2"
            style={{ border: "1px solid black" }}
            src={Doable}
            alt="img-daoble-principal"
          />
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default DoableJSOperationDescription;
