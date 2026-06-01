
import Links from '../links/Links';

const NavbarCenter = () => {
    return (
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium text-base text-[#606060] gap-2 md:gap-1">
                {
                    <Links />
                }
            </ul>
        </div>
    );
};

export default NavbarCenter;