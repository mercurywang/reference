---
title: 浏览器的实现原理和 API
date: 2024-02-09 13:58:49
permalink: /pages/0aef4e/
categories:
  - notes
tags:
  -
author:
  name: mercurywang
  link: https://github.com/mercurywang
---

![](../images/browser.jpg)

实际上，对浏览器的实现者来说，他们做的事情，就是把一个 URL 变成一个屏幕上显示的网页。

这个过程是这样的：

1. 浏览器首先使用 HTTP 协议或者 HTTPS 协议，向服务端请求页面；
2. 把请求回来的 HTML 代码经过解析，构建成 DOM 树；
3. 计算 DOM 树上的 CSS 属性；
4. 最后根据 CSS 属性对元素逐个进行渲染，得到内存中的位图；
5. 一个可选的步骤是对位图进行合成，这会极大地增加后续绘制的速度；
6. 合成之后，再绘制到界面上。
