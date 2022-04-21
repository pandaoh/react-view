/*
 * @Author: HxB
 * @Date: 2022-04-20 11:24:12
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-22 09:11:35
 * @Description: 路由守卫
 * @FilePath: \react-view\src\router\AuthRouteDom.tsx
 */
import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';

class AuthRoute extends Component<any, any> {
  private _cancelHistoryListener: any;

  constructor(props: any) {
    super(props);
  }

  /// 相当于整个路由的 beforeEach 守卫
  componentDidMount() {
    // 可定义 beforeEnter 独显路由守卫，在此处使用 this.props.beforeEnter 调用。
    // componentWillMount
    // 进入路由的时候监听路由的变化 如果路由发生变化则进行相应操作
    this._cancelHistoryListener = this.props.history.listen(location => {
      if (this.props.location.pathname !== location.pathname) {
        console.log(`路由发生了变化: 上一条：${this.props.location.pathname} 下一条：${location.pathname}`);
      }
    });
  }

  // 参考 Vue 的路由守卫
  // 我们可以封装基础组件与布局注入路由守卫，并让组件继承此基础组件。
  // 若想定义 beforeRouteUpdate，可以使用基础组件 componentWillUpdate/componentDidUpdate。
  // 可定义基础组件内部自己的守卫 使用 this.props.beforeRouteEnter 调用
  // 可定义基础组件内部自己的守卫 使用 this.props.beforeRouteLeave 调用

  /// 相当于整个路由的 afterEach 守卫
  componentWillUnmount() {
    // 离开路由页面的时候，清除监听。
    this._cancelHistoryListener();
  }

  render() {
    const {path, roles} = this.props;

    // alert(JSON.stringify(this.props));

    // 用户角色，全局状态管理可自行引入 redux。
    const userRoles = ['admin'];

    // 用户已登录，还想去登录页面。禁止
    if (userRoles && path === '/login') {
      return <Redirect to="/settings" />;
    }

    const $AuthRouteDom = <this.props.component {...this.props} routes={this.props.routes} />;

    // 如果路由无需校验 不管
    if (!roles) {
      return $AuthRouteDom;
    }

    // 用户未登录，且路由需要校验，则跳转到登录页。
    if (!userRoles) {
      return <Redirect to="/login" />;
    }

    // 路由需要校验，且用户已登录。有权限进入，无权限 404。
    if (roles?.some((role: any) => userRoles?.includes(role))) {
      return $AuthRouteDom;
    } else {
      return <Redirect to="/404" />;
    }
  }
}

export default withRouter(AuthRoute);
