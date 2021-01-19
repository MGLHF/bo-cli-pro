import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { registerApplication } from 'single-spa';
import appConfig from '@/single-spa.config';
import { HeaderNavBar, NavBar } from '@main/components';

const MainLayout = () => {
  const { Content, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    appConfig.forEach(item => {
      registerApplication(item.name, () => item.entryPath(), location => item.routerRule(location));
    });
  }, [])
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width={200}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <NavBar collapsed={collapsed} />
      </Sider>
      <Layout className="site-layout">
        <HeaderNavBar
          collapsed={collapsed}
          handleChangeCollapsed={() => setCollapsed(!collapsed)}
        />
        <Content
          className="site-layout-background"
          id='main'
          style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}
        />
      </Layout>
    </Layout>
  );
};

export default MainLayout;