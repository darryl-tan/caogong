import React from "react";
import axios from "axios";
const item = "";
class Adder1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://api.dailiao.xinglianxinglian.com/api/news/list?pageNum=1&pageSize=2"
      )
      .then((res) => {
        this.setState({
          news: res.data.data,
        });
      });
  }
  // componentDidMount() {
  //   axios.get('http://api.dailiao.xinglianxinglian.com/api/news/list?pageNum=1&pageSize=2')
  //     .then((res) => {
  //       // console.log(res.data.data)

  //       this.setState({
  //         title:res.data.data
  //       })

  //     })

  render() {
    // const newImg = data.map(( item ) =>{ item.Img })
    console.log(this.state.news);

    return (
      <div>
                        
        <div>
          {this.state.news.length !== 0 && this.state.news[0].title}
          <img
            src={this.state.news.length !== 0 && this.state.news[0].img}
            alt=""
          />
          {this.state.news.length !== 0 && this.state.news[0].viewNum}
          {this.state.news.length !== 0 && this.state.news[0].desc}
        </div>
        <div>{this.state.news.length !== 0 && this.state.news[1].title}</div>
           
        <div>
                         
          {this.state.news.length !== 0 &&
            this.state.news.map((item) => <div>{item.title}</div>)}
                      
        </div>
                   
      </div>
    );
  }
}

export default Adder1;
