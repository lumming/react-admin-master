import React, { Component } from 'react';
import { DatePicker } from 'antd';

const dataFormat = 'YYYY/MM/DD';

class ReactJs extends Component {
	onChange(d,ds){
		console.log(d);
		console.log(ds);
	}
	render(){
		return(
			<DatePicker format={dataFormat} onChange={this.onChange} />
		)
	}
	
}

export default ReactJs;