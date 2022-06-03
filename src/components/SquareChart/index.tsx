/*
 * @Author: HxB
 * @Date: 2022-04-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-06-03 14:10:10
 * @Description: SquareChart
 * @FilePath: \react-view\src\components\SquareChart\index.tsx
 */
import { formatDate } from 'js-xxx';
import React, { useEffect, useState } from 'react';
import './style.less';

const SquareChart = (props: any) => {
  return (
    <div className="squire-chart">
      <div className="tag-card">
        <span>A</span>
      </div>
      <div className="tag-card">
        <span>B</span>
      </div>
      <div className="tag-card">
        <span>C</span>
      </div>
    </div>
  );
};

export default SquareChart;
