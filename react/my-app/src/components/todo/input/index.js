import React, {Component, Fragment} from 'react'

class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: ''
        }
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
                onChange={this.changeHandle.bind(this)}/>
                <button onClick={this.clickHandle.bind(this)}>发送</button>
            </Fragment>
        )
    }

    clickHandle(){
        const title = this.state.title

        const addTitle = this.props.addTitle        // 函数
        addTitle(title)     // 将输入的内容放进数组里

        this.setState({
            title: ''
        })
    }

    changeHandle(e){
        this.setState({
            title: e.target.value
        })
    }
}

export default Input