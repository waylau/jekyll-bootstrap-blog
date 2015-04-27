---
layout: post
title: 关于 本 jekyll 主题 jekyll-theme-blog
date: 2014-11-26 02:41
author: admin
comments: true
categories: [Blog,Jekyll]
tags: [Blog,Jekyll,jekyll-theme-blog]
---


A theme for Jekyll to build a personal blog. See[https://github.com/waylau/jekyll-theme-blog](https://github.com/waylau/jekyll-theme-blog)

##Screenshots

![](http://99btgc01.info/uploads/2014/11/jekyll-theme%281%29.jpg)

![](http://99btgc01.info/uploads/2014/11/jekyll-theme2%281%29.jpg)

##Demo

You can see the theme running on [my blog](http://www.waylau.com/).

<!-- more -->

##Usage

###Installation

- Start by cloning the github repo using `git clone`
- You must have jekyll installed to run this, use `gem install jekyll` for installing it
- Use `jekyll serve` to run the site live.

###Configration

	markdown: rdiscount #kramdown
	highlighter: pygments
	permalink: /:title/
	paginate: 6
	paginate_path: page/:num
	
	blog:
	    name:  Way Lau's Blog                                 # 博客名称
	    description: 技术改变世界！                             # 博客描述
	    title: Way Lau's Personal Site | www.waylau.com       # 网页标题
	    url: http://www.waylau.com                            # 博客地址
	    duoshuo:  waylau                                      # 多说ID
	    tongji: 28cf5fa48a599e39c5cc760931de942f              # 百度统计ID
	author:
	    name: Way Lau                                         # 作者名称
	    email: waylau521@gmail.com                            # 邮箱地址
	    weibo: http://weibo.com/waylau521                     # 微博地址
	    github: https://github.com/waylau                     # GitHub地址
	    twitter: https://twitter.com/waylau521                #twitter 地址
	    logo:  /res/img/icon.png                              # logo地址

###Creating Posts

For creating posts add this snippet in front of your post's markdown file:

```
	---
	layout: post
	title:  "your title here"
	tags: your tags here
	class: post
	---

```

Add content below this and save the post in `_posts` directory (you will have to create it).

##License

Feel free to fork and contribute to the project, just create a pull request.

Open sourced under [MIT License](LICENSE.md) 

