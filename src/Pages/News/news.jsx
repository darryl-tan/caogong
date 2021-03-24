import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import "./news.css";

import banner1 from '../../Assets/partner.jpg';
import banner2 from '../../Assets/partner2.jpg';

class news extends Component {
  render() {
    return (
      <div className="newsbox">
        <div className="newsson">
          <div className="newsshow">
            <p>INDUSTRY NEWS</p>
            <p>行业新闻</p>
          </div>
          <div className="messagebox">
            <div className="newsmessage">
              <div className="newsmessagebox"></div>
              <p>TWS蓝牙耳机大爆发，为什么越来越多手机厂商都在做蓝牙耳机</p>
            </div>
            <div className="newsmessage">
              <div className="newsmessagebox"></div>
              <p>TWS蓝牙耳机大爆发，为什么越来越多手机厂商都在做蓝牙耳机</p>
            </div>
            <div className="newsmessage">
              <div className="newsmessagebox"></div>
              <p>TWS蓝牙耳机大爆发，为什么越来越多手机厂商都在做蓝牙耳机</p>
            </div>
            <div className="newsmessage">
              <div className="newsmessagebox"></div>
              <p>TWS蓝牙耳机大爆发，为什么越来越多手机厂商都在做蓝牙耳机</p>
            </div>
            <div className="newsmessage">
              <div className="newsmessagebox"></div>
              <p>TWS蓝牙耳机大爆发，为什么越来越多手机厂商都在做蓝牙耳机</p>
            </div>
            <div className="newsmessage">
              <div className="newsmessagebox"></div>
              <p>TWS蓝牙耳机大爆发，为什么越来越多手机厂商都在做蓝牙耳机</p>
            </div>
          </div>
          <div className="newsshow2">
            <p>Cooperative customers</p>
            <p>合作客户</p>
          </div>
          <div>
          <Carousel
                width={250}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                stopOnHover={true}
                getVariableItemHeight={200}
                thumbWidth={100}
                transitionTime={200}
                //dynamicHeight={100}
                //width={1250}    
            >
            <div className="partnerbox">
                <img src={banner1} alt=""  className="partnerboximg"/>

                {/* <p className="legend">无线充</p> */}
            </div>
            <div className="partnerbox">
                <img src={banner2} />

                
            </div>
            <div className="partnerbox">
                <img src={banner1} />

                
            </div>
          </Carousel>
          </div>

        </div>

      </div>
    );
  }
}

export default news;
