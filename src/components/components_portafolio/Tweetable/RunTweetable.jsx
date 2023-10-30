import ContainerLg from "../../ContainerLg";
import SectionPaddingSm from "../../SectionPaddingSm";
import ImgInsight1_1 from "../../../assets/images/photos/insight/insight-paso1-1.png";
import ImgInsight1_2 from "../../../assets/images/photos/insight/insight-paso1-2.png";
import ImgInsight1_3 from "../../../assets/images/photos/insight/insight-paso1-3.png";
import ImgTweetable from "../../../assets/images/photos/tweetable/img-tweetable.png";
import ImgGitGubKeys from "../../../assets/images/photos/tweetable/img-githubkeys.png";
import ImgTweetable1 from "../../../assets/images/photos/tweetable/img1-tweetable.png";
import ImgTweetable2 from "../../../assets/images/photos/tweetable/img2-tweetable.png";
import ImgTweetable3 from "../../../assets/images/photos/tweetable/img3-tweetable.png";
import ImgTweetable4 from "../../../assets/images/photos/tweetable/img4-tweetable.png";
import ImgTweetable5 from "../../../assets/images/photos/tweetable/img5-tweetable.png";
import ImgTweetable6 from "../../../assets/images/photos/tweetable/img6-tweetable.png";
import ImgTweetable7 from "../../../assets/images/photos/tweetable/img7-tweetable.png";
import { Link } from "react-router-dom";

