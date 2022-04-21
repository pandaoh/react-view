/* eslint-disable prefer-rest-params */
/*
 * @Author: HxB
 * @Date: 2022-04-12 17:47:36
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-22 14:15:33
 * @Description: 通用函数
 * @FilePath: \react-view\src\tools\js\utils.ts
 */
/**
 * 防抖函数
 * @param fn
 * @param delay
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function debounce(fn: Function, delay = 1000) {
  let timer: any = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(this, arguments);
    }, delay);
  };
}

/**
 * 节流函数
 * @param fn
 * @param delay
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function throttle(fn: Function, delay = 1000) {
  let canRun = true;
  return function () {
    if (!canRun) return;
    canRun = false;
    fn.apply(this, arguments);
    setTimeout(function () {
      canRun = true;
    }, delay);
  };
}
