import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { NavBarBox } from './index.style';
import { navigateToUrl } from 'single-spa';
import { NAV_BAR } from '@main/utils/navbar';
import { Menu } from 'antd';
 
const NavBar = ({ location }) => {
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
    <NavBarBox>
      <Menu
        style={{ minHeight: '100%' }}
        theme='dark'
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
    </NavBarBox>
  );
};

export default withRouter(NavBar);
