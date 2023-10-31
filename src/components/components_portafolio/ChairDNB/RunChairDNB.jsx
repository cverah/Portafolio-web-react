import ContainerLg from "../../ContainerLg";
import SectionPaddingSm from "../../SectionPaddingSm";
import ChairDNB from "../../../assets/images/photos/chairdnb/chairdnb.png";
import ChairDNBImg1 from "../../../assets/images/photos/chairdnb/chairdnb-img1.png";
import ChairDNBImg2 from "../../../assets/images/photos/chairdnb/chairdnb-img2.png";
import ChairDNBImg3 from "../../../assets/images/photos/chairdnb/chairdnb-img3.png";
import ChairDNBImg4 from "../../../assets/images/photos/chairdnb/chairdnb-img4.png";
import ChairDNBImg5 from "../../../assets/images/photos/chairdnb/chairdnb-img5.png";
import ChairDNBImg6 from "../../../assets/images/photos/chairdnb/chairdnb-img6.png";

const RunChairDNB = () => {
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
                Clonamos el repositorio ChairDNB de github
              </strong>
            </small>
            <p className="regular text-md"> Realizamos lo siguiente:</p>
            <ul className="regular text-md justify">
              <li>
                En nuestra terminal ejecutamos el comando{" "}
                <i>git clone git@github.com:cverah/Chairdnb.git</i>
              </li>
              <li>
                Terminamos a que termine de clonar y luego le damos un{" "}
                <i>code .</i> (para que abra nuestro codigo en visual studio
                code)
              </li>
              <li className="justify">
                Dentro del visual studio abriremos una terminal y haremos el
                comando <i>npm install</i> (esto instalara las librerias usadas
                en el proyecto como proptypes y react router dom).
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
              src={ChairDNB}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 3:
              <strong className="semi-bold">
                Descubre las aventuras de Chairdnb
              </strong>
            </small>
            <p className="regular text-md">
              El api de chairdnb muestra los datos por categoria en esta parte
              muestra la categoria de Discover Chairdnb adventures.
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ChairDNBImg1}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 4:
              <strong className="semi-bold">
                Alojamiento alrededor del mundo
              </strong>
            </small>
            <p className="regular text-md">
              El api de chairdnb muestra los datos por categoria en esta parte
              muestra la categoria de Accommodation around the world.
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ChairDNBImg2}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 5:
              <strong className="semi-bold">
                Experiencias altamente valoradas
              </strong>
            </small>
            <p className="regular text-md">
              El api de chairdnb muestra los datos por categoria en esta parte
              muestra la categoria de Highly rated experiences.
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ChairDNBImg3}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 6:
              <strong className="semi-bold">
                Destinos destacados de Chairdnb Plus
              </strong>
            </small>
            <p className="regular text-md">
              El api de chairdnb muestra los datos por categoria en esta parte
              muestra la categoria de Featured Chairdnb Plus Destinations.
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ChairDNBImg4}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 7:
              <strong className="semi-bold">
                Formulario de busqueda de viaje
              </strong>
            </small>
            <p className="regular text-md">
              En la imagen de inicio existe un formulario donde se puede buscar
              por pais, las fechas disponibles y la cantidad de programadores
              que realizaran el viaje. En este caso buscaremos al pais de
              MEXICO.
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ChairDNBImg5}
              alt=""
            />
          </article>

          <article className="article-grid-item">
            <small className="text-uppercase text-md overline semi-bold">
              Paso Nro 8:
              <strong className="semi-bold">
                Resultados de busqueda de viaje
              </strong>
            </small>
            <p className="regular text-md">
              Seguidamente se mostraran los lugares de viaje diponibles en
              MEXICO.
            </p>
            <img
              className="br-1/2"
              style={{ border: "1px solid black" }}
              src={ChairDNBImg6}
              alt=""
            />
          </article>
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default RunChairDNB;
