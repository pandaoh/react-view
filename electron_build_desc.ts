/*
 * @Author: HxB
 * @Date: 2022-04-21 14:06:45
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-21 16:38:37
 * @Description: electron-builder 打包配置项介绍
 * @FilePath: \react-view\electron_build_desc.ts
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const builder: any = {
  build: {
    productName: 'React-View', // 项目名 这也是生成的exe文件的前缀名
    appId: 'com.react.view', // 包名
    asar: true, // 是否打包成asar文件 默认false true 加密但 exe 文件很大
    copyright: 'Leo He © 2022', // 版权信息
    files: ['dist/**/*'], // 需要打包的文件
    directories: {
      output: 'build_exe', // 输出文件夹
    },
    win: {
      target: ['nsis'],
      // arch: ['x64', 'ia32'], // ia32: 低版本32位, x64: 高版本64位 这个意思是打出来 32+64 的包，但是要注意：这样打包出来的安装包体积比较大，所以建议直接打32的安装包。
      icon: 'dist/res/electron/icons/icon.ico',
    },
    nsis: {
      language: 2052, // 语言
      artifactName: 'react_view.exe', // 安装包名称
      allowElevation: true, // 允许请求提升 如果为false，则用户必须使用提升的权限重新启动安装程序。
      installerHeader: 'dist/res/electron/icons/icon.ico', // 安装包头部图标
      installerHeaderIcon: 'dist/res/electron/icons/icon.ico', // 安装包头部图标
      uninstallerIcon: 'dist/res/electron/icons/icon.ico', // 卸载图标
      createDesktopShortcut: true, // 创建桌面图标
      createStartMenuShortcut: true, // 创建开始菜单图标
      allowToChangeInstallationDirectory: true, // 允许改变安装目录
      oneClick: false, // 一键安装
      shortcutName: 'xxx', // 图标名称
      include: 'dist/res/electron/build_config/installer.nsh', // 包含的自定义nsis脚本
    },
    publish: [
      {
        provider: 'generic', // 服务器提供商 也可以是 GitHub 等等
        url: 'http://xxx.com/', // 服务器地址
      },
    ],
    mac: {
      target: 'dmg',
      icon: 'dist/res/electron/icons/icon.ico',
    },
    dmg: {
      contents: [
        {
          x: 410,
          y: 150,
          type: 'link',
          path: '/Applications',
        },
        {
          x: 130,
          y: 150,
          type: 'file',
        },
      ],
      backgroundColor: '#fff',
    },
    linux: {
      icon: 'dist/res/electron/icons/icon.ico',
    },
  },
};
// 打包报错请提出安全防护软件
// 解压 nsis-resources-3.4.1.zip 到 C:\Users\Administrator\AppData\Local\electron-builder\Cache\nsis\nsis-resources-3.4.1
// 图标必须 .ico 文件 且像素大于 256*256 否则会报错 文件大小过大 生产环境窗口可能不显示（建议使用 electron-builder-icon 处理）
