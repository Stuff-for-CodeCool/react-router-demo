import { Link } from "react-router-dom";

const NavBar = () => <nav>
    <Link to="/">Home</Link>
    <Link to="/ceva">Ceva</Link>
    <Link to="/altceva">Altceva</Link>
</nav>

export default NavBar;