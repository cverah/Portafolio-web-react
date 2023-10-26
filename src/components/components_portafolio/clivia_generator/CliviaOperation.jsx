import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";
import CliviaOperationDescription from "./CliviaOperationDescription";
import RunCliviaGenerator from "./RunCliviaGenerator";
import ProjectAnalisis from "../ProjectAnalisis";
import WorkTeam from "../WorkTeam";

const CliviaOperation = () => {
  return (
    <>
      <Header />
      <CliviaOperationDescription />
      <RunCliviaGenerator />
      <ProjectAnalisis
        programing_lenguaje={"lenguaje de programacion RUBY"}
        good_practics={"para ello en ruby usamos el RUBOCOP"}
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

export default CliviaOperation;
