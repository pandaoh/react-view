/*
 * @Author: HxB
 * @Date: 2022-08-26 13:47:55
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-09-09 15:11:36
 * @Description: 封装 ant design icon，方便根据字符串渲染图标。
 * @FilePath: \react-view\src\components\AntIcon\index.tsx
 */
import React from 'react';
import * as Icons from '@ant-design/icons';

const AntIcon = (props: { icon: string; [key: string]: any }) => {
  const { icon } = props;
  const antIcon: { [key: string]: any } = Icons;
  return React.createElement(antIcon[icon], props);
};

export default AntIcon;
