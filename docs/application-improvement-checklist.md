# Codex for Open Source 通过率提升清单

更新时间：2026-06-02，北京时间

## 一、当前判断

Life Countdown 已经具备一个早期开源项目的基本形态：可运行 MVP、MIT License、README、Privacy、Security、Contributing、Roadmap、Maintainer Notes、ChangeLog 和基础测试。

当前短板不是“没有项目”，而是“公开影响力和审核证据还不够强”。申请材料需要让审核人快速看到三件事：

1. 项目确实已经可运行；
2. 项目解决的问题有公共价值；
3. ChatGPT Pro / Codex 会直接用于开源维护，而不是个人普通使用。

## 二、优先级最高的补强动作

1. 发布 GitHub Pages 在线演示，并在 README 顶部放入链接；
2. 确认仓库截图可正常显示，首屏能看出产品用途；
3. 增加英文版项目摘要，方便 OpenAI 审核人员快速理解；
4. 增加 Issue 模板和 PR 模板，证明项目准备接受协作；
5. 增加 `docs/safety-guardian.md`，专门说明安全守护场景、用户同意、误报风险和隐私边界；
6. 增加 `docs/wearable-integration.md`，说明 Apple Watch、Wear OS、Health Connect、Apple Health 的低风险路线；
7. 增加 `docs/oss-maintenance-plan.md` 和 `docs/release-checklist.md`，证明项目有维护纪律；
8. 补充 3-5 个真实 issue，例如 accessibility、iOS Shortcut、wearable research、privacy review、test coverage；
9. 发布一个小版本 release，例如 `v0.3.3` 或 `v0.4.0-alpha`；
10. 保持接下来 1-2 周有连续小提交，而不是一次性堆材料。

## 三、申请表填写建议

### Project description

Life Countdown is a local-first, privacy-conscious open-source PWA for life countdown and daily safety check-ins. It helps users see remaining time under a configurable life horizon, and helps people living alone, older adults, or vulnerable users send low-friction daily check-ins to trusted contacts through user-confirmed SMS or email links.

### Why Pro / Codex is needed

ChatGPT Pro and Codex will be used for ongoing open-source maintenance: code review, test coverage, accessibility improvements, privacy and consent documentation, wearable integration research, issue triage, release notes, and international documentation. The project has sensitive boundaries around health data, trusted contacts, notifications, and older-adult safety workflows, so careful AI-assisted review is directly useful.

### Open-source value

The project offers a small, practical, privacy-first pattern for daily safety check-ins and future wearable integration. It avoids backend accounts, hidden tracking, silent outbound messages, and unnecessary health-data collection, making it useful as a reference for developers building lightweight digital health, time-awareness, and family-care tools.

## 四、跟进邮件建议

如果提交后 2-3 周仍没有结果，可以发一封简短英文跟进邮件或表单补充说明：

Subject: Follow-up on Codex for Open Source application - Life Countdown

Hello OpenAI team,

I am following up on my Codex for Open Source application for Life Countdown:

https://github.com/gelibing8-rgb/life-countdown

Life Countdown is a local-first, privacy-conscious PWA for life countdown and daily safety check-ins, with a focus on older adults, people living alone, trusted contacts, and future wearable integration. Since applying, I have continued improving the repository documentation, privacy notes, tests, and roadmap.

ChatGPT Pro and Codex would be used directly for open-source maintenance, including code review, testing, accessibility, privacy documentation, wearable integration research, and release work.

Thank you for reviewing the application.

Best regards,

## 五、不建议强调的内容

1. 不要把重点放在“个人很需要 Pro”；
2. 不要把项目说成医疗、寿命预测或老人监控工具；
3. 不要承诺尚未实现的后端、手表、健康数据能力；
4. 不要夸大用户量、影响力或社区贡献；
5. 不要把材料写得像商业融资 BP。

## 六、建议的判断口径

1. 如果 1 周内没有消息：正常；
2. 如果 2-3 周没有消息：可以补强仓库后跟进；
3. 如果 4 周以上没有消息：按暂未通过处理，继续补证据后重新申请或再次跟进；
4. 通过率提升的核心不是“多写理由”，而是“让仓库本身看起来值得支持、可持续维护、风险边界清楚”。
