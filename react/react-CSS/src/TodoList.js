import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input,Button,List } from 'antd';
import store from './store/index.js';
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionType'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'

// ReactDOM.render(<Input placeholder="Basic usage" />, mountNode);
class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    store.subscribe(this.handleStoreChange);
  }

  render(){
    return (
      <div style={{margin:'10px'}}>
        <div>
          <Input 
            value={this.state.inputValue} 
            placeholder="todo info" 
            style={{width:'300px',marginRight: '10px'}} 
            onChange={this.handleInputChange}
          />
          <Button type='primary' onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{marginTop:'10px',width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.deleteListItem.bind(this, index)}>{item}</List.Item>)}
        />
      </div>
    )
  }

  handleStoreChange(){
    this.setState(store.getState());
  }

  handleInputChange(e){
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleBtnClick(){
    const action = getAddItemAction()
    store.dispatch(action)
  }

  deleteListItem(index){
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;