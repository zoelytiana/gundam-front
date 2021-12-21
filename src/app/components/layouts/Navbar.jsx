import React from 'react'
import { Link } from 'react-router-dom';
import { URL_HOME, URL_LOGIN, URL_REGISTER, URL_BOUTIQUE, URL_PROMOTION, URL_ENVIE, URL_PRESENTATION, URL_CONTACT, URL_ACCOUNT } from './../../shared/constants/urls/urlConstants';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLogged, signOut } from './../../shared/redux-store/authenticationSlice'; ''
import logo from './../../assets/images/gundam_logo_v2.png'
import cart from './../../assets/images/shopping-cart-solid.svg'
import search from './../../assets/images/search-solid.svg'


const Navbar = () => {
    return (
        <nav className="top-0 fixed z-50 w-full bg-primary-100 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center md:space-x-10">
                    <Link to={URL_HOME}>
                        <div className="logo">
                            <img src={logo} alt ="gundam"/>
                        </div>
                    </Link>
                    <div className=" h-40 flex flex-col justify-between">
                        <div className="content-center">
                            <div className="flex text-white items-center justify-end flex-1">
                                <ConnectionBtn/>
                            </div>
                    </div>
                        <div className="flex flex-row-reverse space-x-4 space-x-reverse">
                            <img className="w-10" src={cart} alt = "Cart"/>
                            <img className="w-10" src={search} alt ="Search"/>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-white my-1"></div>

                <div className="flex justify-between items-center">
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <MenuBtn/>
                    </div>

                    
                    <div className="flex items-center justify-end flex-1 lg:w-0">
                        <MenuContact/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

const MenuBtn = () => {
    return (
        <div className="uppercase text-white font-bold text-sm lg:flex-grow">
            <Link to={URL_PRESENTATION}>
                <div className='block lg:inline-block text-white lg:mt-0 hover:text-white mr-4 float-left link'>
                    Presentation
                </div>
            </Link>
            <Link to={URL_BOUTIQUE}>
                <div className='block lg:inline-block lg:mt-0 text-white hover:text-white mr-4 float-left link'>
                    Boutique
                </div>
            </Link>
            <Link to={URL_PROMOTION}>
                <div className='block lg:inline-block lg:mt-0 text-white hover:text-white mr-4 float-left link'>
                    Promotion
                </div>
            </Link>
            

        </div>
    )
}

const ConnectionBtn = () => {
    const isLogged = useSelector(selectIsLogged)
    console.log('islogged :',isLogged)
    const dispatch = useDispatch()
    if(isLogged)
    return(
        <>


        <button className="ml-8 btn btn-green" onClick={() => dispatch(signOut())}>
            Sign out
        </button>
        </>
    )
    else return(
        <>
            <Link to={URL_LOGIN}>
                <div className='link text-white'>
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

const MenuContact = () => {
    const isLogged = useSelector(selectIsLogged)
    console.log('islogged :',isLogged)
    const dispatch = useDispatch()
    if(isLogged)
    return (
        <>

        <Link to={URL_ACCOUNT}>
                <div className='link text-white px-4 hover:text-white'>
                    Mon compte
                </div>
        </Link>
            <Link to={URL_ENVIE}>
            <div className='block lg:inline-block lg:mt-0 text-white hover:text-white mr-4 float-left link'>
                Liste d'envie
            </div>
            </Link>
            <Link to={URL_CONTACT}>
            <div className='block lg:inline-block lg:mt-0 text-white hover:text-white mr-4 float-left link'>
                Contact
            </div>
            </Link>
        </>
    ) 
    else return(
        <Link to={URL_CONTACT}>
            <div className='block lg:inline-block lg:mt-0 text-white hover:text-white mr-4 float-left link'>
                Contact
            </div>
        </Link>
    )
}