import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FaAngleRight } from "react-icons/fa";
import { URL_PANIER } from "../../shared/constants/urls/urlConstants";

export default function SideBar() {
  //Cidessous les datas qui permettrons d'afficher les filtres au click 

  const [showPrice, setShowPrice] = useState(true);
  const [showManufacture, setShowManufacture] = useState(true);
  // const [showCategories, setShowCategories] = useState(true);
  const [checked, setChecked] = useState([]);
  const [value, setValue] = useState([]);


  const handleFilter = (id) => {
    console.log(id)
  }

  const handleChange = (item) => {
    if (item.target.checked) {
      handleFilter(item.target.value)
      setChecked([...checked, item.target.value])
    } else {
      setChecked(checked.filter((id) => id !== item.target.value));
    }
    const str = checked.join(item.id)
    setValue(str)
  };


  return (
    <div className='flex flex-col py-8 bg-primary-100 w-96'>
      <form className="flex justify-center w-84">
        {/* ici l'input contenant le petit icone loupe donc tout le form */}
        <div class="relative text-gray-600 ">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 20l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </span>
          <input type="search" name="q" class="py-2 text-sm text-black bg-white rounded-md pl-10 w-80 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Filtres..." autocomplete="off" />
        </div>
      </form>
      <form>
        {/* Ci dessous les deux button en dessous de l'input */}
        <div className="flex flex-row justify-between pl-1 pr-2 pt-4 pb-10">
          <div>
            <button className="text-white text-xl">Filtres</button>
          </div>
          <div>
            <button className="text-white text-xl">Supprimer les filtres</button>
          </div>
        </div>
        <div>
          {/* Ci dessous il y a la petite fonctionnalité qui permet d'afficher au click les 2 check box ce pendant la flèche ne change pas de direction , display : showPrice ? = si  : = sinon 
         */}
          <div className="flex flex-row justify-between pb-4">
            <p className="text-white pl-2 text-xl">PRIX</p>
            <button className="" onClick={() => setShowPrice((s) => !s)}>
              <div className="pr-28">
                {/* <FaAngleRight className="pr-1 text-4xl text-transparent text-white " target="blank" /> */}
              </div>
            </button>
          </div>
          <hr className="left-2 w-60 m-2 border-2 border-solid  bg-white" />
          {/* ici tout est une suite logique tout est la même chose cependant il n'y apas le responsive car on ne sait toujours pas pour la boutique comment afficher le filtre ou non sinon il y aurait 2 menus burger ce qui ne va pas  */}
          <div style={{ display: showPrice ? "block" : "none" }}>
            <div className="flex flex-col ">
              <label className="flex flex-row items-center pl-3">
                <input
                  id="descending"
                  onChange={handleChange}
                  type="checkbox"
                />
                <p className="text-white pl-4 text-xl">Prix Décroissant</p>
              </label>
              <label className="flex flex-row items-center pt-2 pl-3">
                <input
                  type="checkbox"
                  onChange={handleChange}

                  id="ascending"
                />
                <p className="text-white pl-4 text-xl">Prix Croissant</p>
              </label>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between pt-4 pb-4">
              <p className="text-white pl-2 text-xl">FABRICANTS</p>
              <button className="pr-28" onClick={() => setShowManufacture((s) => !s)}>
                {/* <FaAngleRight className=" text-4xl text-white" target="blank" /> */}
              </button>
            </div>
            <hr className="left-2 w-60  m-2 border-2 border-solid bg-white " />
            <div style={{ display: showManufacture ? "block" : "none" }}>
              <div className="flex flex-col">
                <label className="flex flex-row items-center pt-2 pl-3">
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    id="bandai"
                  />
                  <p className="text-white pl-4 text-xl">Bandaï</p>
                </label>
                <label className="flex flex-row items-center pt-2  pl-3">
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    id="gundam"
                  />
                  <p className="text-white pl-4 text-xl">Gundam</p>
                </label>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <p className="text-white pl-2 pb-4 pt-4 text-xl">CATEGORIES</p>
            </div>
            <hr className="left-2 w-60  m-2 border-2 border-solid bg-white " />
            <div className="flex flex-col">
              <label className="flex flex-row items-center pt-2 pl-3">
                <input
                  onChange={handleChange}
                  type="checkbox"
                  id="figurines"
                />
                <p className="text-white pl-4  text-xl">Figurines</p>
              </label>
              <label className="flex flex-row items-center pt-2 pl-3" >
                <input
                  type="checkbox"
                  onChange={handleChange}
                  id="models"
                />
                <p className="text-white pl-4 text-xl">Maquettes</p>
              </label>
              <label className="flex flex-row items-center pt-2 pl-3"  >
                <input
                  onChange={handleChange}
                  type="checkbox"
                  id="anim"
                />
                <p className="text-white pl-4 text-xl">Animés</p>
              </label>
              <label className="flex flex-row items-center pt-2 pl-3" >
                <input
                  type="checkbox"
                  onChange={handleChange}
                  id="textiles"
                />
                <p className="text-white pl-4 text-xl">Textiles</p>
              </label>
              <label className="flex flex-row items-center pt-2 pb-4 pl-3" >
                <input
                  type="checkbox"
                  onChange={handleChange}
                  id="poster"
                />
                <p className="text-white pl-4 text-xl">Posters</p>
              </label>
            </div>
            <hr className="left-2 w-60 m-2 border-2 border-solid bg-white" />
            <div className="flex flex-col">
              <label className="flex flex-row items-center pt-2 pl-3 "  >
                <input
                  onChange={handleChange}
                  type="checkbox"
                  id="promotions"
                />
                <p className="text-white pl-2 text-xl">PROMOTIONS</p>
              </label>
              <label className="flex flex-row items-center pl-3 pt-2 pb-2" >
                <input
                  type="checkbox"
                  onChange={handleChange}
                  id="new"
                />
                <p className="text-white pl-2 pb-2 text-xl">NOUVEAUTES</p>
              </label>
            </div>
            <hr className="left-2 w-60 m-2 border-2 border-solid bg-white" />
            <div className="flex flex-col justify-between">
              <p className="text-white pt-3 pb-2 pl-3 text-xl">MA LISTE D'ENVIES</p>
              <p className="text-white pt-2 pb-3 pl-3 text-xl">MES COMMANDES</p>
            </div>
            <hr className="left-2 w-60 m-2 border-2 border-solid bg-white " />
            <Link to={URL_PANIER}>
              <button className="btn-form">
                <p className="btn-form-text">Ajouter au Panier</p>
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>);


}
