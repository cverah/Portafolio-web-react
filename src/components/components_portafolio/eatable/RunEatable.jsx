import ContainerLg from "../../ContainerLg";
import SectionPaddingSm from "../../SectionPaddingSm";
import Eatable from "../../../assets/images/photos/eatable/eatable-img.png";
import EatableImg1 from "../../../assets/images/photos/eatable/eatable-img1.png";
import EatableImg2 from "../../../assets/images/photos/eatable/eatable-img2.png";
import EatableImg3 from "../../../assets/images/photos/eatable/eatable-img3.png";
import EatableImg4 from "../../../assets/images/photos/eatable/eatable-img4.png";
import EatableImg5 from "../../../assets/images/photos/eatable/eatable-img5.png";

const RunEatable = () => {
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
                Clonamos el repositorio Eatable de github
              </strong>
            </small>
            <p className="regular text-md"> Realizamos lo siguiente:</p>
            <ul className="regular text-md justify">
              <li>
                En nuestra terminal ejecutamos el comando{" "}
                <i>git clone git@github.com:cverah/Eatable.git</i>
              </li>
              <li>
                Terminamos a que termine de clonar y luego le damos un{" "}
                <i>code .</i> (para que abra nuestro codigo en visual studio
                code)
              </li>
              <li className="justify">
                Dentro del visual studio abriremos una terminal y haremos el
                comando <i>npm install</i> (esto instalara las librerias usadas
                en el proyecto como proptypes, react router dom, emotion, react
                icons, loader, formik).
              </li>
              <li className="justify">
                Una vez terminada la instalacion de los paquetes de libreria
                realizaremos un npm run dev para que empice a correr nuestro
                proyecto y abrirnos en el navegador.
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
              siguiente en la ruta por lo general en{" "}
              <i>http://127.0.0.1:5173/</i>
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={Eatable}
              alt=""
            />
          </article>
          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 3:
              <strong className="semi-bold">Crear Comida</strong>
            </small>
            <p className="regular text-md">
              Al dar click en el boton Create Product te redirigira a una nueva
              ventana en donde tendras que llenar el formulario con los datos
              solicitados, estos campos del formulario se encuentra validado.
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={EatableImg1}
              alt=""
            />
          </article>
          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 4:
              <strong className="semi-bold">
                Visualizacion de comida regsitrada
              </strong>
            </small>
            <p className="regular text-md">
              Podemos observar que se ha creado una nueva comida sin recarga el
              page
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={EatableImg2}
              alt=""
            />
          </article>
          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 5:
              <strong className="semi-bold">Ver Comida</strong>
            </small>
            <p className="regular text-md">
              Si desplazamos el mouse por el nombre de la comidad se subrayara y
              podemos ver la descripcion de la comida
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={EatableImg3}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 6:
              <strong className="semi-bold">Actualizar Comida</strong>
            </small>
            <p className="regular text-md">
              Asimismo exsite la opcion de actulizar comida que se encuentra con
              el icono del lapiz el cual dirige al formulario con los datos
              antes ingresados, donde se podra cambiar algun dato si el usuario
              lo desea.
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={EatableImg4}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 7:
              <strong className="semi-bold">Eliminar Comida</strong>
            </small>
            <p className="regular text-md">
              Asimismo exsite la opcion de eliminar comida que se encuentra con
              el icono de un tacho el cual al tratar de eliminar te saldra un
              modal para la confirmacion respectiva.
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={EatableImg5}
              alt=""
            />
          </article>
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default RunEatable;
