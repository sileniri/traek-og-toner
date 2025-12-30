import {useEffect, useRef, useState} from "react";

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
                <h1 style={{"--delay": "0"}}>Træk og Toner</h1>
                <p style={{"--delay": "250"}}>{desc}</p>
                <Link style={{"--delay": "500"}} className="button" to="/om-os" viewTransition>
                    Læs mere
                </Link>
            </section>
            <section className="preview full-width" aria-labelledby="meet-section-title">
                <h2 id="meet-section-title">Mød os</h2>
                <ul>
                    {musicians.map((musician, index) => (
                        <li key={index}>
                            <div
                                className={"musician-preview"}
                                style={{"--_delay": index * -1 + "s", "--_src": `url(${musician.imgSrc})`}}
                            >
                                <div className="content">
                                    <h3>{musician.name}</h3>
                                    <HashLink
                                        to={"/mød-os/#/" + musician.name.toLowerCase().replaceAll(" ", "-")}
                                        className="button"
                                        viewTransition
                                    >
                                        Mød {musician.name.split(" ")[0]}
                                    </HashLink>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
