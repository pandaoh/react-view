/*
 * @Author: HxB
 * @Date: 2022-08-29 17:10:14
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-30 16:05:35
 * @Description: useMounted 自定义 hooks
 * @FilePath: \react-view\src\tools\hooks\useMounted.ts
 */
import { useEffect } from 'react';

const useMounted = (fn: () => void) => {
  useEffect(() => {
    fn?.();
  }, []);
};

export default useMounted;
