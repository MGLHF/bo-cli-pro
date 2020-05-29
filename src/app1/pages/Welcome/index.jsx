import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { WelcomeBox } from './index.style';
import appStore from '@/store';
import action from '@/store/action';

const Welcome = () => {
  const [count, setCount] = useState(appStore.getState().count);
  useEffect(() => {
    appStore.on('count', () => {
      setCount(appStore.getState().count);
    })
    return () => appStore.removeAllListeners('count');
  }, [])
  const handleAddCount = () => {
    action.add();
    appStore.emit('count');
  }
  return (
    <WelcomeBox>
      状态共享：{count}
      <Button onClick={() => handleAddCount()}>递增</Button>
      <img src="http://staticfe.oss-cn-beijing.aliyuncs.com/demo/logo512.png" alt="react"/>
    </WelcomeBox>
  );
};

export default Welcome;
