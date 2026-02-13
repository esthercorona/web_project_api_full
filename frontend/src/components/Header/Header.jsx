import { Link, useLocation } from "react-router-dom";
import logo from "../../images/Around_Japan.svg";
import line from "../../images/Line.jpg";

function Header({ isLoggedIn, userEmail, onSignOut }) {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="Around Japan" className="logo logo_header" />
      </div>
      <div className="header__auth">
        {isLoggedIn ? (
          <>
            <p className="header__email">{userEmail}</p>
            <button className="header__link" onClick={onSignOut}>
              Cerrar sesión
            </button>
          </>
        ) : location.pathname === "/signin" ? (
          <Link to="/signup" className="header__link">
            Regístrate
          </Link>
        ) : (
          <Link to="/signin" className="header__link">
            Inicia sesión
          </Link>
        )}
      </div>
      <img src={line} alt="Línea divisoria" className="header__line" />
    </header>
  );
}

export default Header;
