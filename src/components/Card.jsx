export default function Card({name, description, imgSrc, imgAlt}) {
    return (
        <article className="about card" id={"/" + name.toLowerCase().replaceAll(" ", "-")}>
            <div className="text">
                <div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="img">
                <img src={imgSrc} alt={imgAlt} />
            </div>
        </article>
    );
}
