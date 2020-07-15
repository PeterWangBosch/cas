import React from "react";

import PeopleCard from "../../components/info/PeopleCard";

const PeopleProfile = () => (
  <div className="container-fluid px-4">
    <div className="row pt-2">
      <div className="col-lg-6">
        <PeopleCard />
      </div>
      <div className="col-lg-6 home-middle-content">
         <div className="lnews-cell card" style={{'width': '100%'}}>
           <a className="item" href="info" target="_self" rel="nofollow">
             <div className="cell-bd">
               <div className="content">
                 <div className="title fixheight">吸附灭活新型冠状病毒</div>
                 <div className="info">
                   <span className="ltext"><a href="info">项目</a></span>
                   <span className="ltext">实验验证</span>
                   <span className="ltext">具备生产能力</span>
                   <span className="ltext">寻找合作</span>
                 </div>
               </div>
             </div>
           </a>
         </div>
         <div className="lnews-cell card" style={{'width': '100%'}}>
           <a className="item" href="info" target="_self" rel="nofollow">
             <div className="cell-bd">
               <div className="content">
                 <div className="title fixheight">纤维素、糖催化转化制乙二醇</div>
                 <div className="info">
                   <span className="ltext"><a href="info">论文</a></span>
                   <span className="ltext">实验验证</span>
                   <span className="ltext">可以实用</span>
                   <span className="ltext">寻找合作</span>
                 </div>
               </div>
             </div>
           </a>
         </div>
         <div className="lnews-cell card" style={{'width': '100%'}}>
           <a className="item" href="info" target="_self" rel="nofollow">
             <div className="cell-bd">
               <div className="content">
                 <div className="title fixheight">纳米催化剂的可控制备</div>
                 <div className="info">
                   <span className="ltext"><a href="info">论文</a></span>
                   <span className="ltext">实验验证</span>
                   <span className="ltext">可以实用</span>
                   <span className="ltext">寻找合作</span>
                 </div>
               </div>
             </div>
           </a>
         </div>
         <div className="lnews-cell card" style={{'width': '100%'}}>
           <a className="item" href="info" target="_self" rel="nofollow">
             <div className="cell-bd">
               <div className="content">
                 <div className="title fixheight">肼催化分解、无毒推进剂催化分解</div>
                 <div className="info">
                   <span className="ltext"><a href="info">论文</a></span>
                   <span className="ltext">实验验证</span>
                   <span className="ltext">可以实用</span>
                   <span className="ltext">寻找咨询</span>
                 </div>
               </div>
             </div>
           </a>
         </div>
      </div>
    </div>
  </div>
);

export default PeopleProfile;
