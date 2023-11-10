const createCounter = () => {
  let start = 0;
  return function () {
    return start++;
  };
};

const count = createCounter();

export const latest_learnings = [
  {
    id: count(),
    date: "2023-05-10",
    title: "Aprendiendo Ruby en 4 semanas",
    content: `Ruby es un lenguaje con un balance cuidado. Su creador, Yukihiro    “Matz” Matsumoto, mezcló partes de sus lenguajes favoritos (Perl,
      Smalltalk, Eiffel, Ada y Lisp) para formar un nuevo lenguaje que
      incorporara tanto la programación funcional como la imperativa. A
      menudo ha manifestado que está “tratando de hacer que Ruby sea
      natural, no simple”, de una forma que se asemeje a la vida real.`,
    link: "https://github.com/cverah/ruby-CalenCly",
  },

  {
    id: count(),
    date: "2023-06-16",
    title: "Aprendiendo HTML y CSS en 2 semanas",
    content: `Para crear sitios web, debes conocer el HTML — la tecnología fundamental que se utiliza para definir la estructura de una página web. HTML se utiliza para especificar si tu contenido web se debe reconocer como un párrafo, lista, encabezado, enlace, imagen, reproductor multimedia, formulario o uno de los muchos otros elementos
    disponibles`,
    link: "https://github.com/cverah/portafolio-web-CMVH",
  },

  {
    id: count(),
    date: "2023-07-20",
    title: " Manejo de Base de Datos en POSTGRESQL en 1 Semanas",
    content: `Para aprender a gestion y almacenar datos desde la creacion de la
    tablas, los atributos las relaciones, consultasm inserciones,
    actualizacion y eliminacion de datos asimismo la navegacion e
    interaccion de los primary keys con los foreing key a traves de los
    inner joins, para finalmente hacer procedimieento almacenados y
    backups del servidor de datos, esta parte nos ayudara muchos en la
    creacion de API REST.`,
    link: "https://github.com/cverah/insights-ruby-postgres",
  },

  {
    id: count(),
    date: "2023-07-30",
    title: " Aprendiendo Framework Ruby on Rails en 4 Semanas",
    content: `Es un popular framework de desarrollo de aplicaciones web escrito en
    el lenguaje de programación Ruby. Rails es conocido por su enfoque en
    la simplicidad y la productividad, y ha sido ampliamente utilizado en
    la creación de aplicaciones web y sitios web interactivos. Se conocio
    el modelo de trabajo arquitectura MVC (Modelo Vista Controlador),
    creacion de modelos y controladores a traves de la terminal, asocianes
    (self join, poliformica, counter cache, has_one, has_many,
    belongs_to), validaciones, creacion de semillas, migraciones, mandejo
    de modelos para manejo de datos, authenticacion, bcrypt, jwt, test,
    creacion de API.`,
    link: "https://github.com/cverah/Tweetable-Rails",
  },

  {
    id: count(),
    date: "2023-08-30",
    title: "Aprendiendo JAVASCRIPT en 4 semanas",
    content: `JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Se conocio el manejo de variables array, objetos (primordial), manejo del DOM, funciones constructoras (this), manejo de funciones asincronas, manejo de datos APIS con fecth y axios, resolucion de promesas con then, catch y el asyn awaiy para finalmente conocer el test de renderizado en las paginas web.`,
    link: "https://github.com/cverah/Doable-JS",
  },

  {
    id: count(),
    date: "2023-10-01",
    title: "Aprendiendo LIBRERIA REACT en 5 semanas",
    content: `ReactJS es una de las librerías más populares de JavaScript para el
      desarrollo de aplicaciones móviles y web. Creada por Facebook, React
      contiene una colección de fragmentos de código JavaScript
      reutilizables utilizados para crear interfaces de usuario (UI)
      llamadas componentes. Se aprendio el manejo del DOM en componentes,
      variables de estado, manejo de emotion, proptypes, UseEffect, useRef,
      input controlados, React Router Dom y test con Jest.`,
    link: "https://github.com/cverah/Eatable",
  },
];
