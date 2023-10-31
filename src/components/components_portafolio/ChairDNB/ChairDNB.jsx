import styled from "@emotion/styled";
import { BsBoxArrowInUpRight, BsGithub } from "react-icons/bs";
import { FaReact, FaTerminal } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { Link } from "react-router-dom";

const IconStyled = styled.div`
  color: ${(props) => props.color};
`;

const ChairDNB = () => {
  return (
    <article className="article-grid-portafolio">
      <div className="navbar">
        <div className="header-article-portafolio">
          <IconStyled color="black">
            <FaTerminal style={{ width: "24px", height: "24px" }} />
          </IconStyled>
          <IconStyled color="green">
            <FaReact style={{ width: "24px", height: "24px" }} />
          </IconStyled>
          <IconStyled color="orange">
            <SiJavascript style={{ width: "24px", height: "24px" }} />
          </IconStyled>
          <IconStyled color="black">
            <BsGithub style={{ width: "24px", height: "24px" }} />
          </IconStyled>
          <IconStyled color="black">
            <TbApi style={{ width: "24px", height: "24px" }} />
          </IconStyled>
        </div>
        <div className="margin-right">
          <IconStyled color="red">
            <BsBoxArrowInUpRight style={{ width: "24px", height: "24px" }} />
          </IconStyled>
        </div>
      </div>
      <div className="content-article-portafolio">
        <h3 className="text-xl semi-bold text-uppercase">CHAIR DNB</h3>
        <p className="text-lg light justify">
          El proyecto <strong>cHAIR DNB</strong> es una aplicacion de lugares a
          donde puedes realizar viajes puesto que muestra las imagenes, precios
          las puntuaciones, el lugar, y otros mas datos, esta informacion se
          logro sacar de consumiendo una API que esta en la
          URL(https://chairdnb-api.herokuapp.com) cuya peticion post devuevle la
          lista de lugares con sus caracteristicas.
          <br />
          Asimismo se aplico la parte de fetch para consumir los servicios, el
          diseño de la aplicacion se encuentra en{" "}
          <Link
            to={
              "https://www.figma.com/file/rsZ8zNqH3eiWl802dBtX9f/Chairdnb?node-id=1%3A12"
            }
            target="_blank"
          >
            Aqui
          </Link>
        </p>
      </div>
      <div className="footer-article-portafolio mt-auto">
        <Link to="https://github.com/cverah/Chairdnb" target="_blank">
          Ver Repositorio
        </Link>
        <Link to="/chairdnb">Pasos de Funcionamiento</Link>
      </div>
      <div className="footer-article-portafolio">
        <Link
          to={"https://chairdnb-cmvh.netlify.app/"}
          target="_blank"
          style={{ backgroundColor: "brown" }}
        >
          Ver Proyecto
        </Link>
      </div>
    </article>
  );
};

export default ChairDNB;
