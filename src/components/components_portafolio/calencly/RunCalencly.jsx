import ContainerLg from "../../ContainerLg";
import SectionPaddingSm from "../../SectionPaddingSm";

const RunCalencly = () => {
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
                <i>git clone git@github.com:cverah/ruby-CalenCly.git</i>
              </li>
              <li>
                luego de ello ingresamos a la carpeta clonada (se tiene que
                visualizar los archivos clonados)
              </li>
            </ul>
            <img
              className="br-1/2"
              src="./assets/images/photos/proyect-calencly/calencly-paso1.png"
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 2:{" "}
              <strong className="semi-bold">Ejecutar Bundle install</strong>
            </small>
            <p className="regular text-md">
              Una vez terminado el paso 1 realizamos la instalacion de bundle
              install para que se puedan descargar las gemas del proyecto en
              este caso el <i>date</i> y el <i>colorize</i>
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
            <img
              className="br-1/2"
              src="./assets/images/photos/proyect-calencly/calencly-paso2.png"
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 3:{" "}
              <strong className="semi-bold">Ejecutar el proyecto</strong>
            </small>
            <p className="regular text-md">
              Una vez terminado el paso 2 ejecutamos el proyecto para ello
              hacemos lo siguiente:
            </p>
            <ul className="regular text-md">
              <li>
                Ejecutamos el archivo <i>calencli.rb</i> con el comando{" "}
                <i>ruby calencli.rb</i>
              </li>
              <li>
                Introducimos los comandos segun lo mencionado en el archivo{" "}
                <a href="https://github.com/cverah/ruby-CalenCly/blob/main/README.md">
                  README.md
                </a>
                y siguiente el modelo de Happy paths (buen usuario)
              </li>
            </ul>
            <img
              className="br-1/2"
              src="./assets/images/photos/proyect-calencly/calencly-paso3.png"
              alt=""
            />
          </article>
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default RunCalencly;
