import {useEffect} from "react";

export const desc = `
                Træk og Toner... Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Illo ullam minima ab fugiat doloribus eveniet aperiam debitis
                tempore, error laboriosam culpa aliquid vitae dolore nobis dignissimos quis modi! Cupiditate,
                quisquam fugiat possimus impedit mollitia provident odio neque delectus repudiandae et?`;

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
