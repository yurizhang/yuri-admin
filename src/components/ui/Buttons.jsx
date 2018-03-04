import React, { Component } from 'react';
import '../test/App.css';
//按需加载
import Button from "../ishow/Button/Button";
import ButtonGroup from "../ishow/Button/ButtonGroup";
import Tabs from "../ishow/Tab/Tabs";
import TabPane from "../ishow/Tab/TabPane";
import Collapse from "../ishow/Collapse/Collapse";
import CollapseItem from "../ishow/Collapse/CollapseItem";
import Message from "../ishow/Message/Message";

//import {Button,ButtonGroup,Tabs,TabPane,Collapse,CollapseItem,Message} from '../../components/ishow/index.js'; //一次性加载完
import ViewCode from '../plugs/viewCode';
import ParamTable from '../plugs/paramTable';
Tabs.Pane = TabPane;
Button.Group = ButtonGroup;
Collapse.Item = CollapseItem;
class App extends Component {
  componentDidMount(){
    //console.log(this.props);
    this.props.changeBread(['首页','UI','按钮']);
  }

  //for button
   clickme = () =>{
      Message.warning("hello");
      //编程式跳转
      this.props.history.push('/app/ui/icons');
  }  
  render() {
    //for Collapse
    return (
      <div className="App">
        <h1>Button 按钮</h1>
        <h3>常用的操作按钮</h3>
        <div>
          <Tabs type="card" value="1" style={{marginBottom:40}} >
            <Tabs.Pane label="基础按钮" name="1">
              <Button onClick={this.clickme.bind(this)}>普通按钮</Button>
              <Button type="primary">主要按钮</Button>
              <Button type="text">文字按钮</Button>
              <ViewCode/>
            </Tabs.Pane>
            <Tabs.Pane label="禁用按钮" name="2">
              <Button plain={true} disabled={true}>默认按钮</Button>
              <Button type="primary" disabled={true}>主要按钮</Button>
              <Button type="text" disabled={true}>文字按钮</Button>
            </Tabs.Pane>
            <Tabs.Pane label="加载中按钮" name="3">
              <Button type="primary" loading={true}>加载中</Button>
            </Tabs.Pane>
            <Tabs.Pane label="有颜色的按钮" name="4">
              <Button type="success">成功按钮</Button>
              <Button type="warning">警告按钮</Button>
              <Button type="danger">危险按钮</Button>
              <Button type="info">信息按钮</Button>
              <Button plain={true} type="success">成功按钮</Button>
              <Button plain={true} type="warning">警告按钮</Button>
              <Button plain={true} type="danger">危险按钮</Button>
              <Button plain={true} type="info">信息按钮</Button>
            </Tabs.Pane>
            <Tabs.Pane label="图标按钮" name="5">
              <Button type="primary" icon="edit"></Button>
              <Button type="primary" icon="share"></Button>
              <Button type="primary" icon="delete"></Button>
              <Button type="primary" icon="search">搜索</Button>
              <Button type="primary">上传<i className="ishow-icon-upload ishow-icon-right"></i></Button>
            </Tabs.Pane>
            <Tabs.Pane label="不同尺寸按钮" name="6">
              <Button type="primary" size="large">大型按钮</Button>
              <Button type="primary">正常按钮</Button>
              <Button type="primary" size="small">小型按钮</Button>
              <Button type="primary" size="mini">超小按钮</Button>
            </Tabs.Pane>
            <Tabs.Pane label="按钮组" name="7">
              <Button.Group>
                <Button type="primary" icon="arrow-left">上一页</Button>
                <Button type="primary">下一页<i className="ishow-icon-arrow-right ishow-icon-right"></i></Button>
              </Button.Group>
              &nbsp;&nbsp;&nbsp;
              <Button.Group>
                <Button type="primary" icon="edit"></Button>
                <Button type="primary" icon="share"></Button>
                <Button type="primary" icon="delete"></Button>
              </Button.Group>
            </Tabs.Pane>
          </Tabs>
        </div>
        <div>

        </div>

        <ParamTable/>
      </div>
    );
  }
}

export default App;
