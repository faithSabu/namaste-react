import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div>Logo</div>
      <div className="header_nav_items">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
