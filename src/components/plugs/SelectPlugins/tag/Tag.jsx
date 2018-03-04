import React from 'react';
import PropTypes from 'prop-types';
import {default as Component,View} from '../../index.js'; //提供style, classname方法
import Transition from '../../../ishow/Message/transition';

export default class Tag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };
  }

  handleClose() {
    this.setState({
      visible: false
    }, () => {
      if (this.props.onClose) {
        this.props.onClose();
      }
    });
  }

  render() {
    const { type, hit, closable, closeTransition, color } = this.props;

    return(
      
        <View key={this.state.visible} show={this.state.visible}>
          <span
            style={this.style({
              backgroundColor: color
            })}
            className={this.className('el-tag', type && `el-tag--${type}`, {
              'is-hit': hit
            })}
          >
            {this.props.children}
            { closable && <i className="el-tag__close el-icon-close" onClick={this.handleClose.bind(this)}></i> }
          </span>
        </View>
      
    )
  }
}

Tag.propTypes = {
  closable: PropTypes.bool,
  type: PropTypes.string,
  hit: PropTypes.bool,
  color: PropTypes.string,
  closeTransition: PropTypes.bool,
  onClose: PropTypes.func
}
