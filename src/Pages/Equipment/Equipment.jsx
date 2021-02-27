import React from 'react';
import './Equipment.css';
import equipment1 from "../../Assets/shebei1.jpg";
import equipment2 from "../../Assets/shebei2.png";
import equipment3 from "../../Assets/shebei3.png";
import equipment4 from "../../Assets/shebei4.png";
import equipment5 from "../../Assets/shebei5.png";
import equipment6 from "../../Assets/shebei6.jpg";
const Equipment = () => {
    return (
        <div className="equipment">
            <div className="equipmentson">
                <div className="equipmentshow">
                    <p>PLANT AND EQUIPMENT</p>
                    <p>厂房设备</p>
                </div>
                <div className="eqimgbox">
                    <div className="eqimgboxson">
                        <img src={equipment1} alt="" className="eqimg"/>
                        <p>SMT贴片车间</p>
                    </div>
                    <div className="eqimgboxson">
                        <img src={equipment2} alt="" className="eqimg"/>
                        <p>SMT车间</p>
                    </div>
                    <div className="eqimgboxson">
                        <img src={equipment3} alt="" className="eqimg"/>
                        <p>SMT贴片加工车间</p>
                    </div>
                </div>
                <div className="eqimgbox">
                    <div className="eqimgboxson">
                        <img src={equipment4} alt="" className="eqimg"/>
                        <p>波峰焊</p>
                    </div>
                    <div className="eqimgboxson">
                        <img src={equipment5} alt="" className="eqimg"/>
                        <p>后焊车间</p>
                    </div>
                    <div className="eqimgboxson">
                        <img src={equipment6} alt="" className="eqimg"/>
                        <p>后焊</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Equipment;