import { Link } from "react-router-dom";
import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";

import styled from "@emotion/styled";

const WhatsappIconStyle = styled(BsWhatsapp)`
  color: green;
  font-size: 30px;
`;

const FacebookIconStyle = styled(BsFacebook)`
  color: blue;
  font-size: 40px;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;

const LinkedinIconStyle = styled(BsLinkedin)`
  color: #3535cd;
  font-size: 40px;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;
const Footer = () => {
  return (
    <>
      <footer className="section-padding-1rem footer">
        <div className="container-lg center">
          <div className="article-grid-2columns">
            <div className="footer-grid-item text-xl">
              <strong>@Cristhian Vera 2023</strong>
              <p>Abancay - Apurimac - Peru</p>
              <div className="footer-contacs">
                <WhatsappIconStyle />
                <p className="center">+51 928646027</p>
              </div>
            </div>

            <div className="footer-grid-item text-xl">
              <strong>Mis Redes Sociales</strong>
              <div className="footer-contacs" id="gap-1.25rem">
                <Link
                  to="https://www.facebook.com/cristianmario.verahuamani"
                  target="_blank"
                >
                  <FacebookIconStyle />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/cristhianverah/"
                  target="_blank"
                >
                  <LinkedinIconStyle />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-black">
        <div className="flex center bg-black">
          <strong className="color-white" style={{ width: "100%" }}>
            Desarrollado con REACT + VITE (HTML / CSS / JAVASCRIPT)
          </strong>
        </div>
      </footer>
    </>
  );
};

export default Footer;
