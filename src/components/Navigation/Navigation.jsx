import { Link } from "react-router-dom";
import "./Navigation.module.css";

function Navigation() {
  return (
    <div className="Navigation__container">
      <Link to="#" className="navigation__link">
        Basked
      </Link>
      <Link to="#" className="navigation__link">
        Card
      </Link>
      <Link to="#" className="navigation__link">
        FullPizza
      </Link>
      <Link to="#" className="navigation__link">
        LoginPage
      </Link>
    </div>
  );
}

export default Navigation;
