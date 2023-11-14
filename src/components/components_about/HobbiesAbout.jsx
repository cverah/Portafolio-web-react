import ContainerLg from "../ContainerLg";
import SectionPaddingSm from "../SectionPaddingSm";
import ImgTallarinGallina from "../../assets/images/photos/tallarin-gallina.jpeg";
import ImgTrioMarino from "../../assets/images/photos/triomarino.jpg";
import ImgHuacachina from "../../assets/images/photos/img-huacachina.webp";
import ImgUrosPuno from "../../assets/images/photos/img-uros-puno.webp";
import ImgFutbol from "../../assets/images/photos/img-futbol.webp";
import ImgMotoHonda from "../../assets/images/photos/img-motohonda.jpg";

const HobbiesAbout = () => {
  return (
    <SectionPaddingSm background="bg-gray-200">
      <ContainerLg>
        <h2 className="center heading-2rem semi-bold mb-1">¡Mis Aficiones!</h2>
        <div className="article-grid-hobbies">
          <article className="article-grid-about-item">
            <img
              className="br-1/2"
              src={ImgTallarinGallina}
              alt="img-tallarin"
            />
          </article>

          <article className="article-grid-about-item">
            <div
              className="article-grid-item center"
              id="justify-start"
              style={{ border: "none" }}
            >
              <h3 className="heading-md semi-bold">Platos Favoritos</h3>
              <ul className="text-xl light justify">
                <li>
                  Tallarin de casa con su rocoto relleno (Tradicional de
                  Abancay)
                </li>
                <li>Full Ceviches o derivados</li>
                <li>Chicharron</li>
                <li>Entre otros</li>
              </ul>
            </div>
          </article>

          <article className="article-grid-about-item">
            <img className="br-1/2" src={ImgTrioMarino} alt="img-triomarino" />
          </article>

          <article className="article-grid-about-item">
            <div
              className="article-grid-item center"
              id="justify-start"
              style={{ border: "none" }}
            >
              <h3 className="heading-md semi-bold">Mis Viajes</h3>
              <p className="text-xl light justify">
                Me encanta conocer muchos lugares nuevos, mas aquellas donde
                tengan mar o rios, en un futuro me gustaria conocer otros paises
                de <strong>America y Europa</strong>. He aqui un par de
                fotografias de mis viajes
              </p>
            </div>
          </article>

          <article className="article-grid-about-item">
            <img className="br-1/2" src={ImgHuacachina} alt="img-huacachina" />
          </article>

          <article className="article-grid-about-item">
            <img className="br-1/2" src={ImgUrosPuno} alt="img-uros-puno" />
          </article>

          <article className="article-grid-about-item">
            <img className="br-1/2" src={ImgFutbol} alt="img-futbol" />
          </article>

          <article className="article-grid-about-item">
            <img className="br-1/2" src={ImgMotoHonda} alt="img-motohonda" />
          </article>

          <article className="article-grid-about-item">
            <div
              className="article-grid-item center"
              id="justify-start"
              style={{ border: "none" }}
            >
              <h3 className="heading-md semi-bold">Mis Deportes Favoritos</h3>
              <p className="text-xl light justify">
                Me gusta jugar al futbol con mis amigos y compañeros de trabajo,
                asimismo ir a rutear en motocicleta.
              </p>
            </div>
          </article>
        </div>
      </ContainerLg>
    </SectionPaddingSm>
  );
};

export default HobbiesAbout;
