/*
 * @Author: HxB
 * @Date: 2022-04-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-20 15:22:05
 * @Description: home 页面
 * @FilePath: \react-view\src\pages\Home\index.tsx
 */
import React from 'react';
import './style.less';
import Test from '@components/Test';

const Home = (props: any) => {
  console.log({ props });
  return (
    <div className="home">
      <div style={{ fontSize: '5rem', textAlign: 'center' }}>首页</div>
      <hr />
      <Test linkList={['/settings', '/404']} />
    </div>
  );
};
export default Home;
