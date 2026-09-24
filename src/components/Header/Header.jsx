import logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Around the U.S. logo"
        className="header__logo"
      />
      <hr className="header__divider" />
    </header>
  );
}

export default Header;