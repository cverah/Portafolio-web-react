import ImgExperienciaPj from "../../assets/images/photos/img-experiencia-laboral/experiencia-pj.jpg";
import ImgExperienciaBitel from "../../assets/images/photos/img-experiencia-laboral/experiencia-bitel.jpg";
import ImgLogoPj from "../../assets/images/photos/img-experiencia-laboral/logo-pj.png";
import ImgLogoOnpe from "../../assets/images/photos/img-experiencia-laboral/logo-onpe.jpg";
import ImgLogoBitel from "../../assets/images/photos/img-experiencia-laboral/logo-bitel.png";

const ExperienciaAbout = () => {
  return (
    <div className="article-grid-2columns" id="gap-1rem">
      <article className="heading-lg works-experience-img">
        <img src={ImgExperienciaPj} alt="experiencia-pj" />
        <img src={ImgExperienciaBitel} alt="experiencia-bitel" />
      </article>
      <article className="heading-lg work_experience-content bg-green-150 px-1rem">
        <hr className="hr" />
        <div className="work_experience-content">
          <div className="work_experience-item">
            <h4 className="semi-bold heading-sm">
              Corte Superior de Justicia de Apurimac
            </h4>
            <img className="br-1/2" src={ImgLogoPj} alt="logo-pj" />
          </div>
          <table className="work_experience-item-table">
            <tbody>
              <tr>
                <th>
                  <p className="regular text-xl">
                    <b>Tipo Institucion:</b>
                  </p>
                </th>
                <th>
                  <p className="light text-xl justify">Sector Publico</p>
                </th>
              </tr>
              <tr>
                <th>
                  <p className="regular text-xl">
                    <b>Cargo:</b>
                  </p>
                </th>
                <th>
                  <p className="light text-xl justify">
                    Apoyo Administrativo en Informatica
                  </p>
                </th>
              </tr>
              <tr>
                <th>
                  <p className="regular text-xl">
                    <b>Duracion:</b>
                  </p>
                </th>
                <th>
                  <p className="light text-xl justify">
                    4 años y 10 meses (16-07-2018 al 08-06-2023)
                  </p>
                </th>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="hr" />

        <div className="work_experience-content">
          <div className="work_experience-item">
            <h4 className="semi-bold heading-xs">
              Oficina Nacional de Procesos Electorales - ONPE
            </h4>
            <img className="br-1/2" src={ImgLogoOnpe} alt="logo-onpe" />
          </div>
          <table className="work_experience-item-table">
            <tbody>
              <tr>
                <th>
                  <p className="regular text-xl">
                    <b>Tipo Institucion:</b>
                  </p>
                </th>
                <th>
                  <p className="light text-xl justify">Sector Publico</p>
                </th>
              </tr>
              <tr>
                <th>
                  <p className="regular text-xl">
                    <b>Cargo:</b>
                  </p>
                </th>
                <th>
                  <p className="light text-xl justify">
                    Operador de Centro de Computo
                  </p>
                </th>
              </tr>
              <tr>
                <th>
                  <p className="regular text-xl">
                    <b>Duracion:</b>
                  </p>
                </th>
                <th>
                  <p className="light text-xl justify">
                    1 mes y 19 días (12-09-2022 al 31-10-2022)
                  </p>
                </th>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="hr" />

        <div className="work_experience-content">
          <div className="work_experience-item">
            <h4 className="semi-bold heading-sm">Viettel Peru S.A.C.</h4>
            <img className="br-1/2" src={ImgLogoBitel} alt="logo-bitel" />
          </div>
          <table className="work_experience-item-table">
            <tbody>
              <tr>
                <th>
                  <p className="regular text-xl">
                    <b>Tipo Institucion:</b>
                  </p>
                </th>
                <th>
                  <p className="light text-xl justify">Sector Privado</p>
                </th>
              </tr>
              <tr>
                <th>
                  <p className="regular text-xl">
                    <b>Cargo:</b>
                  </p>
                </th>
                <th>
                  <p className="light text-xl justify">
                    Colaborador Técnico O & M.
                  </p>
                </th>
              </tr>
              <tr>
                <th>
                  <p className="regular text-xl">
                    <b>Duracion:</b>
                  </p>
                </th>
                <th>
                  <p className="light text-xl justify">
                    09 meses (08-05-2017 al 07-02-2018).
                  </p>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <hr className="hr" />
      </article>
    </div>
  );
};

export default ExperienciaAbout;
