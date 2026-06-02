import { BsArrowUpRightCircleFill } from 'react-icons/bs';

const PrimaryButton = ({ buttonStyle = '', buttonText = 'Click Me', arrowStyle = '', isArrow = true }) => {
    return (
        <div className="flex justify-center items-center gap-0">
            <button type="button" className={`${buttonStyle} dual-side-clear-animation bg-primary font-bold cursor-pointer`
            }>
                <span className="relative z-10">{buttonText}</span>
            </button>
            <BsArrowUpRightCircleFill className={`${arrowStyle} ${isArrow ? 'block' : 'hidden'} rounded-full cursor-pointer transition-all duration-300 hover:outline-primary outline-3 outline-transparent`} />
        </div>
    );
};

export default PrimaryButton;