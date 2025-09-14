import {Link} from "react-router-dom";
import {desc} from "./About";

export default function Home() {
    return (
        <main>
            <h1></h1>

            <section className="preview" aria-labelledby="about-section-title">
                <h2 id="about-section-title">Om os</h2>
                <p>{desc}</p>
                <Link to="/om" viewTransition>
                    Læs mere
                </Link>
            </section>
        </main>
    );
}
