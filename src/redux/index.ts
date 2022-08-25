/*
 * @Author: HxB
 * @Date: 2022-07-15 10:48:17
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-07-15 14:01:58
 * @Description: redux 状态总管理
 * @FilePath: \react-view\src\redux\index.ts
 */
import { configureStore } from '@reduxjs/toolkit';
import loading from './modules/loading';

export default configureStore({
  reducer: {
    ...loading.reducers,
  },
});

export const selectors = {
  ...loading.selectors,
};

export const actions = {
  ...loading.actions,
};

// import loadingReducer, { loadingSelector, loadingActions } from './modules/loading';

// export default configureStore({
//   reducer: {
//     loading: loadingReducer,
//   },
// });

// export const selectors = {
//   loading: loadingSelector,
// };

// export const actions = {
//   loading: loadingActions,
// };
