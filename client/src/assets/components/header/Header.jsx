import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <section className="headsec">
      <div className="Header">
        <h1 className="headertitle">foodeat</h1>
        <nav className="HeaderNavList">
          <ul className="NavList-items">
            <li className="navItem">
              <a href="/">home</a>
            </li>
            <li className="navItem">
              <Link to="/Orders"> your orders</Link>
            </li>
           </ul>
        </nav>
        <div className="operation">
<button className="login">log in</button>
<button className="login">sign up</button>
        </div>
      </div>
    </section>
  );
};
export default Header;