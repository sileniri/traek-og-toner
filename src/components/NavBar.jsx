import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li className="logo-link">
                    <NavLink to="/" viewTransition>
                        Træk og Toner
                    </NavLink>
                </li>
                <li className="home-link">
                    <NavLink to="/" viewTransition>
                        Hjem
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/om-os" viewTransition>
                        Om os
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/mød-os" viewTransition>
                        Mød os
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/kontakt" viewTransition>
                        Kontakt
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
