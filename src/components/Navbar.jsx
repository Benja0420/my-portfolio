import { Link } from 'react-scroll';

const Navbar = () => {
    const navLinks = [
        { to: "home", text: "Inicio" },
        { to: "projects", text: "Proyectos" },
        { to: "skills", text: "Habilidades" },
        { to: "about", text: "Sobre mí" },
    ];

    return (
      <nav className="bg-gray-950 py-4 px-12 md-px-28 rounded-full fixed top-4 left-1/2 transform -translate-x-1/2 z-50 ">
        <ul className="flex justify-center space-x-4">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={250}
                className="text-nowrap text-pink cursor-pointer hover:text-mauve"
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