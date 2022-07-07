import React, { Component } from 'react'
import './BaiTapChonXeNangCao.css'
import dataFeature from '../data/arrayFeatures.json'
import dataWheels from '../data/wheels.json'


export default class BaiTapChonXeNangCao extends Component {

    //tạo ra state chứa thông tin xe thay đổi 
    state = {
        carCurrent: {
            "id": 1,
            "title": "Crystal Black",
            "type": "Pearl",
            "img": "./images/icons/icon-black.jpg",
            "srcImg": "images-black/images-black-1/",
            "color": "Black",
            "price": "19,550",
            "engineType": "In-Line 4-Cylinder",
            "displacement": "1996 cc",
            "horsepower": "158 @ 6500 rpm",
            "torque": "138 lb-ft @ 4200 rpm",
            "redline": "6700 rpm",
            "wheels": [
                {
                    "idWheel": 1,
                    "srcImg": "images-black/images-black-1/"
                },
                {
                    "idWheel": 2,
                    "srcImg": "images-black/images-black-2/"
                },
                {
                    "idWheel": 3,
                    "srcImg": "images-black/images-black-3/"
                }
            ]
        }
    }
    renderCar = (newCar) => {
        this.setState({
            carCurrent: newCar
        })
    }
    renderIcons = () => {
        return dataFeature.map((item, index) => {
            return <div className='row mt-1 m-3 border border-color-default' key={index} style={{ cursor: 'pointer' }} onClick={() => { this.renderCar(item) }}>
                <div className='col-2'>
                    <img className='p-1' style={{ width: '100%' }} src={item.img} alt={item.id} />
                </div>
                <div className='col-10'>
                    <h3 >{item.title}</h3>
                    <p>{item.type}</p>
                </div>
            </div>
        })
    }
    changeWheel =(newWheel) => {
        //Tìm trong sate hiện tại {thí.state.cảcurrent.wheel}
        let objWheel = this.state.carCurrent.wheels.find(item => item.idWheel === newWheel.idWheel);
        if(objWheel !== -1) {
            this.setState({
                carCurrent:{...this.state.carCurrent, srcImg: objWheel.srcImg} //gans lại giá trị bằng chính nó, nếu có thuộc tính rồi thì nó gán lại giá trị mới
            })
        }
    }

    renderWheels = () => {
        return dataWheels.map((item, index) => {
            return <div style={{cursor: "pointer"}} className='row mt-1 m-3 border border-color-default' key={index} onClick={()=>{this.changeWheel(item)}}>
                <div className='col-2'>
                    <img className='p-1' style={{ width: '100%' }} src={item.img} alt={item.id} />
                </div>
                <div className='col-10 d-flex align-items-center'>
                    <span >{item.title}</span>
                </div>
            </div>
        })
    }


    //lìfe Cycle
    //gọi phương thức này ra để đưa thư viện script vào mỗi lần được render(), vì nếu đưa script trực tiếp vào thì nó chỉ chạy 1 lần mà thôi
    componentDidMount = () => {
        // Đây là phước thức cón sắn của compoent tự động thực thi sau khi render được gọi, lưu ý componentDidMount chỉ chạy 1 lần đầu sau khi render thực thi
        let tagScript = document.createElement('script');

        tagScript.src = "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.7.1/js-cloudimage-360-view.min.js";

        document.querySelector('#appendScript').appendChild(tagScript);
    }

    componentDidUpdate = () => {
        //Hàm này chạy sau khi state thay đổi (Tự kích hoạt sau render), đây là hàm có sẵn
        //Lưu ý khôgn được phép setState tại component này vì infinite loop

        //Clear old image   
        document.querySelector('#carCurrent').innerHTML = '';

        let tagScript = document.createElement('script');
        tagScript.src = "https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.yall.min.js";

        // Clear old script before appending new script from liberary
        document.querySelector('#appendScript').innerHTML = '';
        document.querySelector('#appendScript').appendChild(tagScript);
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row text-left'>
                        <div className='col-6'>
                            <div className='model' style={{width: "100%"}}>
                                {/* <img style={{ width: "100%" }} src="./images/images-silver/images-silver-1/civic-1.jpg" alt='' /> */}

                                <div style={{ minWidth: '100%' }} id="carCurrent" className="cloudimage-360" data-folder={"./images/" + this.state.carCurrent.srcImg} data-filename="civic-{index}.jpg" data-amount={8}></div>
                            </div>
                            <div id='appendScript'>
                            </div>
                            <div className="card mt-2">
                                <h3 className='card-header'>Exterior Colors</h3>
                                <table className="table border border-color-light" border="1">
                                    <thead>
                                        <tr>
                                            <td>Color</td>
                                            <td>Black</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>199</td>
                                        </tr>
                                        <tr>
                                            <td>Engine Type</td>
                                            <td>In-line-4-cylinder</td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                        </div>
                        <div className='col-6'>
                            <div className="card">
                                <h5 className="card-header">Exterior color</h5>
                                <div className='container-fluid'>
                                    {this.renderIcons()}
                                </div>
                            </div>
                            <div className="card">
                                <h5 className="card-header">Wheels</h5>

                                <div className='container-fluid'>
                                    {this.renderWheels()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
