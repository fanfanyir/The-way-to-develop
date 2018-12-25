import React, {Component } from 'react';
import { connect } from 'react-redux';
import { 
  TopicWarpper,
  TopicItem
} from '../style';

class Topic extends Component {
  render(){
    return (
      <TopicWarpper>
        {
          this.props.list.map((item) => {
            return (
              <TopicItem>
                <img 
                  className='topic-pic'
                  key={item.get('id')}
                  src={item.get('imgUrl')}
                />
                {item.get('title')}
            </TopicItem>
            )
          })
        }
      </TopicWarpper>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Topic);