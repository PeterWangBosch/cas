import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack(){
    this.props.history.goBack();
  }

  render() {
const info = {
  title: "委托服务",
  team: "中国科学院产学研用信息平台",
  mark: "重大科学基础设施",
  cop_mode:"对用户开放",
  tags: ["硬X射线", "同步辐射光源", "SiP·ME2"]
};


    return (
      <div className="card">
        <img class="card-img-top" src="..." alt=""/>
        <div className="card-body">
          <div className="text-center">
            <h5 className="card-title">{ info.title }</h5>
            <h6 className="card-title" style={{'font-size':'0.5rem'}}>{ info.team } </h6>
          </div>
        
          <div className="card-text">
            <label class="primary" style={{'font-size':'0.8rem'}}>
              初步意向
            </label>
            <textarea style={{'width':'100%', 'min-height': '15rem'}}> </textarea>
            <label class="primary" style={{'font-size':'0.8rem'}}>
              联系方式
            </label>
            <textarea style={{'width':'100%', 'min-height': '1rem'}}> </textarea>
          </div>
        </div>
        <div className="card-footer text-center">
          <a  className="btn btn-primary mr-4" onClick={this.goBack}>返回</a>
          <a  className="btn btn-primary" onClick={this.goBack}>提交</a>
        </div>
      </div>);
  }
}

export default withRouter(ContactInfo);

