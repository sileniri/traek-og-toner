export default function Footer() {
    const socials = [
        {name: "Instagram", href: "https://www.instagram.com/slideandsoundquartet?igsh=MTh1MGNtbXIhd2JoMA%3D%3D"},
        {name: "Facebook", href: "https://www.facebook.com/slideandsoundquartet"},
    ];
    return (
        <footer className="content-grid">
            <div className="logo">Træk og Toner</div>
            <div className="wrapper">
                {socials.map((social, index) => (
                    <a key={index} className="social-media" href={social.href}>
                        <i
                            className="icon"
                            style={{
                                "--_icon-src": `url(/${social.name.toLowerCase()}.svg)`,
                            }}
                        ></i>
                        <p className="hidden">{social.name}</p>
                    </a>
                ))}
                <span>Kontakt:</span>
                <a href="mailto:basunister@gmail.com">basunister@gmail.com</a>
            </div>
        </footer>
    );
}
