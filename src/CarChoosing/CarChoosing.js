import React, { Component } from 'react'

export default class CarChoosing extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row text-left'>
                    <div className='col-7'>
                        <img style={{ width: "100%" }} src={require('../assets/CarBasic/products/black-car.jpg')} alt="Black-car" />
                    </div>
                    <div className='col-5'>
                        <div className="card text-dark">
                            <div className='card-header text-primary font-weight-bold'>Exterior color</div>
                            <div className="card-body">
                                <div className='row border border-link pt-2 pb-2 mt-2' onClick={() => { }} style={{ cursor: "pointer" }}>
                                    <img className="col-2" src={require("../assets/CarBasic/icons/icon-black.jpg")} alt="black-icon" />
                                    <div className='col-10'>
                                        <h3>Crystal Black</h3>  
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className='row border border-link pt-2 pb-2 mt-2' onClick={() => { }} style={{ cursor: "pointer" }} >
                                    <img className="col-2" src={require("../assets/CarBasic/icons/icon-steel.jpg")} alt="steel-icon" />
                                    <div className='col-10'>
                                        <h3>Modern Steel</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className='row border border-link pt-2 pb-2 mt-2' onClick={() => { }} style={{ cursor: "pointer" }}>
                                    <img className="col-2" src={require("../assets/CarBasic/icons/icon-silver.jpg")} alt="silver-icon" />
                                    <div className='col-10'>
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className='row border border-link pt-2 pb-2 mt-2' onClick={() => { }} style={{ cursor: "pointer" }}>
                                    <img className="col-2" src={require("../assets/CarBasic/icons/icon-red.jpg")} alt="red-icon" />
                                    <div className='col-10'>
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}
