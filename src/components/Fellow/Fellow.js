import React from 'react'

import "./Fellow.css";

let people = [
  {
    name: "张存浩",
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
    ]
  },
  {
    name: "何国钟",
    img: "http://sourcedb.dicp.cas.cn/zw/zjrck/200908/P020180927808161185868.jpg",
    fellow: [
      "院士"
    ],
    tags: [
      ""
    ]
  },
  {
    name: "袁权",
    img: "http://sourcedb.dicp.cas.cn/zw/zjrck/200908/P020180929418251710270.jpg",
    fellow: [
      "院士"
    ],
    tags: [
      ""
    ]
  },
  {
    name: "沙国河",
    img: "http://sourcedb.dicp.cas.cn/zw/zjrck/200908/P020180928241946735552.jpg",
    fellow: [
      "院士"
    ],
    tags: [
      "氧碘激光",
      "微波吸收材料",
      "脉冲氟化氢化学激光器"
    ]
  },
  {
    name: "杨胜利",
    img: "http://sourcedb.dicp.cas.cn/zw/zjrck/200908/P020180929423636396948.jpg",
    fellow: [
      "院士"
    ],
    tags: [
      ""
    ]
  },
  {
    name: "衣宝廉",
    img: "http://sourcedb.dicp.cas.cn/zw/zjrck/200908/P020180928245066646878.jpg",
    fellow: [
      "院士"
    ],
    tags: [
      ""
    ]
  },
  {
    name: "桑凤亭",
    img: "http://sourcedb.dicp.cas.cn/zw/zjrck/200908/P020180928245915207010.jpg",
    fellow: [
      "院士"
    ],
    tags: [
      ""
    ]
  },
];

export default () => (
  <div className="row fellow-cards">
    <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12" >
      <div className="card-columns">
	{ people.map( (p, index) => {
          let desc = "";
          if (p.tags.length >= 3) {
            desc = <span> {p.tags[0]} &nbsp;&nbsp; {p.tags[1]} &nbsp;&nbsp; {p.tags[2]} </span>
          }

	  return (
	    <div className="card row-col-2 fellow-card">
	      <img src={p.img} className="card-img-top" alt="..."></img>
	      <div className="card-body">
		<h5 className="card-title">{p.name} <span className="text-fellow">{p.fellow[0]}</span></h5>
		<p className="card-text text-desc">
                  { desc }
                </p>
	      </div>
              <div class="text-contact">
                <a href="contact" className="btn btn-primary">联系咨询</a>
              </div>
	    </div>
	  );
	})}
      </div>
    </div>
  </div>
);

