import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";

import CalenclyOperationDescription from "./CalenclyOperationDescription";
import RunCalencly from "./RunCalencly";

const CalenclyOperation = () => {
  return (
    <>
      <Header />
      <CalenclyOperationDescription />
      <RunCalencly />

      <section className="section-padding-sm bg-secondary-light ">
        <div className="container-lg">
          <h2 className="mb-1/4 semi-bold heading-2rem center">
            Como fue construido
          </h2>
          <p className="text-lg light mb-1/4 center">
            En nuestro equipo de trabajo fue construido de la sgte manera
          </p>
          <div className="article-3-columns">
            <article className="article-grid-item" id="justify-start">
              <div>
                <img
                  className="padding-0.5 br-1/2 bg-white"
                  src="./assets/images/icons/icon-terminal-white.svg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="mb-half heading-1.125rem semi-bold">
                  Conectando a la terminal
                </h3>
                <p className="text-md light">
                  En un prinicipio el grupo de trabajo trata de entender lo que
                  quiere que el programa realice, una vez terminado se reparte
                  las tareas iniciales y se crea los issues en github a cada
                  integrante del grupo, una vez terminada se comparte la tara
                  realizada y pueda ser aprobada por el equipo de trabajo
                </p>
              </div>
            </article>

            <article className="article-grid-item" id="justify-start">
              <div>
                <img
                  className="padding-0.5 br-1/2 bg-white"
                  src="./assets/images/icons/icon-ruby-white.svg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="mb-half heading-1.125rem semi-bold">
                  Comenzar a codear
                </h3>
                <p className="text-md light">
                  Una vez que cada integrante tiene su tarea asignada, el
                  integrante crea su branch(rama) en git y luego comienza a
                  realizar el codigo en el lenguaje de programacion ruby que
                  satisfaga la tarea en mencion y tratando de optimizar dicho
                  codigo (para ello en ruby usamos el <strong>RUBOCOP</strong>)
                </p>
              </div>
            </article>

            <article className="article-grid-item" id="justify-start">
              <div>
                <img
                  className="padding-0.5 br-1/2 bg-white"
                  src="./assets/images/icons/icon-github-white.svg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="mb-half heading-1.125rem semi-bold">
                  Creacion de commit en git a github
                </h3>
                <p className="text-md light">
                  Una vez terminado el codigo y siendo esta aprobado por el
                  equipo de trabajo se realiza un push dentro de la rama donde
                  trabajo a la rama de prueba (en la mayor parte con nombre{" "}
                  <strong>develop</strong>) se resuelven los conflictos en caso
                  haya y nuevamente regresar a la asignacion de tareas hasta
                  completar el proyecto.Una vez finalizado terminado y realizado
                  prueba se migra la rama de prueba (develop) a la rama
                  principal que es <strong>main</strong>
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container-lg">
          <h2 className="heading-2rem semi-bold mb-1/4 center">
            Nuestro Equipo de Trabajo
          </h2>
          <div className="article-3-columns">
            <article className="article-grid-item" id="padding-0">
              <img
                id="img-team"
                src="./assets/images/photos/img-carnet-CMVH.jpg"
                alt="img-carnet-CMVH"
              />
              <div>
                <p className="semi-bold center green-900 text-xl">
                  Cristhian Mario Vera Huamani
                </p>
                <div className="work_networks_page">
                  <Link to="https://github.com/cverah" target="_blank">
                    <img src="./assets/images/icons/icon-github.svg" />
                  </Link>
                  <a href="#">
                    <img src="./assets/images/icons/icon-linkedink.svg" />
                  </a>
                </div>
              </div>
            </article>

            <article className="article-grid-item" id="padding-0">
              <img
                id="img-team"
                src="./assets/images/photos/img-persona-anonima.png"
                alt="img-carnet-CMVH"
              />
              <div>
                <p className="semi-bold center green-900 text-xl">
                  David Rojas
                </p>
                <div className="work_networks_page">
                  <a href="#" target="_blank">
                    <img src="./assets/images/icons/icon-github.svg" />
                  </a>
                  <a href="#">
                    <img src="./assets/images/icons/icon-linkedink.svg" />
                  </a>
                </div>
              </div>
            </article>

            <article className="article-grid-item" id="padding-0">
              <img
                id="img-team"
                src="./assets/images/photos/img-persona-anonima.png"
                alt="img-carnet-CMVH"
              />
              <div>
                <p className="semi-bold center green-900 text-xl">
                  Edson Fernandez
                </p>
                <div className="work_networks_page">
                  <a href="#" target="_blank">
                    <img src="./assets/images/icons/icon-github.svg" />
                  </a>
                  <a href="#">
                    <img src="./assets/images/icons/icon-linkedink.svg" />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CalenclyOperation;
