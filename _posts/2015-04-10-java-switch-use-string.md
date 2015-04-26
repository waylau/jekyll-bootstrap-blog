---
layout: post
title: Java switch 语句使用 String 参数
date: 2015-04-10 01:41
author: admin
comments: true
categories: [Java]
tags: [Java]
---

当我尝试在 switch 语句使用 String 参数时（注意`ctrType`为字符串）

		switch (ctrType) {
		case "01" : 
			exceptionType = "读FC参数数据";
			break;
		case "03" :
			exceptionType = "读FC保存的当前表计数据";
			break;
		default:
			exceptionType = "未知控制码："+ctrType;
		}
		
<!-- more -->
提示如下错误：

*Cannot switch on a value of type String for source level below 1.7. Only convertible int values or enum variables are permitted*

意思是说，我的 jre 本版本太低，不支持。据查 在 Java 7之前，switch 只能支持 byte、short、char、int或者其对应的封装类以及 Enum 类型。在 Java 7中，String支持也终于被加上了。

## 解决

### 普通项目 

安装 JDK 1.7+，在项目中更改配置引入该 JDK 版本依赖库。

### Maven 项目

更改 pom.xml 文件，设置 maven-compiler-plugin 插件目标版本为 1.7+，例如

	  <plugins>
      ...
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-compiler-plugin</artifactId>
				<version>3.2</version>
				<configuration>
					<source>1.7</source>
					<target>1.7</target>
				</configuration>
			</plugin>
      ...
		</plugins>



