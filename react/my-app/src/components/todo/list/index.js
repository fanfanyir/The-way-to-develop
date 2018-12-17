import React,{ Component } from 'react'

class List extends Component {

    render(){
        const list = this.props.data
        return (
            <ul>
                {
                    list.map((item, index) => {
                        return <li 
                                    key={index} 
                                    onClick={this.handleDelete.bind(this,)}
                                    dangerouslySetInnerHTML={{__html: item}}
                                >
                                {/* {item} */}
                                </li>
                    })
                }
            </ul>
        )
    }

    handleDelete(index){
        const deleteTitle = this.props.deleteTitle
        deleteTitle(index)
    }
}

export default List