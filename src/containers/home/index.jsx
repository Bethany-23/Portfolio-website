import "./styles.scss";
import { Animate } from "react-simple-animate";

/*  ✅  Put your PDF (e.g. Betanya_Addisalem_CV.pdf) in  /public  */
const CV_PATH = "/Betanya_Addisalem_CV.pdf";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I’m Betanya
          <br />
          Software&nbsp;Developer
        </h1>
      </div>

      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: "translateY(550px)" }}
        end={{ transform: "translateY(0)" }}
      >
        <div className="home__cv">
          {/*the download attribute */}
          <a href={CV_PATH} download className="cv-btn">
            Download&nbsp;CV
          </a>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
