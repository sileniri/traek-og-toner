import {useEffect} from "react";

export default function Footer() {
    const fitLogo = (logo) => {
        const bbox = logo.querySelector("text").getBBox();

        logo.setAttribute("viewBox", [bbox.x, bbox.y, bbox.width, bbox.height].join(" "));
    };

    const socials = [
        {name: "Instagram", href: "https://www.instagram.com/slideandsoundquartet?igsh=MTh1MGNtbXIhd2JoMA%3D%3D"},
        {name: "Facebook", href: "https://www.facebook.com/slideandsoundquartet"},
    ];

    useEffect(() => {
        const logo = document.querySelector(".logo");
        fitLogo(logo);
    }, []);
    return (
        <footer className="content-grid">
            <svg className="logo">
                <text>Træk&nbsp;&nbsp;&nbsp;&nbsp;og&nbsp;&nbsp;&nbsp;&nbsp;Toner</text>
            </svg>
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
