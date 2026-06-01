import { Link } from 'react-router-dom';
import Logo from '../../logo/Logo';
import Links from '../links/Links';

const NavbarStart = () => {
    return (
        <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="mr-4 lg:hidden p-2 rounded-md transition duration-500 hover:scale-105 hover:bg-primary hover:cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow-sm">
                                {
                                    <Links />
                                }
                            </ul>
                        </div>
                        <Link className="font-extrabold text-xl transition duration-300 hover:scale-105">
                            <Logo />
                        </Link>
                    </div>
    );
};

export default NavbarStart;