import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { URL_HOME, URL_LOGIN, URL_REGISTER, URL_BOUTIQUE, URL_ENVIE, URL_PRESENTATION } from './../../shared/constants/urls/urlConstants';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLogged, signOut } from './../../shared/redux-store/authenticationSlice';

const Navbar = () => {
    const history = useHistory()
    return (
        <nav className="top-0 fixed z-50 w-full bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="logo" onClick={history.push(URL_HOME)}>
                        <i>GunDam Shop</i>
                    </div>

                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <MenuBtn/>
                    </div>

                    <div className="flex items-center justify-end flex-1 lg:w-0">
                        <ConnectionBtn/>
                    </div>

                </div>

            </div>
        </nav>
    )
}

export default Navbar

const MenuBtn = () => {
    return (
        <div className="text-sm lg:flex-grow">
            <Link to={URL_PRESENTATION}>
                <div className='block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 float-left link'>
                    Presentation
                </div>
            </Link>
            <Link to={URL_BOUTIQUE}>
                <div className='block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 float-left link'>
                    Boutique
                </div>
            </Link>
            <Link to={URL_ENVIE}>
                <div className='block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 float-left link'>
                    Liste d'envie
                </div>
            </Link>
        </div>
    )
}

const ConnectionBtn = () => {
    const isLogged = useSelector(selectIsLogged)
    const dispatch = useDispatch()
    if(isLogged)
    return(
        <button className="ml-8 btn btn-green" onClick={() => dispatch(signOut())}>
            Sign out
        </button>
    )
    else return(
        <>
            <Link to={URL_LOGIN}>
                <div className='link'>
                    Sign in
                </div>
            </Link>
            <Link to={URL_REGISTER}>
                <button className="ml-8 btn btn-green">
                    Sign up
                </button>
            </Link>
        </>
    )
}