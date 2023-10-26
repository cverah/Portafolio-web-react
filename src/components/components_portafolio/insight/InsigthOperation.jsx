import Footer from "../../Footer";
import Header from "../../Header";
import ProjectAnalisis from "../ProjectAnalisis";
import WorkTeam from "../WorkTeam";
import InsigthOperationDescription from "./InsigthOperationDescription";
import RunInsigth from "./RunInsigth";

const InsigthOperation = () => {
  return (
    <>
      <Header />
      <InsigthOperationDescription />
      <RunInsigth />
      <ProjectAnalisis
        programing_lenguaje={
          "lenguaje de programacion RUBY y base de datos en POSTGRESQL"
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

export default InsigthOperation;
