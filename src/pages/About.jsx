import ContainerLg from "../components/ContainerLg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionPaddingSm from "../components/SectionPaddingSm";
import ExperienciaAbout from "../components/components_about/ExperienciaAbout";
import HobbiesAbout from "../components/components_about/HobbiesAbout";
import SectionProfileAbout from "../components/components_about/SectionProfileAbout";

const About = () => {
  return (
    <>
      <Header />
      <SectionProfileAbout />
      <SectionPaddingSm background="bg-green-80">
        <ContainerLg>
          <div className="center mb-1">
            <h2 className="heading-md center mb-1/4">
              Algunas Experiencias Laborales
            </h2>
            <div className="flex justify-center gap-16">
              <a
                className="light text-decoration-none green-800 text-lg italic"
                href="/src/assets/pdfs/CV_CMVH_ES.pdf"
                target="_blank"
              >
                Ver CV Digital - Español
              </a>
              <a
                className="light text-decoration-none green-800 text-lg italic"
                href="/src/assets/pdfs/CV_CMVH_EN.pdf"
                target="_blank"
              >
                Ver CV Digital - Ingles
              </a>
            </div>
          </div>
          <ExperienciaAbout />
        </ContainerLg>
      </SectionPaddingSm>

      <div style={{ padding: "0", margin: "0" }}>
        <HobbiesAbout />
      </div>

      <Footer />
    </>
  );
};

export default About;
