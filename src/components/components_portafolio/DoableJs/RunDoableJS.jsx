import ContainerLg from "../../ContainerLg";
import SectionPaddingSm from "../../SectionPaddingSm";
import Doable from "../../../assets/images/photos/doable/doable.png";
import DoableImg1 from "../../../assets/images/photos/doable/doable-img1.png";
import DoableImg2 from "../../../assets/images/photos/doable/doable-img2.png";
import DoableImg3 from "../../../assets/images/photos/doable/doable-img3.png";
import DoableImg4 from "../../../assets/images/photos/doable/doable-img4.png";
import DoableImg5 from "../../../assets/images/photos/doable/doable-img5.png";
import DoableImg6 from "../../../assets/images/photos/doable/doable-img6.png";

const RunDoableJS = () => {
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
              <strong className="semi-bold">
                Clonamos el repositorio DoableJS de github
              </strong>
            </small>
            <p className="regular text-md"> Realizamos lo siguiente:</p>
            <ul className="regular text-md justify">
              <li>
                En nuestra terminal ejecutamos el comando{" "}
                <i>git clone git@github.com:cverah/Doable-JS.git</i>
              </li>
              <li>
                Terminamos a que termine de clñonar y luego le damos un{" "}
                <i>code .</i> (para que abra nuestro codigo en visual studio
                code)
              </li>
              <li className="justify">
                Ejecutamos el proyecto ejecutando el archivo index.html o
                tambien posemos hacer un live server al archivo index.html para
                que muestre el proyecto doable. (no requiere instalacion de
                alguna paquete).
              </li>
            </ul>
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 2:
              <strong className="semi-bold">
                Pantalla de Inicio del Proyecto
              </strong>
            </small>
            <p className="regular text-md">
              Una vez instalado realizado el paso uno deberia mostrar lo
              siguiente:
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={Doable}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 3:
              <strong className="semi-bold">Creacion de Usuario</strong>
            </small>
            <p className="regular text-md">
              Al dar click en create account te puedes crear una nueva cuenta de
              usuario solo requiere poner el correo y la clave
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={DoableImg1}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 4:
              <strong className="semi-bold">Iniciar Sesion</strong>
            </small>
            <p className="regular text-md">
              Una vez creado tu usuario puedes iniciar sesion en Login
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={DoableImg2}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 5:
              <strong className="semi-bold">Creacion de tareas</strong>
            </small>
            <p className="regular text-md">
              Una vez logueado puedes crear las tareas que deseas insertando la
              descripcion de la tarea y la fecha en que deberia terminarse dicha
              tarea, luego dar click en add task.
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={DoableImg3}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 6:
              <strong className="semi-bold">
                Marcar tareas completadas e importantes
              </strong>
            </small>
            <p className="regular text-md">
              Una vez creada las tareas puedes marcar las tareas como
              completadas dando check y/o tambien como importantes dando click
              en el icono con el signo de admiracion.
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={DoableImg4}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 7:
              <strong className="semi-bold">
                Ordenas Tareas (alfabeto, fecha y importancia)
              </strong>
            </small>
            <p className="regular text-md">
              Tambien se cuenta con la opcion de ordenar tarea por alfabeto, por
              fecha y importancia solo debes dar click en el select y
              seleccionar
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={DoableImg5}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 8:
              <strong className="semi-bold">
                Ordenas Tareas (pendiente e importante)
              </strong>
            </small>
            <p className="regular text-md">
              Finalmente tambien tienes la opcion de ordenar la tarea por
              pendientes y/o importantes para mejor filtracion de resultados
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={DoableImg6}
              alt=""
            />
          </article>

          {/* 
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
          </article> */}
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default RunDoableJS;
