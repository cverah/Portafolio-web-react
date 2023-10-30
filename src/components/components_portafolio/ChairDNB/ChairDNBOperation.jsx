import Header from "../../Header";
import ProjectAnalisis from "../ProjectAnalisis";
import Footer from "../../Footer";
import WorkTeam from "../WorkTeam";
import ChairDNBOperationDescription from "./ChairDNBOperationDescription";
import RunChairDNB from "./RunChairDNB";

const ChairDNBOperation = () => {
  return (
    <>
      <Header />
      <ChairDNBOperationDescription />
      <RunChairDNB />
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

export default ChairDNBOperation;
