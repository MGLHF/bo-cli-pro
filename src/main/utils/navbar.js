import React from 'react';
import {
  UserOutlined,
  UploadOutlined,
} from '@ant-design/icons';

export const NAV_BAR = [
  {
    path: '/',
    key: '/',
    icon: <UserOutlined/>,
    label: 'React项目页面'
  },
  {
    path: '/v',
    key: '/v',
    icon: <UploadOutlined/>,
    label: 'Vue项目页面'
  }
]