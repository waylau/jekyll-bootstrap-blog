---
layout: post
title: Gradle 2.3 发布
date: 2015-02-27 01:41
author: admin
comments: true
categories: [Gradle]
tags: [Gradle]
---

2月16日，Gradle 团队发布了 2.3。可以在 <http://gradle.org/downloads> 进行下载。

此版本的 Gradle 带来了一些漂亮的新功能来管理依赖和 IDE 的支持，以及对一些核心插件的改进。

期待已久的特性--具有访问 metadata artifacts 的能力 如 ivy.xml 和 pom.xml ，这个 Gradle 提供相关依赖解决。使用 Artifact Query API，你现在可以直接访问这些原始 metadata artifacts。这将对于生成一个脱机存储库是非常有用的，可以用来检查文件的 metadata，以及更多。

对于 Gradle IDE 的支持在不断提高， Gradle 2.3 通过在 IDE 插件修复大量 bug 而带来增强的  Gradle 工具 API 。值得注意的是，这个版本通过 eclipse-wtp 插件 带来更好的集成的 Eclipse Web Tools Platform 。

一如既往，这个 Gradle 发布受益于大量的社会贡献。这些包括对 antlr的大幅增强，比较了应用插件和工具，以及许多错误修复和改进。

更多关于 Gradle 的知识，可以关注 <https://github.com/waylau/Gradle-2-User-Guide>， 这里提供了最新的 Gradle 的中文翻译。

##参考：

* <http://forums.gradle.org/gradle/topics/gradle-2-3-released>
* [Gradle 2 用户指南](https://github.com/waylau/Gradle-2-User-Guide)