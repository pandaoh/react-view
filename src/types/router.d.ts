/*
 * @Author: HxB
 * @Date: 2022-08-26 10:14:03
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-09-13 11:24:52
 * @Description: 路由声明文件
 * @FilePath: \react-view\src\types\router.d.ts
 */
export interface RouteConfig {
  // 路由配置自自定义结构
  name: string;
  path: string;
  redirect?: string;
  exact?: boolean;
  component?: any;
  routes?: RouteConfig[]; // 子路由
  defaultRoute?: string;
  roles?: string[] | string;
  keepAlive?: boolean;
  meta?: {
    title?: string;
    icon?: string;
    hidden?: boolean;
  };
  [key: string]: any;
}
