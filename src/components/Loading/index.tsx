/*
 * @Author: HxB
 * @Date: 2022-08-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-09-09 15:23:24
 * @Description: Loading 组件
 * @FilePath: \react-view\src\components\Loading\index.tsx
 */
import React from 'react';
import './style.less';

const Loading = () => {
  return (
    <div className="loading-container" data-component="Loading">
      <div className="ghost">
        {/* 身体部分 */}
        <div className="body">
          <div className="face">
            <div className="eye left"></div>
            <div className="eye right"></div>
            <div className="smile"></div>
            {/* 腮红 */}
            <div className="rosy left"></div>
            <div className="rosy right"></div>
          </div>
          {/* 手臂 */}
          <div className="arm left"></div>
          <div className="arm right"></div>
          {/* 尾部 */}
          <div className="bottom">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {/* 月步 */}
        <div className="loader"></div>
        {/* 影子 */}
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default Loading;
