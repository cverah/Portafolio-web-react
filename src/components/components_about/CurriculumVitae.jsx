import styled from "@emotion/styled";
import PercentajeLanguaje from "./PercentajeLanguaje";

const LinkCv = styled.a`
  padding: 1em 2em;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: black;
  transition: all 1000ms;
  font-size: 15px;
  position: relative;
  overflow: hidden;
  outline: 2px solid #0ec38a;
  text-decoration: none;

  &:hover {
    color: #ffffff;
    transform: scale(1);
    outline: 2px solid #23cc4d;
    box-shadow: 4px 5px 17px -4px #047611;
  }

  &::before {
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #2caf4f;
    transform: skewX(45deg);
    z-index: -1;
    transition: width 1000ms;
  }

  &:hover::before {
    width: 250%;
  }
`;

const CurriculumVitae = () => {
  return (
    <div className="center mb-1">
      <div
        className="article-grid-2columns"
        style={{ gap: "8px", alignItems: "center" }}
      >
        <article className="article-grid-portafolio" style={{ border: "none" }}>
          <LinkCv href="/src/assets/pdfs/CV_CMVH_ES.pdf" target="_blank">
            Ver CV Digital - Español
          </LinkCv>
          <LinkCv href="/src/assets/pdfs/CV_CMVH_ES.pdf" target="_blank">
            Ver CV Digital - Ingles
          </LinkCv>
        </article>
        <article className="article-grid-portafolio" style={{ border: "none" }}>
          <PercentajeLanguaje />
        </article>
      </div>
    </div>
  );
};

export default CurriculumVitae;
