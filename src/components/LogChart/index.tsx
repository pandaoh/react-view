/*
 * @Author: HxB
 * @Date: 2022-04-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-17 11:02:41
 * @Description: LogChart
 * @FilePath: \react-view\src\components\LogChart\index.tsx
 */
import { Button, Tag } from 'antd';
import {
  LoadingOutlined,
  PlayCircleOutlined,
  PoweroffOutlined,
  RedoOutlined,
  SettingOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { getRandNum } from 'js-xxx';
import React, { useEffect, useState } from 'react';
import './style.less';
import { useHistory, withRouter } from 'react-router-dom';

const MOCK_LOGS = [
  {
    msg: '模拟日志-info',
    type: 'info',
  },
  {
    msg: '模拟日志-danger',
    type: 'danger',
  },
  {
    msg: '模拟日志-success',
    type: 'success',
  },
  {
    msg: '模拟日志-warn',
    type: 'warn',
  },
  {
    msg: '模拟日志-primary',
    type: 'primary',
  },
  {
    msg: '模拟日志-default',
    type: 'default',
  },
];

const LOGS_COLOR = {
  info: '#3e59a5',
  danger: '#f5222d',
  success: '#52c41a',
  warn: '#faad14',
  primary: '#1890ff',
  default: '#555666',
};

let timer: any;
const LogChart = (props: any) => {
  const [logs, setLogs] = useState<any[]>(MOCK_LOGS);

  useEffect(() => {
    timer = setInterval(() => {
      setLogs((oldLogs: any[]) => {
        const newLogs: any[] = oldLogs.slice();
        newLogs.push(MOCK_LOGS[getRandNum(0, MOCK_LOGS.length - 1)]);
        return newLogs;
      });
    }, 2000);
    const logBox = document.querySelector('.log-box');
    if (logBox) {
      logBox.scrollTop = logBox.scrollHeight;
    }
    return () => {
      clearInterval(timer);
    };
  }, [logs]);

  const history = useHistory();
  const goRouter = (path: string) => {
    history.push(path);
  };

  return (
    <div className="log-chart">
      <div className="log-title">运行日志</div>
      <div className="log-box">
        {logs.map((item: any, index: number) => {
          return (
            <div key={index} className="log-content">
              <Tag style={{ width: '100%' }} color={LOGS_COLOR[item.type]}>
                第{index + 1}条-{item.msg}
              </Tag>
            </div>
          );
        })}
      </div>
      <div className="btn-box">
        {/* <LoadingOutlined /> */}
        <Button type="ghost" icon={<PlayCircleOutlined />} onClick={() => goRouter('/404')}>
          启动
        </Button>
        <Button type="ghost" danger icon={<PoweroffOutlined />} onClick={() => goRouter('/')}>
          停止
        </Button>
        <Button type="ghost" onClick={() => goRouter('/login')} icon={<RedoOutlined />}>
          刷新
        </Button>
        <Button type="ghost" onClick={() => goRouter('/settings')} danger icon={<SettingOutlined />}>
          设置
        </Button>
        <Button type="ghost" icon={<UserSwitchOutlined />}>
          手动
        </Button>
      </div>
    </div>
  );
};

export default LogChart;
