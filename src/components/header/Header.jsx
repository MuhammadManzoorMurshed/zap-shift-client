
import { FaSignInAlt } from "react-icons/fa";
import NavbarStart from "./navbar-start/NavbarStart";
import NavbarCenter from "./navbar-center/NavbarCenter";
import PrimaryButton from "../primary-button/PrimaryButton";
import SecondaryButton from "../secondary-button/SecondaryButton";

const Header = () => {

    return (
        <div className="navbar py-5 md:p-5 bg-white shadow-sm mt-8 rounded-2xl max-w-360 w-full mx-auto">
            <NavbarStart />
            <NavbarCenter />

            <div className="navbar-end gap-3 sm:gap-4 flex-col sm:flex-row items-end">
                <div className="flex justify-end items-center gap-4">
                    <FaSignInAlt className="hidden lg:block xl:hidden w-7 h-7 text-primary transition duration-300 hover:scale-105" />

                    <PrimaryButton buttonStyle={'sm:hidden lg:block xl:hidden px-4 py-1 sm:px-8 sm:py-4 lg:px-4 lg:py-1 xl:px-8 xl:py-4 rounded-xl text-base sm:text-[20px]'} buttonText={'Be a Rider'} isArrow={false}/>
                </div>

                <SecondaryButton buttonStyle={'px-4 sm:px-6 sm:py-3 md:px-6 lg:px-8 lg:py-4 sm:font-bold sm:text-[20px] lg:hidden xl:block rounded-xl'} buttonText={'Sign In'} />

                <PrimaryButton buttonStyle={'hidden sm:block lg:hidden xl:block px-4 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-xl text-[20px]'} buttonText={'Be a Rider'} arrowStyle={'hidden md:block lg:hidden xl:block w-15 h-15 md:w-13 md:h-13 lg:w-15 lg:h-15'} isArrow={false} />
            </div>
        </div>
    );
};

export default Header;