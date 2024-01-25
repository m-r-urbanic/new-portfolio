import { Link, useLocation } from 'react-router-dom';

    function tabs() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav nav-tabs">
        <li className="nav-item">
            <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
            Home
            </Link>
        </li>
        <li className="nav-item">
            <Link
            to="/about"
            className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}
            >
            About
            </Link>
        </li>
        <li className="nav-item">
            <Link
            to="/contact"
            className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
            >
            Contact
            </Link>
        </li>
        <li className="nav-item">
            <Link
            to="/portfolio"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
            >
            Portfolio
            </Link>
        </li>
        <li className="nav-item">
            <Link
            to="/resume"
            className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
            >
            Resume
            </Link>
        </li>
        </ul>
    );
}

export default tabs;