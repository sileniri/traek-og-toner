import {useEffect} from "react";
import {NavLink} from "react-router-dom";

export default function NavBar() {
    useEffect(() => {
        document.querySelectorAll("nav a").forEach((link) => {
            link.addEventListener("click", (evt) => {
                document.title = evt.target.innerText + " | Træk og Toner";
            });
        });
    });

    return (
        <nav>
            <ul>
                <li>
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
