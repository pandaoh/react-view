/*
 * @Author: HxB
 * @Date: 2022-04-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-06-03 11:01:36
 * @Description: Header 部分
 * @FilePath: \react-view\src\components\Header\index.tsx
 */
import { formatDate } from 'js-xxx';
import React, { useEffect, useState } from 'react';
import './style.less';

const Header = (props: any) => {
  const [dateTime, setDateTime] = useState<any>({
    time: '',
    date: '',
  });

  let timer;

  useEffect(() => {
    let isUnMount = false;
    if (!isUnMount) {
      setDateTime({
        time: getTime(),
        date: getDate(),
      });
      timer = setInterval(() => {
        setDateTime({
          time: getTime(),
          date: getDate(),
        });
      }, 1000);
    }
    return () => {
      // 组件卸载时清除定时器
      clearInterval(timer);
      isUnMount = true;
    };
  }, []);

  const getTime = () => {
    return formatDate(new Date(), 'hh:ii:ss');
  };

  const getDate = () => {
    return formatDate(new Date(), 'yyyy年mm月dd日');
  };

  return (
    <div className="header">
      <div className="left">
        <div className="logo"></div>
        <div className="title">Hello React View</div>
      </div>
      <div className="right">
        <div className="date-time">
          <span className="time">{dateTime.time}</span>
          <span className="date">{dateTime.date}</span>
        </div>
        <div className="location">广东·深圳</div>
      </div>
      <div className="bottom">{props?.version}</div>
    </div>
  );
};

export default Header;
