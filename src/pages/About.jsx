// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/About/Banner";
import Accordion from "../components/Housing/Accordion";

// Utils
import { about } from "../utils/about";

function About() {
  return (
    <>
      <Header />
      <Banner />
      {about.map((about) => (
        <Accordion
          key={about.id}
          title={about.title}
          description={about.content}
          type="large"
        />
      ))}

      <Footer />
    </>
  );
}

export default About;
