/*
 * @Author: HxB
 * @Date: 2022-04-13 11:52:00
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-06-03 15:22:55
 * @Description: user service
 * @FilePath: \react-view\src\services\user.ts
 */
import XHttp from '@/tools/api/xhttp';

export function testRequest() {
  return XHttp.get('/api/users').then(res => {
    console.log('testRequest', res);
  });
}

export function testRequestCORS() {
  return XHttp.get('http://a.biugle.cn').then(res => {
    console.log('testRequest', res);
  });
}
