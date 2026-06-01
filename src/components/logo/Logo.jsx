import logoImage from './../../assets/logo.png';

const Logo = () => {
    return (
        <div className='flex justify-center items-end'>
            <img src={logoImage} alt="" />
            <span className='-ml-3'>ZapShift</span>
        </div>
    );
};

export default Logo;