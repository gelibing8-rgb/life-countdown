# ChatGPT Pro / Codex for Open Source 申请材料

## 项目名称

Life Countdown：面向手机与可穿戴设备的人生倒计时与安全守护开源项目

## Repository

https://github.com/gelibing8-rgb/life-countdown

## Reviewer Evidence

https://github.com/gelibing8-rgb/life-countdown/blob/main/docs/reviewer-evidence.md

## Submission Draft

https://github.com/gelibing8-rgb/life-countdown/blob/main/docs/application-submission.md

## English Summary

Life Countdown is a local-first, privacy-conscious open-source PWA for life countdown and daily safety check-ins. It helps users see remaining time under a configurable life horizon, and helps people living alone, older adults, or vulnerable users send low-friction daily check-ins to trusted contacts through user-confirmed SMS or email links. The project intentionally avoids backend accounts, hidden tracking, silent outbound messages, and unnecessary health-data collection.

## 一句话介绍

Life Countdown 默认按 80 岁计算人生倒计时，帮助用户在手机、电脑和未来的可穿戴设备生态中持续看到时间边界；同时为独居者、老人和需要关怀的人提供低打扰、隐私友好的每日平安确认机制。

## 申请目标

申请 OpenAI Codex for Open Source 支持，用 ChatGPT Pro 和 Codex 持续维护一个小而清晰、隐私优先、可被普通用户直接使用的开源项目。

本项目不追求复杂技术堆叠，而是把一个常见但敏感的需求做得可靠：人生时间感知、每日安全确认、可信联系人通知、可穿戴设备展示和健康数据权限边界。

## 为什么这个项目适合开源支持

1. 它面向普遍人群，不局限于开发者工具。时间感知、独居安全、老人关怀和家庭低打扰确认，是长期存在的公共需求。
2. 它强调隐私和本地优先。当前版本不需要账号、不上传生日、不追踪用户，也不静默发送短信或邮件。
3. 它适合作为 PWA、手机系统、快捷指令、Apple Watch、Wear OS、Health Connect、Apple Health 等生态之间的低风险集成样例。
4. 它具有清晰的安全边界。项目不会把寿命倒计时包装成医学预测，也不会把安全守护做成未经同意的监控工具。
5. 它适合长期维护和社区贡献。项目范围小、依赖少、文档清楚，后续 issue、PR、测试、隐私审查和可穿戴设备调研都可以持续展开。

## 当前已经完成

1. 创建了可运行的 PWA 原型；
2. 支持默认 80 岁人生倒计时，也支持用户自定义目标年龄；
3. 支持生日、目标年龄、每日提醒时间和守护联系人本地保存；
4. 支持人生进度、本年、本月、本周进度展示；
5. 支持手机添加到主屏幕和 Service Worker 离线缓存；
6. 支持每日金句轮换和固定；
7. 支持安全守护模式，每日首次打开自动生成平安打卡；
8. 支持生成短信和邮件打卡入口，但外发动作必须由用户确认；
9. 支持 JSON 数据导出；
10. 已完成 MIT License、README、Privacy、Security、Contributing、Roadmap、Maintainer Notes、ChangeLog 和基础测试。

## ChatGPT Pro / Codex 将如何具体帮助项目

1. 代码维护：审查 PWA、Service Worker、本地存储、日期计算、提醒逻辑和安全守护流程，降低小项目常见的边界错误。
2. 测试建设：补充日期、时区、每日首次打开、导出、隐私边界、可访问性和安全守护误报场景测试。
3. 文档国际化：完善英文 README、隐私说明、贡献指南、issue 模板、release notes 和公开演示说明，让项目更容易被国际开源社区理解。
4. 设备集成调研：梳理 iOS Shortcut、Android widget、Apple Watch complication、Wear OS tile、Health Connect、Apple Health 的低风险集成路径。
5. 合规边界：检查健康数据、通知、短信、邮件、可信联系人和老人关怀场景下的最小权限、用户同意和误报风险。
6. 社区维护：把需求拆成小 issue，保持 PR 可审查、可测试、可回滚，避免引入过重后端或不必要依赖。

## 已形成的维护证据

1. 项目已有公开在线演示、README、隐私说明、安全说明、路线图和更新日志；
2. 项目采用 PR、Release 和 GitHub Pages 部署形成可追溯维护记录；
3. 已补充安全守护、可穿戴设备、iOS Shortcut、Android 小组件、无障碍、隐私影响和审核证据文档；
4. 已通过 `npm run check` 保护日期计算、应用壳、外发消息边界、安全边界和发布资料一致性；
5. 当前功能坚持用户确认外发动作，不静默拨号、发短信、发邮件，也不读取健康数据。

## 未来 90 天维护计划

1. 第 1-2 周：发布 GitHub Pages 在线演示，补充英文 README 首页摘要和截图说明。
2. 第 3-4 周：补充 Issue 模板、PR 模板、无障碍检查清单和安全守护误报说明。
3. 第 5-8 周：补充 iOS Shortcut 示例、Android 小组件调研、Apple Watch / Wear OS 展示方案。
4. 第 9-12 周：补充隐私白皮书、健康数据权限边界说明、更多单元测试和一次稳定版本 release。

## 风险边界

1. 本项目不是寿命预测工具，不提供医学判断；
2. 本项目不鼓励焦虑化使用人生倒计时；
3. 当前版本不读取 Apple Health、Health Connect 或其他健康数据；
4. 当前版本不会静默发送短信、邮件或通知；
5. 任何守护联系人、健康数据、通知服务或云端功能都必须以用户明确同意为前提；
6. 后续即使接入服务端，也应默认最小化数据、可导出、可删除、可解释。

## 如果需要补充说明

This is an early but working open-source project. The value is not only the countdown UI, but also a careful, privacy-first pattern for daily safety check-ins and future wearable integration. ChatGPT Pro and Codex would directly support ongoing maintenance, review, documentation, testing, accessibility work, and safe integration research.
