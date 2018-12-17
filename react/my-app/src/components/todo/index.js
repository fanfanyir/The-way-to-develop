import React,{ Component } from 'react'
import Input from './input/index.js'
import List from './list/index.js'
import './style.css'

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: []
        }
    }

    render(){
        return (
            <div>
                <Input addTitle={this.addTitle.bind(this)}/>
                <List data={this.state.list} deleteTitle={this.deleteTitle.bind(this)}/>
            </div>
        )
    }

    addTitle(title){
        const currentList = this.state.list
        this.setState({
            // list: currentList.concat(title)
            list: [...currentList,title]
        })
    }

    deleteTitle(index){
        // immutable
        // state 不允许我们修改，如果非要改就拷贝一个副本出来改
        const list = [...this.state.list]
        list.splice(index,1);

        this.setState({
            list: list
        })
    }
}

export default Todo;