import Header from "../components/Header";
import SectionPaddingSm from "../components/SectionPaddingSm";
import ContainerLg from "../components/ContainerLg";
import SectionProfile from "../components/components_home/SectionProfile";
import SectionLastLearning from "../components/components_home/SectionLastLearning";
import Footer from "../components/Footer";
import SkillsAbout from "../components/components_about/SkillsAbout";

const Home = () => {
  return (
    <>
      <Header />
      <SectionPaddingSm background="bg-green-150">
        <ContainerLg>
          <SectionProfile />
        </ContainerLg>
      </SectionPaddingSm>

      <SectionPaddingSm background="bg-green-80">
        <SkillsAbout />
      </SectionPaddingSm>

      <SectionPaddingSm background="bg-gray-200">
        <ContainerLg>
          <div className="center mb-1">
            <h2 className="heading-lg mb-1/4">Ultimos Aprendizajes</h2>
            <p className="text-lg">
              Lenguajes y Herramientas que he aprendido últimamente
            </p>
          </div>
          <SectionLastLearning />
        </ContainerLg>
      </SectionPaddingSm>

      <Footer />
    </>
  );
};

export default Home;
