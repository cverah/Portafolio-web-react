import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import ImgCarnetCMVH from "../../assets/images/photos/img-carnet-CMVH.jpg";
import ImgAnonimus from "../../assets/images/photos/img-persona-anonima.png";

const WorkTeam = ({ first_name, second_name, third_name }) => {
  return (
    <section className="section-sm">
      <div className="container-lg">
        <h2 className="heading-2rem semi-bold mb-1/4 center">
          Nuestro Equipo de Trabajo
        </h2>
        <div className="article-3-columns">
          <article
            className="article-grid-item"
            id="padding-0"
            style={{ border: "none" }}
          >
            <img id="img-team" src={ImgCarnetCMVH} alt="img-carnet-CMVH" />
            <div>
              <p className="semi-bold center green-900 text-xl">{first_name}</p>
              <div className="work_networks_page">
                <Link to="https://github.com/cverah" target="_blank">
                  <BsGithub
                    style={{ width: "30px", height: "30px", color: "black" }}
                  />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/cristhianverah/"
                  target="_blank"
                >
                  <BsLinkedin
                    style={{ width: "30px", height: "30px", color: "blue" }}
                  />
                </Link>
              </div>
            </div>
          </article>

          <article
            className="article-grid-item"
            id="padding-0"
            style={{ border: "none" }}
          >
            <img id="img-team" src={ImgAnonimus} alt="img-carnet-CMVH" />
            <div>
              <p className="semi-bold center green-900 text-xl">
                {second_name}
              </p>
              <div className="work_networks_page">
                <a href="#" target="_blank">
                  <BsGithub
                    style={{ width: "30px", height: "30px", color: "black" }}
                  />
                </a>
                <a href="#">
                  <BsLinkedin
                    style={{ width: "30px", height: "30px", color: "blue" }}
                  />
                </a>
              </div>
            </div>
          </article>

          <article
            className="article-grid-item"
            id="padding-0"
            style={{ border: "none" }}
          >
            <img id="img-team" src={ImgAnonimus} alt="img-carnet-CMVH" />
            <div>
              <p className="semi-bold center green-900 text-xl">{third_name}</p>
              <div className="work_networks_page">
                <a href="#" target="_blank">
                  <BsGithub
                    style={{ width: "30px", height: "30px", color: "black" }}
                  />
                </a>
                <a href="#">
                  <BsLinkedin
                    style={{ width: "30px", height: "30px", color: "blue" }}
                  />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

WorkTeam.propTypes = {
  first_name: PropTypes.string,
  second_name: PropTypes.string,
  third_name: PropTypes.string,
};

export default WorkTeam;
