import Footer from "../../Footer";
import Header from "../../Header";

import CalenclyOperationDescription from "./CalenclyOperationDescription";
import RunCalencly from "./RunCalencly";
import ProjectAnalisis from "../ProjectAnalisis";
import WorkTeam from "../WorkTeam";

const CalenclyOperation = () => {
  return (
    <>
      <Header />
      <CalenclyOperationDescription />
      <RunCalencly />
      <ProjectAnalisis
        programing_lenguaje={"lenguaje de programacion RUBY"}
        good_practics={"para ello en ruby usamos el RUBOCOP"}
      />
      <WorkTeam
        first_name={"Cristhian Mario Vera Huamani"}
        second_name="David Rojas"
        third_name="Luis Rueda"
      />
      <Footer />
    </>
  );
};

export default CalenclyOperation;
