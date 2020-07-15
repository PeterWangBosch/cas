import React, { Component, useState } from 'react'

function News(props) {
  return (
      <div className="home-news">
        <div className="home-middle-title-wrap">
          <div className="home-middle-title">{ props.title }<a className="home-middle-title-more" href="contact">委托查找</a></div>
        </div>
        <div className="home-middle-content">
         { 
	   props.data.map((d, index) => {
             return (
	       <div className="lnews-cell lnews-cell-width">
		 <div className="images">
		   <img className="img" src={ d.img } alt=""></img>
		 </div>
		 <a className="item" href={ d.link } target="_self" rel="nofollow">
		   <div className="cell-bd">
		     <div className="content">
		       <div className="title fixheight"> { d.title } </div>
		       <div className="info">
			 <span className="ltext"><a href={ d.link }>{ d.category }</a></span>
			 <span className="ltext"> { d.credit } </span>
			 <span className="ltext"> { d.stat } </span> 
			 <span className="ltext"> { d.cop} </span>
		       </div>
		     </div>
		   </div>
		 </a>
	       </div>);
           })
         }
       </div>
     </div>);
}

export default News;
