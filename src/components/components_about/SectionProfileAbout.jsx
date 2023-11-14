import ContainerLg from "../ContainerLg";
import SectionPaddingSm from "../SectionPaddingSm";
import ImgGraduacion from "../../assets/images/photos/img-graduacion.webp";

const SectionProfileAbout = () => {
  return (
    <SectionPaddingSm background="bg-green-150">
      <ContainerLg>
        <div className="article-grid-55-45">
          <div className="item-content-description">
            <p className="heading-lg mb-1">
              <strong className="green-800">
                Ing. Cristhian Mario Vera Huamani
              </strong>
              , - Ingenierio en Informatica y Sistemas.
            </p>
            <p className="text-xl light justify italic mb-1">
              Ingeniero con conocimiento en las distintas ramas de la Ingeniería
              Informática y Sistemas. Profesional activo, con capacidad de fácil
              adaptación al medio, tolerancia, aptitudes para trabajar en equipo
              e innovar y crear nuevas ideas para el desarrollo del área
              ocupacional designado.
            </p>
            <ul
              className="text-xl light italic
      "
            >
              <li>Peruano</li>
              <li>Natural de Abancay - Apurimac</li>
              <li>30 años de edad</li>
              <li>Ingles basico</li>
            </ul>
          </div>
          <img
            className="br-1/2"
            src={ImgGraduacion}
            alt="img-cristhian-graduacion"
          />
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default SectionProfileAbout;
