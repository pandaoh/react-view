/*
 * @Author: HxB
 * @Date: 2022-04-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-07-19 20:08:02
 * @Description: SquareChart
 * @FilePath: \react-view\src\components\SquareChart\index.tsx
 */
import React from 'react';
import './style.less';

const SquareChart = () => {
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
