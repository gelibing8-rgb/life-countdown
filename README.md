# Life Countdown

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PWA](https://img.shields.io/badge/PWA-local--first-5ee6a8.svg)](assets/manifest.webmanifest)
[![Open PR](https://img.shields.io/github/issues-pr/gelibing8-rgb/life-countdown.svg)](https://github.com/gelibing8-rgb/life-countdown/pulls)

一个开源的人生倒计时项目。默认按 80 岁计算，帮助用户在手机、电脑和可穿戴设备生态中，低打扰地看到“还剩多久”，把长期目标拆回每天的行动。

> 当前版本是 PWA 原型：数据仅保存在本地浏览器，支持手机添加到主屏幕、每日提醒、进度可视化和本地导出。Apple Watch、Wear OS、手环、Apple Health、Health Connect 等深度接入作为后续开放路线图推进。

## English Summary

Life Countdown is a local-first, privacy-conscious PWA that shows how much time remains under a default 80-year life horizon. It is designed for daily reflection, low-friction check-ins, and future integration with phones and wearable devices.

Current scope:

1. Runs as a static PWA with no backend account system.
2. Stores birth date, target age, reminder time, contacts, and check-in state locally.
3. Generates `sms:` and `mailto:` check-in links without sending messages automatically.
4. Includes a daily humanistic quote that can be pinned by the user.
5. Provides a roadmap for Apple Watch, Wear OS, Health Connect, and Apple Health integration.

Live demo target:

```text
https://gelibing8-rgb.github.io/life-countdown/
```

## Project Status

This is an early open-source project with a working MVP, public repository, privacy notes, roadmap, and PR-based iteration history. The next priority is to harden the PWA, add tests, improve accessibility, and document wearable integration boundaries.

## 项目目标

一、人不是缺少时间，而是缺少对时间边界的稳定感知。

Life Countdown 用一个极简界面显示：

1. 已经走过多少天；
2. 距离默认 80 岁还剩多少天；
3. 本周、本月、本年的进度；
4. 今天最重要的一件事；
5. 每日固定时间提醒；
6. 每日人文金句，可固定喜欢的句子；
7. 一键生成给联系人发送的短信和邮件打卡信息。

项目面向长期主义、个人效率、健康管理和可穿戴设备用户，强调隐私、本地优先和可解释。

## 项目预览

![Life Countdown preview](assets/preview.png)

## 核心特性

1. 默认寿命按 80 岁计算，可自定义；
2. 生日、目标年龄和提醒时间仅保存在本地；
3. 支持手机浏览器安装为 PWA；
4. 支持每日提醒权限申请；
5. 支持 JSON 数据导出；
6. 支持深色工业风界面；
7. 支持联系人手机、邮箱本地保存，并生成 `sms:` 与 `mailto:` 打卡入口；
8. 无后端、无账号、无追踪；
9. 适合继续扩展到 Apple Health、Health Connect、快捷指令、智能手表表盘和桌面小组件。

## 快速运行

直接打开 `index.html` 即可使用。

本地预览也可以运行：

```bash
python3 -m http.server 5173
```

然后访问：

```text
http://127.0.0.1:5173
```

## 目录结构

```text
.
├── index.html
├── src
│   ├── app.js
│   └── styles.css
├── assets
│   ├── icon.svg
│   └── manifest.webmanifest
├── docs
│   ├── pro-application.md
│   └── roadmap.md
├── LICENSE
└── README.md
```

## 设备关联路线

当前版本不读取任何健康数据，也不访问账号或云端服务。

后续可按低风险顺序扩展：

1. 手机端：PWA 安装、通知、桌面快捷入口；
2. iPhone：通过快捷指令把每日倒计时写入备忘录、日历或小组件数据源；
3. Android：通过 Health Connect 或桌面小组件显示；
4. Apple Watch / Wear OS：通过独立表盘 complication 或同步小组件显示；
5. 手环：优先采用厂商开放 API 或系统健康数据桥接，避免逆向和高风险登录。

## 隐私原则

1. 本项目默认不上传生日、年龄、目标、提醒时间；
2. 不接入广告 SDK；
3. 不做用户画像；
4. 后续如接入健康数据，必须坚持最小权限、用户显式授权和本地优先。

## 开源协议

MIT License。
