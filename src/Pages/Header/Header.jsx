import React, { Component } from "react";
import { Route, Switch, Link, Redirect, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./HeaderStyle.less";
import logoIcon from "../../Assets/logo.png";
import Home from "../../App";

import tel from "../../Assets/tel.png";
import News from "../../NewsPage/newspage";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
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
            <div>网站首页</div>
            <div>产品展示</div>
            <div>我的店铺</div>
            <div>新闻咨询</div>
            <div>厂房设备</div>
            <div>合作客户</div>
            <div>呆料供应</div>
            <div>联系我们</div>
          </div>

          {/* <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">百度</a>*/}
        </div>
      </div>
    );
  }
}

export default Header;
