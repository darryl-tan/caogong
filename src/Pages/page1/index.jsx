
import React from 'react';
import Header from '../Header/Header.jsx';
import Banner from '../Banner/Banner.jsx';
import Body from '../Body/body.jsx';
import Product from '../Product/Product';
import Equipment from '../Equipment/Equipment.jsx';
import News from '../News/news.jsx'
import Connect from '../Connect/connect.jsx'
import Bottom from '../Bottom/bottom.jsx'

function index() {
  return (
    <div>
        {/* <Header></Header> */}
        <Banner></Banner>
        <Body></Body>
        <Product></Product>
        <Equipment></Equipment>
        <News></News>
        <Connect></Connect>
        <Bottom></Bottom>
      </div>
  )
}

export default index
