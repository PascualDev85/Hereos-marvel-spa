import { Link } from "react-router-dom";

function getImageUrl(id) {
  return new URL(`../../assets/heroes/${id}.jpg`, import.meta.url).href;
}

export const HeroCard = ({ id, superhero, alter_ego, first_appearance }) => {
  // const heroImageUrl = `/assets/heroes/${id}.jpg`;
  // const heroImageUrl = require.context("../../assets/heroes", true);

  return (
    <div className="col animate__animated animate__fadeIn cardHero">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-7 col-lg-6">
            <Link to={`/hero/${id}`}>
              <img src={getImageUrl(id)} className="card-img" alt={superhero} />
            </Link>
          </div>

          <div className="col-md-5 col-lg-6 cardContent">
            <div className="card-body px-1 cardList">
              <h5 className="card-title">{superhero}</h5>
              <small>Alter ego</small>
              <p className="card-text">{alter_ego}</p>
              <small className="smallFApperance">First Appearance</small>
              <p className="card-text pFappearance">{first_appearance}</p>
              <Link to={`/hero/${id}`}>More...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