const RunTweetable = () => {
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
              <strong className="semi-bold">
                Clonar el repositorio y pantalla de inicio
              </strong>
            </small>
            <p className="regular text-md">
              Una vez instalado postgresql realizamos lo siguiente:
            </p>
            <ul className="regular text-md">
              <li>Create una carpeta y en alli abre un teminal</li>
              <li>
                En la terminal ejecutamos el comando
                <i>git clone git@github.com:cverah/Tweetable-Rails.git</i>
              </li>
              <li>
                luego de ello ingresamos a la carpeta clonada (se tiene que
                visualizar los archivos clonados)
              </li>
              <li>
                Ingresamos a la terminal y hacemos el comnando{" "}
                <i>rails db:create</i> (esto creara la base de datos)
              </li>
              <li>
                Luego hacemos el comnando <i>rails db:migrate</i> (esto
                realizara las migraciones creacion de relaciones y modelos)
              </li>
              <li>
                Luego hacemos el comnando <i>rails db:seed</i> (esto creara las
                semillas o la informacion inicial)
              </li>
            </ul>
            <p className="regular text-md">
              Forma resumida de comandos (OJO esto eliminara el nombre de la
              base de datos de tweetable si es que ya lo tenias creado):
            </p>
            <ul className="regular text-md">
              <li>Ingresamos a la terminal</li>
              <li>
                Ejecutamos el comando <i>rails db:reset</i> (esto eliminara la
                base de datos tweetable y lo creara de nuevo con todas las
                migraciones creadas en el aplicativo)
              </li>
              <li>
                Para finalizar hacemos el comnando <i>rails db:seed</i> (esto
                creara las semillas o la informacion inicial)
              </li>
            </ul>
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 3:
              <strong className="semi-bold">
                Pantalla inicial de Tweetable
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
                Ejecutamos el comando <i>rails server</i> (esto hara correr el
                programa en ruby on rails)
              </li>
              <li>
                ya realizado esto podremos ver en el navegador en la ruta{" "}
                <i>http://localhost:3000/</i> la pantalla inicial del Tweetable.
              </li>
            </ul>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ImgTweetable}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 4 (Opcional):
              <strong className="semi-bold">
                Paso Opcional para iniciar sesion con cuenta github
              </strong>
            </small>
            <p className="regular text-md justify">
              Para que en el proyecto de tweetable pueda funciona el logueo por
              la cuenta de github se tiene que hacer las siguientes pasos.
            </p>
            <ul className="regular text-md">
              <li>
                En el proyecto se tiene que crear un archivo <i>.env</i> en la
                ruta principal en este archivo se tiene que poner las
                credenciales del github <i>Client Id</i> y el{" "}
                <i>Client Secret</i>.
              </li>
              <li>
                Si deseas informacion de como crear las credenciales github
                Client Id y Cliente Secret aca les dejo este{" "}
                <Link
                  to={
                    "https://episyche.com/blog/how-to-create-oauth-client-id-and-client-secret-for-github"
                  }
                  target="_blank"
                >
                  link
                </Link>{" "}
                que les ayudara a generar estas credenciales y ponerlos en este
                archivo .env creado.
              </li>
            </ul>
            <img
              className="br-1/2"
              style={{ boder: "1px solid black" }}
              src={ImgGitGubKeys}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 5:
              <strong className="semi-bold">Inicio de Sesion</strong>
            </small>
            <p className="regular text-md justify">
              Cuando se requiere dar like o comentar a alguna publicacion el
              sistema te pedira que te loguees por ello aparacera esta ventana
              de inicio de sesion
            </p>
            <ul className="regular text-md">
              <li>Aparecera la ventana para iniciar sesion</li>
              <li>
                Si ha configurado el paso 4 sobre las credenciales de github
                entonces podras hacer uso de este boton ya que te estaras
                loguenado con una cuenta de github.
              </li>
            </ul>
            <img className="br-1/2" src={ImgTweetable1} alt="" />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 6:
              <strong className="semi-bold">
                Creamos cuenta de inicio de Sesion
              </strong>
            </small>
            <p className="regular text-md justify">
              El aplicativo te permitira crear una cuenta (usuario normal) que
              te permitira en adelante crear publicacion, comentar y dar like.
            </p>
            <ul className="regular text-md">
              <li>
                Si no tienes imagen no te preocupes el sistema te asignara uno
              </li>
              <li>la contraseña tiene que ser mayor a 6 digitos</li>
            </ul>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ImgTweetable2}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 7:
              <strong className="semi-bold">
                Pantalla de Inicio con usuario logueado
              </strong>
            </small>
            <p className="regular text-md justify">
              Al iniciar sesion te mostraran las publicaciones realizadas y
              asimismo te permitiran crear tus propias publicaciones, dara like
              y comentar otras publicaciones de tu interes.
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ImgTweetable3}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 8:
              <strong className="semi-bold">
                Actualizacion y eliminacion de nuestras publicaciones y
                comentarios
              </strong>
            </small>
            <p className="regular text-md justify">
              Cuando un usuario crea sus publicaciones y sus comentarios es
              capaz de poder editarlos y borrando, PERO SOLO LOS QUE HA CREADO
              NO PUEDE ELIMINAR LAS PUBLICACIONES, COMENTARIOS Y LOS LIKES DE
              OTROS USUARIOS
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ImgTweetable4}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 9:
              <strong className="semi-bold">Seccion Profile</strong>
            </small>
            <p className="regular text-md justify">
              Asimismo un usuario logueado podra ver su profile que consiste en
              ver los tweets que ha realizado y aparte los likes que el usuario
              tiene.
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ImgTweetable5}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 10:
              <strong className="semi-bold">Usuario Administrador</strong>
            </small>
            <p className="regular text-md justify">
              En este proyecto se agrego un usuario administrador en el cual
              este usuario puede eliminar las publicaciones, comentarios y likes
              de cualquier usuario, es como el super usuario.
            </p>
            <ul className="regular text-md justify">
              <li>
                Para acceder a tweetable con el superusuario se ha creado un
                usuario.
                <br />
                <br />
                Usuario: <i>admin@mail.com</i>
                <br />
                <br />
                Clave: <i>supersecret</i>
              </li>
            </ul>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ImgTweetable6}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline">
              Paso Nro 11:
              <strong className="semi-bold">
                Vista de usuario administrador con las opciones de editar y
                eliminar
              </strong>
            </small>
            <p className="regular text-md justify">
              Se verifica que estan habilitadas las opciones de actulizar y
              eliminar las publicaciones de cualquier usuario.
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ImgTweetable7}
              alt=""
            />
          </article>
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default RunTweetable;
