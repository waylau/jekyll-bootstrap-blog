---
layout: post
title:  在 Jersey 2 使用 Spring 4
date: 2014-12-30 01:21
author: admin
comments: true
categories: [Spring,Jersey]
tags: [Spring,Jersey]
---

Jersey 提供对 Spring DI 的扩展。使得 Jersey 在使用 Spring bean 时 就像是 JAX-RS 的组件 (比如 资源和提供者) 并且允许 Spring 注入 Jersey 管理的组件中。比如：

	import javax.ws.rs.GET;
	import javax.ws.rs.Path;
	import org.springframework.stereotype.Component;
	
	@Component
	@Path("/")
	public class SomeResource {
	
	    @Transactional
	    @GET
	    public void updateResource() {
	        // ...
	    }
	}

详见[《Jersey 2.x 用户指南》 Chapter 22. Spring DI 使用 Spring 注入	](https://github.com/waylau/Jersey-2.x-User-Guide/tree/master/Chapter%2022.%20Spring%20DI%20%E4%BD%BF%E7%94%A8%20Spring%20%E6%B3%A8%E5%85%A5)

<!-- more -->

但官方在使用 Jersey Spring DI，只提供了对 Spring 3 的扩展 jersey-spring3 模块

	<dependency>
	    <groupId>org.glassfish.jersey.ext</groupId>
	    <artifactId>jersey-spring3</artifactId>
	    <version>2.14</version>
	</dependency>

但这并不是说，你不能使用 Spring 4，需要做如下调整：

	<dependencies>

    <!-- Jersey -->

    <dependency>
        <groupId>org.glassfish.jersey.ext</groupId>
        <artifactId>jersey-spring3</artifactId>
        <version>2.14</version>
        <exclusions>
            <exclusion>
                <artifactId>spring-context</artifactId>
                <groupId>org.springframework</groupId>
            </exclusion>
            <exclusion>
                <artifactId>spring-beans</artifactId>
                <groupId>org.springframework</groupId>
            </exclusion>
            <exclusion>
                <artifactId>spring-core</artifactId>
                <groupId>org.springframework</groupId>
            </exclusion>
            <exclusion>
                <artifactId>spring-web</artifactId>
                <groupId>org.springframework</groupId>
            </exclusion>
            <exclusion>
                <artifactId>jersey-server</artifactId>
                <groupId>org.glassfish.jersey.core</groupId>
            </exclusion>
            <exclusion>
                <artifactId>
                    jersey-container-servlet-core
                </artifactId>
                <groupId>org.glassfish.jersey.containers</groupId>
            </exclusion>
            <exclusion>
                <artifactId>hk2</artifactId>
                <groupId>org.glassfish.hk2</groupId>
            </exclusion>
        </exclusions>
    </dependency>

    <!-- Spring 4 dependencies -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-core</artifactId>
        <version>4.1.3.RELEASE</version>
    </dependency>

    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
        <version>4.1.3.RELEASE</version>
    </dependency>

    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-beans</artifactId>
        <version>4.1.3.RELEASE</version>
    </dependency>

    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-web</artifactId>
        <version>4.1.3.RELEASE</version>
    </dependency>

    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-aspects</artifactId>
        <version>4.1.3.RELEASE</version>
    </dependency>

	</dependencies>

详细实例可以参考：[用 Jersey 2 和 Spring 4 构建 RESTful web service](http://www.waylau.com/jersey-2-spring-4-rest/)