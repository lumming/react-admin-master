import React, { Component } from 'react';
import { Carousel } from 'antd';

class Vue extends Component {
	constructor(){
		super();
		this.state = {
			items:[
					{url:"http://img008.hc360.cn/hb/MTQ1OTgzMTI4NzQ3NS0xMjM2MDc3MDU3.jpg",
					name:"图1"},
					{url:"http://www.hagxtsf.com/images/fzlm/jdt/2014/11/19/166be873-2683-4874-9fc6-b44e3e42b641.jpg",
					name:"图2"},
					{url:"http://www.szhlhb.com/data/upload/image/20160831/1472602924443038.jpg",
					name:"图3"},
				]
		};
	}
	
	onChange(a){
		console.log(a);
	}
	render(){
		return(
			<Carousel autoplay afterChange={this.onChange}>
				{
					this.state.items.map(function(value,index){  
				      return (<li key={index}><img src={value.url} alt="测试图" /></li>);  
				    })   
				}
			</Carousel>
			
		)
	}
	
}

export default Vue;