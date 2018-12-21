import React, { Component } from 'react';
import store from './store';
import { connect } from 'react-redux';

class TodoList extends  Component {

  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render (){
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.handleClick}>提交</button>
        </div>
        <ul>
          <li>dell</li>
        </ul>
      </div>
    )
  }

  handleInputChange(e){
    console.log(e.target.value)
  }

  handleClick(){

  }
}

//  把 store 里面的 state 映射到这个组件的 props
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

export default connect(mapStateToProps,null)(TodoList);