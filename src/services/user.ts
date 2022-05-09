/*
 * @Author: HxB
 * @Date: 2022-04-13 11:52:00
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-05-09 15:24:04
 * @Description: user service
 * @FilePath: \react-view\src\services\user.ts
 */
import XHttp from '@/tools/api/xhttp';

export function testRequest() {
  return XHttp.get('/api/users').then(res => {
    console.log('testRequest', res);
  });
}
