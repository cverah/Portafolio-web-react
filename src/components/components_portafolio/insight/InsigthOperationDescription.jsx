import { Link } from "react-router-dom";
import SectionPaddingSm from "../../SectionPaddingSm";
import ContainerLg from "../../ContainerLg";
import ImgInsight from "../../../assets/images/photos/insight/insights-principal.png";

const InsigthOperationDescription = () => {
  return (
    <SectionPaddingSm background="bg-green-150">
      <ContainerLg>
        <div className="section-general-proyect">
          <div className="section-description-proyect">
            <h2 className="heading-2xl semi-bold mb-1.25 ">INSIGHTS</h2>
            <p className="text-lg mb-1 justify">
              Este programa fue desarollado en base a un archivo de formato CSV
              que contiene informacion de encuestas de aproximadamente 80 mil
              personas que visitaron de restaurantes alrededor del mundo, el
              proyecto esta realizado con una base de datos en POSTGRES
              (diagrama entidad relacion - ERD), asimismo el programa permite la
              importacion de la informacion que contiene el archivo CSV a la
              base de datos, lo cual en adelante nos da las facilidades de
              realizar consultas a la base de datos en base y extraer
              informacion estadistica que desea conocer el usuario.
            </p>
            <p className="text-lg mb-1 justify">
              Insights esta hecho con ruby y postgres (base de datos),
              trabajamos con las gemas pg <i>(require pg)</i> para establecer
              conexion con la base de datos, csv <i>(require csv)</i> para el
              manejo de archivos de formato CSV, terminal table
              <i>(require terminal-table)</i> para impresion en formato de
              tabla.
            </p>
            <div className="section-footer-buttons">
              <Link
                className="button--xl button--primary text-decoration-none inline-block br-1/2"
                to="https://github.com/cverah/insights-ruby-postgres"
                target="_blank"
              >
                Ir al repositorio
              </Link>
              <Link
                className="button--xl button--primary text-decoration-none inline-block br-1/2"
                to="https://github.com/cverah/insights-ruby-postgres/tree/main/bd_insights"
                target="_blank"
              >
                Ver ERD Base de datos Insights
              </Link>
            </div>
          </div>
          <img
            className="br-1/2"
            src={ImgInsight}
            alt="img-insight-principal"
          />
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default InsigthOperationDescription;
