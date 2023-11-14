import styled from "@emotion/styled";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsBoxArrowInUpRight, BsGithub } from "react-icons/bs";
import { FaTerminal } from "react-icons/fa";
import { SiRuby } from "react-icons/si";
import { Link } from "react-router-dom";
import ImgInsight from "../../../assets/images/photos/insight/insights-principal.png";

const IconStyled = styled.div`
  color: ${(props) => props.color};
`;

const ImgProyect = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 8px;
`;

const Insigth = () => {
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
        </div>
        <div className="margin-right">
          <IconStyled color="red">
            <BsBoxArrowInUpRight style={{ width: "24px", height: "24px" }} />
          </IconStyled>
        </div>
      </div>
      <ImgProyect src={ImgInsight} alt="img-insigth" />
      <div className="content-article-portafolio">
        <h3 className="text-xl semi-bold text-uppercase">Insights</h3>
        <p className="text-lg light justify">
          El proyecto <strong>Insight</strong> es un programa de con el fin de
          realizar encuestas a alrederedor 80 mil personas en relacion las
          visitas de restaurantes alrededor del mundo, este proyecto esta
          realizado con el diagrama entidad relacion (ERD) con una base de datos
          en POSTGRES y importando la informacion de un archivo en formato CSV,
          que por ende nos dan resultado en base a las consultas realizadas a la
          base de datos que nos permiten recuperar y manipular datos dentro de
          esas estructuras.
        </p>
      </div>
      <div className="footer-article-portafolio mt-auto">
        <Link
          to="https://github.com/cverah/insights-ruby-postgres"
          target="_blank"
        >
          Ver Repositorio
        </Link>
        <Link to="/insight">Pasos de Funcionamiento</Link>
      </div>
    </article>
  );
};

export default Insigth;
