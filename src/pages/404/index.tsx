/*
 * @Author: HxB
 * @Date: 2022-08-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-09-09 15:07:13
 * @Description: 404 页面
 * @FilePath: \react-view\src\pages\404\index.tsx
 */
import React from 'react';
import './style.less';

const NotFound = () => {
  return (
    <div data-component="NotFound">
      <div className="container">
        <div className="planet"></div>
        <h1 className="text-info">404 Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
