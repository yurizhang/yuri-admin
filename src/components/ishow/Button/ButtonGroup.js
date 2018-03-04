import React from 'react';
import {default as Component} from '../../plugs/index.js'; //提供style, classname方法
import '../../css/Button.css';


export default class ButtonGroup extends Component {
  render() {
    return (
      <div style={this.style()} className={this.className('ishow-button-group')}>
        {this.props.children}
      </div>
    )
  }
}
