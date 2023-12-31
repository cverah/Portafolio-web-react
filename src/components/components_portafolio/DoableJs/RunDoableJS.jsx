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
                Terminamos a que termine de clonar y luego le damos un{" "}
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
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default RunDoableJS;
