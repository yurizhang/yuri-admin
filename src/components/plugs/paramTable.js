import React, { Component } from 'react';
import '../test/App.css';
// import Button from "../components/Button"
// import Icon from "../components/Icon"
//import Dialog from "../components/Dialog"
//按需加载
//import {Button,ButtonGroup,Tabs,TabPane,Collapse,CollapseItem,Message} from '../../components/ishow/index.js'; //一次性加载完

class ParamTable extends Component {

  render() {
    return (

        <table className="grid" align="center">
           <thead><tr>
           <th>参数</th>
           <th>说明</th>
           <th>类型</th>
           <th>可选值</th>
           <th>默认值</th>
         </tr>
         </thead>
         <tbody>
           <tr>
           <td>size</td>
           <td>尺寸</td>
           <td>string</td>
           <td>large,small,mini</td>
           <td>—</td>
         </tr>
             <tr>
               <td>type</td>
               <td>类型</td>
               <td>string</td>
               <td>primary,success,warning,danger,info,text</td>
               <td>—</td>
             </tr>
             <tr>
               <td>plain</td>
               <td>是否朴素按钮</td>
               <td>Boolean</td>
               <td>true,false</td>
               <td>false</td>
             </tr>
             <tr>
               <td>loading</td>
               <td>是否加载中状态</td>
               <td>Boolean</td>
               <td>—</td>
               <td>false</td>
             </tr>
             <tr>
               <td>disabled</td>
               <td>禁用</td>
               <td>boolean</td>
               <td>true, false</td>
               <td>false</td>
             </tr>
             <tr>
               <td>icon</td>
               <td>图标，已有的图标库中的图标名</td>
               <td>string</td>
               <td>—</td>
               <td>—</td>
             </tr>
             <tr>
               <td>nativeType</td>
               <td>原生 type 属性</td>
               <td>string</td>
               <td>button,submit,reset</td>
               <td>button</td>
             </tr>
           </tbody></table>

    );
  }
}

export default ParamTable;
