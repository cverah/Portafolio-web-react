import Footer from "../../Footer";
import Header from "../../Header";
import ProjectAnalisis from "../ProjectAnalisis";
import WorkTeam from "../WorkTeam";
import EatableOperationDescription from "./EatableOperationDescription";
import RunEatable from "./RunEatable";

const EatableOperation = () => {
  return (
    <>
      <Header />
      <EatableOperationDescription />
      <RunEatable />
      <ProjectAnalisis
        programing_lenguaje={
          "libreria REACT + VITE con lenguaje de programacion Javascript JS - Single Page"
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

export default EatableOperation;
