import { Link } from "react-router-dom";

import { useAtom } from "jotai";
import state from "../state";

const NavBar = () => {
    const [logat] = useAtom(state.logat);

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/ceva">Ceva</Link>
            <Link to="/altceva">Altceva</Link>
            {logat && "Hello"}
        </nav>
    );
};

export default NavBar;
