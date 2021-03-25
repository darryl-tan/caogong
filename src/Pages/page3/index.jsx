import React from 'react'
import axios from "axios";
//新闻详情页
class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail:''
    };
  }

  componentDidMount() {
    this.getDetail();
  }

  getDetail = ()=> {
    const {location:{state}}=this.props;
    // get all data
    axios
    .get(
      `http://api.dailiao.xinglianxinglian.com/api/news/detail/${state}`
    )
    .then((res) => {
      this.setState({
        detail:res.data.data
      });
    });
    console.log(state)
  }

  render() {
    console.warn(this.state.detail,90900)
    return (
      <div>
       描述：{this.state.detail.desc}
       浏览量：{this.state.detail.viewNum}
       neirong：
       <div dangerouslySetInnerHTML={{__html:this.state.detail.content}}/>
      </div>
    );
  }
}


export default index
