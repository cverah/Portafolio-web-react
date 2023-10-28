import ContainerLg from "../../ContainerLg";
import SectionPaddingSm from "../../SectionPaddingSm";
import ImgInsight1_1 from "../../../assets/images/photos/insight/insight-paso1-1.png";
import ImgInsight1_2 from "../../../assets/images/photos/insight/insight-paso1-2.png";
import ImgInsight1_3 from "../../../assets/images/photos/insight/insight-paso1-3.png";
import ImgSomeplash1 from "../../../assets/images/photos/someplash/someplash-img1.png";
import ImgSomeplash3 from "../../../assets/images/photos/someplash/someplash-img3.png";
import ImgSomeplash4_1 from "../../../assets/images/photos/someplash/someplash-img4-1.png";
import ImgSomeplash4_2 from "../../../assets/images/photos/someplash/someplash-img4-2.png";
import ImgSomeplash5 from "../../../assets/images/photos/someplash/someplash-img5.png";
import ImgSomeplash6 from "../../../assets/images/photos/someplash/someplash-img6.png";
import ImgSomeplash7 from "../../../assets/images/photos/someplash/someplash-img7.png";
import ImgSomeplash8 from "../../../assets/images/photos/someplash/someplash-img8.png";
import ImgSomeplash9 from "../../../assets/images/photos/someplash/someplash-img9.png";
import ImgSomeplash10 from "../../../assets/images/photos/someplash/someplash-img10.png";
import ImgSomeplash11 from "../../../assets/images/photos/someplash/someplash-img11.png";
import ImgSomeplash12 from "../../../assets/images/photos/someplash/someplash-img12.png";
import ImgSomeplash13 from "../../../assets/images/photos/someplash/someplash-img13.png";

const RunSomeplash = () => {
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
                <i>git clone git@github.com:cverah/SOMEPLASH_RAILS.git</i>
              </li>
              <li>
                luego de ello ingresamos a la carpeta clonada (se tiene que
                visualizar los archivos clonados)
              </li>
            </ul>
            <img className="br-1/2" src={ImgSomeplash1} alt="" />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 3:
              <strong className="semi-bold">
                Ejecutar Bundle install y comandos de creacion de BD y
              </strong>
            </small>
            <p className="regular text-md justify">
              Una vez terminado el paso 2 realizamos la instalacion de bundle
              install para que se puedan descargar e instalar las gemas del
              proyecto y asimismo los comandos de rails para las ejecucion de BD
              de postgress (OJO que tiene que estar instalado postgresql en su
              SO)
            </p>
            <ul className="regular text-md">
              <li>
                en la terminal ejecutamos el comando <i>bundle install</i>
              </li>
              <li>
                Ejecutamos el rails db:create esto creara la base de datos test
                y develop en postgresql
              </li>
              <li>
                Ejecutamos el rails db:create esto creara la base de datos test
                y develop en postgresql
              </li>
            </ul>
            <img className="br-1/2" src={ImgSomeplash3} alt="" />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 4:
              <strong className="semi-bold">
                Ejecutar migraciones y semillas
              </strong>
            </small>
            <p className="regular text-md justify">
              Realizamos las migraciones que son la creacion de tablas y
              relaciones a traves de modelos de Rails y los seed que son las
              semillas la informacion por defecto para las tablas.
            </p>
            <ul className="regular text-md">
              <li>
                Ejecutamos <i>rails db:migrate</i> esto hara la creacion de
                tablas y relaciones
              </li>
              <li>
                Ejecutamos <i>rails db:seed</i> esto creara la informacion para
                las tablas archivo seed.rb
              </li>
            </ul>
            <img className="br-1/2" src={ImgSomeplash4_1} alt="" />
            <img className="br-1/2" src={ImgSomeplash4_2} alt="" />
            <img className="br-1/2" src={ImgSomeplash5} alt="" />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 5:
              <strong className="semi-bold">Ejecutar nuestro proyecto</strong>
            </small>
            <p className="regular text-md justify">
              Ejecutamos nuestro proyecto con rails server
            </p>
            <ul className="regular text-md">
              <li>
                Ejecutamos <i>rails server o tambien rails s</i> esto hara
                correr nuestro proyecto (OJO QUE SI NO SE REALIZO LOS PASOS
                ANTERIORES SALDRA ERROR)
              </li>
            </ul>
            <img className="br-1/2" src={ImgSomeplash6} alt="" />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 6:
              <strong className="semi-bold">Vista Inicial del Proyecto</strong>
            </small>
            <p className="regular text-md justify">
              Si todo se realizo crreactmente aparecera la pantalla inicial del
              proyecto
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ImgSomeplash7}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 7:
              <strong className="semi-bold">Opcion Crear Categoria</strong>
            </small>
            <p className="regular text-md justify">
              El usuario puede crear un categoria donde se requeria el nombre de
              la categoria la descripcion y una foto obligatoria
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ImgSomeplash8}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 8:
              <strong className="semi-bold">
                Verificacion de Creacion Categoria
              </strong>
            </small>
            <p className="regular text-md justify">
              Como se observa en la imagen se ha creado la categoria
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ImgSomeplash9}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 9:
              <strong className="semi-bold">
                Vista de las fotos que tienen la categoria
              </strong>
            </small>
            <p className="regular text-md justify">
              En un inicio se puede observar que la categoria creada no cuenta
              con photos entonces tambien podemos agregar photos dentro de una
              categoria.
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ImgSomeplash10}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 10:
              <strong className="semi-bold">
                Creacion de foto dentro de una categoria
              </strong>
            </small>
            <p className="regular text-md justify">
              Las fotos que se crean pertenecen a una categoria por ello la
              creacion es similar a una categoria con la diferecia que tiene que
              seleccionar a la categoria que pertence{" "}
              <i>
                (por defecto sale la categoria en la que se encuentra en el
                select)
              </i>
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ImgSomeplash11}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 11:
              <strong className="semi-bold">
                Verificacion de foto y creacion de comentarios
              </strong>
            </small>
            <p className="regular text-md justify">
              Se verifica la creacion de foto y asimismo se pueden crear
              comentarios de las fotos y tambien de las categorias (feedback)
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ImgSomeplash12}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 12:
              <strong className="semi-bold">Busqueda de fotos</strong>
            </small>
            <p className="regular text-md justify">
              En este proyecto hay una opcion de buscar foto en el cual solo
              escribes alguna similitud del nombre de la foto y realizara la
              busqueda mostrando las fotos que coincidan con el nombre
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ImgSomeplash13}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 13:
              <strong className="semi-bold">Opciones Adicionales</strong>
            </small>
            <p className="regular text-md justify">
              Como en todo CRUD OPERATION este proyecto cuenta con las opcion de
              mostrar, actualizar y eliminar tanto para categorias, fotos y
              comentarios se pueden probar las opciones en los iconos
              correspondientes.
            </p>
          </article>
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default RunSomeplash;
