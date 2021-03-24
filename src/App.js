import Header from './Pages/Header/Header.jsx';
import Banner from './Pages/Banner/Banner.jsx';
import Body from './Pages/Body/body.jsx';
import Product from './Pages/Product/Product';
import Equipment from './Pages/Equipment/Equipment.jsx';
import News from './Pages/News/news.jsx'
import Connect from './Pages/Connect/connect.jsx'
import Bottom from './Pages/Bottom/bottom.jsx'
import React, { Component } from "react";
import { Route, Switch, Link, Redirect, BrowserRouter } from 'react-router-dom';
import routers from './Pages/router';
import logoIcon from "./Assets/logo.png";
import tel from "./Assets/tel.png";
// import tel from "../../Assets/tel.png";
// import { useHistory, Route, Switch, Link, Redirect,HashRouter, } from 'react-router-dom';


function App() {
  // const history = useHistory()
  return (
    <BrowserRouter>
       <div className="contain1">
          <div className="box">
            <p>欢迎访问XX网站</p>
            <p>您有一条到货提醒!请查收</p>
          </div>
        </div>
        <div className="contain">
          <div className="logo_tel">
            <div>
              <img src={logoIcon} alt="无线充模块" />
            </div>
            <div className="tel">
              <div className="telImg">
                <img src={tel} alt="无线充" />
              </div>
              <div>
                <p>联系电话</p>
                <div className="phone">15601649610</div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar contain">
          <div className="navbaritem">
            <Link to={'/page1'}><div>网站首页</div></Link>
            <Link to={'/page2'}><div>产品展示</div></Link>
            <Link to={'/page3'}><div>我的店铺</div></Link>
            
            
            <div>新闻咨询</div>
            <div>厂房设备</div>
            <div>合作客户</div>
            <div>呆料供应</div>
            <div>联系我们</div>
          </div>

          {/* <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">百度</a>*/}
        </div>

    <div className="content">
      {/* 页面 */}
      <Switch >
        {
          routers.map((item, index) => {
            return <Route path={item.path} component={item.component} key={index}></Route>
          })
        }
        
        <Redirect from='/' exact to="/page1" />
      </Switch>
    </div>

  </BrowserRouter>
      
  );
}

export default App;


// export default class App extends Component {
//   render() {
//     return (
//       <div>
        // <Header/>
        // <Banner/>
        // <Body/>
        // <Product/>
        // <Equipment/>
        // <News/>
        // <Connect/>
        // <Bottom/>
//       </div>
//     )
//   }
// }
