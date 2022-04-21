/*
 * @Author: HxB
 * @Date: 2022-04-13 11:52:00
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-22 09:54:44
 * @Description: user service
 * @FilePath: \react-view\src\services\user.ts
 */
import XHttp from '@tools/js/xhttp';

export function testRequest() {
  XHttp.get('/api/users').then(res => {
    console.log('testRequest', res);
  });
}
