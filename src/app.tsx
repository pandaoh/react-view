/*
 * @Author: HxB
 * @Date: 2022-04-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-21 10:38:57
 * @Description: 主组件
 * @FilePath: \react-view\src\app.tsx
 */
import React, { Component } from 'react';
import { CLIENT_RATIO } from './global_config';
import AppRouter from './router';

class App extends Component<any, { loading: boolean; clientRatio: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      clientRatio: CLIENT_RATIO,
    };
  }

  componentDidMount() {
    // 首次渲染
    this._setScale();

    // 监听浏览器窗口
    window.addEventListener(
      'resize',
      () => this._setScale(),
      // debounce(() => this._setScale(), 1000)
    );

    // onload
    window.onload = () => {
      setTimeout(() => {
        this.setState({ loading: true });
      }, 1000);

      //   this.setState(
      //     (prevState: any) => {
      //       // console.log({prevState});
      //       return {
      //         loading: true
      //       };
      //     },
      //     () => {
      //       console.log('callback');
      //     }
      //   );
    };
  }

  _setScale() {
    // let ratio = window.innerWidth / 1920;
    // document.body.setAttribute(
    //   'style',
    //   `width: 1920px; height: 1200px; transform: scale(${ratio}); transform-origin: left top 0;`
    // );
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    const pageWidth =
      clientWidth / clientHeight > this.state.clientRatio ? clientHeight * this.state.clientRatio : clientWidth;
    const pageHeight = pageWidth / this.state.clientRatio;

    document.documentElement.style.fontSize = `${pageWidth / 100}px`;
    document.body.style.height = `${pageHeight}px`;
    document.getElementById('root').setAttribute('style', `margin-top: ${(clientHeight - pageHeight) / 2}px`);
  }

  render() {
    if (this.state.loading) {
      return <AppRouter />;
    }

    return <span style={{ fontSize: '3rem', textAlign: 'center', color: 'yellow' }}>Loading...</span>;
  }
}

export default App;
