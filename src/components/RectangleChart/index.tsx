/*
 * @Author: HxB
 * @Date: 2022-04-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-07-19 20:07:20
 * @Description: RectangleChart
 * @FilePath: \react-view\src\components\RectangleChart\index.tsx
 */
import React from 'react';
import './style.less';

const RectangleChart = () => {
  return (
    <div className="rectangle-chart">
      <div className="content-card">
        <span>第1条数据</span>
      </div>
      <div className="content-card">
        <span>第2条数据</span>
      </div>
      <div className="content-card">
        <span>第3条数据</span>
      </div>
      <div className="content-card">
        <span>第4条数据</span>
      </div>
      <div className="content-card">
        <span>第5条数据</span>
      </div>
    </div>
  );
};

export default RectangleChart;
