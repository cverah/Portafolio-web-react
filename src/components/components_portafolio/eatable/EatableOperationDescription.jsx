import { Link } from "react-router-dom";
import ContainerLg from "../../ContainerLg";
import SectionPaddingSm from "../../SectionPaddingSm";
import Eatable from "../../../assets/images/photos/eatable/eatable-img.png";

const EatableOperationDescription = () => {
  return (
    <SectionPaddingSm background="bg-green-150">
      <ContainerLg>
        <div
          className="section-general-proyect"
          style={{ alignItems: "center" }}
        >
          <div className="section-description-proyect">
            <h2 className="heading-2xl semi-bold mb-1.25 ">EATABLE</h2>
            <p className="text-lg mb-1 justify">
              El proyecto <strong>EATABLE</strong> es una aplicacion donde
              aparecen una lista de comidas en la que el usuario puede observar
              la imagen la descripcion y el precio, asimismo puede registrar
              comida, actualizarla y eliminarla (CRUD OPERATION) esto sin la
              necesidad de hacer un reload page para actualizar los datos. Los
              datos se estan consumiendo de la URL
              https://react-eatable-api.herokuapp.com/products y asimismo cuenta
              con validaciones en el formulario en caso este vacio el campo o no
              sea un campo valido.
              <br />
              En este proyecto se aplico las librerias de <i>
                react emotion
              </i>{" "}
              (para los estilos), <i>react router dom</i>(para la navegacion),{" "}
              <i>formik</i> (para validacion del formulario) y{" "}
              <i>react icons, loader</i> (para la animacion y iconos del
              proyecto ).
              <br />
              Por ultimo el diseño de la aplicacion se baso en el diseño figma
              que se encuentra en{" "}
              <Link
                to={
                  "https://www.figma.com/file/9iX52juOI5ZghyewK0svxO/Eatable?type=design&node-id=2569-152&mode=design"
                }
                target="_blank"
              >
                Aqui
              </Link>
            </p>

            <div className="section-footer-buttons">
              <Link
                className="button--xl button--primary text-decoration-none inline-block br-1/2"
                to="https://github.com/cverah/Eatable"
                target="_blank"
              >
                Ir al repositorio
              </Link>
              <Link
                className="button--xl button--primary text-decoration-none inline-block br-1/2"
                to="https://eatable-cmvh.netlify.app/"
                target="_blank"
              >
                Ver Proyecto
              </Link>
            </div>
          </div>
          <img
            className="br-1/2"
            style={{ border: "1px solid black" }}
            src={Eatable}
            alt="img-eatable-principal"
          />
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default EatableOperationDescription;
