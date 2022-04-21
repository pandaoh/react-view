/*
 * @Author: HxB
 * @Date: 2022-04-13 11:53:53
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-25 09:36:11
 * @Description: 测试组件
 * @FilePath: \react-view\src\components\Test.tsx
 */
import {Button, Row} from 'antd';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Test extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      linkList: props.linkList,
    };
  }

  goRouter = (path: string) => {
    this.props.history.push({
      pathname: path,
      state: {name: 'state'},
      query: {name: 'query'},
      search: 'name=search',
    });
  };

  render() {
    return (
      <Row>
        {this.state.linkList.map((pathname: string, index: number) => (
          <Button
            key={index}
            style={{margin: '10px'}}
            type="primary"
            ghost
            danger
            size="large"
            onClick={() => {
              this.goRouter(pathname);
            }}
          >
            {pathname}
          </Button>
        ))}
      </Row>
    );
  }
}
export default withRouter(Test);
