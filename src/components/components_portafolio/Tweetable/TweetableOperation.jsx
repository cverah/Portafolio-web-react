import Footer from "../../Footer";
import Header from "../../Header";
import ProjectAnalisis from "../ProjectAnalisis";
import WorkTeam from "../WorkTeam";
import RunTweetable from "./RunTweetable";
import TweetableOperationDescription from "./TweetableOperationDescription";

const TweetableOperation = () => {
  return (
    <>
      <Header />
      <TweetableOperationDescription />
      <RunTweetable />
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

export default TweetableOperation;
