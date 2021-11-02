import React from 'react'

const HomeView = () => {
    return (
        <div className="container">
            <div className="max-w-7xl px-4 mx-auto">
                <div className="btn-form">
                    <button><div className="btn-form-text">HOME</div></button>
                </div>
                <input className="input" type="text" id="name" placeholder="Test Input Style" />
                <input className="input-error" type="text" id="name" placeholder="Test Input Style" />
                <div>
                    <input className="checkbox" type="checkbox" id="scales" name="scales" />

                    <label for="scales">Scales</label>
                </div>
                <div className="box-product-bottom">
                    <div className="box-product">
                        <img src="https://img.gaming.gentside.com/article/gundam/figurine-zgmf-x10a-freedom-gundam-171625-de-bandai-hobby_15217190da05576a7ea2c0093582f87ff78d72cf.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeView
