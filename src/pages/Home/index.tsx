/*
 * @Author: HxB
 * @Date: 2022-04-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-07-19 19:25:34
 * @Description: home 页面
 * @FilePath: \react-view\src\pages\Home\index.tsx
 */
import React, { useEffect, useState } from 'react';
import './style.less';
import { useDispatch, useSelector, connect } from 'react-redux';
import Footer from '@/components/Footer';
import LogChart from '@/components/LogChart';
import SquareChart from '@/components/SquareChart';
import RectangleChart from '@/components/RectangleChart';
import Header from '@/components/Header';
// redux 中的 useSelector 和 useDispatch Hooks 可以用于获取 store 中的 state 和 dispatch 函数。(第二种方式)
import { actions, selectors } from '@/redux';

const Home = (props: any) => {
  const dispatch = useDispatch();
  const { isLoading, msg } = useSelector(selectors.loading);

  // redux demo
  console.log({ isLoading, msg }, props.isLoading, props.msg, props.startLoading, props.stopLoading);
  useEffect(() => {
    dispatch(actions.loading.startLoading('msg'));
    setTimeout(() => dispatch(actions.loading.stopLoading()), 2000);
  }, []);

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

// redux connect 将 store 中的 state、action、dispatch 导入到组件中。(第一种方式)
export default connect(selectors.loading, actions.loading)(Home);
