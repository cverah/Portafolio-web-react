import { Link } from "react-router-dom";
import SectionPaddingSm from "../../SectionPaddingSm";
import ContainerLg from "../../ContainerLg";
import ImgInsight1_1 from "../../../assets/images/photos/insight/insight-paso1-1.png";
import ImgInsight1_2 from "../../../assets/images/photos/insight/insight-paso1-2.png";
import ImgInsight1_3 from "../../../assets/images/photos/insight/insight-paso1-3.png";
import ImgInsight2 from "../../../assets/images/photos/insight/insight-paso2.png";
import ImgInsight3 from "../../../assets/images/photos/insight/insight-paso3.png";
import ImgInsight4 from "../../../assets/images/photos/insight/insight-paso4.png";
import ImgInsight5 from "../../../assets/images/photos/insight/insight-paso5.png";
import ImgInsight6 from "../../../assets/images/photos/insight/insight-paso6.png";

const RunInsigth = () => {
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
              <strong className="semi-bold">Instalar e iniciar POSTGRES</strong>
            </small>
            <p className="regular text-md">En Linux realizamos lo siguiente:</p>
            <ul className="regular text-md justify">
              <li>
                En nuestra terminal ejecutamos los comandos
                <i>sudo apt update</i> y el mas importante
                <i>sudo apt install postgresql postgresql-contrib</i>
              </li>
              <li>Verificamos la version de postgres instalada</li>
              <li className="justify">
                Una vez terminada la instalacion, para que nuestro programa
                corra se tiene que levantar el servicio de base de datos para
                ello escribimos en nuestra terminal el comando{" "}
                <i>sudo service postgresql start</i>
              </li>
              <li>
                En muchos casos al levantar el servicio de base de datos. se
                tendra que completar con la clave del sistema operativo
              </li>
            </ul>
            <img className="br-1/2" src={ImgInsight1_1} alt="" />
            <img className="br-1/2" src={ImgInsight1_2} alt="" />
            <img className="br-1/2" src={ImgInsight1_3} alt="" />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 2:
              <strong className="semi-bold">Clonar el repositorio</strong>
            </small>
            <p className="regular text-md">Realizamos lo siguiente:</p>
            <ul className="regular text-md">
              <li>Create una carpeta y en alli abre un teminal</li>
              <li>
                En la terminal ejecutamos el comando
                <i>
                  git clone git@github.com:cverah/insights-ruby-postgres.git
                </i>
              </li>
              <li>
                luego de ello ingresamos a la carpeta clonada (se tiene que
                visualizar los archivos clonados)
              </li>
            </ul>
            <img className="br-1/2" src={ImgInsight2} alt="" />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 3:
              <strong className="semi-bold">Ejecutar Bundle install</strong>
            </small>
            <p className="regular text-md justify">
              Una vez terminado el paso 1 realizamos la instalacion de bundle
              install para que se puedan descargar las gemas del proyecto en
              este caso el <i>pg</i>, <i>csv</i> y <i>terminal-table</i>
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
            <img className="br-1/2" src={ImgInsight3} alt="" />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 4:
              <strong className="semi-bold">Create BD and Insert Data</strong>
            </small>
            <p className="regular text-md justify">
              Ejecutamos el proyecto iniciando con la creacion de la bd y
              importacion de datos desde el archivo CSV
            </p>
            <ul className="regular text-md">
              <li className="justify">
                En la terminal escribimos <i>bash bd_reset.sh</i> este archivo
                de formato.bash contiene comandos de terminal ruby que crea la
                base de datos insights y importa la informacion del archivo CSV{" "}
              </li>
              <li className="justify">
                Saldra mensajes de CREATE TABLE que es propio de ruby al momento
                de crear tablas de base de datos y asimismo demorara alrededor
                de 2 minutos en importar la informacion de aproximadamente 80
                mil datos
              </li>
              <li className="justify">
                Para comprobar la informacion a la bd podemos hacer el comando{" "}
                <i>SELECT * FROM clients;</i> a continuacion debe mostrar la
                informacion de la tabla clients, luego al final para salir del
                postgres ingresamos el comando <i>\q</i>
              </li>
            </ul>
            <img className="br-1/2" src={ImgInsight4} alt="" />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 5:
              <strong className="semi-bold">Ejecutamos el Programa</strong>
            </small>
            <p className="regular text-md">Ejecutamos lo siguiente:</p>
            <ul className="regular text-md">
              <li className="justify">
                Una vez ya teniendo la base de datos con la informacion
                respectiva ejecutamos el archivo restaurant-insights.rb con el
                comando <i>ruby restaurant-insights.rb</i> se podra visualizar
                un menu con las 10 opciones.
              </li>
              <li className="justify">
                Se tendra que ejecutar los comandos segun los indices de las
                opciones, para la opcion 1 ingresamos por teclado el <i>1</i>{" "}
              </li>
            </ul>
            <img className="br-1/2" src={ImgInsight5} alt="" />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 6: <strong className="semi-bold">Mas opciones</strong>
            </small>
            <p className="regular text-md">Ejecutamos lo siguiente:</p>
            <ul className="regular text-md">
              <li className="justify">
                Insights tiene 10 opciones por lo que solo la opcion 1 tiene
                hasta 3 formas de realizar la consulta, la primera ya lo vimos
                en el paso 5, pero tambien se puede consultar por categoria con{" "}
                <i>1 category=Italian</i>, y por ciudad con{" "}
                <i>1 city=South Hilde</i>
              </li>
              <li className="justify">
                Para mayor informacion sobre las demas opciones y del proyecto
                ingresa a
                <Link
                  to="https://github.com/cverah/insights-ruby-postgres/blob/main/README.md"
                  target="_blank"
                >
                  README.md
                </Link>
                , asimismo recordar el modelo de Happy paths (buen usuario) en
                los programas
              </li>
            </ul>
            <img className="br-1/2" src={ImgInsight6} alt="" />
          </article>
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default RunInsigth;
