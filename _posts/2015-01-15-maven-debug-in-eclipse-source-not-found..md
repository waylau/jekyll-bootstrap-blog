---
layout: post
title:  在 Eclipse 中 Debug Maven 项目“source not found”问题解决
date: 2015-01-15 01:21
author: admin
comments: true
categories: [eclipse,Maven]
tags: [eclipse,Maven]
---

##问题

在 Eclipse 中 Debug Maven 项目出现“Source not found”，无法定位到断点的源码位置。

![](http://99btgc01.info/uploads/2015/01/debug00.jpg)
 
##原因

Eclipse 中 Debug 时未关联上源码，所以找不见

<!-- more -->

##解决：关联上源码

点击“Edit Source Lookup Path”

![](http://99btgc01.info/uploads/2015/01/debug01.jpg)

点击“Add”

![](http://99btgc01.info/uploads/2015/01/debug02.jpg)

关联上相关的项目源码，即可

![](http://99btgc01.info/uploads/2015/01/debug03.jpg)