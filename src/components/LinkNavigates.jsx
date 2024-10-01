import React from "react";
import { Link } from "react-router-dom";

const LinkNavigates = () => {
  return (
    <>
      <li>
        <Link to="/" className="link text-xl">
          Inicio
        </Link>
      </li>
      <li>
        <Link to="/about" className="link text-xl">
          Acerca de Mi
        </Link>
      </li>
      <li>
        <Link to="/portafolio" className="link text-xl">
          Portafolio
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          type="button"
          className="button button--primary button--lg text-decoration-none"
        >
          Contácteme
        </Link>
      </li>
    </>
  );
};

export default LinkNavigates;
