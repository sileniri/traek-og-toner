import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <NavLink to="/" viewTransition>
                Træk & Toner
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/om" viewTransition>
                        Om os
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
