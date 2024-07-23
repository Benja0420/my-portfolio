import { Link } from 'react-scroll';

const Navbar = () => {
    const navLinks = [
        { to: "home", text: "Home" },
        { to: "projects", text: "Projects" },
        { to: "skills", text: "Skills" },
        { to: "about", text: "About" },
    ];

    return (
        <nav className="bg-gray-950 py-4 px-12 md-px-28 rounded-full fixed top-4 left-1/2 transform -translate-x-1/2 z-10">
            <ul className="flex justify-center space-x-4">
                {navLinks.map((link) => (
                    <li key={link.to}>
                        <Link
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="text-pink cursor-pointer hover:text-mauve"
                        >
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;