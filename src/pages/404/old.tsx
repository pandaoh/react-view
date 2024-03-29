/*
 * @Author: HxB
 * @Date: 2022-04-13 10:46:14
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-09-09 15:07:09
 * @Description: 404 页面
 * @FilePath: \react-view\src\pages\404\old.tsx
 */
import Test from '@components/Test';
import React, { Component } from 'react';

export default class NotFound extends Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log(this.props.history);
  }

  render() {
    return (
      <div>
        <div style={{ fontSize: '5rem', textAlign: 'center' }}>404</div>
        <hr />
        <Test linkList={['/', '/settings']} />
      </div>
    );
  }
}
