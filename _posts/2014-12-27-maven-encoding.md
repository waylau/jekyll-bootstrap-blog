---
layout: post
title:  Maven 编码相关问题
date: 2014-12-27 01:21
author: admin
comments: true
categories: [Maven]
tags: [Maven]
---

问题：

	[WARNING] Using platform encoding (UTF-8 actually) to copy filtered resources, i.e. build is platform dependent!

没有指定编码，只能按照平台的默认编码进行拷贝。

解决：

	<project> 
	    ... 
	        <properties> 
	            <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding> 
	        </properties> 
	    ... 
	</project>

<!-- more -->

在使用 maven 和 jetty 的时候，如果你不想看到上面的警告，那么你只需要修改 pom 如下： 

	<plugin> 
	    <groupId>org.apache.maven.plugins</groupId> 
	    <artifactId>maven-resources-plugin</artifactId> 
	    <version>2.3</version> 
	    <configuration> 
	        <encoding>UTF-8</encoding> 
	    </configuration> 
	</plugin> 

假如使用[Tomcat Maven Plugin](http://www.waylau.com/tomcat-maven-plugin/)插件页面乱码，可以配置如下：


	<plugin>
	    <groupId>org.apache.tomcat.maven</groupId>
	    <artifactId>tomcat7-maven-plugin</artifactId>
	    <version>2.1</version>
	    <configuration>
	        <port>9090</port>
	        <path>/mgr</path>
	        <uriEncoding>UTF-8</uriEncoding>
	        <finalName>mgr</finalName>
	        <server>tomcat7</server>
	    </configuration>
	</plugin>

