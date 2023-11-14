import styled from "@emotion/styled";
import { BsBoxArrowInUpRight, BsFiletypeJson, BsGithub } from "react-icons/bs";
import { FaTerminal } from "react-icons/fa";
import { SiRuby } from "react-icons/si";
import { Link } from "react-router-dom";
import ImgClivia from "../../../assets/images/photos/proyect-clivia/img-clivia-generator.png";

const IconStyled = styled.div`
  color: ${(props) => props.color};
`;

const ImgProyect = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 8px;
`;

const CliviaGenerator = () => {
  return (
    <article className="article-grid-portafolio">
      <div className="navbar">
        <div className="header-article-portafolio">
          <IconStyled color="black">
            <FaTerminal style={{ width: "24px", height: "24px" }} />
          </IconStyled>
          <IconStyled color="red">
            <SiRuby style={{ width: "24px", height: "24px" }} />
          </IconStyled>
          <IconStyled color="black">
            <BsGithub style={{ width: "24px", height: "24px" }} />
          </IconStyled>
          <IconStyled color="black">
            <BsFiletypeJson style={{ width: "24px", height: "24px" }} />
          </IconStyled>
        </div>
        <div className="margin-right">
          <IconStyled color="red">
            <BsBoxArrowInUpRight style={{ width: "24px", height: "24px" }} />
          </IconStyled>
        </div>
      </div>
      <ImgProyect src={ImgClivia} alt="img-clivia" />
      <div className="content-article-portafolio">
        <h3 className="text-xl semi-bold">
          Generador CLIvia (Individual Evaluation)
        </h3>
        <p className="text-lg light justify">
          Este es un programa que te permite responder 10 preguntas de genero
          randomico, por cada respuesta correcta se obtiene 10 puntos, 0 puntos
          por respuesta incorrecta, al finalizar se te permitira guardar el
          nombre del jugador y la opcion de visualizar los puntajes en orden de
          merito.
        </p>
      </div>
      <div className="footer-article-portafolio mt-auto">
        <Link
          to="https://github.com/cverah/ruby_Generador_CLIvia"
          target="_blank"
        >
          Ver Repositorio
        </Link>
        <Link to="/clivia_generator">Pasos de Funcionamiento</Link>
      </div>
    </article>
  );
};

export default CliviaGenerator;
