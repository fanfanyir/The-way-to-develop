import React, {Component, Fragment} from 'react';
import PropTypes  from 'prop-types';
import Test from '../test.js'

class Input extends Component {
    constructor(props){
        super(props)
        // 当组件的 state 或者 props 发生改变的时候， render 函数就会重新执行
        this.state = {
            title: ''
        }
        this.changeHandle = this.changeHandle.bind(this)
        this.clickHandle = this.clickHandle.bind(this)
    }

    // render(){
    //     return (
    //         <div>
    //             <input value={this.state.title} onChange={this.changeHandle.bind(this)}/>
    //             <button onClick={this.clickHandle.bind(this)}>发送</button>
    //         </div>
    //     )
    // }

    render(){
        return (
            <Fragment>
                {/* */}
                {
                    // 单行注释
                }
                <label htmlFor="insertArea">输入内容：</label>
                <input 
                    id="insertArea"
                    className='input'
                    value={this.state.title} 
                    onChange={this.changeHandle}/>
                <button onClick={this.clickHandle}>发送</button>
                <Test content={this.state.title}></Test>
            </Fragment>
        )
    }

    clickHandle(){
        const title = this.state.title

        const addTitle = this.props.addTitle        // 函数
        addTitle(title)     // 将输入的内容放进数组里

        this.setState(() => ({
            title: ''
        }))
    }

    // changeHandle(e){
    //     this.setState({
    //         title: e.target.value
    //     })
    // }
    changeHandle(e){
        const value = e.target.value
        this.setState(() => ({
                title: value
            }))
    }
}

Input.propTypes = {
    addTitle: PropTypes.func.isRequired   //必填，如果没办法传也可以设置默认值---defalutProps
}

export default Input