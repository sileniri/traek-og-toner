import Card from "../components/Card";

export const musicians = [
    {
        name: "Carl-Valdemar Meyer Nielsen",
        description: `Hej, jeg hedder Carl-Valdemar Meyer Nielsen. Jeg er 15 år og spiller tenorbasun i Træk og Toner. Jeg spiller inde i Tivoli−Garden til dagligt, og får undervisning af Kasper Thaarup. Jeg har gennem tiden deltaget i konkurrencer ved Det kongelige Danske Musikkoncervatorium. Jeg har haft mange musikalske oplevelser. Jeg har været solisr med Livgardens Musikkorps, spillet i Det gamle Radiohus Koncertsal og mange andre.`,
        imgSrc: "/img/cvmn.jpeg",
        imgAlt: "Carl-Valdemar, basbasunist i Træk og Toner",
    },
    {
        name: "Carl Vilhelm Luckenbach",
        description: `Hej jeg hedder Carl. Jeg er 19 år gammel og spiller basbasun i Træk og Toner. Til dagligt går jeg på MGK Sjællad på klassisk basun. Jeg spiller i mange forskellige sammenhænge dog spiller jeg primært i concord brass band, dusika, dubb og duho. Min vej ind i musikken startede i Holbæk Garden, hvor jeg har fået utallige fantastiske oplevelser som fx at vinde dm for bygardere og WMC kerkrade.`,
        imgSrc: "/img/cvl.jpeg",
        imgAlt: "Carl, basbasunist i Træk og Toner",
    },
    {
        name: "Johannes Tjørnehøj Rysgaard",
        description: `Hej, mit navn er Johannes. Jeg er 14 år gammel og spiller basbasun i basunkvartetten Træk og Toner. Derudover spiller jeg til dagligt i Tivoli-Garden, hvor jeg bl.a. studerer under solobasunist Kasper Thaarup, som skærper mine musikalske færdigheder.`,
        imgSrc: "/img/jtr.jpg",
        imgAlt: "Johannes, basbasunist i Træk og Toner",
    },
];

export default function Meet() {
    return (
        <main className="content-grid">
            <section>
                {musicians.map((musician, index) => (
                    <Card
                        key={index}
                        name={musician.name}
                        description={musician.description}
                        imgAlt={musician.imgAlt || null}
                        imgSrc={musician.imgSrc}
                    />
                ))}
            </section>
        </main>
    );
}
