/*
 * @Author: HxB
 * @Date: 2022-04-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-09-09 15:35:40
 * @Description: 配置页面
 * @FilePath: \react-view\src\pages\Settings\index.tsx
 */
import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import Test from '@components/Test';
import { testRequest } from '@services/user';
import { Button } from 'antd';
import AntIcon from '@/components/AntIcon';

const Settings = (props: any) => {
  const history = useHistory();

  return (
    <div>
      <div style={{ fontSize: '5rem', textAlign: 'center' }}>设置页面</div>
      <hr />
      <Test linkList={['/', '/404', '/test/params']} />
      <Button
        style={{ margin: 'auto', display: 'block' }}
        onClick={() => {
          testRequest();
        }}
        type="primary"
      >
        测试请求
        <AntIcon icon="BugFilled" spin={true} />
      </Button>
      {/* <Link to="/">返回首页</Link> */}
      {/* <Link to={{pathname: '/', state: {name: 'state'}, search: 'name=search', query: {name: 'query'}}}>返回首页</Link> */}
      {/* <NavLink to="/404">404</NavLink> */}
    </div>
  );
};
export default Settings;
