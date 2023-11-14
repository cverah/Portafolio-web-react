import ContainerLg from "../components/ContainerLg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionPaddingSm from "../components/SectionPaddingSm";
import CurriculumVitae from "../components/components_about/CurriculumVitae";

import HobbiesAbout from "../components/components_about/HobbiesAbout";
import MyAbout from "../components/components_about/MyAbout";
import SectionProfileAbout from "../components/components_about/SectionProfileAbout";

const About = () => {
  return (
    <>
      <Header />
      <SectionProfileAbout />
      <SectionPaddingSm background="bg-green-10">
        <ContainerLg>
          <CurriculumVitae />
        </ContainerLg>
      </SectionPaddingSm>

      <SectionPaddingSm background="bg-green-80">
        <ContainerLg>
          <MyAbout />
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
