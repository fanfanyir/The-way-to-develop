import React, {Component} from 'react'


class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: ''
        }
    }

    render(){
        return (
            <div>
                <input value={this.state.title} onChange={this.changeHandle.bind(this)}/>
                <button onClick={this.clickHandle.bind(this)}>发送</button>
            </div>
        )
    }

    clickHandle(){
        const title = this.state.title
        const addTitle = this.props.addTitle
        addTitle(title)
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