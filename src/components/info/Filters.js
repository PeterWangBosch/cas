import React from 'react'

import "./Filters.css";

const Filters = () => {
  return (
    <div className="filters-wrapper">
      <div className="d-flex flex-row">
	<div className="p-2">
          <span>类别:</span>
        </div>
	<div className="p-2 filter">
	  <input className="mr-2" type="checkbox" id="Check1"></input><span>科研机构</span>
	</div>
	<div className="p-2">
	  <input className="mr-2" type="checkbox" id="Check2"></input><span>院士专家</span>
	</div>
	<div className="p-2">
	  <input className="mr-2" type="checkbox" id="Check3"></input><span>大学</span>
	</div>
	<div className="p-2">
	  <input className="mr-2" type="checkbox" id="Check3"></input><span>成果</span>
	</div>
	<div className="p-2">
	  <input className="mr-2" type="checkbox" id="Check4"></input><span>专利</span>
	</div>
	<div className="p-2">
	  <input className="mr-2" type="checkbox" id="Check3"></input><span>项目</span>
	</div>
	<div className="p-2">
	  <input className="mr-2" type="checkbox" id="Check4"></input><span>设备</span>
	</div>
      </div>
      <div className="d-flex flex-row">
        <div className="p-2">
          <span>行业:</span>
        </div>
        <div className="p-2 filter">
          <input className="mr-2" type="checkbox" id="Check1"></input><span>信息技术</span>
        </div>
        <div className="p-2">
          <input className="mr-2" type="checkbox" id="Check2"></input><span>高端制造</span>
        </div>
        <div className="p-2">
          <input className="mr-2" type="checkbox" id="Check3"></input><span>新能源</span>
        </div>
        <div className="p-2">
          <input className="mr-2" type="checkbox" id="Check3"></input><span>新材料</span>
        </div>
        <div className="p-2">
          <input className="mr-2" type="checkbox" id="Check4"></input><span>医药</span>
        </div>
      </div>
    </div>
  );

};

export default Filters;
