import React from 'react';
import { MainLayoutBox } from './index.style';
import { Header, NavBar } from '@main/components';

const MainLayout = () => {
  return (
    <MainLayoutBox>
      <Header></Header>
      <section>
        <NavBar></NavBar>
        <div id="main"></div>
      </section>
    </MainLayoutBox>
  );
};

export default MainLayout;