/*
 * @Author: HxB
 * @Date: 2022-04-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-07-19 20:07:01
 * @Description: Footer 部分
 * @FilePath: \react-view\src\components\Footer\index.tsx
 */
import React from 'react';
import './style.less';

const Footer = () => {
  return <div className="footer">CopyRight © 2022 – {new Date().getFullYear()} LeoHe</div>;
};

export default Footer;
