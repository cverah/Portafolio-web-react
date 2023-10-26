import styled from "@emotion/styled";

const FamilyCheckbox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(330px, 100%), 1fr));
  gap: 12px;
  margin-bottom: 16px;
`;

const ContactForm = () => {
  function handleSend(event) {
    event.preventDefault();
    console.log("click");
  }
  return (
    <div>
      <form onSubmit={handleSend}>
        <div className="article-grid-2columns mb-1" id="gap-row-12">
          <article
            className="article-grid-item no-hover"
            id="padding-0"
            style={{ border: "none" }}
          >
            <div>
              <label
                htmlFor="firtsname"
                className="text-xs light overline mb-1/4 block text-uppercase"
              >
                Nombres
              </label>
              <input
                className="input"
                type="text"
                name="firtsname"
                id="firtsname"
                placeholder="Cristhian"
              />
            </div>
          </article>

          <article
            className="article-grid-item no-hover"
            id="padding-0"
            style={{ border: "none" }}
          >
            <div>
              <label
                htmlFor="lastname"
                className="text-xs light overline mb-1/4 block text-uppercase"
              >
                Apellidos
              </label>
              <input
                className="input"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Vera"
              />
            </div>
          </article>

          <article
            className="article-grid-item no-hover"
            id="padding-0"
            style={{ border: "none" }}
          >
            <div>
              <label
                htmlFor="email"
                className="text-xs light overline mb-1/4 block text-uppercase"
              >
                Email
              </label>
              <input
                className="input"
                type="email"
                name="email"
                id="email"
                placeholder="cristhian@gmail.com"
              />
            </div>
          </article>

          <article
            className="article-grid-item no-hover"
            id="padding-0"
            style={{ border: "none" }}
          >
            <div>
              <label
                htmlFor="company"
                className="text-xs light overline mb-1/4 block text-uppercase"
              >
                Compañia
              </label>
              <input
                className="input"
                type="text"
                name="company"
                id="company"
                placeholder="Company S.A"
              />
            </div>
          </article>

          <article
            className="article-grid-item no-hover"
            id="padding-0"
            style={{ border: "none" }}
          >
            <div>
              <label
                htmlFor="phone"
                className="text-xs light overline mb-1/4 block text-uppercase"
              >
                Celular
              </label>
              <input
                className="input"
                type="number"
                name="phone"
                id="phone"
                placeholder="928646027"
              />
            </div>
          </article>

          <article
            className="article-grid-item no-hover"
            id="padding-0"
            style={{ border: "none" }}
          >
            <div>
              <label
                htmlFor="country"
                className="text-xs light overline mb-1/4 block text-uppercase"
              >
                Pais
              </label>
              <select
                className="select light"
                name="country"
                id="country"
                defaultValue="defaultOptionValue"
              >
                <option className="light" value="defaultOptionValue" disabled>
                  Selecccione una opcion
                </option>
                <option className="light" value="PERU">
                  Peru
                </option>
                <option className="light" value="MEXICO">
                  Mexico
                </option>
                <option className="light" value="BOLIVIA">
                  Bolivia
                </option>
                <option className="light" value="COLOMBIA">
                  Colombia
                </option>
                <option className="light" value="URUGUAY">
                  Uruguay
                </option>
                <option className="light" value="ARGENTINA">
                  Argentina
                </option>
                <option className="light" value="OTRO">
                  Otro
                </option>
              </select>
            </div>
          </article>
        </div>
        <p className="light text-xs overline text-uppercase mb-1/4">
          ¿ Le puedo ayudar en algo ?
        </p>

        <FamilyCheckbox>
          <div className="checkbox">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="checkbox__input"
            />
            <div>
              <label htmlFor="checkbox" className="light text-sm" id="margin-0">
                Oferta de Trabajo
              </label>
              <span
                className="input__message input__message--help light text-xs gray-500"
                id="margin-0"
              >
                {" "}
                Si buscas ampliar tu equipo
              </span>
            </div>
          </div>

          <div className="checkbox">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="checkbox__input"
            />
            <div>
              <label htmlFor="checkbox" className="light text-sm" id="margin-0">
                Oferta de proyecto
              </label>
              <span
                className="input__message input__message--help light text-xs gray-500"
                id="margin-0"
              >
                Si buscas ampliar tu equipo
              </span>
            </div>
          </div>

          <div className="checkbox">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="checkbox__input"
            />
            <div>
              <label htmlFor="checkbox" className="light text-sm" id="margin-0">
                Colaboración
              </label>
              <span
                className="input__message input__message--help light text-xs gray-500"
                id="margin-0"
              >
                {" "}
                Si buscas ampliar tu equipo
              </span>
            </div>
          </div>

          <div className="checkbox">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="checkbox__input"
            />
            <div>
              <label
                htmlFor="checkbox"
                className="light text-sm
            "
                id="margin-0"
              >
                Otro
              </label>
            </div>
          </div>
        </FamilyCheckbox>

        <div className="block">
          <button className="button buttton-xl button--primary text-decoration-none width-100">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
