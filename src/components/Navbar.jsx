import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
            <ul className="flex justify-center space-x-4">
                <li>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="text-pink cursor-pointer hover:text-mauve"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="text-pink cursor-pointer hover:text-mauve"
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        className="text-pink cursor-pointer hover:text-mauve"
                    >
                        Skills
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;