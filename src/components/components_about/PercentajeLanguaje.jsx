import "./percentaje_language.css";
import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript } from "react-icons/bi";
import { SiRubyonrails } from "react-icons/si";

const PercentajeLanguaje = () => {
  return (
    <div className="container-language">
      <div className="skill-box">
        <span
          className="title"
          style={{
            color: "red",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <BiLogoHtml5 />
          HTML Y CSS
        </span>

        <div className="skill-bar">
          <span className="skill-per html-css">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span
          className="title"
          style={{
            color: "blue",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <BiLogoCss3 />
          CSS
        </span>

        <div className="skill-bar">
          <span className="skill-per css">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span
          className="title"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <BiLogoJavascript style={{ color: "orange" }} />
          JAVASCRIPT
        </span>

        <div className="skill-bar">
          <span className="skill-per javascript">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span
          className="title"
          style={{
            color: "yellowgreen",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <BiLogoCss3 />
          REACT
        </span>
        <div className="skill-bar">
          <span className="skill-per react">
            <span className="tooltip">65%</span>
          </span>
        </div>
      </div>

      <div className="skill-box" style={{ marginBottom: "0" }}>
        <span
          className="title"
          style={{
            color: "red",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <SiRubyonrails />
          RUBY ON RAILS
        </span>
        <div className="skill-bar">
          <span className="skill-per rails">
            <span className="tooltip">75%</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PercentajeLanguaje;
