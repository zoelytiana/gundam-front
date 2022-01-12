import React from 'react'
import { Link } from 'react-router-dom';
import { URL_HOME, URL_LOGIN, URL_REGISTER, URL_BOUTIQUE, URL_PROMOTION, URL_ENVIE, URL_PRESENTATION, URL_CONTACT, URL_ACCOUNT, URL_PANIER } from './../../shared/constants/urls/urlConstants';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLogged, signOut } from './../../shared/redux-store/authenticationSlice'; ''
import logo from './../../assets/images/gundam_logo_v3.png'
import cart from './../../assets/images/shopping-cart-solid.svg'
import search from './../../assets/images/search-solid.svg'


const Navbar = () => {
    const panier = JSON.parse(localStorage.getItem('Cart'));
    let nbProduit = 0
    console.log("panier", panier)
    if (panier!==null){
        nbProduit = panier.length
    }
    return (
        <nav className="top-0 fixed z-50 w-full bg-primary-100 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center md:space-x-10">
                    <Link to={URL_HOME}>
                        <div className="logo">
                            
                            <img className="w-auto xl:w-3/4 lg:w-1/2 md:w-1/4 sm:w-1/6" src={logo} alt ="gundam"/>
                        </div>
                    </Link>
                    <div className=" h-40 flex flex-col justify-between">
                        <div className="content-center">
                            <div className="flex text-white items-center justify-end flex-1">
                                <ConnectionBtn/>
                            </div>
                    </div>
                        <div className="flex flex-row-reverse space-x-4 space-x-reverse">
                            <Link to={URL_PANIER}>
                                <div className="text-white h-4 text-center text-xs">{nbProduit} produit(s)</div>
                                <div className=""><img className="w-10 m-auto" src={cart} alt = "Cart"/></div>
                            </Link>
                            <Link to={URL_PANIER}>
                                <div className="text-white h-4"></div>
                                <img className="w-10" src={search} alt ="Search"/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-white my-1"></div>

                <div className="flex justify-between">
                    <div className="w-1/4 block flex-grow lg:flex lg:items-center lg:w-auto">
                        <MenuBtn/>
                    </div>

                    
                    <div className="w-1/2 flex justify-end flex-1 lg:w-0">
                        <MenuContact/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

const MenuBtn = () => {

    const loadMenu = () => {
        document.getElementById("nav-content").classList.toggle("hidden");
    }

    return (

        <nav className="flex justify-start flex-wrap p-1 w-1/2 uppercase text-white font-bold text-sm lg:flex-grow">

            <div className="block lg:hidden">
                <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white" onClick={()=>loadMenu()}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>

            <div className=" flex-grow lg:flex lg:w-auto hidden pt-6 lg:pt-0" id="nav-content">
                <ul className="list-reset lg:flex flex-1">
                    <li className="mr-3">
                    <Link to={URL_PRESENTATION}>
                            <div className="block lg:inline-block text-white lg:mt-0 hover:text-white mr-4 link">
                                Presentation
                            </div>
                        </Link>
                    </li>
                    <li className="mr-3">
                    <Link to={URL_BOUTIQUE}>
                            <div className="block lg:inline-block lg:mt-0 text-white hover:text-white mr-4 link">
                                Boutique
                            </div>
                        </Link>
                    </li>
                    <li className="mr-3">
                    <Link to={URL_PROMOTION}>
                            <div className="block lg:inline-block lg:mt-0 text-white hover:text-white mr-4 link">
                                Promotion
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
</nav>       
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
                <button className="link text-white ml-8">
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
    const loadMenu2 = () => {
        document.getElementById("nav-content2").classList.toggle("hidden");
    }
   
    if(isLogged)
    return (
        <>
        <nav className="flex justify-end flex-wrap p-1 w-full text-white font-bold text-sm lg:flex-grow">

        <div className="block lg:hidden">
                <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white" onClick={()=>loadMenu2()}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>

            <div className="w-full flex-grow lg:flex lg:w-auto hidden pt-6 lg:pt-0" id="nav-content2">
                <ul className="list-reset lg:flex flex-1">
                <li className="mr-3">
                <Link to={URL_ACCOUNT}>
                        <div className='block lg:inline-block link text-white  mr-4 hover:text-white'>
                            Mon compte
                        </div>
                </Link>
                </li>
                <li className="mr-3">
                    <Link to={URL_ENVIE}>
                    <div className='block lg:inline-block lg:mt-0 text-white hover:text-white mr-4 link'>
                        Liste d'envie
                    </div>
                    </Link>
                </li>
                <li className="mr-3">
                    <Link to={URL_CONTACT}>
                    <div className='block lg:inline-block lg:mt-0 text-white hover:text-white mr-4 link'>
                        Contact
                    </div>
                    </Link>
                </li>
            </ul>
            </div>
    </nav> 
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


