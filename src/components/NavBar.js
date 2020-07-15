import React, { Component, useState } from 'react'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="#">科研在线</a>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">科研机构</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">院士专家</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">成果</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">专利</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">项目</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">设备</a>
          </li>
        </ul>
        <form className="form-inline mt-2 mt-md-0">
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">登录 | 注册</button>
        </form>
      </div>
    </nav>);
};

export default NavBar;
