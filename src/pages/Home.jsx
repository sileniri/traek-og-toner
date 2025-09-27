import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {desc} from "./About";
import {musicians} from "./Meet";

export default function Home() {
    const TrimmedText = ({text, char}) => {
        let trimText = text.substring(0, char);
        trimText = trimText.substring(0, Math.min(trimText.length, trimText.lastIndexOf(" ")));
        return <>{trimText}&hellip;</>;
    };

    return (
        <main className="content-grid" id="/main">
            <section className="hero full-width" aria-labelledby="hero-title">
                <h1>Træk og Toner</h1>
                <p>
                    <TrimmedText text={desc} char={200} />
                </p>
                <Link className="button" to="/om-os" viewTransition>
                    Læs mere
                </Link>
            </section>
            <section className="preview" aria-labelledby="meet-section-title">
                <h2 id="meet-section-title">Mød os</h2>
                <ul>
                    {musicians.map((musician, index) => (
                        <li key={index}>
                            <HashLink
                                title={"Mød " + musician.name}
                                to={"/mød-os/#/" + musician.name.toLowerCase().replaceAll(" ", "-")}
                                style={{"--_delay": index * -1 + "s"}}
                                viewTransition
                            >
                                <h3>{musician.name}</h3>
                                <img src={musician.imgSrc} alt={musician.imgAlt} />
                            </HashLink>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
