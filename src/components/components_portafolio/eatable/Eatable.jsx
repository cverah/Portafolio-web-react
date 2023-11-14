import styled from "@emotion/styled";
import { BsBoxArrowInUpRight, BsGithub } from "react-icons/bs";
import { FaReact, FaTerminal } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { Link } from "react-router-dom";
import EatableProyect from "../../../assets/images/photos/eatable/eatable-img.webp";

const IconStyled = styled.div`
  color: ${(props) => props.color};
`;

const ImgProyect = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 8px;
`;

const Eatable = () => {
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
      <ImgProyect src={EatableProyect} alt="img-gethome" />
      <div className="content-article-portafolio">
        <h3 className="text-xl semi-bold text-uppercase">
          EATABLE (Individual Evaluation)
        </h3>
        <p className="text-lg light justify">
          El proyecto <strong>EATABLE</strong> es una aplicacion donde aparecen
          una lista de comidas en la que el usuario puede observar la imagen la
          descripcion y el precio, asimismo puede registrar comida, actualizarla
          y eliminarla (CRUD OPERATION) esto sin la necesidad de hacer un reload
          page para actualizar los datos. Los datos se estan consumiendo de la
          URL https://react-eatable-api.herokuapp.com/products y asimismo cuenta
          con validaciones en el formulario en caso este vacio el campo o no sea
          un campo valido.
          <br />
          Por ultimo el diseño de la aplicacion se baso en el diseño figma que
          se encuentra en{" "}
          <Link
            to={
              "https://www.figma.com/file/9iX52juOI5ZghyewK0svxO/Eatable?type=design&node-id=2569-152&mode=design"
            }
            target="_blank"
          >
            Aqui
          </Link>
        </p>
      </div>
      <div className="footer-article-portafolio mt-auto">
        <Link to="https://github.com/cverah/Eatable" target="_blank">
          Ver Repositorio
        </Link>
        <Link to="/eatable">Pasos de Funcionamiento</Link>
      </div>
      <div className="footer-article-portafolio">
        <Link
          to={"https://eatable-cmvh.netlify.app/"}
          target="_blank"
          style={{ backgroundColor: "brown" }}
        >
          VER DEMO
        </Link>
      </div>
    </article>
  );
};

export default Eatable;
