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
        this.deleteTitle = this.deleteTitle.bind(this)
        this.addTitle = this.addTitle.bind(this)
    }

    render(){
        // JSX -> createElement  ->  虚拟DOM(JS 对象) -> 真实的 DOM
        return (
            <div>
                <Input addTitle={this.addTitle}/>
                <List data={this.state.list} deleteTitle={this.deleteTitle}/>
            </div>
        )
    }

    //在组件即将被挂载到页面的时候自动执行
    componentWillMount(){
        console.log("componentWillMount")
    }

     //在组件被挂载到页面之后，自动执行
     componentDidMount(){
        console.log("componentDidMount")
    }

    addTitle(title){
        // const currentList = this.state.list
        // this.setState({
        //     // list: currentList.concat(title)
        //     list: [...currentList,title]
        // })
        this.setState((prevState) => ({   // 可以接收一个参数 prevState， 代表修改之前的 state
            list: [...prevState.list, title]
        }))
    }

    deleteTitle(index){
        // immutable
        // state 不允许我们修改，如果非要改就拷贝一个副本出来改
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return list;
        })
    }
}

export default Todo;