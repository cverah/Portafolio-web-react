import { Link } from "react-router-dom";
import SectionPaddingSm from "../../SectionPaddingSm";
import ContainerLg from "../../ContainerLg";
import ImgCalencly from "../../../assets/images/photos/svg-calencly.svg";

const CalenclyOperationDescription = () => {
  return (
    <SectionPaddingSm background="bg-green-150">
      <ContainerLg>
        <div className="section-general-proyect">
          <div className="section-description-proyect">
            <h2 className="heading-2xl semi-bold mb-1.25 ">CalenCLI</h2>
            <p className="text-lg mb-1 justify">
              CalenCli es una interfaz de calendario en el que el usuario podra
              registrar un registro eventos de clases de acuerdo a la hora y
              fecha ingresada asimismo permite ver la agenda de la semana,
              recorriendo semanas hacia adelante y atras.
            </p>
            <p className="text-lg mb-1 justify">
              En esta parte de ruby trabajamos con la gema de ruby date
              <i>(require date)</i> para el manejo de fecha y colorize
              <i>(require colorize)</i> para agregar algunos colores a la
              terminal.
            </p>
            <Link
              className="button--xl button--primary text-decoration-none inline-block br-1/2"
              to="https://github.com/cverah/ruby-CalenCly"
              target="_blank"
            >
              Ir al repositorio
            </Link>
          </div>
          <img src={ImgCalencly} alt="img-terminal" />
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default CalenclyOperationDescription;
