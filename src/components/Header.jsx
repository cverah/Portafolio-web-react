import { useRef, useState } from "react";
import ContainerLg from "./ContainerLg";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = () => {
  const [isclick, setisclick] = useState(false);
  const navBarMobileRef = useRef(null);

  const showMenu = () => {
    if (navBarMobileRef.current) {
      navBarMobileRef.current.classList.toggle("navbar--links--mobile--open");
      setisclick(!isclick);
    }
  };

  return (
    <header className="header">
      <ContainerLg>
        {/* <!-- <h1 className="heading-md semi-bold header__logo">HEADER</h1> --> */}

        <nav className="navbar">
          <Link to={"/"} className="text-decoration-none">
            <div className="start italic">
              <h1 className="heading-md medium green-900">
                Cristhian M. Vera Huamani
              </h1>
              <p className="regular text-line-height-1.1rem text-decoration-none green-900">
                Believe in yourself, and you will achieve it
              </p>
            </div>
          </Link>
          {/* <!-- # hamburguesa media querie --> */}
          {!isclick && (
            <GiHamburgerMenu
              style={{ cursor: "pointer" }}
              className="hamb"
              onClick={showMenu}
            />
          )}
          {isclick && (
            <GrClose
              style={{ cursor: "pointer" }}
              className="hamb"
              onClick={showMenu}
            />
          )}

          <ul className="navbar--links list-style-none">
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
                Contactame
              </Link>
            </li>
          </ul>
        </nav>

        {/* <!-- nav para mobile  --> */}
        <nav className="navbar-mobile">
          <div className="menu-mobile" style={{ marginTop: "18px" }}>
            <ul
              className="navbar--links--mobile list-style-none"
              ref={navBarMobileRef}
            >
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
                  Contactame
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </ContainerLg>
    </header>
  );
};

export default Header;
