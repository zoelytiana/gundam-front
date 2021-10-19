import React from 'react'
import { Link } from 'react-router-dom';
import { URL_HOME, URL_CONTACT } from '../../shared/constants/urls/urlConstants';

import teteGundam from '../../assets/images/tete-gundam.png';
import MasterCard from '../../assets/images/mode-de-paiement_0002_Calque1.jpg';
import Paypal from '../../assets/images/mode-de-paiement_0001_Calque2.jpg';
import Visa from '../../assets/images/mode-de-paiement_0000_Calque3.jpg';

import '../../assets/styles/footer.css'

import { Formik, Form, Field } from 'formik';
import { defaulValuesNewsLetter } from './../../shared/constants/formik-yup/default-values-form/idefaultValuesNewsLetter';
import { schemaFormNewsLetter } from './../../shared/constants/formik-yup/yup/yupNewsLetter';
import ErrorMessSmall from './../../shared/components/form-and-error-components/ErrorMessSmall';
import { CustomInput } from '../../shared/components/form-and-error-components/InputCustom';
import { URL_CGU } from '../../shared/constants/urls/urlConstants';

const Footer = (props) => {
    return (
        <footer className="w-full">
            <div className="max-w-7xl mx-auto">
                <div className="sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col cadreLogo">
                        <Link to={URL_HOME}>
                            <div className="FooterLogo">
                                <img src={teteGundam} alt="Tête de gundam"/>
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-col FooterCadreLi1">
                        <span className="FooterTitre font-bold text-white uppercase md:mt-0 mb-2 font-bold">Nos produits</span>
                        <FooterBtnProduit/>
                    </div>
                    <div className="flex flex-col FooterCadreLi2">
                        <span className="FooterTitre font-bold text-white uppercase md:mt-0 mb-2 font-bold">Notre société</span>
                        <FooterBtnSociete/>
                    </div>
                    <div className="flex flex-col FooterCadreLi3">
                        <span className="FooterTitre font-bold text-white uppercase md:mt-0 mb-2 font-bold">Votre compte</span>
                        <FooterBtnCompte/>
                    </div>
                    <div className="flex flex-col FooterCadreNews">
                        <span className="FooterTitre font-bold text-white uppercase md:mt-0 mb-2 font-bold px-2">INSCRIPTION À LA NEWSLETTER</span>
                        <span className="my-2 text-white text-1xl px-2">Pour tout savoir sur les évènements à venir,
                                                                   les arrivages de nouveautés, les exclusivités ! 
                                                                   Vous pouvez vous désinscrire à tout moment.</span>
                        <span className="my-2 px-2">
                            <FormLogin {...props} />
                        </span>
                        <span className="flex m-auto flex-wrap">
                            <img className="px-1" src={Visa} alt="Tête de gundam"/>
                            <img className="px-1" src={MasterCard} alt="Tête de gundam"/>
                            <img className="px-1" src={Paypal} alt="Tête de gundam"/>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const FormLogin = ({ submit, errorLog }) => (
    <Formik initialValues={defaulValuesNewsLetter} onSubmit={submit} validationSchema={schemaFormNewsLetter}>
    <Form>
        <Field type="email" name="email" placeholder="Votre adresse email" 
        component={ CustomInput } className='rounded-none' noError/>
        { errorLog && <ErrorMessSmall middle message="Login/Password incorrect(s)" /> }
    </Form>
    </Formik>
)


export default Footer

const FooterBtnProduit = () => {
    return (
        <>
            <Link to="/Boutique?categorie=Jeux-Video">
                <div className='block lg:mt-0 text-white mr-4 link'>
                    Jeux Vidéo
                </div>
            </Link>
            <Link to="/Boutique?categorie=Figurines">
                <div className='block lg:mt-0 text-white mr-4 link'>
                    Figurines
                </div>
            </Link>
            <Link to="/Boutique?categorie=Poster">
                <div className='block lg:mt-0 text-white mr-4 link'>
                    Poster
                </div>
            </Link>
            <Link to="/Boutique?categorie=Textiles">
                <div className='block lg:mt-0 text-white mr-4 link'>
                    Textiles
                </div>
            </Link>
            <Link to="/Boutique?categorie=Maquettes">
                <div className='block lg:mt-0 text-white mr-4 link'>
                    Maquettes
                </div>
            </Link>
        </>
    )
}
const FooterBtnSociete = () => {
    return (
        <>
            <Link to="">
                <div className='block lg:mt-0 text-white mr-4 link'>
                    À propos
                </div>
            </Link>
            <Link to="">
                <div className='block lg:mt-0 text-white mr-4 link'>
                    Mentions-légales
                </div>
            </Link>
            <Link to={URL_CGU}>
                <div className='block lg:mt-0 text-white mr-4 link'>
                    Conditions d'utilisations
                </div>
            </Link>
            <Link to="">
                <div className='block lg:mt-0 text-white mr-4 link'>
                    Paiement sécurisé
                </div>
            </Link>
            <Link to="">
                <div className='block lg:mt-0 text-white mr-4 link'>
                    Livraison & retour
                </div>
            </Link>
            <Link to={URL_CONTACT}>
                <div className='block lg:mt-0 text-white mr-4 link'>
                    Contactez-nous
                </div>
            </Link>
        </>
    )
}
const FooterBtnCompte = () => {
    return (
        <>
            <Link to="">
                <div className='block lg:mt-0 text-white mr-4 link'>
                    Informations personnelles
                </div>
            </Link>
            <Link to="">
                <div className='block lg:mt-0 text-white mr-4 link'>
                    Retour produits
                </div>
            </Link>
            <Link to="">
                <div className='block lg:mt-0 text-white mr-4 link'>
                    Commandes
                </div>
            </Link>
            <Link to="">
                <div className='block lg:mt-0 text-white mr-4 link'>
                    Adresses
                </div>
            </Link>
        </>
    )
}
