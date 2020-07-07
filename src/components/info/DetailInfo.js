import React, { Component } from 'react'

class DetailInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleContactClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  handleContactClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
const info = {
  title: "吸附灭活新型冠状病毒",
  desc: "实验结果表明，该材料具有直接吸附灭活新冠病毒作用，灭活效率达96.5%至99.9%。在实验环境中，新冠病毒浓度为5微克/毫升，远高于实际场景中的致病浓度。此类固体催化材料无毒，不溶于水及有机溶剂，可制成颗粒或担载于各种载体上，有望广泛应用于抗疫产品及日常空气和水净化用品上，实现对病毒吸附灭活",
  team: "中国科学院大连化学物理研究所",
  stat: "实验验证",
  product: "具备生产能力",
  cop_mode:"寻找合作",
  tags: ["新型冠状病毒", "灭活"]
};


    return (
      <div className="card" style={{ 'margin-top': '10px', 'margin-left': '10px' }}>
        <img class="card-img-top" src="..." alt=""/>
        <div className="card-body">
          <div className="text-center">
            <h5 className="card-title">{ info.title }</h5>
            <h6 className="card-title" style={{'font-size':'0.5rem'}}>{ info.team }</h6>
          </div>
          <div className="card-text">
             <b> 「 </b> { info.desc }  <b> 」</b>
          </div>
          <div style={{'font-size':'8px !important'}}>
                   <a href="#" className="btn btn-outline-info mr-1"><span style={{'font-size':'.8rem'}}>{ info.stat }</span></a>
                   <a href="#" className="btn btn-outline-info mr-1"><span style={{'font-size':'.8rem'}}>{ info.product }</span></a>
                   <a href="#" className="btn btn-outline-info mr-1"><span style={{'font-size':'.8rem'}}>{ info.cop_mode }</span></a>
          </div>
        </div>
        <div className="card-footer text-center">
          <a href="contact" className="btn btn-primary">深度报告</a>
        </div>
      </div>);
  }
}

export default DetailInfo;

