/*
 * @Author: HxB
 * @Date: 2022-04-13 11:20:06
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-06-03 10:40:30
 * @Description: 全局通用配置管理
 * @FilePath: \react-view\src\global_config.ts
 */
export const CLIENT_RATIO = 16 / 9;

export const DESIGN_WIDTH = 3840; // 3840 为设计稿的宽度，若修改此处的话，全局 css 文件中的 DESIGN_WIDTH 也要修改。

export const rem = (px: number) => (px / DESIGN_WIDTH) * 100; // 此处 px 为设计稿中的大小
