import { Link } from "react-router-dom";
import ContainerLg from "../../ContainerLg";
import SectionPaddingSm from "../../SectionPaddingSm";
import ImgSomeplash from "../../../assets/images/photos/someplash/someplash-img7.webp";

const SomeplashOperationDescription = () => {
  return (
    <SectionPaddingSm background="bg-green-150">
      <ContainerLg>
        <div className="section-general-proyect">
          <div className="section-description-proyect">
            <h2 className="heading-2xl semi-bold mb-1.25 ">SOMEPLASH</h2>
            <p className="text-lg mb-1 justify">
              El proyecto <strong>Someplash</strong> es una plataforma de código
              abierto para compartir fotos increíbles con el mundo. Diseñado en
              una arquitectura MVC. En este trabajo se realizo con BASE DE DATOS
              POSTGRESQL, se ha creado 3 tablas (categoria, photo y comments)
              con un ralacion polimorfica y con un counter cache para contar la
              cantidad de fotos y comentarios. Asimismo para el cargado de
              imagenes hemos usado el active_storage que permite alamacenar las
              fotos en el framework de rails, se ha aplicado en todo momento la
              arquitectura de ruby on rails que es el MODELO-VISTA-CONTROLADOR.
              El diseño de este proyecto esta hecho en figma se encuentra{" "}
              <Link
                to={
                  "https://www.figma.com/file/UqSMl0f43mV6yqguK6IrVR/Somesplash?node-id=888%3A708"
                }
                target="_blank"
              >
                Aqui
              </Link>
            </p>
            <p className="text-lg mb-1 justify">
              Las funcionalidades que puede brindar someplash es un CRUD
              OPERATION puesto que el usuario va a pder agregar las categorias
              de las fotos asimismo va poder registrar las fotos dentro de esa
              categoria con la opcion de poder realizar comentarios tanto en las
              categorias como en las fotos (feedback). Asimismo se ha añadido la
              opcion de <i>SEARCH</i> en la que puede realizar las busquedas de
              fotos de su collecion.
            </p>
            <div className="section-footer-buttons">
              <Link
                className="button--xl button--primary text-decoration-none inline-block br-1/2"
                to="https://github.com/cverah/SOMEPLASH_RAILS"
                target="_blank"
              >
                Ir al repositorio
              </Link>
              <Link
                className="button--xl button--primary text-decoration-none inline-block br-1/2"
                to="https://github.com/cverah/SOMEPLASH_RAILS/blob/main/db/ERD_SOMEPLASH.png"
                target="_blank"
              >
                Ver ERD Base de datos SOMEPLASH
              </Link>
            </div>
          </div>
          <img
            className="br-1/2"
            src={ImgSomeplash}
            alt="img-someplash-principal"
          />
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default SomeplashOperationDescription;
