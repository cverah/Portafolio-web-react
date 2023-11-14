import styled from "@emotion/styled";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsBoxArrowInUpRight, BsGithub } from "react-icons/bs";
import { FaTerminal } from "react-icons/fa";
import { SiRuby, SiRubyonrails } from "react-icons/si";
import { Link } from "react-router-dom";
import ImgSomeplash from "../../../assets/images/photos/someplash/someplash-img7.webp";

const IconStyled = styled.div`
  color: ${(props) => props.color};
`;

const ImgProyect = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 8px;
`;

const Someplash = () => {
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
          <IconStyled color="blue">
            <BiLogoPostgresql style={{ width: "24px", height: "24px" }} />
          </IconStyled>
          <IconStyled color="red">
            <SiRubyonrails style={{ width: "24px", height: "24px" }} />
          </IconStyled>
        </div>
        <div className="margin-right">
          <IconStyled color="red">
            <BsBoxArrowInUpRight style={{ width: "24px", height: "24px" }} />
          </IconStyled>
        </div>
      </div>
      <ImgProyect src={ImgSomeplash} alt="img-sompelash" />
      <div className="content-article-portafolio">
        <h3 className="text-xl semi-bold text-uppercase">Someplash</h3>
        <p className="text-lg light justify">
          El proyecto <strong>Someplash</strong> es una plataforma de código
          abierto para compartir fotos increíbles con el mundo. Diseñado en una
          arquitectura MVC. En este trabajo se realizo con POSTGRESQL, se ha
          creado 3 tablas (categoria, photo y comments) con un ralacion
          polimorfica y con un counter cache para contar la cantidad de photos y
          comentarios. Asimismo para el cargado de imagenes hemos usado el
          active_storage que permite alamacenar las fotos en el framework de
          rails, aplicando en todo momento la arquitectura de ruby on rails que
          es el MODELO VISTA CONTROLADOR. El diseño de este proyecto esta hecho
          en figma se encuentra{" "}
          <Link
            to={
              "https://www.figma.com/file/UqSMl0f43mV6yqguK6IrVR/Somesplash?node-id=888%3A708"
            }
            target="_blank"
          >
            Aqui
          </Link>
        </p>
      </div>
      <div className="footer-article-portafolio mt-auto">
        <Link to="https://github.com/cverah/SOMEPLASH_RAILS" target="_blank">
          Ver Repositorio
        </Link>
        <Link to="/someplash">Pasos de Funcionamiento</Link>
      </div>
    </article>
  );
};

export default Someplash;
