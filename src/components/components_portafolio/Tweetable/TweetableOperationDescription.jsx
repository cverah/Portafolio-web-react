import { Link } from "react-router-dom";
import ContainerLg from "../../ContainerLg";
import SectionPaddingSm from "../../SectionPaddingSm";
import ImgTweetable from "../../../assets/images/photos/tweetable/img-tweetable.png";

const TweetableOperationDescription = () => {
  return (
    <SectionPaddingSm background="bg-green-150">
      <ContainerLg>
        <div className="section-general-proyect">
          <div className="section-description-proyect">
            <h2 className="heading-2xl semi-bold mb-1.25 ">TWEETABLE</h2>
            <p className="text-lg mb-1 justify">
              El proyecto <strong>Tweetable</strong> es una simulacion de la red
              social Twitter donde se puede ver las publicaciones que realizan
              los usuarios asimismo podra dar me gusta (like) a las
              publicaciones y podrar comentar dichas pulicaciones (re-tweet),
              asimismo tiene un apartado de perfil (profile) en donde podra
              almacenar los tweets y los likes que ha generado el usuario y
              asimismo la edicion del perfil. En este proyecto existe 3 tipos de
              usuarios el usuario visitador que vera las publicaciones los
              comentarios de las publicaciones pero no podra dar like ni
              re-tweetear hasta que este logueado. El usuario (usuario normal)
              logueado que puede hacer los mismo que el usuario visitador pero
              ademas puede dar like y re-tweetear y crear sus propias
              publicaciones y la opcion de poder ELIMINAR y EDITAR las
              publicaciones y comentarios que ha generado con SU PROPIO USUARIO
              PERO NO PUEDE ELIMINAR LAS PUBLICACIONES NI LOS COMENTARIOS DE
              OTROS USUARIO. Finalmente el usuario adminsitrador que puede hacer
              lo mismo que el anterior usuario pero la diferencia es que este
              usuario SI PUEDE ELIMINAR LAS PUBLICACIONES DE COMENTARIOS DE
              OTROS USUARIOS tiene acceso total a todas las opciones.
              <br />
              <br />
              Este trabajo esta desarrolado en ruby on rails con arquitectura
              MVC, y asimismo con authenticacion usando la gema devise y
              omniouth(para el logueo automatico con github), usando
              active_storage para las imagenes. Para las restricciones de los
              usuarios se realizo con la gema pundit que a traves de policies
              establecen reglas para los usuarios, y finalmente se agrego un
              apartado para generar api-json con unos simples test con la gema
              rspec. El diseño de este proyecto esta hecho en figma se encuentra{" "}
              <Link
                to={
                  "https://www.figma.com/file/B7aydkPtCKfmlP8HxwwXng/Tweetable?type=design&node-id=2201-6303&mode=design"
                }
                target="_blank"
              >
                Aqui
              </Link>
            </p>

            <div className="section-footer-buttons">
              <Link
                className="button--xl button--primary text-decoration-none inline-block br-1/2"
                to="https://github.com/cverah/Tweetable-Rails"
                target="_blank"
              >
                Ir al repositorio
              </Link>
              <Link
                className="button--xl button--primary text-decoration-none inline-block br-1/2"
                to="https://github.com/cverah/Tweetable-Rails/blob/main/ERD-Tweetable.jpg"
                target="_blank"
              >
                Ver ERD Base de datos TWEETABLE
              </Link>
            </div>
          </div>
          <img
            className="br-1/2"
            style={{ border: "1px solid black" }}
            src={ImgTweetable}
            alt="img-someplash-principal"
          />
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default TweetableOperationDescription;
