---
layout: post
title: 如何查看 JAR 包的源代码
date: 2015-04-02 01:41
author: admin
comments: true
categories: [Java]
tags: [Java]
---

Java 项目的编译文件经常被打包成 JAR（Java Archive，Java 归档文件）文件，当然，作为学习，有时候也非常想看到这个 JAR 被打包前的源代码是怎么样的。
下面提供几种查看 JAR 包的源代码方式。

##环境 

* JDK 7+
* Maven 3.2.x
* Eclipse 4.x

<!-- more -->

##Maven 项目

,如下图设置后，直接双击 要查看的 .class 文件即可，它会自动下载源文件，这样就能看到了

![](http://99btgc01.info/uploads/2015/04/maven.jpg)

##传统的导入 jar 的项目

如果不是通过 Maven 管理的项目，推荐一个反编译工具 Jad ，配合 JadClipse 插件 来将 .class 文件反编译为源码。

###安装 Jad

下载 Jad ：<http://varaneckas.com/jad/>

解压到任意目录即可 ,会得到一个 jad.exe 文件

###安装 JadClipse

下载地址 http://sourceforge.net/projects/jadclipse/files/latest/download?source=files

解压会得到 net.sf.jadclipse_3.3.0.jar

安装到 eclipse 有几种方式：

####1.直接 jar 放入 eclipse 的 plugins子目录下

####2.以 link 形式来安装

建一个目录 比如，我这里是 JadClipse ，在该目录下建一个  plugins 文件就爱，将 jar 放到这个文件下，这样就是一个典型的 eclipse 插件了。

建一个 JadClipse.link 文件，里面写上 

    path=D:/eclipsePlugins/JadClipse

就是指向我们新建的 JadClipse目录，将 JadClipse.link 放入到 eclipse 的 dropins 目录下即可，

重启

###配置 JadClipse

配置Jadclipse, 在 Windows - Preferences - Java - JadClipse 下

修改 Path to decompiler 输入我们解压 jad.exe 的位置，如下：

    D:\eclipsePlugins\JadClipse\jad158g.win\jad.exe

![](http://99btgc01.info/uploads/2015/04/jad.jpg)

在 Windows - Preferences - General - Editors - File Associations 下 .class without source 文件类型的默认编辑器为 JadClipse Class File Viewer

![](http://99btgc01.info/uploads/2015/04/jad03.jpg)

![](http://99btgc01.info/uploads/2015/04/jad05.jpg)

重启即可

##效果

这是没有源码的

![](http://99btgc01.info/uploads/2015/04/jad04.jpg)

这个是获取源码的

![](http://99btgc01.info/uploads/2015/04/jad06.jpg)

这样，我们就能看到源代码了。

