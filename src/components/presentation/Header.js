import logo from "../../static/images/logo.png"

function Header() {
    return (

            <header>
                <nav className="nav flex-row">
                    <a href="/" className="header-logo">
                        <img src= {logo}  className="logo"/>
                    </a>
                    <div className="nav-links">
                        <ul className="nav-links-ul flex-row">
                            <li className="nav-link-li"><a href="#">Resume Templates</a></li>
                            <li className="nav-link-li"><a href="#">About US</a></li>
                            <li className="nav-link-li">
                                <a href="#">
                                    <button className="btn white">
                                        Register
                                    </button>
                                </a>
                            </li>
                            <li className="nav-link-li">
                                <a href="#" className="sign-in">Sign In</a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>

    );
}

export default Header;
