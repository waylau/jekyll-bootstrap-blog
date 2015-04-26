---
layout: post
title:  ERROR 1130 Host is not allowed to connect to this MySQL server 问题解决
date: 2014-12-29 01:21
author: admin
comments: true
categories: [MySQL]
tags: [MySQL]
---

新建了 mysql 数据库，使用 root 远程访问数据库，无法访问

##问题：

	ERROR 1130: Host '192.168.11.104' is not allowed to connect to this MySQL server...

<img src="http://99btgc01.info/uploads/2014/12/m1.png" alt="m1.png" title="m1.png" />

##原因：

用户 root 没有远程访问的权限

<!-- more -->

##解决方法：

###解决1：命令行

####1）首先以 root 帐户登陆 MySQL

在 Windows 主机中点击开始菜单，运行，输入“cmd”，进入控制台，MySQL 的 bin 目录下，然后输入下面的命令。
 
	MySQL -uroot -p123456

123456 为 root 用户的密码。

####2）创建远程登陆用户并授权

	grant all PRIVILEGES on discuz.* to ted@'123.123.123.123' identified by '123456';

上面的语句表示将 discuz 数据库的所有权限授权给 ted 这个用户，允许 ted 用户在 123.123.123.123 这个 IP 进行远程登陆，并设置 ted 用户的密码为 123456 。

####下面逐一分析所有的参数：

all PRIVILEGES 表示赋予所有的权限给指定用户，这里也可以替换为赋予某一具体的权限，例如：select,insert,update,delete,create,drop 等，具体权限间用“,”半角逗号分隔。

discuz.* 表示上面的权限是针对于哪个表的，discuz 指的是数据库，后面的 * 表示对于所有的表，由此可以推理出：对于全部数据库的全部表授权为“*.*”，对于某一数据库的全部表授权为“数据库名.*”，对于某一数据库的某一表授权为“数据库名.表名”。

ted 表示你要给哪个用户授权，这个用户可以是存在的用户，也可以是不存在的用户。

123.123.123.123 表示允许远程连接的 IP 地址，如果想不限制链接的 IP 则设置为“%”即可。

123456 为用户的密码。

执行了上面的语句后，再执行下面的语句，方可立即生效。

	flush privileges;

###解决2：Navicat Lite管理界面

用 root 登录数据库后，在“用户”管理那，修改或者新增 root 的“主机”为“%”

<img src="http://99btgc01.info/uploads/2014/12/m2.jpg" alt="m2.jpg" title="m2.jpg" />

###解决3：MySQL Workbench管理界面 

用 root 登录数据库后，在“Users and Privileges”管理那，修改或者新增 root 的“Limit Connectivity to Hosts Matching”为“%”

<img src="http://99btgc01.info/uploads/2014/12/m3.jpg" alt="m3.jpg" title="m3.jpg" />