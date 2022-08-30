/*
 * @Author: HxB
 * @Date: 2022-08-29 17:21:13
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-30 16:05:42
 * @Description: useUpdate 自定义 hooks
 * @FilePath: \react-view\src\tools\hooks\useUpdate.ts
 */
import { useCallback, useState } from 'react';

const useUpdate = () => {
  const [, setState] = useState({});

  return useCallback(() => setState({}), []);
};

export default useUpdate;
