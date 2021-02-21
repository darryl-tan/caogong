import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'
import banner1 from '../../Assets/banner1.jpg';
import banner2 from '../../Assets/banner2.jpg';
import banner3 from '../../Assets/banner1.jpg';
// const banner2 = require('../../Assets/banner2.jpg')
// const banner3 = require('../../Assets/banner1.jpg')

class Banner extends Component {
  render() {
    return (
        <div className="box1">
            <Carousel
                showArrows={true}
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                stopOnHover={true}
                getVariableItemHeight={400}
                thumbWidth={100}
                transitionTime={200}
                //dynamicHeight={100}
                //width={1250}
                
                
            >
            <div>
                <img src={banner1} alt=""/>
                {/* <p className="legend">无线充</p> */}
            </div>
            <div>
                <img src={banner2} />
                
            </div>
            <div>
                <img src={banner3} />
                
            </div>
        </Carousel>

        </div>
    );
}
}

export default Banner;