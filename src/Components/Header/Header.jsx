import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../imgs/logo7.png'
import '../Header/header.css'
import { Link } from 'react-router-dom';
import { LoginUserContext } from '../../App';


const Header = () => {
    const [loginUser, setLoginUser]= useContext(LoginUserContext);
    const {name}= loginUser;
    
    return (
        <>
        <div className='lg:flex justify-around pt-5 max-sm:flex bg-green-300'>
            <div className='h-auto w-16 mr-96 -mt-5'><img src={Logo}/>
            </div>
            <div className=''>
                
                <div className='lg:ml-96'>
                <FontAwesomeIcon icon={faCartShopping}/>
                {
                    loginUser.email? <p>Hello {name}</p> :
                    <><Link to='/login' className='pl-3'><button>Login</button></Link>
                    <button className='ml-3 bg-blue-700 hover:bg-blue-500 text-white py-1 px-2 rounded-full'>Sign up</button>
                    </>
                }
                </div>
            </div>
        </div>
        </>
    );
};

export default Header;