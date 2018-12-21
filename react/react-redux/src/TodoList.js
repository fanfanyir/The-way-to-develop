import React, { Component } from 'react';
import store from './store';
import { connect } from 'react-redux';

class TodoList extends  Component {

  constructor(props){
    super(props);
    this.state = store.getState();
  }

  render (){
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
          <button onClick={this.props.handleClick}>提交</button>
        </div>
        <ul>
          <li>dell</li>
        </ul>
      </div>
    )
  }
}

//  把 store 里面的 state 映射到这个组件的 props
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

// store.dispatch, props
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e){
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleClick(){
      const action = {
        type: 'add_item_list'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);