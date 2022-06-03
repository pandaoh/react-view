/*
 * @Author: HxB
 * @Date: 2022-04-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-06-03 11:06:10
 * @Description: Footer 部分
 * @FilePath: \react-view\src\components\Footer\index.tsx
 */
import { formatDate } from 'js-xxx';
import React, { useEffect, useState } from 'react';
import './style.less';

const Footer = (props: any) => {
  return <div className="footer">CopyRight © 2022 – {new Date().getFullYear()} LeoHe</div>;
};

export default Footer;
