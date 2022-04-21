/*
 * @Author: HxB
 * @Date: 2022-04-20 11:48:26
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-21 15:55:52
 * @Description: 登录页面
 * @FilePath: \react-view\src\pages\Login\index.tsx
 */
import Test from '@components/Test';
import React from 'react';

const Login = () => {
  return (
    <div>
      <div style={{fontSize: '5rem', textAlign: 'center'}}>登录</div>
      <hr />
      <Test linkList={['/', '/404', '/settings']} />
    </div>
  );
};
export default Login;
