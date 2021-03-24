import React from "react";
import "./connect.css";

import dh from "../../Assets/dh.png";
import email from "../../Assets/email.png";
import fax from "../../Assets/fax.png";
import qq from "../../Assets/qq.png";
import wx from "../../Assets/gong.png";

const connect = () => {
  return (
    <div className="connect">
      <div className="connectson">
        <div className="connects">
          <div className="connectbox">
            <img src={dh} alt="" />
            <div className="connectbox2">
              <p>手机号：</p>
              <p>15999780920</p>
            </div>
          </div>
          <div className="connectbox">
            <img src={email} alt="" />
            <div className="connectbox2">
              <p>E-mail：</p>
              <p>15999780920@qq.com</p>
            </div>
          </div>
          <div className="connectbox">
            <img src={fax} alt="" />
            <div className="connectbox2">
              <p>微信号：</p>
              <p>15999780920</p>
            </div>
          </div>
          <div className="connectbox">
            <img src={qq} alt="" />
            <div className="connectbox2">
              <p>QQ号：</p>
              <p>15999780920</p>
            </div>
          </div>
        </div>
        <div className="daohangpapa">
          <div className="daohangbox">
            <div className="daohang">快速导航:</div>
            <div className="daohangflex">
              <div className="daohangcontent">
                <p>-->></p>
                <p>网站首页</p>
              </div>
              <div className="daohangcontent">
                <p>-->></p>
                <p>网站首页</p>
              </div>
              <div className="daohangcontent">
                <p>-->></p>
                <p>网站首页</p>
              </div>
              <div className="daohangcontent">
                <p>-->></p>
                <p>网站首页</p>
              </div>
              <div className="daohangcontent">
                <p>-->></p>
                <p>网站首页</p>
              </div>
              <div className="daohangcontent">
                <p>-->></p>
                <p>网站首页</p>
              </div>
              <div className="daohangcontent">
                <p>-->></p>
                <p>网站首页</p>
              </div>
            </div>
          </div>
          <div className="newsask">新闻咨询</div>
          <div className="connectus">
            <div>
              <p>联系我们</p>
              <p>扫码加微信</p>
              <p>了解更多产品</p>
            </div>
            <div>
                <img src={wx} alt="" className="gong"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect;
