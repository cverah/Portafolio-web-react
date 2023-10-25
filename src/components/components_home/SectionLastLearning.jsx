import { Link } from "react-router-dom";

const SectionLastLearning = () => {
  return (
    <div className="article-grid-2columns">
      <article className="article-grid-item">
        <small className="semi-bold text-uppercase text-xs overline">
          Mayo 16, 2023
        </small>
        <h3 className="regular heading-md">Aprendiendo Ruby en 4 semanas</h3>
        <p className="light text-lg justify">
          Ruby es un lenguaje con un balance cuidado. Su creador, Yukihiro
          “Matz” Matsumoto, mezcló partes de sus lenguajes favoritos (Perl,
          Smalltalk, Eiffel, Ada y Lisp) para formar un nuevo lenguaje que
          incorporara tanto la programación funcional como la imperativa. A
          menudo ha manifestado que está “tratando de hacer que Ruby sea
          natural, no simple”, de una forma que se asemeje a la vida real.
        </p>
        <Link
          to="https://www.ruby-lang.org/es/"
          target="_blank"
          className="text-lg green-900 text-decoration-none text-uppercase overline semi-bold"
        >
          Quiero Saber Mas
        </Link>
      </article>

      <article className="article-grid-item">
        <small className="semi-bold text-uppercase text-xs overline">
          Junio 16, 2023
        </small>
        <h3 className="regular heading-md">
          Aprendiendo HTML y CSS en 2 semanas
        </h3>
        <p className="light text-lg justify">
          Para crear sitios web, debes conocer el HTML — la tecnología
          fundamental que se utiliza para definir la estructura de una página
          web. HTML se utiliza para especificar si tu contenido web se debe
          reconocer como un párrafo, lista, encabezado, enlace, imagen,
          reproductor multimedia, formulario o uno de los muchos otros elementos
          disponibles
        </p>
        <Link
          to="https://developer.mozilla.org/es/docs/Learn/HTML"
          target="_blank"
          className="text-lg green-900 text-decoration-none text-uppercase overline semi-bold "
        >
          Quiero Saber Mas
        </Link>
      </article>

      <article className="article-grid-item">
        <small className="semi-bold text-uppercase text-xs overline">
          Julio 20, 2023
        </small>
        <h3 className="regular heading-md">
          Manejo de Base de Datos en POSTGRESQL en 1 Semanas
        </h3>
        <p className="light text-lg justify">
          Para aprender a gestion y almacenar datos desde la creacion de la
          tablas, los atributos las relaciones, consultasm inserciones,
          actualizacion y eliminacion de datos asimismo la navegacion e
          interaccion de los primary keys con los foreing key a traves de los
          inner joins, para finalmente hacer procedimieento almacenados y
          backups del servidor de datos, esta parte nos ayudara muchos en la
          creacion de API REST.
        </p>
        <Link
          to="https://www.postgresql.org/"
          target="_blank"
          className="text-lg green-900 text-decoration-none text-uppercase overline semi-bold "
        >
          Quiero Saber Mas
        </Link>
      </article>

      <article className="article-grid-item">
        <small className="semi-bold text-uppercase text-xs overline">
          Julio 30, 2023
        </small>
        <h3 className="regular heading-md">
          Framework Ruby on Rails en 4 Semanas
        </h3>
        <p className="light text-lg justify">
          Es un popular framework de desarrollo de aplicaciones web escrito en
          el lenguaje de programación Ruby. Rails es conocido por su enfoque en
          la simplicidad y la productividad, y ha sido ampliamente utilizado en
          la creación de aplicaciones web y sitios web interactivos. Se conocio
          el modelo de trabajo arquitectura MVC (Modelo Vista Controlador),
          creacion de modelos y controladores a traves de la terminal, asocianes
          (self join, poliformica, counter cache, has_one, has_many,
          belongs_to), validaciones, creacion de semillas, migraciones, mandejo
          de modelos para manejo de datos, authenticacion, bcrypt, jwt, test,
          creacion de API.
        </p>
        <Link
          to="https://rubyonrails.org/"
          target="_blank"
          className="text-lg green-900 text-decoration-none text-uppercase overline semi-bold "
        >
          Quiero Saber Mas
        </Link>
      </article>

      <article className="article-grid-item">
        <small className="semi-bold text-uppercase text-xs overline">
          Agost 30, 2023
        </small>
        <h3 className="regular heading-md">JAVASCRIPT en 4 semanas</h3>
        <p className="light text-lg justify">
          JavaScript es un lenguaje de programación que los desarrolladores
          utilizan para hacer páginas web interactivas. Se conocio el manejo de
          variables array, objetos (primordial), manejo del DOM, funciones
          constructoras (this), manejo de funciones asincronas, manejo de datos
          APIS con fecth y axios, resolucion de promesas con then, catch y el
          asyn awaiy para finalmente conocer el test de renderizado en las
          paginas web .
        </p>
        <Link
          to="https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
          target="_blank"
          className="text-lg green-900 text-decoration-none text-uppercase overline semi-bold "
        >
          Quiero Saber Mas
        </Link>
      </article>

      <article className="article-grid-item">
        <small className="semi-bold text-uppercase text-xs overline">
          Octubre 01 , 2023
        </small>
        <h3 className="regular heading-md">LIBRERIA REACT en 5 semanas</h3>
        <p className="light text-lg justify">
          ReactJS es una de las librerías más populares de JavaScript para el
          desarrollo de aplicaciones móviles y web. Creada por Facebook, React
          contiene una colección de fragmentos de código JavaScript
          reutilizables utilizados para crear interfaces de usuario (UI)
          llamadas componentes. Se aprendio el manejo del DOM en componentes,
          variables de estado, manejo de emotion, proptypes, UseEffect, useRef,
          input controlados, React Router Dom y test con Jest.
        </p>
        <Link
          to="https://es.legacy.reactjs.org/"
          target="_blank"
          className="text-lg green-900 text-decoration-none text-uppercase overline semi-bold "
        >
          Quiero Saber Mas
        </Link>
      </article>
    </div>
  );
};

export default SectionLastLearning;
