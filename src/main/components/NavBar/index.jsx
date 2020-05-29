import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { navigateToUrl } from 'single-spa';
import { NAV_BAR } from '@main/utils/navbar';
import { Menu, Space } from 'antd';
 
const NavBar = ({ location, collapsed }) => {
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
    <>
      <div
        className="logo"
        style={{ color: '#fff', margin: '16px', fontSize: '30px', textAlign: 'center', cursor: 'pointer' }}
      >
        <Space>
          <img style={{ height: '30px' }} src='http://staticfe.oss-cn-beijing.aliyuncs.com/demo/logo512.png' alt="logo"/>
          <div style={{ display: collapsed ? 'none' : 'block' }}>Micro</div>
        </Space>
      </div>
      <Menu
        mode="inline"
        style={{ minHeight: '100%', borderRight: 0 }}
        theme='dark'
        selectedKeys={actKey}
      >
        {NAV_BAR.map((item, index) =>
        item.children ?
        <Menu.SubMenu
          title={<span>{item.icon}<span>{item.label}</span></span>}
          key={item.key}
        >
          {item.children.map((el, i) => (
            <Menu.Item
              key={el.key}
              onClick={(record) => handleClick(record, el.path)}
            >{el.label}</Menu.Item>
          ))}
        </Menu.SubMenu> :
        <Menu.Item
          key={item.key}
          onClick={(record) => handleClick(record, item.path)}
        >
          {item.icon}
          <span>{item.label}</span>
        </Menu.Item>)}
      </Menu>
    </>
  );
};

export default withRouter(NavBar);
