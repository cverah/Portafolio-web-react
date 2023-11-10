import { Link } from "react-router-dom";
import { latest_learnings } from "./latest_learnings";
import { date_conversion } from "../../utils";

const SectionLastLearning = () => {
  //console.log(latest_learnings);
  //converir cadena string a objeto de fecha
  const parseData = (dateString) => new Date(dateString);

  //ordenas de fecha reciente a la mas antigua
  const sortLatesDate = latest_learnings.sort(
    (a, b) => parseData(b.date) - parseData(a.date)
  );
  // console.log(sortLatesDate);
  return (
    <div className="article-grid-2columns">
      {sortLatesDate.map((learning) => (
        <article
          key={learning.id}
          className="article-grid-item"
          style={{ border: "none" }}
        >
          <small className="semi-bold text-uppercase text-xs overline">
            {date_conversion(learning.date)}
          </small>
          <h3 className="regular heading-md">{learning.title}</h3>
          <p className="light text-lg justify">{learning.content}</p>
          <Link
            to={learning.link}
            target="_blank"
            className="text-lg green-900 text-decoration-none text-uppercase overline semi-bold"
          >
            Quiero Saber Mas
          </Link>
        </article>
      ))}
    </div>
  );
};

export default SectionLastLearning;
