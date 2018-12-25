import React, {Component } from 'react';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';

import { 
  HomeWrapper,
  HomeLeft, 
  HomeRight 
} from './style';

class Home extends Component {
  render(){
    return (
        <HomeWrapper>
          <HomeLeft>
            <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4590/7f1edd154f90446a038d6ecd10bebf6e8929fbf5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
        </HomeWrapper>
    )
  }
}

export default Home;