import React,{ Component } from 'react'

class List extends Component {

    render(){
        const list = this.props.data
        return (
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        )
    }
}

export default List