import React from "react";
import PropTypes from "prop-types";

const PeopleCard = ({ detail }) => (
  <div className="card bg-white mb-4">
    <div className="card-footer text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle border-white"
          src={detail.avatar}
          alt={detail.name}
          width="110"
        />
      </div>
      <h4 className="mb-0">{detail.name}</h4>
      <span style={{'font-size':'0.5rem'}} className="text-muted d-block mb-2">{detail.team}</span>
      <a href="#" className="btn btn-outline mb-2">
        {detail.fellow}
      </a>
    </div>
    <div style={{'font-size':'0.8rem'}} className="text-left text-muted d-block mb-2 px-2">
        <span><b> 「 </b>{ detail.desc } <b> 」</b></span>
    </div>
    <div style={{'font-size':'0.8rem'}} className="card-footer text-center">
      <a href="contact" style={{'font-size':'0.5rem'}} className="btn btn-outline-primary mr-2 mb-2"> { detail.tags[0] }</a>
      <a href="contact" style={{'font-size':'0.5rem'}} className="btn btn-outline-primary mr-2 mb-2"> { detail.tags[1] }</a>
      <a href="contact" style={{'font-size':'0.5rem'}} className="btn btn-outline-primary mr-2 mb-2"> { detail.tags[2] }</a>
    </div>

  </div>
);

PeopleCard.propTypes = {
  /**
   * The user details object.
   */
  detail: PropTypes.object
};

PeopleCard.defaultProps = {
  detail: {
    name: "张涛",
    avatar: "http://sourcedb.dicp.cas.cn/zw/zjrck/200908/P020181113328063736780.jpg",
    fellow: "研究员",
    team: "中科院大连化物所",
    desc: "主要从事航天推进剂催化分解技术、环保催化、催化新材料以及生物质催化转化等方面的研究；结合重大任务背景和特点，张涛课题组系统开展了航天航空催化剂的应用基础研究，针对毫秒时间尺度的推进剂快速分解气体膨胀反应过程，在孔径可控的新型有序介孔氧化铝、有序介孔炭材料、具有类贵金属性质的过渡金属碳/氮/磷化物催化剂研究方面取得较大进展；他率领科研团队在催化科学和技术研究中做出创造性成果，拓展了催化剂在航空航天应用的新领域",
    tags: ["环境催化", "单原子催化", "NOx和CO脱除", "生物质催化转化"]
  }
};

export default PeopleCard;
