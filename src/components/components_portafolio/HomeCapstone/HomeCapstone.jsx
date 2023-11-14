import styled from "@emotion/styled";
import { BsBoxArrowInUpRight, BsGithub } from "react-icons/bs";
import { FaReact, FaTerminal } from "react-icons/fa";
import { SiJavascript, SiRubyonrails } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { Link } from "react-router-dom";
import GetHome from "../../../assets/images/photos/gethome/getthathome.webp";

const IconStyled = styled.div`
  color: ${(props) => props.color};
`;

const ImgProyect = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 8px;
`;

const HomeCapstone = () => {
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
      <ImgProyect src={GetHome} alt="img-gethome" />
      <div className="content-article-portafolio">
        <h3 className="text-xl semi-bold text-uppercase">GET THAT HOME</h3>
        <p className="text-lg light justify">
          El proyecto <strong>GET THAT HOME</strong> es una proyecto grupal una
          aplicacion en donde se puede alquilar o rentar departamentos o
          vivienda a nivel mundial, en este proyecto existe 2 tipos de usuarios.
          <br />
          <b>Usuario Landlord:</b> puede crear viviendas o apartamentos con el
          objetivo de que estas sean vistos y sean contactado para hacer el
          tramite de compra o renta.
          <br />
          <b>Usuario Home:</b> puede ver las viviendas o apartamentos que estas
          disponibles para las ventas, asimismo tiene las opciones de guardar
          favoritos y contactar al usuario en caso sea de su agrado la vivienda
          o apartamento.
          <br />
          La API del proyecto esta desplegado en render en la URL
          https://getthathome-api.onrender.com/
          <br />
          Por ultimo el diseño de la aplicacion se baso en el diseño figma que
          se encuentra en{" "}
          <Link
            to={
              "https://www.figma.com/file/Ji4198E4M1X1LGHwMQplPJ/Get-That-Home?node-id=1466%3A18238"
            }
            target="_blank"
          >
            Aqui
          </Link>{" "}
          Y el prototipo de la aplicacion en figma{" "}
          <Link
            to={
              "https://www.figma.com/proto/Ji4198E4M1X1LGHwMQplPJ/Get-That-Home?node-id=1467%3A21881&viewport=1756%2C964%2C0.1776522696018219&scaling=min-zoom"
            }
            target="_blank"
          >
            Aqui
          </Link>
        </p>
      </div>
      <div className="footer-article-portafolio mt-auto">
        <Link
          to="https://github.com/miricuriel/c11-team3-projectGetHome-API"
          target="_blank"
        >
          Ver Repositorio (BACK END)
        </Link>
        <Link
          to="https://github.com/miricuriel/c11-team3-projectGetHome"
          target="_blank"
        >
          Ver Repositorio (FRONT END)
        </Link>
      </div>
      <div className="footer-article-portafolio">
        <Link
          to={"https://get-home-team3-c11.netlify.app/"}
          target="_blank"
          style={{ backgroundColor: "brown" }}
        >
          VER DEMO
        </Link>
      </div>
    </article>
  );
};

export default HomeCapstone;
