import React, { useState, useContext } from 'react'
import PropTypes from "prop-types";

import NavBar from '../components/NavBar';
import MainFooter from "../components/MainFooter.js";
import SideBar from "../components/SideBar/SideBar.js";

import Filters from '../components/info/Filters';

import { SearchCtx } from '../App.js'

import lunr from '../lunr.js'

import "./SubPage.css";

const docs = [];

function MainNavbar() {
    const ctx = useContext(SearchCtx);
    const handleInput = event => {
      ctx.key.set(event.target.value);
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
    }

    return (
	 <div className='home-top-result'>
           <ul className="search-nav clearfix">
             <li className= { ctx.type.get == 0 ? "search-type active" : "search-type" } onClick={ ()=>{ ctx.type.set(0);} }>找机构</li>
             <li className= { ctx.type.get == 1 ? "search-type active" : "search-type" } onClick={ ()=>{ ctx.type.set(1);} }>找专家</li>
             <li className= { ctx.type.get == 2 ? "search-type active" : "search-type" } onClick={ ()=>{ ctx.type.set(2);} }>找成果</li>
             <li className= { ctx.type.get == 3 ? "search-type active" : "search-type" } onClick={ ()=>{ ctx.type.set(3);} }>找需求</li>
             <li className= { ctx.type.get == 4 ? "search-type active" : "search-type" } onClick={ ()=>{ ctx.type.set(4);} }>找设备</li>
           </ul>
	   <div action={search} id="V3_Index_S">
	     <div className="home-input-outside-wrap">
	       <div className="home-input-wrap">
		 <input type="text" onChange={handleInput} placeholder="请输入技术方向、人名、项目等" id="searchkey" name="key" autoComplete="off"/>
	       </div>
	       <div className="home-search-icon" id="V3_Search_bt" onClick={search} style={{cursor: "pointer"}}> 
		 <span className="btn" onClick={search}>查一下</span>
	       </div>
               <Filters></Filters>
	     </div>
	   </div>
	 </div>
    );
  }


const SubPage = ({ children, noNavbar, noFooter }) => (
    <div>
      <NavBar></NavBar>
      {!noNavbar && <MainNavbar/>}
      <div className = "row container-with-sidebar">
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
