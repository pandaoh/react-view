/*
 * @Author: HxB
 * @Date: 2022-04-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-20 11:01:33
 * @Description: 配置页面
 * @FilePath: \react-view\src\pages\Settings\index.tsx
 */
import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Test from '@components/Test';
import {testRequest} from '@services/user';

const Settings = (props: any) => {
  const history = useHistory();
  testRequest();
  return (
    <div>
      <div style={{fontSize: '5rem', textAlign: 'center'}}>设置页面</div>
      <hr />
      <Test linkList={['/', '/404', '/test/params']} />
      {/* <Link to="/">返回首页</Link> */}
      {/* <Link to={{pathname: '/', state: {name: 'state'}, search: 'name=search', query: {name: 'query'}}}>返回首页</Link> */}
      {/* <NavLink to="/404">404</NavLink> */}
    </div>
  );
};
export default Settings;
