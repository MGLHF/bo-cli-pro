import React from 'react';
import { LayoutBox } from './index.style';

const Layout = ({
  children,
}) => {
  return (
    <LayoutBox>
      { children }
    </LayoutBox>
  );
};

export default Layout;