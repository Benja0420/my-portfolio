import { Link } from 'react-scroll';

const Navbar = () => {
    const navLinks = [
        { to: "home", text: "Inicio" },
        { to: "projects", text: "Proyectos" },
        { to: "skills", text: "Habilidades" },
        { to: "about", text: "Sobre mí" },
    ];

    return (
      <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
        <div className="rounded-full bg-gradient-to-r from-gray-900/80 to-gray-950/80 px-8 py-4 backdrop-blur-sm border border-gray-800/50 shadow-2xl shadow-pink-500/10">
          <ul className="flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={250}
                  className="relative whitespace-nowrap text-sm font-semibold text-gray-300 transition-colors duration-300 hover:text-pink-400 cursor-pointer group"
                >
                  {link.text}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-pink-400 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;