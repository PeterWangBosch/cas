import React, { useState } from 'react'
import PropTypes from "prop-types";

import MainFooter from "../components/MainFooter.js";
import SideBar from "../components/SideBar/SideBar.js";

import lunr from '../lunr.js'

import "./SubPage.css";

const docs = [];

function MainNavbar() {
    const [key, setKey] = useState("key");

    const handleInput = event => {
      setKey(event.target.value);
    };

    const search = () => {
      var idx = lunr(function () {
	this.ref('name')
	this.field('text')

	let documents = docs();

	documents.forEach(function (doc) {
	  this.add(doc)
	}, this)
      });
      debugger;
      console.log(key);
      console.log(idx.search(key));
    }

    return (
	 <div className="home-top-result">
	   <div action={search} id="V3_Index_S">
	     <div className="home-input-outside-wrap">
	       <div className="home-input-wrap">
		 <input type="text" onChange={handleInput} placeholder="请输入技术方向" id="searchkey" name="key" autoComplete="off"/>
	       </div>
	       <div className="home-search-icon" id="V3_Search_bt" onClick={search} style={{cursor: "pointer"}}> 
		 <span className="btn" onClick={search}>查一下</span>
	       </div>
	     </div>
	   </div>
	 </div>
    );
  }


const SubPage = ({ children, noNavbar, noFooter }) => (
    <div>
      {!noNavbar && <MainNavbar/>}
      <div className = "row" style={{'padding-left':'210px'}}>
        {<SideBar/>}
        {children}
      </div>
      {!noFooter && <MainFooter />}
    </div>
);

SubPage.propTypes = {
  noNavbar: PropTypes.bool,
  noFooter: PropTypes.bool
};

SubPage.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default SubPage;
