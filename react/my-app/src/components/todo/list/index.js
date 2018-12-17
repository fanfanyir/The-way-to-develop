import React,{ Component } from 'react'

class List extends Component {

    render(){
        const list = this.props.data
        return (
            // const { content } = this.props;
            // content 等价于 this.props.content
            //
            <ul>
                {this.getTodoItem(list)}
            </ul>
        )
    }

    getTodoItem(list){
        return list.map((item, index) => {
            return <li 
                        key={index} 
                        onClick={this.handleDelete.bind(this,index)}
                        dangerouslySetInnerHTML={{__html: item}}
                     
                    >
                     {/* 不转义，直接以 ’h1’ 形式显示出来 */}
                    {/* {item} */}
                    </li>
        })
    }

    handleDelete(index){
        const deleteTitle = this.props.deleteTitle
        deleteTitle(index)
    }
}

export default List