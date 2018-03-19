import React, {
	Component
} from 'react';
//import logo from './logo.svg';
import './App.css';
//import Menu from './component/menu';
//import Head from './component/head';
//import Foot from './component/foot';
import { Link } from 'react-router';
import { Layout, Menu, Icon, BackTop } from 'antd';
const {
	Header,
	Content,
	Footer,
	Sider
} = Layout;

class App extends Component {
	//	constructor(props){
	//		super(props);
	//		//this.backTop = this.backTop.bind(this);
	//	}
	backTop() {
		console.log("触发了返回顶部");
	}
	render() {
		return(
			<div>	
			<Layout>
			    <Sider
			      breakpoint="lg"
			      collapsedWidth="0"
			      onCollapse={(collapsed, type) => { console.log(collapsed, type); }}>
			      <Menu theme="dark" mode="inline">
			        <Menu.Item key="1">			          
			        <Link to="/home" activeClassName="active">
			        	<Icon type="home" />主页
			        </Link>
			        </Menu.Item>
			        <Menu.Item key="2">
			        <Link to="/angular" activeClassName="active">
			        	<Icon type="tool" />安哥拉兔
			        </Link>
			        </Menu.Item>
			        
			        <Menu.Item key="3">
			        <Link to="/vue" activeClassName="active">
			          <Icon type="dashboard" />微友谊
			        </Link>  
			        </Menu.Item>
			        
			        <Menu.Item key="4">
			        <Link to="/react" activeClassName="active">
			          <Icon type="chrome" />瑞爱科特
			        </Link>  
			        </Menu.Item>
			        
			      </Menu>
			    </Sider>
			    <Layout>
			      <Header style={{ background: '#fff', fontSize:18 ,padding:'0 20px'}}>React Admin : react-router + axios + antd + echart</Header>
			      <Content style={{ margin: '24px 16px 0' }}>
			        <div style={{ padding: 20, background: '#fff', minHeight: 660 }}>{this.props.children}
			        </div>
			      </Content>
			      <Footer style={{ textAlign: 'center' }}>
			        Ant Design ©2018 Created by Lmm.
			      </Footer>
			    </Layout>
			  </Layout>							
			  <BackTop visibilityHeight="100" onClick={this.backTop} />	
			  </div>
		)
	}
};

export default App;