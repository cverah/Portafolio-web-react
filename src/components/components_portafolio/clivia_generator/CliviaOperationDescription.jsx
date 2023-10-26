import { Link } from "react-router-dom";
import ImgClivia from "../../../assets/images/photos/proyect-clivia/img-clivia-generator.png";
import SectionPaddingSm from "../../SectionPaddingSm";
import ContainerLg from "../../ContainerLg";

const CliviaOperationDescription = () => {
  return (
    <SectionPaddingSm background="bg-green-150">
      <ContainerLg>
        <div className="section-general-proyect">
          <div className="section-description-proyect">
            <h2 className="heading-2xl semi-bold mb-1.25 ">Clivia Generator</h2>
            <p className="text-lg mb-1 justify">
              Este es un programa que te permite responder 10 preguntas de
              genero randomico, por cada respuesta correcta se obtiene 10
              puntos, 0 puntos por respuesta incorrecta, al finalizar se te
              permitira guardar el nombre del jugador y la opcion de visualizar
              los puntajes en orden de merito. Este programa realiza solicitudes
              efectivas y obtiene respuestas a través de la red usando Ruby,
              trabajando con API (TRIVIA) para manejar, usar y guardar la
              información de manera eficiente en un archivo JSON
            </p>
            <p className="text-lg mb-1 justify">
              En esta parte de ruby trabajamos con la gema de ruby json{" "}
              <i>(require json)</i> para el manejo de archivos de formato JSON ,
              httparty <i>(require httparty)</i> para conexion URL de internet,
              terminal table <i>(require terminal-table)</i> para impresion en
              formato de tabla.
            </p>
            <p className="text-lg mb-1">
              El API a consumir en este proyecto es el OPEN TRIVIA API que se
              encuentra en{" "}
              <Link to="https://opentdb.com/api.php?amount=10" target="_blank">
                AQUI
              </Link>
            </p>
            <Link
              className="button--xl button--primary text-decoration-none inline-block br-1/2"
              to="https://github.com/cverah/ruby_Generador_CLIvia"
              target="_blank"
            >
              Ir al repositorio
            </Link>
          </div>
          <img className="br-1/2" src={ImgClivia} alt="img-clivia-generator" />
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default CliviaOperationDescription;
