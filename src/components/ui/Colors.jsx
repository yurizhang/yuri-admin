import React, { Component } from 'react';
import '../test/App.css';
// import Button from "../components/Button"
// import Icon from "../components/Icon"
//import Dialog from "../components/Dialog"
//按需加载
class App extends Component {

  render() {

    return (
      <div className="App">
        <h1>Color 色彩</h1>
        <div style={{marginBottom:20}}>
          <h3>基本色彩</h3>
          <div className="demo-color-box bg-blue">Blue<div className="value">#409EFF</div></div>
        </div>
        <div style={{marginBottom:20}}>
          <h3>牛人专用色彩</h3>
          <div className="demo-color-box bg-success">Success<div className="value">#67C23A</div></div>
          <div className="demo-color-box bg-warning">Warning<div className="value">#E6A23C</div></div>
          <div className="demo-color-box bg-danger">Danger<div className="value">#F56C6C</div></div>
          <div className="demo-color-box bg-info">Info<div className="value">#909399</div></div>
        </div>
        <div style={{marginBottom:20}}>
          <h3>文字边框色彩</h3>
          <p>中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</p>
          <div className="demo-color-box-group">
              <div className="demo-color-box-vertical bg-text-primary">主要文字<div className="value">#303133</div></div>
              <div className="demo-color-box-vertical bg-text-regular">常规文字<div className="value">#606266</div></div>
              <div className="demo-color-box-vertical bg-text-secondary">次要文字<div className="value">#909399</div></div>
              <div className="demo-color-box-vertical bg-text-placeholder">占位文字<div className="value">#C0C4CC</div></div>
          </div>
          <div className="demo-color-box-group">
              <div className="demo-color-box-vertical bg-border-base">一级边框<div className="value">#DCDFE6</div></div>
              <div className="demo-color-box-vertical bg-border-light">二级边框<div className="value">#E4E7ED</div></div>
              <div className="demo-color-box-vertical bg-border-lighter">三级边框<div className="value">#EBEEF5</div></div>
              <div className="demo-color-box-vertical bg-border-extra-light">四级边框<div className="value">#F2F6FC</div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
