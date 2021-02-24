import React, { Component } from "react";
import "./body.css";
import boximage1 from "../../Assets/company.png";
class body extends Component {
  render() {
    return (
      <div className="bodybox">
        <div className="bodybox1">
          <div className="bodyson1">
            <img src={boximage1} alt="无线充" className="bodyson1image" />
            <div className="bodyson1content">
              <p>无线充电器PCBA</p>
              <p>无线充电器PCBA</p>
              <p>无线充电器PCBA</p>
              <p>无线充电器PCBA</p>
            </div>
            <div className="bodyson1company">
              <p>深圳市XX有限公司</p>
            </div>
          </div>
          <div className="bodyson2">
            <div className="bodyson2div">
              <div className="bodyson2divson">
                <p>COMPANY PROFILE</p>
                <p>公司概况</p>
              </div>
              <p className="bodyson2divp">
              &nbsp;&nbsp;&nbsp;&nbsp;深圳市深普能电子有限公司位于深圳龙岗区南约高科大道万达工业园2栋。拥有四条全自动高速贴片线，主要机器为德国西门子，韩国三星，日本富士贴片机，全自动锡膏印刷机，上板机，取板机，AOI，后焊部还有波峰焊自动线一条等设备；工厂能贴装IC脚距在0.4MM精度的QFP、BGA、QFN等芯片，像元器件规格从0201、0402、1206及一些异形元件均能加工。
              </p>
              <p>
              &nbsp;&nbsp;&nbsp;&nbsp;为增强公司市场竟争力，公司又成立PCBA研发部，主要研发无线充电产品PCBA和无线解决方案，另外还供应电动开刷PCBA、手持风扇PCBA、面部美容仪/脸部按摩器PCBA、无线充电器PCBA、便携式电动搅拌杯/电动咖啡杯/充电式榨汁机杯PCBA及其它消费类电子PCBA...
              </p>
              <div className="detailbox">查看详情</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default body;
