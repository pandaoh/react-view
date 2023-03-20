/*
 * @Author: HxB
 * @Date: 2022-04-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-09-13 11:06:17
 * @Description: 配置页面
 * @FilePath: \react-view\src\pages\Settings\index.tsx
 */
import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import Test from '@components/Test';
import { testRequest } from '@services/user';
import { Button, Input } from 'antd';
import { useAliveController } from 'react-activation';
import AntIcon from '@/components/AntIcon';
import useInterval from '@/tools/hooks/useInterval';

const Settings = (props: any) => {
  const history = useHistory();
  const { getCachingNodes, dropScope, refreshScope } = useAliveController();
  const cachingNodes = getCachingNodes();

  useInterval(
    () => {
      console.log('test interval event');
    },
    2000,
    true,
  );

  return (
    <div style={{ width: '300px', height: '300px', margin: 'auto', paddingTop: '50px' }}>
      <div style={{ fontSize: '5rem', textAlign: 'center' }}>设置页面</div>
      <Input></Input>
      <hr />
      <Test linkList={['/', '/404', '/test/params']} />
      {cachingNodes.map((node) => (
        <Button
          key={node.name}
          style={{ margin: '5px auto', display: 'block' }}
          type="ghost"
          onClick={() => {
            refreshScope(node.name); // 刷新此缓存页
            // dropScope(node.name); // 销毁此缓存页
          }}
        >
          刷新 {node.id}
        </Button>
      ))}
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
