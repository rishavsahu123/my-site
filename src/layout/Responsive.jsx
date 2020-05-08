import  React  from "react";
import { Layout, Menu } from 'antd';
import { BookOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
export default function ResponsiveLayout() {
return(
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      {/* eslint-disable-next-line */}
      <img className="side-header-pic" src="/img/my_pic.png"></img>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={ <BookOutlined />}>
          Blogs
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background">
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2020 Created by Rishav Sahu</Footer>
    </Layout>
  </Layout>
)}