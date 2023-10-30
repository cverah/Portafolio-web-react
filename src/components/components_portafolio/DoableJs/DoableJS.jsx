import styled from "@emotion/styled";

import { BsBoxArrowInUpRight, BsGithub } from "react-icons/bs";
import { FaTerminal } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { Link } from "react-router-dom";

const IconStyled = styled.div`
  color: ${(props) => props.color};
`;

const DoableJS = () => {
  return (
    <article className="article-grid-portafolio">
      <div className="navbar">
        <div className="header-article-portafolio">
          <IconStyled color="black">
            <FaTerminal style={{ width: "24px", height: "24px" }} />
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
        <h3 className="text-xl semi-bold text-uppercase">
          DOABLE JS (Individual Evaluation)
        </h3>
        <p className="text-lg light justify">
          El proyecto <strong>Doable</strong> es una aplicacion de un todo list
          donde tiener la opcion de crear usuario y loguearte y asimismo tener
          disponible tu lista de tareas en el cual tendras la opcion crear
          tareas y ordenarlas por varias opciones y asimismo se cuenta con la
          opcion de marcar como importante y asimismo marcar la tarea que esta
          completada. Este proyecto se realizo consumiendo de esta URL &apos
          https://doable-api.herokuapp.com/ &apos.
          <br />
          Asimismo se aplico la parte de fetch y session storage para consumir
          los servicios y esten grabados hasta que el usuario haga un logout.
          <br />
          Asimismo el diseño de la aplicacion se encuentra{" "}
          <Link
            to={
              "https://www.figma.com/file/NNdVoofP8u1kqw3zXAIkek/Doable?type=design&node-id=1-624&mode=design"
            }
            target="_blank"
          >
            Aqui
          </Link>
        </p>
      </div>
      <div className="footer-article-portafolio mt-auto">
        <Link to="https://github.com/cverah/Doable-JS" target="_blank">
          Ver Repositorio
        </Link>
        <Link to="/doable">Pasos de Funcionamiento</Link>
      </div>
      <div className="footer-article-portafolio">
        <Link
          to={"https://doable-cmvh.netlify.app/"}
          target="_blank"
          style={{ backgroundColor: "brown" }}
        >
          Ver Proyecto
        </Link>
      </div>
    </article>
  );
};

export default DoableJS;
