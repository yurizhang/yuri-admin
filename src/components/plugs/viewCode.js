import React, { Component } from 'react';
import '../test/App.css';
//import Copy from 'copy-to-clipboard';
// import Button from "../components/Button"
// import Icon from "../components/Icon"
//import Dialog from "../components/Dialog"
//按需加载
import {
          Tabs,TabPane,
          Collapse,CollapseItem,
       } from '../../components/ishow/index.js'; //一次性加载完
Tabs.Pane = TabPane;
Collapse.Item = CollapseItem;
class ViewCode extends Component {

  updateCode = (newCode) => {
        // this.setState({
        //     code: newCode,
        // });
  }
  //for copy
  copyCode = () => {
    // Copy(this.state.code);
    // Message.success('successfully copied !');
  };

  render() {
    //for Collapse
    const activeName = "1";
    return (
            <div  style={{marginTop:20,marginBottom:20}}>
              <Collapse value={activeName}>
                 <Collapse.Item title="查看代码" name="1">
                 {/*}<Button type="primary" icon="document" onClick={this.copyCode} size="small" type="success" style={{marginBottom:25}}>copyCode</Button>*/}
                 <pre><code>
                 {
                      `render() {
                      return (
                        <div>
                          <Button>默认按钮</Button>
                          <Button type="primary">主要按钮</Button>
                          <Button type="text">文字按钮</Button>
                        </div>
                      )
                    }`
                 }
                 </code></pre>
                 </Collapse.Item>
              </Collapse>
            </div>
    );
  }
}

export default ViewCode;
