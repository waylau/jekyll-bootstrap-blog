---
layout: post
title: 关于 jekyll 博客主题 jekyll-bootstrap-blog
date: 2015-04-27 02:41
author: admin
comments: true
categories: [Blog,Jekyll]
tags: [Blog,Jekyll,jekyll-bootstrap-blog]
---


A theme for Jekyll to build a personal blog. See[https://github.com/waylau/jekyll-bootstrap-blog](https://github.com/waylau/jekyll-bootstrap-blog)

##Screenshots

![](http://99btgc01.info/uploads/2015/04/001%285%29.jpg)

![](http://99btgc01.info/uploads/2015/04/002%287%29.jpg)

##Demo

You can see the theme running on [my blog](http://www.waylau.com/).

<!-- more -->

##Usage

###Installation

- Start by cloning the github repo using `git clone`
- You must have jekyll installed to run this, use `gem install jekyll` for installing it
- Use `jekyll serve` to run the site live.

###Configration

	# Site settings
	title: Way Lau's Personal Site
	name: Way Lau's Personal Site
	url: "http://www.waylau.com"
	email: waylau521@gmail.com
	description: Way Lau's Personal Site | www.waylau.com.
	baseurl: "" # the subpath of your site, e.g. /blog/
	twitter_username: waylau521
	github_username:  waylau
	weibo_username: waylau521
	duoshuo_username: waylau
	baidushare_id: 89860593
	baidutongji_id: 28cf5fa48a599e39c5cc760931de942f
	rss_url: "/feed.xml"
	# Build settings
	highlighter: pygments
	markdown: rdiscount
	permalink: /:title/
	paginate: 6
	paginate_path: page/:num

	markdown: rdiscount #kramdown
	highlighter: pygments
	permalink: /:title/
	paginate: 6
	paginate_path: page/:num

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

