/*
 * @Author: HxB
 * @Date: 2022-08-29 17:10:14
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-30 16:05:37
 * @Description: useRouterChange 自定义 hooks
 * @FilePath: \react-view\src\tools\hooks\useRouterChange.ts
 */
import { XCall } from 'js-xcall';
import { useEffect } from 'react';

const useRouterChange = (fn: (from: string, to: string) => void): void => {
  useEffect(() => {
    XCall.addCallBack('routerChange', fn);

    return () => {
      XCall.removeCallBack('routerChange', fn);
    };
  }, []);
};

export default useRouterChange;
