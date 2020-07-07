import React, { Component } from 'react'

class DeviceInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
const info = {
  title: "上海光源",
  desc: "上海光源线站工程属于国家\“十二五\”重大科学基础设施建设项目，主要建设内容包括新建16条性能先进的光束线站、实验辅助系统、光源性能拓展、建安工程及配套公用设施，完成了其中的硬X射线通用谱学线站、X光学测试线、用户数据中心建设",
  team: "上海应用物理研究所",
  location: "浦东张江高科技园区",
  mark: "重大科学基础设施",
  cop_mode:"对用户开放",
  tags: ["硬X射线", "同步辐射光源", "SiP·ME2"]
};

    return (
      <div className="card" style = {{ 'margin-top': '10px', 'margin-left': '10px' }}>
        <img class="card-img-top" src="..." alt=""/>
        <div className="card-body">
          <div className="text-center">
            <h5 className="card-title">{ info.title }</h5>
            <h6 className="card-title" style={{'font-size':'0.5rem'}}><span className="mr-1">{ info.location } </span> { info.team }</h6>
          </div>
          <div className="card-text">
             <b> 「 </b> { info.desc }  <b> 」</b>
          </div>
          <div style={{'font-size':'8px !important'}}>
             <a href="#" className="btn btn-outline-info mr-1"><span style={{'font-size':'.8rem'}}>{ info.mark }</span></a>
             <a href="#" className="btn btn-outline-info mr-1"><span style={{'font-size':'.8rem'}}>{ info.cop_mode }</span></a>
          </div>
        </div>
        <div className="card-footer text-center">
          <a href="contact" className="btn btn-primary">申请租用</a>
        </div>
      </div>);
  }
}

export default DeviceInfo;

