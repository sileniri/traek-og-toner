import {Link} from "react-router-dom";
import {desc} from "./About";
import {musicians} from "./Meet";

export default function Home() {
    const TrimmedText = ({text, char}) => {
        let trimText = text.substring(0, char);
        trimText = trimText.substring(0, Math.min(trimText.length, trimText.lastIndexOf(" ")));
        return <>{trimText}&hellip;</>;
    };
    return (
        <main className="content-grid">
            <section className="hero full-width overlay" aria-labelledby="hero-title">
                <h1>Træk & Toner</h1>
                <p>
                    <TrimmedText text={desc} char={200} />
                </p>
                <Link to="/om-os" viewTransition>
                    Læs mere
                </Link>
            </section>
            <section className="preview" aria-labelledby="meet-section-title">
                <h2 id="meet-section-title">Om os</h2>
                <div>
                    {musicians.map((musician, index) => (
                        <article key={index} style={{"--src": "url(" + musician.imgSrc + ")"}}>
                            <h3>{musician.name}</h3>
                            <p>
                                <TrimmedText text={musician.description} char={100} />
                            </p>
                        </article>
                    ))}
                </div>
                <Link to="/mød-os" viewTransition>
                    Læs mere
                </Link>
            </section>
        </main>
    );
}
