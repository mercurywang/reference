// ！！！注：此文件没有使用到，仅用于测试和侧边栏数据格式的参考。

// 侧边栏
module.exports = {
  "/01.页面/": [
    {
      title: "html-css",
      collapsable: false,
      children: [
        ["01.html-css/00.flex布局语法", "flex布局语法"],
        ["01.html-css/01.flex布局案例-基础", "flex布局案例-基础"],
        ["01.html-css/02.flex布局案例-骰子", "flex布局案例-骰子"],
        ["01.html-css/03.flex布局案例-网格布局", "flex布局案例-网格布局"],
        ["01.html-css/04.flex布局案例-圣杯布局", "flex布局案例-圣杯布局"],
        ["01.html-css/05.flex布局案例-输入框布局", "flex布局案例-输入框布局"],
        ["01.html-css/06.CSS3之transform过渡", "CSS3之transform过渡"],
        ["01.html-css/07.CSS3之animation动画", "CSS3之animation动画"],
      ],
    },
  ],

  // '/': [ // 在最后定义，在没有单独设置侧边栏时统一使用这个侧边栏
  //   '',
  //   'git',
  //   'github',
  //   'markdown',
  //   'study',
  //   'interview'
  //   // '/',
  //   // {
  //   //   title: 'foo', // 标题，必要的
  //   //   path: '/foo/', // 标题的路径，可选的, 应该是一个绝对路径
  //   //   collapsable: false, // 是否可折叠，可选的，默认true
  //   //   sidebarDepth: 1,    // 深度，可选的, 默认值是 1
  //   //   children: [
  //   //     ['foo/', '子页1'],
  //   //     'foo/1',
  //   //     'foo/2',
  //   //   ]
  //   // },
  //   // {
  //   //   title: 'bar',
  //   //   children: [
  //   //     ['bar/', '子页2'],
  //   //     'bar/3',
  //   //     'bar/4',
  //   //   ]
  //   // }
  // ],
};
