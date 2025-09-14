import Card from "../components/Card";

export const desc = `
                Træk & Toner er en basunkvartet der specialiserer sig i diverse musikstile. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Illo ullam minima ab fugiat doloribus eveniet aperiam debitis
                tempore, error laboriosam culpa aliquid vitae dolore nobis dignissimos quis modi! Cupiditate,
                quisquam fugiat possimus impedit mollitia provident odio neque delectus repudiandae et?`;

export default function About() {
    return (
        <main>
            <h1>Om os</h1>
            <article>
                <h2></h2>
                <p>{desc}</p>
            </article>
        </main>
    );
}
