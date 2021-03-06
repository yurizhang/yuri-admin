import React from "react"
//import ReactDOM from "react-dom"
import { HashRouter as Router, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon, Dropdown, Row, Col } from 'antd';
import './admim.css';
import { menus as menusList } from '../../constants/menuslist';  // 菜单数据
import Crouter from "../../routes/index";  //路由数据

const { Header, Content, Footer, Sider } = Layout;
//const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      openKeys:[],
      rootSubmenuKeys : [],
      Breadcrumb:['首页','控制台'],
    };

  }



  onCollapse = (collapsed) => {
    //console.log(collapsed);
    this.setState({ collapsed });
  }
  onTrigg = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }
  //SubMenu 展开/关闭的回调
  onOpenChange = (openKeys) => {
    //console.log(openKeys);  //所有展开的菜单
    //this.setState({ openKeys });
     // submenu keys of first level
    //const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    //最后一次展开的菜单
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);  //用户点子菜单标题事件
    //console.log(latestOpenKey);
    this.setState({
      openKeys: latestOpenKey ? [latestOpenKey] : [],  //只把最后一个打开，其它的都关掉
    });
    // if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    //   this.setState({ openKeys });
    // } else {
      // this.setState({
      //   openKeys: latestOpenKey ? [latestOpenKey] : [],
      // });
    // }
  }
  onClickItem=({ item, key, keyPath })=>{   //用户点菜单项目事件
    let obj={ item, key, keyPath }  
    //key=   这里的key: '/app/ui', title: 'UI', icon: 'scan', key就是路由`
    //keyPath=如果子菜单里面这个数据会超过2，否则就是1 返回 ["/app/ui/buttons", "/app/ui"]
    //console.log( obj )
    //在这里调用面包应该更优雅
    // this.changeBread([''])  //根据key来得到对应的面包

    if(obj.keyPath && obj.keyPath.length<2){  //如果点击的是不是子菜单项目，就关闭所有子菜单。
      this.setState({
        openKeys:  []  //关闭所有打开的子菜单 
      });
    }
  }

 changeBread = (newBread)=>{
     //console.log("修改Breadcrumb");
      //return b;
      //定义这个组件用来修改面包，先转给路由，最后传给icon，button等
      this.setState({
        Breadcrumb:newBread
      });

 }

  //会员下面的菜单
 menu = ()=>{return(
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tuniu.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tuniu.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tuniu.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
)};

  render() {
    let menu=this.menu();
//     const routes = [
//   {
//     path: "/admin",
//     exact: true,
//     sidebar: () => <div>home!</div>,
//     main: () => <h2>Home</h2>
//   },
//   {
//     path: "/admin/bubblegum",
//     sidebar: () => <div>bubblegum!</div>,
//     main: () => <h2>Bubblegum</h2>
//   },
//   {
//     path: "/admin/shoelaces",
//     sidebar: () => <div>shoelaces!</div>,
//     main: () => {return (<h2>Shoelaces2222</h2>)}
//   }
// ];

const renderMenuItem =
    ({ key, title, icon, link, ...props }) =>
        <Menu.Item
            key={key || link}
            {...props}
        >
            <Link to={link || key}>
                {icon && <Icon type={icon} />}
                <span className="nav-text">{title}</span>
            </Link>
        </Menu.Item>;

const renderSubMenu =
    ({ key, title, icon, link, sub, ...props }) =>
        <Menu.SubMenu
            key={key || link}
            title={
                <span>
                    {icon && <Icon type={icon} />}
                    <span className="nav-text">{title}</span>
                </span>
            }
            {...props}
        >
            {sub && sub.map(item => renderMenuItem(item))}
        </Menu.SubMenu>;


    return (
        <Router>
      <Layout style={{ minHeight: '100vh' }} id="components-layout-demo-custom-trigger">
        <Sider
          breakpoint="lg"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />

          <Menu theme="dark" defaultSelectedKeys={['1']} openKeys={this.state.openKeys} onOpenChange={this.onOpenChange}  onClick={this.onClickItem} mode="inline">

          {menusList && menusList.map(item => item.sub && item.sub.length ?
            renderSubMenu(item) : renderMenuItem(item)
          )}

            {/* <Menu.Item key="1">
              <Icon type="pie-chart" />
              <Link to="/admin/bubblegum"><span className="nav-text">Option 1</span></Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Icon type="desktop" />
              <Link to="/admin/shoelaces"><span className="nav-text">Option 2</span></Link>
            </Menu.Item>

            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span><Link to="/admin">首页</Link></span>
            </Menu.Item> */}


          </Menu>
        </Sider>

        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Row type="flex" justify="space-between" align="middle">
                <Col span={22}>
                <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.onTrigg} />
                </Col>
                <Col span={2}>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link">
                        Admin <Icon type="down" />
                        </a>
                    </Dropdown>
                </Col>
            </Row>

          </Header>
          <Content style={{ margin: '0 16px' }}>


            <Breadcrumb style={{ margin: '16px 0' }}>
                {this.state.Breadcrumb.map((e,i)=>(
                    <Breadcrumb.Item key={i}>{e}</Breadcrumb.Item>
                ))}

            </Breadcrumb>


            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {/* 把修改面包的函数传下去 */}
              <Crouter changeBread={this.changeBread}></Crouter>

             {/*
              {routes.map((route, index) => (

                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
              ))}
            */}
            </div>


          </Content>
          <Footer style={{ textAlign: 'center' }}>
            TUNIU Design ©2018 Created by <a href="http://wiki.tuniu.org/display/SRDC/2.Tuniu+Backend+System+UI+Standard+2.0"  rel="noopener noreferrer" target="_blank">ElfTeam</a>
          </Footer>
        </Layout>
      </Layout>
      </Router>
    );
  }
}


export default SiderDemo
//ReactDOM.render(<SiderDemo />, document.getElementById("root"));

// #components-layout-demo-side .logo {
//   height: 32px;
//   background: rgba(255,255,255,.2);
//   margin: 16px;
// }
