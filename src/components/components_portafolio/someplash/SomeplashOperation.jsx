import Footer from "../../Footer";
import Header from "../../Header";
import ProjectAnalisis from "../ProjectAnalisis";
import WorkTeam from "../WorkTeam";
import RunSomeplash from "./RunSomeplash";
import SomeplashOperationDescription from "./SomeplashOperationDescription";

const SomeplashOperation = () => {
  return (
    <>
      <Header />
      <SomeplashOperationDescription />
      <RunSomeplash />
      <ProjectAnalisis
        programing_lenguaje={
          "lenguaje de programacion RUBY con el framework RUBY ON RAILS y base de datos en POSTGRESQL"
        }
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

export default SomeplashOperation;
