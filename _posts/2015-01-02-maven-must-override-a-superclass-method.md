---
layout: post
title:  Maven web 项目`@Override must override a superclass method` 问题解决
date: 2015-01-02 01:21
author: admin
comments: true
categories: [Maven]
tags: [Maven]
---

##问题

在 eclipse 中开发 Maven web 项目时出现 `@Override must override a superclass method` 问题

![](http://99btgc01.info/uploads/2015/01/maven-com.jpg)

##原因：

是 JDK 版本过低不支持 `@Override` 注解导致的，提高版本到 1.5 之后(不含1.5)就可以了。

<!-- more -->

##解决方法：

1. 首先，升级本机的 JDK
2. 将 window->preferences->java-compiler中的Compiler compliance level 修改为 高版本
3. 右键项目->Properties->Java Compiler(Left panel)->Compiler compliance level 修改为高版本
4. 使用 maven-compiler-plugin 插件，指定相应的版本。详见<http://maven.apache.org/plugins/maven-compiler-plugin/>说明，用法如下：

```xml

	<plugins>
		<plugin>
			<groupId>org.apache.maven.plugins</groupId>
			<artifactId>maven-compiler-plugin</artifactId>
			<version>3.2</version>
			<configuration>
				<source>1.7</source>
				<target>1.7</target>
			</configuration>
		</plugin>
	</plugins>

```