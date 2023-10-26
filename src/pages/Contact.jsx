import ContainerLg from "../components/ContainerLg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactForm from "../components/component_contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="section-sm">
        <ContainerLg>
          <div className="center">
            <h1 className="heading-lg semi-bold mb-1/4">Contactame</h1>
            <p className="text-lg light">
              ¿Buscas ampliar tu equipo? ¿O necesitas un desarrollador web para
              un proyecto específico? si te puedo ayudar en algo no dudes en
              contactarme.
            </p>
          </div>
        </ContainerLg>
      </section>

      <section className="section-sm">
        <div className="container-md">
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
