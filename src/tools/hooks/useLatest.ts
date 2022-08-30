/*
 * @Author: HxB
 * @Date: 2022-08-29 17:15:54
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-30 16:05:34
 * @Description: useLatest 自定义 hooks
 * @FilePath: \react-view\src\tools\hooks\useLatest.ts
 */
import { useRef } from 'react';

const useLatest = <T>(value: T) => {
  const ref = useRef(value);
  ref.current = value;

  return ref;
};

export default useLatest;
