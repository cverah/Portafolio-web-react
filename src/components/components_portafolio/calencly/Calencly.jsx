import styled from "@emotion/styled";
import { BsBoxArrowInUpRight, BsGithub } from "react-icons/bs";
import { FaTerminal } from "react-icons/fa";
import { SiRuby } from "react-icons/si";
import { Link } from "react-router-dom";
import ImgCalencly from "../../../assets/images/photos/svg-calencly.svg";

const IconStyled = styled.div`
  color: ${(props) => props.color};
`;

const ImgProyect = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 8px;
`;

const Calencly = () => {
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
        </div>
        <div className="margin-right">
          <IconStyled color="red">
            <BsBoxArrowInUpRight style={{ width: "24px", height: "24px" }} />
          </IconStyled>
        </div>
      </div>
      <ImgProyect src={ImgCalencly} alt="img-calencly" />
      <div className="content-article-portafolio">
        <h3 className="text-xl semi-bold">CalenCLI</h3>
        <p className="text-lg light">
          CalenCli es una interfaz de calendario en el que el usuario podra
          registrar un registro eventos de clases de acuerdo a la hora y fecha
          ingresada asimismo permite ver la agenda de la semana, recorriendo
          semanas hacia adelante y atras
        </p>
      </div>
      <div className="footer-article-portafolio mt-auto">
        <Link to="https://github.com/cverah/ruby-CalenCly" target="_blank">
          Ver Repositorio
        </Link>
        <Link to="/calencly_ruby">Pasos de Funcionamiento</Link>
      </div>
    </article>
  );
};

export default Calencly;
