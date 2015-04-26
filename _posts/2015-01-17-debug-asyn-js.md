---
layout: post
title:  调试异步加载页面中的js文件
date: 2015-01-17 01:21
author: admin
comments: true
categories: [Javascript]
tags: [Javascript]
---

##问题

在使用 EasyUI 时，采用了异步加载 div 页面的方式，来优化页面的性能。但是在浏览器 debug 时，发现 div 页面中的 js 文件是不可见的，即无法断点调试。

比如，我自己写了一个 entMgt 的模块 div页面，里面引用了 entMgt.js

但是 debug ,却见不到该文件

![](http://99btgc01.info/uploads/2015/01/js.png)
 

##解决

就是在需要调试的 js 文件顶部加一行代码：

	//@ sourceURL=entMgt.js

搞定

![](http://99btgc01.info/uploads/2015/01/asyn-js.jpg)

 