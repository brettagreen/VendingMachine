import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {

    return (
        <nav className="navBar">
          <NavLink className="navBarLink" exact="true" to="/">
            Go home ya penniless bum! &nbsp;&nbsp;
          </NavLink>
          <NavLink className="navBarLink" exact="true" to="/turkey">
            Turkey &nbsp;&nbsp;
          </NavLink>
          <NavLink className="navBarLink" exact="true" to="/cheese">
            Cheese &nbsp;&nbsp;
          </NavLink>
          <NavLink className="navBarLink" exact="true" to="/oregano">
            Oregano
          </NavLink>
        </nav>
      );
    
}

export default NavBar;