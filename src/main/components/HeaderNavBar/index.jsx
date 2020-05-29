import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import { navigateToUrl } from 'single-spa';
import { NAV_BAR } from '@main/utils/navbar';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const HeaderNavBar = ({
  collapsed,
  handleChangeCollapsed,
}) => {
  const { Header } = Layout;
  const [actKey, setActKey] = useState(['/']);
  const handleClick = (record, path) => {
    setActKey([record.key]);
    navigateToUrl(path);
  }
  useEffect(() => {
    const { pathname } = location;
    setActKey([pathname]);
  }, [])
  return (
    <Header
      className="site-layout-background"
      style={{ padding: 0, background: '#fff', display: 'flex', alignItems: 'center' }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        style: { padding: '0 10px' },
        onClick: () => handleChangeCollapsed(),
      })}
      <Menu
        theme="light"
        mode="horizontal"
        selectedKeys={actKey}
      >
        {NAV_BAR.map((item, index) =>
        item.children ?
        <Menu.SubMenu title={item.label} key={item.key}>
          {item.children.map((el, i) => (
            <Menu.Item key={el.key} onClick={(record) => handleClick(record, el.path)}>{el.label}</Menu.Item>
          ))}
        </Menu.SubMenu> :
        <Menu.Item key={item.key} onClick={(record) => handleClick(record, item.path)}>{item.label}</Menu.Item>)}
      </Menu>
    </Header>
  );
};

export default withRouter(HeaderNavBar);
