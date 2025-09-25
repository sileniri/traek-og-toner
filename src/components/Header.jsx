import NavBar from "./NavBar";

export default function Header() {
    return (
        <>
            <header className="content-grid">
                <a href="#/main" id="skip-nav-link">
                    Skip til indhold
                </a>
                <NavBar />
            </header>
        </>
    );
}
