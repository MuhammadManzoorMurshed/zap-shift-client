import { NavLink } from 'react-router-dom';

const Links = () => {
    return (
        <>
            <li className="border border-transparent rounded-md transition-all duration-300 hover:scale-105 hover:border-primary">
                <NavLink
                    to={'/'}
                    className={({ isActive, isPending }) =>
                        isPending ?
                            'opacity-60'
                            : isActive ?
                                'bg-primary/30 font-bold'
                                : ""
                    }>
                    Home
                </NavLink>
            </li>
            <li className="border border-transparent rounded-md transition-all duration-300 hover:scale-105 hover:border-primary">
                <NavLink
                    to={'/services'}
                    className={({ isActive, isPending }) =>
                        isPending ?
                            'opacity-60'
                            : isActive ?
                                'bg-primary/30 font-bold border-none'
                                : ""
                    }>
                    Services
                </NavLink>
            </li>
            <li className="border border-transparent rounded-md transition-all duration-300 hover:scale-105 hover:border hover:border-primary">
                <NavLink
                    to={'/coverage'}
                    className={({ isActive, isPending }) =>
                        isPending ?
                            'opacity-60'
                            : isActive ?
                                'bg-primary/30 font-bold rounded-md'
                                : ""
                    }>
                    Coverage
                </NavLink>
            </li>
            <li className="border border-transparent rounded-md transition-all duration-300 hover:scale-105 hover:border hover:border-primary">
                <NavLink
                    to={'/pricing'}
                    className={({ isActive, isPending }) =>
                        isPending ?
                            'opacity-60'
                            : isActive ?
                                'bg-primary/30 font-bold rounded-md'
                                : ""
                    }>
                    Pricing
                </NavLink>
            </li>
            <li className="border border-transparent rounded-md transition-all duration-300 hover:scale-105 hover:border hover:border-primary">
                <NavLink
                    to={'/be-a-rider'}
                    className={({ isActive, isPending }) =>
                        isPending ?
                            'opacity-60'
                            : isActive ?
                                'bg-primary/30 font-bold rounded-md'
                                : ""
                    }>
                    Be a Rider
                </NavLink>
            </li>
            <li className="border border-transparent rounded-md transition-all duration-300 hover:scale-105 hover:border hover:border-primary">
                <NavLink
                    to={'about-us'}
                    className={({ isActive, isPending }) =>
                        isPending ?
                            'opacity-60'
                            : isActive ?
                                'bg-primary/30 font-bold rounded-md'
                                : ""
                    }>
                    About Us
                </NavLink>
            </li>
        </>
    );
};

export default Links;