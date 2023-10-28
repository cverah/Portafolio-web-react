import styled from "@emotion/styled";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { credential_send_email } from "../../credentials_send_email";
import {
  messageError,
  messageSuccess,
} from "../../messages_modal/modal_messages";

const FamilyCheckbox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(330px, 100%), 1fr));
  gap: 12px;
  margin-bottom: 16px;
`;

const ContactForm = () => {
  const form = useRef();

  function handleSend(event) {
    event.preventDefault();
    const formData = form.current;
    emailjs
      .sendForm(
        credential_send_email.service_id,
        credential_send_email.template_id,
        formData,
        credential_send_email.user_id
      )
      .then(
        (result) => {
          result.text === "OK"
            ? messageSuccess(
                "!Correo Enviado¡, me contactare contigo en el menor tiempo posible, gracias por contactarme"
              )
            : messageError(`Ocurrio un problema ${result.text}`);
        },
        (error) => {
          messageError(`Ocurrio un problema ${error}`);
        }
      );
  }
  return (
    <div>
      <form ref={form} onSubmit={handleSend}>
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
                <div style={{ display: "flex", gap: "8px" }}>
                  Nombres
                  <p style={{ color: "red", fontWeight: "bold" }}>(*)</p>
                </div>
              </label>
              <input
                className="input"
                type="text"
                name="firtsname"
                id="firtsname"
                placeholder="Cristhian"
                required
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
                <div style={{ display: "flex", gap: "8px" }}>
                  Apellidos
                  <p style={{ color: "red", fontWeight: "bold" }}>(*)</p>
                </div>
              </label>
              <input
                className="input"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Vera"
                required
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
                <div style={{ display: "flex", gap: "8px" }}>
                  Email
                  <p style={{ color: "red", fontWeight: "bold" }}>(*)</p>
                </div>
              </label>
              <input
                className="input"
                type="email"
                name="email"
                id="email"
                placeholder="cristhian@gmail.com"
                required
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
                <div style={{ display: "flex", gap: "8px" }}>
                  Celular
                  <p style={{ color: "red", fontWeight: "bold" }}>(*)</p>
                </div>
              </label>
              <input
                className="input"
                type="number"
                name="phone"
                id="phone"
                placeholder="928646027"
                required
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
              value="Desea ofertarte algun trabajo"
            />
            <div>
              <label htmlFor="checkbox" className="light text-sm" id="margin-0">
                Oferta de Trabajo
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
              value="Desea ofertarte algun proyecto"
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
              value="Desea tu colaboracion"
            />
            <div>
              <label htmlFor="checkbox" className="light text-sm" id="margin-0">
                Colaboración
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
              value="Otro"
            />
            <div>
              <label htmlFor="checkbox" className="light text-sm" id="margin-0">
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
