/*
 * @Author: HxB
 * @Date: 2022-04-20 11:24:12
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-09-13 11:03:50
 * @Description: 路由守卫组件
 * @FilePath: \react-view\src\router\AuthRouteDom.tsx
 */
import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import KeepAlive from 'react-activation';

class AuthRoute extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { path, roles } = this.props;

    // alert(JSON.stringify(this.props));

    // 用户角色，全局状态管理可自行引入 redux 。
    const userRoles = ['admin'];

    // 用户已登录，还想去登录页面。禁止
    if (userRoles && path === '/login') {
      return <Redirect to="/settings" />;
    }

    const $AuthRouteDom =
      // https://github.com/CJY0208/react-activation/issues/18
      !this.props.routes ? (
        <KeepAlive
          cacheKey={this.props.name}
          id={this.props.path}
          key={this.props.path}
          name={this.props.path}
          when={() => [this.props?.keepAlive ?? false, this.props?.keepAlive ?? false]}
        >
          <this.props.component {...this.props} routes={this.props.routes} />
        </KeepAlive>
      ) : (
        <this.props.component {...this.props} routes={this.props.routes} />
      );

    // 如果路由无需校验 不管
    if (!roles) {
      return $AuthRouteDom;
    }

    // 用户未登录，且路由需要校验，则跳转到登录页。
    if (!userRoles) {
      return <Redirect to="/login" />;
    }

    // 路由需要校验，且用户已登录。有权限进入，无权限 404 。
    if (roles?.some((role: any) => userRoles?.includes(role))) {
      return $AuthRouteDom;
    } else {
      return <Redirect to="/404" />;
    }
  }
}

export default withRouter(AuthRoute);
