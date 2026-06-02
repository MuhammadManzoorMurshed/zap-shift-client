
const SecondaryButton = ({buttonStyle = '', buttonText = 'Click Me'}) => {
    return (
        <button type="button" className={`${buttonStyle} dual-side-fill-animation outline outline-primary cursor-pointer font-normal text-base`}>
            <span>{buttonText}</span>
        </button>
    );
};

export default SecondaryButton;