import React, { Component } from 'react';
import logo from '../test/logo.svg';
import '../test/App.css';
// import Button from "../components/Button"
// import Icon from "../components/Icon"
//import Dialog from "../components/Dialog"
//按需加载
import {Dialog} from '../../components/ishow/index.js'; //一次性加载完


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dialogVisible: false //控制dialog，true显示，false关闭
    };
  }

  render() {
    return (
      <div className="App">
     {/* dialog区 */}
     <div htmlFor="dialog" className="dialog">
      <Button type="text" onClick={ () => this.setState({ dialogVisible: true }) }>点击打开 Dialog</Button>
      <Dialog
        title="提示"
        size="small"
        modal={true}
        visible={ this.state.dialogVisible }
        onOpen={()=>console.log("open")}

        onCancel={ () => {this.setState({ dialogVisible: false }); alert("Cancel")} }
        lockScroll={ true }
      >
        <Dialog.Body>
          <span>这是一段信息</span>
        </Dialog.Body>

        <Dialog.Footer className="dialog-footer">
          <Button onClick={ () => this.setState({ dialogVisible: false }) }>取消</Button>
          <Button type="primary" onClick={ () => this.setState({ dialogVisible: false }) }>确定</Button>
        </Dialog.Footer>
      </Dialog>
    </div>

    <table className="grid" align="center">
	<thead>
		<tr>
			<th>参数</th>
			<th>说明</th>
			<th>类型</th>
			<th>可选值</th>
			<th>默认值</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>title</td>
			<td>Dialog 的标题</td>
			<td>string</td>
			<td>—</td>
			<td>—</td>
		</tr>
		<tr>
			<td>size</td>
			<td>Dialog 的大小</td>
			<td>string</td>
			<td>tiny/small/large/full</td>
			<td>small</td>
		</tr>
		<tr>
			<td>top</td>
			<td>Dialog CSS 中的 top 值（仅在 size 不为 full 时有效）</td>
			<td>string</td>
			<td>—</td>
			<td>15%</td>
		</tr>
		<tr>
			<td>modal</td>
			<td>是否需要遮罩层</td>
			<td>boolean</td>
			<td>—</td>
			<td>true</td>
		</tr>
		<tr>
			<td>lockScroll</td>
			<td>是否在 Dialog 出现时将 body 滚动锁定</td>
			<td>boolean</td>
			<td>—</td>
			<td>true</td>
		</tr>
		<tr>
			<td>customClass</td>
			<td>Dialog 的自定义类名</td>
			<td>string</td>
			<td>—</td>
			<td>—</td>
		</tr>
		<tr>
			<td>closeOnClickModal</td>
			<td>是否可以通过点击 modal 关闭 Dialog</td>
			<td>boolean</td>
			<td>—</td>
			<td>true</td>
		</tr>
		<tr>
			<td>closeOnPressEscape</td>
			<td>是否可以通过按下 ESC 关闭 Dialog</td>
			<td>boolean</td>
			<td>—</td>
			<td>true</td>
		</tr>
	</tbody>
</table>

<table className="grid" align="center">
  <thead><tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead><tbody><tr>
<td>onCancel</td>
<td>Dialog 关闭的回调</td>
<td>—</td>
</tr>
<tr>
<td>onOpen</td>
<td>Dialog 打开的回调</td>
<td>—</td>
</tr>
</tbody></table>


      </div>
    );
  }
}

export default App;
