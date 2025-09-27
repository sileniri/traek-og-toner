import {Link} from "react-router-dom";
import {useEffect} from "react";

export default function Error() {
    useEffect(() => {
        document.title = "404 side ikke fundet";
    });
    return (
        <>
            <main id="/main" className="content-grid">
                <h1>404 side ikke fundet</h1>
                <Link to="/">Hjem</Link>
            </main>
        </>
    );
}
