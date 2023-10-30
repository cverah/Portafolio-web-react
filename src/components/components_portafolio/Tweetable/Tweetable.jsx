import styled from "@emotion/styled";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsBoxArrowInUpRight, BsGithub } from "react-icons/bs";
import { FaTerminal } from "react-icons/fa";
import { SiRuby, SiRubyonrails } from "react-icons/si";
import { Link } from "react-router-dom";

const IconStyled = styled.div`
  color: ${(props) => props.color};
`;

const Tweetable = () => {
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
      <div className="content-article-portafolio">
        <h3 className="text-xl semi-bold text-uppercase">
          Tweetable (Individual Evaluation)
        </h3>
        <p className="text-lg light justify">
          El proyecto <strong>Tweetable</strong> es una simulacion de la red
          social Twitter donde se puede ver las publicaciones que realizan los
          usuarios asimismo podra dar me gusta (like) a las publicaciones y
          podrar comentar dichas pulicaciones (re-tweet), asimismo tiene un
          apartado de perfil (profile) en donde podra almacenar los tweets y los
          likes que ha generado el usuario y asimismo la edicion del perfil. En
          este proyecto cuenta con 3 tipos de usuarios cada uno authenticado
          para realizar diferentes funciones en la aplicacion.
          <br />
          <br />
          Asimismo en este proyecto se puede Authenticar de manera automatica
          mediante el github, para lo cual va a requerir que se genere
          credenciales de Client ID y Client Public.
          <Link
            to={
              "https://www.figma.com/file/B7aydkPtCKfmlP8HxwwXng/Tweetable?type=design&node-id=2201-6303&mode=design"
            }
            target="_blank"
          >
            Aqui
          </Link>
        </p>
      </div>
      <div className="footer-article-portafolio mt-auto">
        <Link to="https://github.com/cverah/Tweetable-Rails" target="_blank">
          Ver Repositorio
        </Link>
        <Link to="/tweetable">Pasos de Funcionamiento</Link>
      </div>
    </article>
  );
};

export default Tweetable;
