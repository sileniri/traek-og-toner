export default function Card({name, description, imgSrc, imgAlt}) {
    return (
        <article className="about card">
            <div className="text">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className="img">
                <img src={imgSrc} alt={imgAlt} />
            </div>
        </article>
    );
}
