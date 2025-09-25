import {Link} from "react-router-dom";
export default function Error() {
    return (
        <>
            <main id="/main">
                <h1>404 side ikke fundet</h1>
                <Link to="/">Hjem</Link>
            </main>
        </>
    );
}
