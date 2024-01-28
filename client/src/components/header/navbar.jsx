function Nav({ links }) {
    return (
        <>
            <header className="bg-light border border-bottom">
                <div id="navBar" className="container bg-light">
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <h1 className="bolder">
                                <a className="text-decoration-none text-dark" href="/">
                                    Teller App
                                </a>
                            </h1>
                            <div id="navDropdown" className="btn-group" role="group">
                                <button type="button" className="btn bg-light btn-light dropdown-toggle text-dark" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Explore
                                </button>
                                <ul className="dropdown-menu bg-light">
                                    {links.map((link) => link)};
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>

    )
};

export default Nav;