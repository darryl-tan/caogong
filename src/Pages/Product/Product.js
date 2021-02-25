import './Product.css'
import React, { Component, memo, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { Tabs } from 'antd';
import product1 from "../../Assets/productone.png";


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Demo = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="无线充" key="1">
      <div onClick={() => { console.log("1") }} className="product1box">
        <div onClick={() => { console.log("1") }} className="product1box">
          <img src={product1} alt="无线充" className="product1" />
        </div>
        <div onClick={() => { console.log("1") }} className="product1box">
          <img src={product1} alt="无线充" className="product1" />
        </div>
        <div onClick={() => { console.log("1") }} className="product1box">
          <img src={product1} alt="无线充" className="product1" />
        </div>
        <div onClick={() => { console.log("1") }} className="product1box">
          <img src={product1} alt="无线充" className="product1" />
        </div>
      </div>

    </TabPane>
    <TabPane tab="快充" key="2">
      <div onClick={() => { console.log("1") }}>
        <img src={product1} alt="无线充" className="product1" />

      </div>
    </TabPane>
    {/* <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane> */}
  </Tabs>
);

export class product extends Component {


  render() {

    return (
      <div className="product">
        <div className="productson">
          <div className="productshow">
            <p>PRODUCT SHOW</p>
            <p>产品展示</p>

          </div>
          <Demo />

        </div>
      </div>

    )
  }


}


export default product
