import { BiSolidTerminal } from "react-icons/bi";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import PropTypes from "prop-types";

const ProjectAnalisis = ({ programing_lenguaje, good_practics }) => {
  return (
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
              <BiSolidTerminal style={{ width: "35px", height: "35px" }} />
            </div>
            <div>
              <h3 className="mb-half heading-1.125rem semi-bold">
                Conectando a la terminal
              </h3>
              <p className="text-md light">
                En un principio el grupo de trabajo trata de entender lo que
                quiere que el programa realice, una vez terminado se reparte las
                tareas iniciales y se crea los issues en github a cada
                integrante del grupo, una vez terminada se comparte la tara
                realizada y pueda ser aprobada por el equipo de trabajo
              </p>
            </div>
          </article>

          <article className="article-grid-item" id="justify-start">
            <div>
              <BsFileEarmarkCodeFill
                style={{ width: "35px", height: "35px" }}
              />
            </div>
            <div>
              <h3 className="mb-half heading-1.125rem semi-bold">
                Comenzar a codear
              </h3>
              <p className="text-md light">
                Una vez que cada integrante tiene su tarea asignada, el
                integrante crea su branch(rama) en git y luego comienza a
                realizar el codigo en el {programing_lenguaje} que satisfaga la
                tarea en mencion y tratando de optimizar dicho codigo
                <b> {good_practics}</b>
              </p>
            </div>
          </article>

          <article className="article-grid-item" id="justify-start">
            <div>
              <VscGithub style={{ width: "35px", height: "35px" }} />
            </div>
            <div>
              <h3 className="mb-half heading-1.125rem semi-bold">
                Creacion de commit en git a github
              </h3>
              <p className="text-md light">
                Una vez terminado el codigo y siendo esta aprobado por el equipo
                de trabajo se realiza un push dentro de la rama donde trabajo a
                la rama de prueba (en la mayor parte con nombre{" "}
                <strong>develop</strong>) se resuelven los conflictos en caso
                haya y nuevamente regresar a la asignacion de tareas hasta
                completar el proyecto.Una vez finalizado terminado y realizado
                prueba se migra la rama de prueba (develop) a la rama principal
                que es <strong>main</strong>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

ProjectAnalisis.propTypes = {
  programing_lenguaje: PropTypes.string,
  good_practics: PropTypes.string,
};
export default ProjectAnalisis;
