import Footer from "../../Footer";
import Header from "../../Header";
import ProjectAnalisis from "../ProjectAnalisis";
import WorkTeam from "../WorkTeam";
import DoableJSOperationDescription from "./DoableJSOperationDescription";
import RunDoableJS from "./RunDoableJS";

const DoableJSOperation = () => {
  return (
    <>
      <Header />
      <DoableJSOperationDescription />
      <RunDoableJS />
      <ProjectAnalisis
        programing_lenguaje={
          "lenguaje de programacion Javascript JS - Single Page"
        }
        good_practics={""}
      />

      <WorkTeam
        first_name={"Cristhian Mario Vera Huamani"}
        second_name="Anonymous"
        third_name="Anonymous"
      />
      <Footer />
    </>
  );
};

export default DoableJSOperation;
