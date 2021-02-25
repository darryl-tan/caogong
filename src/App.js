import React, { Component } from 'react';
import Header from './Pages/Header/Header.jsx';
import Banner from './Pages/Banner/Banner.jsx';
import Body from './Pages/Body/body.jsx';
import Product from './Pages/Product/Product';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Banner/>
        <Body/>
        <Product/>
      </div>
    )
  }
}
