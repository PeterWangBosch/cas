import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import FellowSearch from '../components/Fellow/FellowSearch';
import Fellow from '../components/Fellow/Fellow';
import News from '../components/News';

import lunr from '../lunr.js'

const device_db = (i) => {
  const docs = [
    {
      title: "上海光源",
      desc: "上海光源线站工程属于国家\“十二五\”重大科学基础设施建设项目，主要建设内容包括新建16条性能先进的光束线站、实验辅助系统、光源性能拓展、>建安工程及配套公用设施，完成了其中的硬X射线通用谱学线站、X光学测试线、用户数据中心建设",
      team: "上海应用物理研究所",
      location: "浦东张江高科技园区",
      mark: "重大科学基础设施",
      cop_mode:"对用户开放",
      tags: ["硬X射线", "同步辐射光源", "SiP·ME2"]
    }
  ];

  return docs[i];
}

const project_db = (i) => {
  const docs = [
    {
      title: "吸附灭活新型冠状病毒",
      desc: "实验结果表明，该材料具有直接吸附灭活新冠病毒作用，灭活效率达96.5%至99.9%。在实验环境中，新冠病毒浓度为5微克/毫升，远高于实际场景中的>致病浓度。此类固体催化材料无毒，不溶于水及有机溶剂，可制成颗粒或担载于各种载体上，有望广泛应用于抗疫产品及日常空气和水净化用品上，实现对病毒吸附灭活",
      team: "中国科学院大连化学物理研究所",
      stat: "实验验证",
      product: "具备生产能力",
      cop_mode:"寻找合作",
      tags: ["新型冠状病毒", "灭活"]
    }
  ];

  return docs[i];
}
const people_db_index = (i) => {
  return [
    {
      index: "1",
      tags: "氧碘激光 微波吸收材料 脉冲氟化氢化学激光器",
    },
    {
      index: "2",
      tags: "短波长化学激光 氧碘化学激光器 水煤气催化合成 侵蚀燃烧 熔铁催化剂"
    }
  ];
}

const people_db = (i) => {
  const docs= [
  {
    name: "张存浩",
    tags_txt: "短波长化学激光 氧碘化学激光器 水煤气催化合成 侵蚀燃烧 熔铁催化剂",
    img: "http://sourcedb.dicp.cas.cn/zw/zjrck/200908/P020180928239091679681.jpg",
    fellow: [
      "院士"
    ],
    tags: [
      "短波长化学激光",
      "氧碘化学激光器",
      "水煤气催化合成",
      "侵蚀燃烧",
      "熔铁催化剂",
    ],
  },
  {
    name: "沙国河",
    tags_txt: "氧碘激光 微波吸收材料 脉冲氟化氢化学激光器",
    img: "http://sourcedb.dicp.cas.cn/zw/zjrck/200908/P020180928241946735552.jpg",
    fellow: [
      "院士"
    ],
    tags: [
      "氧碘激光",
      "微波吸收材料",
      "脉冲氟化氢化学激光器"
    ],
  }];
  return docs[i];
}

var __result;

function Banner() {
    const [key, setKey] = useState("key");
    const [first, setFirst] = useState("first");

    const handleInput = event => {
      setKey(event.target.value);
    };

    const search = () => {
      //const $ = window.$;
      //console.log("--------");
      //console.log($.lunr);

      setFirst(false);
      var idx = lunr(function () {
	this.ref('index')
	this.field('tags')

	let indexes = people_db_index();

	indexes.forEach(function (i) {
	  this.add(i)
	}, this)
      });
      __result = idx.search(key);
      debugger;
      //console.log( people_db( parseInt(__result[0].ref) ) );
      console.log(__result);
    }

    return (
	 <div className={ first ? 'home-top' : 'home-top-result' }>
	   <div className="home-logo-wrap" style={{ display: first ? 'block' : 'none' }}>
	     <h2>中科创新</h2>
	     <h5>中国科学院产学研用信息平台</h5>
	   </div>
	   <div action={search} id="V3_Index_S">
	     <div className="home-input-outside-wrap">
	       <div className="home-input-wrap">
		 <input type="text" onChange={handleInput} placeholder="请输入技术方向、人名、项目等" id="searchkey" name="key" autoComplete="off"/>
	       </div>
	       <div className="home-search-icon" id="V3_Search_bt" onClick={search} style={{cursor: "pointer"}}> 
		 <span className="btn" onClick={search}>查一下</span>
	       </div>
	       <div className="home-hot" style={{ display: first ? 'block' : 'none' }}>
		 <span className="resou"></span>
		 <a href="/hot1">吸附灭活</a>
		 <a href="/hot2">中科院大连化物所</a>
		 <a href="/hot3">生物催化</a>
		 <a href="/hot4">张涛</a>
	       </div>
	     </div>
	   </div>
	 </div>
    );
  }

function Hot() {
  return (
      <div className="home-application">
        <div className="home-middle-title-wrap">
          <div className="home-middle-title">热门 <a className="home-middle-title-more" href="index_application"></a></div>
        </div>
        <div className="home-middle-content clearfix"> 
          <a href="/people" className="home-application-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <h3>院士</h3>
          </a>
          <a href="/info" className="home-application-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            <h3>专利</h3>
          </a>
          <a href="/info" className="home-application-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            <h3>项目</h3>
          </a>
          <a href="/device" className="home-application-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
            <h3>设备</h3>
          </a>
          <a href="/people" className="home-application-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <h3>研究员</h3>
          </a>
          <a href="/info" className="home-application-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            <h3>论文</h3>
          </a>
          <a href="/info" className="home-application-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            <h3>项目</h3>
          </a>
          <a href="/device" className="home-application-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
            <h3>设备</h3>
          </a>
        </div>
      </div>
  );
}

function news() {
  return [
    {
      title: "吸附灭活新型冠状病毒",
      img: "http://sourcedb.dicp.cas.cn/zw/zjrck/200908/P020181113328063736780.jpg",
      link: "/hot4",
      category: "项目",
      credit: "实验验证",
      stat: "具备生产能力",
      cop: "寻找合作"
    },
    {
      title: "上海光源线站工程",
      img: "",
      link: "/hot4",
      category: "设备",
      credit: "投入试运行",
      stat: "用户取得重要成果",
      cop: "开放"
    },
    {
      title: "纤维素、糖催化转化制乙二醇",
      img: "",
      link: "/hot4",
      category: "论文",
      credit: "实验验证",
      stat: "可以实用",
      cop: "寻找合作"
    },
    {
      title: "纳米催化剂的可控制备",
      img: "",
      link: "/hot4",
      category: "论文",
      credit: "实验验证",
      stat: "可以实用",
      cop: "寻找合作"
    },
    {
      title: "肼催化分解、无毒推进剂催化分解",
      img: "",
      link: "/hot4",
      category: "论文",
      credit: "实验验证",
      stat: "可以实用",
      cop: "寻找合作"
    }
  ];

}

function MainPage() {
  return (
    <div>
      <Banner></Banner>
      <Hot></Hot>
      <News data={news()} title="今日推荐"></News>
    </div>
  );
}

export default MainPage;
