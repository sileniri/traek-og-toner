import Card from "../components/Card";

export const musicians = [
    {
        name: "Carl-Valdemar Meyer Nielsen",
        description: `Hej, jeg hedder Carl-Valdemar Meyer Nielsen. Jeg er 15 år og spiller tenorbasun i Træk og Toner. Jeg spiller inde i Tivoli-Garden til dagligt, og får undervisning af Kasper Thaarup. Jeg har gennem tiden deltaget i konkurrencer ved Det kongelige Danske Musikkonservatorium. Jeg har haft mange musikalske oplevelser. Jeg har været solist med Livgardens Musikkorps, spillet i Det gamle Radiohus Koncertsal og mange andre.`,
        imgSrc: "/img/cvmn.jpeg",
        imgAlt: "Carl-Valdemar, tenorbasunist i Træk og Toner",
    },
    {
        name: "Carl Vilhelm Luckenbach",
        description: `Hej jeg hedder Carl. Jeg er 19 år gammel og spiller basbasun i Træk og Toner. Til dagligt går jeg på MGK Sjælland på klassisk basun. Jeg spiller i mange forskellige sammenhænge dog spiller jeg primært i Concord Brass band, dusika, dubb og duho. Min vej ind i musikken startede i Holbæk Garden, hvor jeg har fået utallige fantastiske oplevelser som fx at vinde dm for bygardere og WMC kerkrade.`,
        imgSrc: "/img/cvl.jpeg",
        imgAlt: "Carl, basbasunist i Træk og Toner",
    },
    {
        name: "Johannes Tjørnehøj Rysgaard",
        description: `Hej, mit navn er Johannes. Jeg er 14 år gammel og spiller basbasun i basunkvartetten Træk og Toner. Derudover spiller jeg til dagligt i Tivoli-Garden, hvor jeg bl.a. studerer under solobasunist Kasper Thaarup, som skærper mine musikalske færdigheder.`,
        imgSrc: "/img/jtr.jpg",
        imgAlt: "Johannes, basbasunist i Træk og Toner",
    },
    {
        name: "Thoke Harada Sørensen",
        description: `Hej, mit navn er Thoke, og jeg spiller tenorbasun i Træk og Toner. Jeg startede med at spille basun på Odense Musikskole. Derefter startede jeg i Tivoli-Garden og spillede der i 5 år med Kasper Thaarup som lærer. Lige nu spiller jeg på MGK-København med Andreas Olsen som lærer.`,
        imgSrc: "/img/ths.jpg",
        imgAlt: "Thoke, tenorbasunist i Træk og Toner",
    },
];

export default function Meet() {
    return (
        <main className="content-grid" id="/main">
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
