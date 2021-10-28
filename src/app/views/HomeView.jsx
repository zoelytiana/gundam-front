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
                    <input className="checkbox" type="checkbox" id="scales" name="scales"/>
                        
                    <label for="scales">Scales</label>
                </div>
            </div>
        </div>
    )
}

export default HomeView
