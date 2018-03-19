import React, { Component } from 'react';
import axios from 'axios';

class Detail extends Component {
	constructor(props){
		super(props);
		this.state = {
			detail:[],
			id:this.props.params.id
		};
//		this.get = this.get.bind(this);
//		this.get();
		console.log(this.props.params);
		console.log(this.props.location)
		
	}
	componentDidMount(){
		this.get();
	}
	get(){
		axios.get("https://cnodejs.org/api/v1/topic/"+this.state.id).then((res) => {
			console.log(res.data.data);
			const detail = res.data.data;
			this.setState({detail});
		}).catch((err) => {
			console.log(err);
		})
	}
	createMarkup() {
	  	return ;
	}
	render() {
	  	return(
			<div>
				<h3>{this.state.detail.title}</h3>
				<p>{this.state.detail.create_at}</p>	
				<div className="set-img" dangerouslySetInnerHTML={{__html:this.state.detail.content}} />;
			</div>
	   );
	  }
};

export default Detail;
