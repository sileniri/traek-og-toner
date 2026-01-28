import {useEffect} from "react";

export const desc = `
                Os i Træk og Toner er en ny, ung og velklingende basunkvartet, som spiller alt fra klassisk til moderne musik. Vores kvartet kan bookes i mange forskellige sammenhænge. Om det er til Sølvbryllupper, festlige arrangementer, kirkekoncerter eller underholdning, så har vi det perfekte musik til den begivenhed, du ønsker.`;

export default function About() {
    return (
        <main className="content-grid" id="/main">
            <article>
                <h1>Om os</h1>
                <p>{desc}</p>
            </article>
        </main>
    );
}
