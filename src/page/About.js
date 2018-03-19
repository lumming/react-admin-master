import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import { Icon ,Pagination, Tooltip, Timeline, Divider } from 'antd';

class About extends Component {
	componentDidMount(){
		var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
    myChart.setOption({
        title: { text: 'React ECharts 示例' },
        tooltip: {},
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
	}
  render() {
  	return(
  		<div>
        <div style={{width:500,height:200}} id="main"></div>
        <Pagination defaultCurrent={1} total={50} pageSize={5} />
        <Divider />  
        <Tooltip title="prompt text">
    		<span>Tooltip will show when mouse enter.</span>
  		</Tooltip> 
  		<Divider dashed>With Text</Divider>
  		<Timeline>
		    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
		    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
		    <Timeline.Item color="green">Technical testing 2015-09-01</Timeline.Item>
		    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">Network problems being solved 2015-09-01</Timeline.Item>
		</Timeline>
		<Divider />
      </div>
   );
  }
};

export default About;
