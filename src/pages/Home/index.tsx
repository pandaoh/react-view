/*
 * @Author: HxB
 * @Date: 2022-04-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-06-03 12:56:27
 * @Description: home 页面
 * @FilePath: \react-view\src\pages\Home\index.tsx
 */
import React, { useEffect, useState } from 'react';
import './style.less';
import Footer from '@/components/Footer';
import LogChart from '@/components/LogChart';
import SquareChart from '@/components/SquareChart';
import RectangleChart from '@/components/RectangleChart';
import Header from '@/components/Header';

const Home = () => {
  // const [running, setRunning] = useState<boolean>(true);

  // setInterval(() => {
  //   setRunning(!running);
  // }, 8000);

  return (
    <div className="home">
      <Header />
      <LogChart />
      <SquareChart />
      <RectangleChart />
      <Footer />
    </div>
  );
};

export default Home;
