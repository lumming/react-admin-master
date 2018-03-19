import React, { Component } from 'react';
import axios from 'axios';
import { List, Spin } from 'antd';
import { Link } from 'react-router';

class Home extends Component {
	constructor(){
		super();
		this.state = {
			posts:[],
			loading:true
		};
		this.get = this.get.bind(this);
	}
	componentDidMount(){
		this.get();
	}
	get(){
		axios.get("https://cnodejs.org/api/v1/topics").then((res) => {
			console.log(res.data.data);
			this.setState({
				posts:res.data.data,
				loading:false
			});
		}).catch((err) => {
			console.log(err);
		})
	}
	seeDetl(d){
		console.log(d);
	}
	render() {
	  	return(
//	        	<ul>
//		          	{this.state.posts.map(post =>
//		            <li key={post.id}>{post.title}</li>
//		          	)}		          			          	
//		        </ul>
				<Spin size="large" spinning={this.state.loading}>
		        <List
		          split={true}
			      size="small"
			      header={<div>Cnode社区</div>}
			      bordered={true}
			      dataSource={this.state.posts}
			      renderItem={item => (<List.Item style={{cursor:"pointer"}}>
			      <Link to={{
			      	pathname: `/home/detail/${item.id}`,
			      	state: 'hello'
			      }}>{item.title}
			        </Link></List.Item>)}
			    />
			    </Spin>

	   );
	  }
};

export default Home;
