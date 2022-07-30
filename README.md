# K Gamification

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/kater/gamification-extend.svg)](https://packagist.org/packages/kater/gamification-extend)

A [Flarum](http://flarum.org) extension. Kater 基于 fof/gamification 增加自定义拓展

### 需求

- Post
    - [x] 显示楼层
    - [x] 中文数位记法
- 拓展
    - [x] 顶踩显示
    - [x] 点击数字显示名单
    - [x] 用户不会收到踩通知（通过设置） 

### bug
    由于帖子时间是 10s刷新一次 在未动核心代码的情况下
    接近 30天时 自动刷新可能显示 5 5月  期望 2022年5月5日 12:00  

### Installation

Use [Bazaar](https://discuss.flarum.org/d/5151-flagrow-bazaar-the-extension-marketplace) or install manually with composer:

```sh
composer require kater/gamification-extend
```

### Updating

```sh
composer update kater/gamification-extend
```

### Links

- [Packagist](https://packagist.org/packages/kater/gamification-extend)
