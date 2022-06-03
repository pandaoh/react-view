/*
 * @Author: HxB
 * @Date: 2022-04-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-06-03 14:11:52
 * @Description: RectangleChart
 * @FilePath: \react-view\src\components\RectangleChart\index.tsx
 */
import { formatDate } from 'js-xxx';
import React, { useEffect, useState } from 'react';
import './style.less';

const RectangleChart = (props: any) => {
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
