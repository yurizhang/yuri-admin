import React, { Component } from 'react';
import '../test/App.css';
import ViewCode from '../plugs/viewCode';
// import Button from "../components/Button"
// import Icon from "../components/Icon"
//import Dialog from "../components/Dialog"
//按需加载
import {
          Button,
          Radio,RadioGroup,
          Tabs,TabPane,
          Collapse,CollapseItem,
          CheckBox,
          CheckBoxGroup,
          Input,
          Select
       } from '../../components/ishow/index.js'; //一次性加载完
import ParamTable from '../plugs/paramTable';
Tabs.Pane = TabPane;
Collapse.Item = CollapseItem;
Radio.Group = RadioGroup;
CheckBox.Group = CheckBoxGroup;

// Select.Option = Option;
// Select.OptionGroup = OptionGroup;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      radioCheckedValue: 1,
      radioGroupCheckedValue:'suz',
      checkList: ['复选框 A', '选中且禁用'],
      checkAll: false,
      cities: ['上海', '北京', '广州', '深圳'],
      checkedCities: ['上海', '北京'],
      isIndeterminate: true,



      options: [{
      value: '选项1',
      label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
      
    }
  }


  //for Radio
  changeRadio(value) {
    this.setState({ radioCheckedValue:value});
  }
  changeRadioGroup(radioGroupCheckedValue) {
    this.setState({ radioGroupCheckedValue});
  }
  //for CheckBox

  handleCheckAllChange(checked) {
    const checkedCities = checked ? ['上海', '北京', '广州', '深圳'] : [];

    this.setState({
      isIndeterminate: false,
      checkAll: checked,
      checkedCities: checkedCities,
    });
  }

  handleCheckedCitiesChange(value) {
    const checkedCount = value.length;
    const citiesLength = this.state.cities.length;

    this.setState({
      checkedCities: value,
      checkAll: checkedCount === citiesLength,
      isIndeterminate: checkedCount > 0 && checkedCount < citiesLength,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>FormElement 表单元素</h1>
        <h3>常用的表单元素如下：</h3>
        <div>
          <Tabs type="card" value="1" style={{marginBottom:40}}>
            <Tabs.Pane label="Radio" name="1">
              <div>
                <h2>单选框</h2>
                <p>要使用 Radio 组件，需要设置value绑定变量，可以通过checked来指定Radio的选中状态。</p>
                <Radio value="1" checked={this.state.radioCheckedValue === 1} onChange={this.changeRadio.bind(this)}>备选项</Radio>
                <Radio value="2" checked={this.state.radioCheckedValue === 2} onChange={this.changeRadio.bind(this)}>备选项</Radio>
                <ViewCode/>
              </div>
              <div>
                <h2>禁用状态</h2>
                <p>设置disabled属性，它接受一个Boolean，true为禁用。</p>
                <Radio value="1" disabled={true}>备选项</Radio>
                <Radio value="2" disabled={true}>备选项</Radio>
                <ViewCode/>
              </div>
              <div>
                <h2>单选框组</h2>
                <p>适用于在多个互斥的选项中选择的场景</p>
                <Radio.Group value={this.state.radioGroupCheckedValue} onChange={this.changeRadioGroup.bind(this)}>
                    <Radio value="peppa">小猪佩奇</Radio>
                    <Radio value="daniel">小狗丹尼</Radio>
                    <Radio value="suz">小羊苏西</Radio>
                </Radio.Group>
                <ViewCode/>
              </div>
            </Tabs.Pane>
            <Tabs.Pane label="Checkbox" name="2">
              <div>
                  <h2>多选框</h2>
                  <p>简单的Checkbox，使用checked切换选中状态。</p>
                  <CheckBox checked>备选项</CheckBox>
                  <ViewCode/>
              </div>
              <div>
                  <h2>多选框组</h2>
                  <p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中的项。<br/>禁用状态加disabled属性</p>
                  <CheckBox.Group value={this.state.checkList}>
                   <CheckBox label="复选框 A"></CheckBox>
                   <CheckBox label="复选框 B"></CheckBox>
                   <CheckBox label="复选框 C"></CheckBox>
                   <CheckBox label="禁用" disabled></CheckBox>
                   <CheckBox label="选中且禁用" disabled></CheckBox>
                 </CheckBox.Group>
                 <ViewCode/>
              </div>
              <div>
                  <h2>全选按钮</h2>
                  <p>indeterminate属性实现全选的效果</p>
                  <CheckBox
                     checked={this.state.checkAll}
                     indeterminate={this.state.isIndeterminate}
                     onChange={this.handleCheckAllChange.bind(this)}>全选</CheckBox>
                  <div style={{margin: '15px 0'}}></div>
                  <CheckBox.Group
                   value={this.state.checkedCities}
                   onChange={this.handleCheckedCitiesChange.bind(this)}>
                     {
                       this.state.cities.map((city, index) =>
                         <CheckBox key={index} label={city}></CheckBox>
                       )
                     }
                 </CheckBox.Group>
                 <ViewCode/>
              </div>
              <div>
                <h2>可选数量限制</h2>
                <p>min：最少可选数量 max：最大可选数量</p>
                <CheckBox.Group
                min="1"
                max="2"
                value={this.state.checkedCities}
                onChange={this.handleCheckedCitiesChange.bind(this)}>
                {
                  this.state.cities.map((city, index) =>
                    <CheckBox key={index} label={city}></CheckBox>
                  )
                }
                </CheckBox.Group>
                <ViewCode/>
              </div>
            </Tabs.Pane>
            <Tabs.Pane label="Input" name="3">
              <h2>输入框</h2>
              <h3>基础用法</h3>
              <Input placeholder="请输入内容" style={{marginBottom:20}}/>
              <h3>disabled属性：禁用</h3>
              <Input placeholder="请输入内容" disabled  style={{marginBottom:20}}/>
              <h3>带有icon的输入框</h3>
              <Input placeholder="请输入时间" icon="time"  style={{marginBottom:20}}/>
              <h3>自适应大小的输入框</h3>
              <p>autosize属性：设置为boolean，true为自适应大小</p>
              <Input
                type="textarea"
                autosize={true}
                placeholder="请输入内容"
                style={{marginBottom:20}}
              />
              <p>autosize属性：设置为object，minRows为最小行数，maxRows为最大行数</p>
              <Input
                type="textarea"
                autosize={{ minRows: 2, maxRows: 4}}
                placeholder="请输入内容"
                style={{marginBottom:20}}
              />
              <div>
                <h3>复合输入框</h3>
                <p>可前置（prepend）或后置元素（append），一般为标签或按钮</p>
                <Input placeholder="请输入内容" prepend="Http://" />
                <Input placeholder="请输入内容" append=".com" />
                <Input placeholder="请输入内容" prepend={
                  
                  <Select value="">
                    {
                      ['餐厅名', '订单号', '用户电话'].map((item, index) => <Select.Option key={index} label={item} value={index} />)
                    }
                  </Select>


                } append={<Button type="primary" icon="search">搜索</Button>} />

              </div>
            </Tabs.Pane>
            <Tabs.Pane label="Select" name="4">
               <div>.ishow-tabs__content 将tab样式里的overflow:hidden 去掉，就可以让浮动菜单全部出来了</div>
             <div style={{minHeight:150}}>
                 <Select value={this.state.value}>
                 {
                   this.state.options.map(el => {
                     return <Select.Option key={el.value} label={el.label} value={el.value} />
                   })
                 }
               </Select>
                </div>

                

            </Tabs.Pane>
            <Tabs.Pane label="DateTimePicker" name="5">

            </Tabs.Pane>
            <Tabs.Pane label="Upload" name="6">

            </Tabs.Pane>
          </Tabs>
        </div>
        <div>
        

                 <Select value={this.state.value}>
                 {
                   this.state.options.map(el => {
                     return <Select.Option key={el.value} label={el.label} value={el.value} />
                   })
                 }
               </Select>


                
        </div>

      <ParamTable/>
      </div>
    );
  }
}

export default App;
