import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

import styled from "@emotion/styled";

const WhatsappIconStyle = styled(BsWhatsapp)`
  color: green;
  font-size: 30px;
`;

const GitHubIconStyle = styled(BsGithub)`
  color: black;
  font-size: 40px;
  &:hover {
    cursor: pointer;
    color: white;
    -webkit-animation: flip-vertical-fwd 0.6s
      cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
    animation: flip-vertical-fwd 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      forwards;

    @-webkit-keyframes flip-vertical-fwd {
      0% {
        -webkit-transform: translateZ(0) rotateY(0);
        transform: translateZ(0) rotateY(0);
      }
      100% {
        -webkit-transform: translateZ(160px) rotateY(360deg);
        transform: translateZ(160px) rotateY(360deg);
      }
    }
    @keyframes flip-vertical-fwd {
      0% {
        -webkit-transform: translateZ(0) rotateY(0);
        transform: translateZ(0) rotateY(0);
      }
      100% {
        -webkit-transform: translateZ(160px) rotateY(360deg);
        transform: translateZ(160px) rotateY(360deg);
      }
    }
  }
`;

const FacebookIconStyle = styled(BsFacebook)`
  color: blue;
  font-size: 40px;

  &:hover {
    cursor: pointer;
    color: white;
    -webkit-animation: flip-vertical-fwd 0.6s
      cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
    animation: flip-vertical-fwd 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      forwards;

    @-webkit-keyframes flip-vertical-fwd {
      0% {
        -webkit-transform: translateZ(0) rotateY(0);
        transform: translateZ(0) rotateY(0);
      }
      100% {
        -webkit-transform: translateZ(160px) rotateY(360deg);
        transform: translateZ(160px) rotateY(360deg);
      }
    }
    @keyframes flip-vertical-fwd {
      0% {
        -webkit-transform: translateZ(0) rotateY(0);
        transform: translateZ(0) rotateY(0);
      }
      100% {
        -webkit-transform: translateZ(160px) rotateY(360deg);
        transform: translateZ(160px) rotateY(360deg);
      }
    }
  }
`;

const LinkedinIconStyle = styled(BsLinkedin)`
  color: #3535cd;
  font-size: 40px;
  &:hover {
    cursor: pointer;
    color: white;
    -webkit-animation: flip-vertical-fwd 0.6s
      cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
    animation: flip-vertical-fwd 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      forwards;

    @-webkit-keyframes flip-vertical-fwd {
      0% {
        -webkit-transform: translateZ(0) rotateY(0);
        transform: translateZ(0) rotateY(0);
      }
      100% {
        -webkit-transform: translateZ(160px) rotateY(360deg);
        transform: translateZ(160px) rotateY(360deg);
      }
    }
    @keyframes flip-vertical-fwd {
      0% {
        -webkit-transform: translateZ(0) rotateY(0);
        transform: translateZ(0) rotateY(0);
      }
      100% {
        -webkit-transform: translateZ(160px) rotateY(360deg);
        transform: translateZ(160px) rotateY(360deg);
      }
    }
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
                <Link to="https://github.com/cverah" target="_blank">
                  <GitHubIconStyle />
                </Link>
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
