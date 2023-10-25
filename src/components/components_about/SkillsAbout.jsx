import styled from "@emotion/styled";
import ContainerLg from "../ContainerLg";
import SectionPaddingSm from "../SectionPaddingSm";
import { SiJavascript, SiRuby, SiRubyonrails } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const IconsSkill = styled.div`
  color: ${(props) => props.color};
`;

const SkillsAbout = () => {
  return (
    <SectionPaddingSm background="bg-green-80">
      <ContainerLg>
        <h2 className="heading-lg mb-1 center">Mis Habilidades</h2>
        <div className="article-grid-2columns">
          <article className="article-grid-about-item">
            <IconsSkill color="red">
              <SiRuby style={{ width: "30px", height: "30px" }} />
            </IconsSkill>
            <div className="display-about-right">
              <h3 className="regular heading-md">Ruby</h3>
              <p className="light text-lg justify">
                Dominio en el manejo de loops, condiciones, methods, clases,
                modules, estructura de bloques, matches (rubular), creacion y
                tratamiento de informacion de archivos JSON, CSV y YAML
              </p>
            </div>
          </article>

          <article className="article-grid-about-item">
            <IconsSkill color="orange">
              <ImHtmlFive style={{ width: "30px", height: "30px" }} />
            </IconsSkill>
            <div className="display-about-right">
              <h3 className="regular heading-md">HTML y CSS</h3>
              <p className="light text-lg justify">
                Creacion de paginas web, usando las herramientas de HTML, CSS,
                JAVASCRIPT de modo responsive mediante display, positions,
                grillas y media query que se adapten a las necesidades del
                cliente
              </p>
            </div>
          </article>

          <article className="article-grid-about-item">
            <IconsSkill color="red">
              <SiRubyonrails style={{ width: "30px", height: "40px" }} />
            </IconsSkill>
            <div className="display-about-right">
              <h3 className="regular heading-md">Ruby on Rails</h3>
              <p className="light text-lg">
                Creacion de base de datos a traves de modelos y migraciones,
                orientado a la parte BACK END con capacidad de mostra vistas
                para el usuario que permita hacer un crud operacion con
                interaccion de vistas y capacidad de authenticar usuarios a
                traves de token y restricciones a traves del panding.
              </p>
            </div>
          </article>

          <article className="article-grid-about-item">
            <IconsSkill color="orange">
              <SiJavascript style={{ width: "30px", height: "40px" }} />
            </IconsSkill>
            <div className="display-about-right">
              <h3 className="regular heading-md">Javascript</h3>
              <p className="light text-lg">
                Creacion de paginas web interactivas con uso interactivo con
                html y css, con capacidad de llamar API para el consumo de datos
                y poder renderizar en un single page, asimismo facilidad en el
                manejo ya que en gran parte no se permite la recarga de la page
                para poder visualizar datos en el momento.
              </p>
            </div>
          </article>

          <article className="article-grid-about-item">
            <IconsSkill color="green">
              <FaReact style={{ width: "30px", height: "40px" }} />
            </IconsSkill>
            <div className="display-about-right">
              <h3 className="regular heading-md">React</h3>
              <p className="light text-lg">
                Libreria de javascript orientada al FRONT END a traves de
                componentes JSX, react a traves de sus herramientas los hooks
                son capaces de crear una pagina interactiva y bien modelada con
                acapacidad de consumo de API y poder de renederizamiento en
                tiempo real.
              </p>
            </div>
          </article>

          <article className="article-grid-about-item">
            <IconsSkill color="blue">
              <BiLogoPostgresql style={{ width: "30px", height: "40px" }} />
            </IconsSkill>
            <div className="display-about-right">
              <h3 className="regular heading-md">Postgresql</h3>
              <p className="light text-lg">
                Creacion de base de datos a traves de los atributos y relaciones
                que permiten realizar una interaccion de datos entre tablas con
                capidad de poder consumir, actualizar y eliminar datos de
                acuerdo a lo que el usuario solicite, asimismo tiene la
                capacidad de poder realizar Backup de informacion para el caso
                de perdidas.
              </p>
            </div>
          </article>
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default SkillsAbout;
