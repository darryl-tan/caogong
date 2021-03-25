import React from "react";
import axios from "axios";
import { Pagination } from 'antd';
import {Link} from 'react-router-dom';


//新闻标题
class Adder1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      currentNews:[],
      page: 1,
      pageSize: 15
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList = ()=> {
    const {page,pageSize}=this.state;
    // get all data, front-end paging
    axios
    .get(
      `http://api.dailiao.xinglianxinglian.com/api/news/list`
    )
    .then((res) => {
      this.setState({
        news: res.data.data || [],
        currentNews: res.data.data.slice(0,15) || []
      });
    });
  }

  handleChange = (page,size) => {
    // back-end paging
    // this.setState({page},()=>{this.getList()});
    // front-end paging using array cutting
    const {news,pageSize} = this.state;
    let startRow = (page - 1) * pageSize;
    let endRow = (page * pageSize) > news.length ? news.length-1 : (page * pageSize);
    this.setState({
      currentNews: news.slice(startRow,endRow),
      page
    });
  }

  render() {
    console.log(this.state.news);
    return (
      <div>
                       
        <div>
                         
          {this.state.currentNews.length !== 0 &&
            this.state.currentNews.map((item) => 
              <div key={item.id}>
                <Link to={{pathname:'/page3',state:item.id}}>{item.title}</Link>
                {/* <img src={item.img} /> */}
                <div>
                  {item.createdAt}
                </div>
              </div>)}
        </div>

        <Pagination
          total={this.state.news.length}
          showTotal={total => `共${total}条`}
          defaultCurrent={1}
          showSizeChanger={false}
          onChange={this.handleChange}
    />
                   
      </div>
    );
  }
}

export default Adder1;
