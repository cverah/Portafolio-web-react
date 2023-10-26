import ContainerLg from "../../ContainerLg";
import SectionPaddingSm from "../../SectionPaddingSm";
import ImgPaso1 from "../../../assets/images/photos/proyect-clivia/clivia-paso1.png";
import ImgPaso2 from "../../../assets/images/photos/proyect-clivia/clivia_paso2.png";
import ImgPaso3 from "../../../assets/images/photos/proyect-clivia/clivia-paso3.png";
import ImgPaso4 from "../../../assets/images/photos/proyect-clivia/clivia-paso4.png";
import ImgPaso5 from "../../../assets/images/photos/proyect-clivia/clivia-paso5.png";

const RunCliviaGenerator = () => {
  return (
    <SectionPaddingSm background="bg-green-80">
      <ContainerLg>
        <div className="center mb-1">
          <h2 className="heading-lg mb-1/4">¡EJECUTALO TU MISMO!</h2>
          <p className="text-lg">
            Pasos para ejecutar el funcionamiento del proyecto
          </p>
        </div>
        <div className="article-grid-2columns">
          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 1:
              <strong className="semi-bold">Clonar el repositorio</strong>
            </small>
            <p className="regular text-md">Realizamos lo siguiente:</p>
            <ul className="regular text-md">
              <li>Create una carpeta y en alli abre un teminal</li>
              <li>
                En la terminal ejecutamos el comando{" "}
                <i>git clone git@github.com:cverah/ruby_Generador_CLIvia.git</i>
              </li>
              <li>
                luego de ello ingresamos a la carpeta clonada (se tiene que
                visualizar los archivos clonados)
              </li>
            </ul>
            <img className="br-1/2" src={ImgPaso1} alt="" />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 2:
              <strong className="semi-bold">Ejecutar Bundle install</strong>
            </small>
            <p className="regular text-md">
              Una vez terminado el paso 1 realizamos la instalacion de bundle
              install para que se puedan descargar las gemas del proyecto en
              este caso el <i>json</i>, <i>terminal-table</i> y <i>httparty</i>
            </p>
            <ul className="regular text-md">
              <li>
                en la terminal ejecutamos el comando <i>bundle install</i>
              </li>
              <li>
                Esperamos a que se descarguen las gemas el tiempo va depender de
                la velocidad de descarga de su internet
              </li>
            </ul>
            <img className="br-1/2" src={ImgPaso2} alt="" />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 3:
              <strong className="semi-bold">Ejecutar el proyecto</strong>
            </small>
            <p className="regular text-md">
              Una vez terminado el paso 2 ejecutamos el proyecto para ello
              hacemos lo siguiente:
            </p>
            <ul className="regular text-md">
              <li>
                Ejecutamos el archivo <i>main.rb</i> con el comando{" "}
                <i>ruby main.rb</i>
              </li>
              <li>
                Ya dentro del programa escribimos <i>random</i> y el sistema
                mostrara preguntas randomicas que tendran que responder por el
                indice de las respuestas
              </li>
            </ul>
            <img className="br-1/2" src={ImgPaso3} alt="" />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 4: <strong className="semi-bold">Opcion Score</strong>
            </small>
            <p className="regular text-md">Ejecutamos lo siguiente:</p>
            <ul className="regular text-md">
              <li className="justify">
                Al finalizar las 10 preguntas el usuario tiene la opcion de
                guardar su puntaje con su nombre y en caso no introduzca su
                nombre el programa lo guardara como Anonimo
              </li>
              <li className="justify">
                Se cuenta con la opcion <i>score</i> que muestra el los puntajes
                de cada usuario ordenados de manera descendente
              </li>
            </ul>
            <img className="br-1/2" src={ImgPaso4} alt="" />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 5:
              <strong className="semi-bold">
                Guardar en archivo personalizado
              </strong>
            </small>
            <p className="regular text-md">
              Se cuenta con una opcion adicional para que se pueda guardar los
              scores en un archivo dado por el usuario
            </p>
            <ul className="regular text-md">
              <li className="justify">
                Salir del programa con la opcion <i>exit</i>
              </li>
              <li>
                Ejecutamos nuevamente el programa pero esta dandole con{" "}
                <i>ruby main.rb custom_scores.json</i> en donde el nombre
                custom_scores.json es el archivo json en donde se guardaran los
                puntajes (se le puede poner el nombre que desee al archivo json
                pero siempre con el formato.json al final)
              </li>
              <li className="justify">
                Para mas informacion sobre el proyecto ingresa a{" "}
                <a href="https://github.com/cverah/ruby-CalenCly/blob/main/README.md">
                  README.md
                </a>
                , asimismo recordar el modelo de Happy paths (buen usuario) en
                los programas
              </li>
            </ul>
            <img className="br-1/2" src={ImgPaso5} alt="" />
          </article>
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default RunCliviaGenerator;
