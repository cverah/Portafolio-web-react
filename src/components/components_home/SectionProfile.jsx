import ImgCMVH from "../../assets/images/photos/img-CMVH.jpg";

const SectionProfile = () => {
  return (
    <div className="article-grid-55-45">
      <div className="item-content-description">
        <p className="heading-lg mb-1">
          ¡Hola! Soy <strong className="green-800"> Cristhian</strong>,
          desarrollador full stack en busca de nuevas aventuras.
        </p>
        <p className="text-xl light justify">
          Con muchas ganas de aprender, conociendo amigos, desarrollando
          habilidades siempre tratando de conocer el como funcionan las cosas y
          experimentando el mundo de la programacion y la tecnologia que influye
          en el desarrollo de los sistemas que se utilizan en la vida diaria.
        </p>
      </div>
      <img src={ImgCMVH} className="br-1/2" alt="img-cristhian" />
    </div>
  );
};

export default SectionProfile;
