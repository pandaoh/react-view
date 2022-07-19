/*
 * @Author: HxB
 * @Date: 2022-07-15 10:48:59
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-07-19 19:27:06
 * @Description: redux loading module
 * @FilePath: \react-view\src\redux\modules\loading.ts
 */
import { createSlice } from '@reduxjs/toolkit';

// 创建 loading 模块并导出
// eslint-disable-next-line import/exports-last
export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false,
    msg: '',
  },
  reducers: {
    // 内置了 immutable 插件，可以直接使用赋值的方式进行数据的改变，不需要每一次都返回一个新的 state 数据。
    startLoading(state, { payload }) {
      console.log('startLoading', payload);
      state.isLoading = true;
      state.msg = payload;
    },
    stopLoading(state) {
      console.log('stopLoading');
      state.isLoading = false;
      state.msg = '';
    },
  },
});

// 导出 loadingSlice.actions
const { startLoading, stopLoading } = loadingSlice.actions;
export const loadingActions = { startLoading, stopLoading };

// 获取 loading 状态
export const loadingSelector = state => state.loading;

// 导出 loadingSlice.reducer
export default loadingSlice.reducer;

/* ---------- 高级用法 ---------- */

// 内置了 thunk 插件，可以异步 dispatch action，也可以 dispatch 其他 action 。
export const asyncStartLoading = msg => dispatch => {
  setTimeout(() => {
    dispatch(startLoading(msg));
  }, 1000);
};
export const asyncStopLoading = () => dispatch => {
  setTimeout(() => {
    dispatch(stopLoading());
  }, 1000);
};

// 导出 loadingMiddleware 中间件
export const loadingMiddleware = store => next => action => {
  // do something
  if (action.type === startLoading.type) {
    store.dispatch(startLoading(action.payload));
  }
  if (action.type === stopLoading.type) {
    store.dispatch(stopLoading());
  }
  // do something
  return next(action);
};
