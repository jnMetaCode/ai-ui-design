[English](./README.en.md) | 中文

<div align="center">

# AI UI Design

**让 AI 编程助手生成生产级 UI 代码的实战指南**

[![Stars](https://img.shields.io/github/stars/jnMetaCode/ai-ui-design?style=flat-square)](https://github.com/jnMetaCode/ai-ui-design)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](https://github.com/jnMetaCode/ai-ui-design/pulls)
[![QQ群](https://img.shields.io/badge/QQ群-833585047-blue?style=flat-square)](https://qm.qq.com/q/833585047)

</div>

---

## 这是什么？

使用 AI 编程助手（Claude、Cursor、Copilot 等）写前端时，你是不是经常遇到这些问题？

- 生成的 UI 像 2010 年的网页，间距混乱、配色刺眼
- 组件缺乏一致性，按钮五花八门
- 没有响应式，手机上完全不能看
- 不遵循所用框架的最佳实践

**ai-ui-design** 提供一套经过实战验证的设计模式、提示词模板和配置参考，帮助你引导 AI 生成专业、一致、可用的 UI 代码。

## 快速示例

**没有设计指导时，AI 生成的按钮：**

```html
<!-- 之前：混乱、不一致 -->
<button style="background: blue; color: white; padding: 10px 15px; border: none;">
  提交
</button>
<button style="background: red; color: white; padding: 8px 20px; border: 1px solid red;">
  删除
</button>
```

**使用本项目的设计系统后：**

```html
<!-- 之后：一致、专业、可访问 -->
<button class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5
  text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline
  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600
  transition-colors">
  提交
</button>
<button class="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2.5
  text-sm font-medium text-white shadow-sm hover:bg-red-700 focus-visible:outline
  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600
  transition-colors">
  删除
</button>
```

## 目录

### 设计指南

| 指南 | 内容 |
|------|------|
| [01 设计基础](./guides/01-design-fundamentals.md) | 配色、字体、间距、视觉层次 |
| [02 组件模式](./guides/02-component-patterns.md) | 按钮、表单、卡片、弹窗、导航、表格 |
| [03 响应式设计](./guides/03-responsive-design.md) | 移动优先、断点策略、常用布局模式 |
| [04 Tailwind 实战](./guides/04-tailwind-patterns.md) | 工具类方法论、暗色模式、动画、配置 |
| [05 中国 UI 框架](./guides/05-chinese-ui-frameworks.md) | Ant Design / Element Plus / TDesign / Vant / 小程序 |
| [06 无障碍设计](./guides/06-accessibility.md) | WCAG、ARIA、键盘导航、屏幕阅读器 |

### 提示词模板

| 模板 | 适用场景 |
|------|----------|
| [落地页](./prompts/landing-page.md) | Hero、功能展示、定价表、CTA |
| [仪表盘](./prompts/dashboard.md) | 数据卡片、图表、数据表格、筛选器 |
| [表单设计](./prompts/forms.md) | 注册、设置、多步向导、搜索 |
| [移动端](./prompts/mobile.md) | 底部导航、下拉刷新、无限滚动 |

### 配置参考

| 配置 | 说明 |
|------|------|
| [Tailwind 设计系统](./configs/tailwind-design-system.js) | 生产级 tailwind.config.js |
| [shadcn/ui 配置](./configs/shadcn-preset.md) | shadcn/ui 安装与 AI 协作指南 |
| [Ant Design 配置](./configs/ant-design-preset.md) | 主题定制与 AI 协作指南 |

## 框架覆盖

| 框架 | 类型 | 本项目覆盖内容 |
|------|------|----------------|
| React | 前端框架 | JSX 模式、Hooks 组件、状态管理 |
| Vue 3 | 前端框架 | Composition API、模板语法 |
| Svelte | 前端框架 | 响应式语法、组件模式 |
| Tailwind CSS | CSS 框架 | 完整设计系统、暗色模式、动画 |
| Ant Design | React UI 库 | 主题定制、组件规范、表单模式 |
| Element Plus | Vue 3 UI 库 | 布局模式、表单验证、主题变量 |
| shadcn/ui | React 组件集 | 安装配置、组件组合、样式定制 |

## 相关项目

- [agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) — 180 个 AI 智能体专家团队
- [superpowers-zh](https://github.com/jnMetaCode/superpowers-zh) — AI 编程超能力中文版
- [awesome-claude-md](https://github.com/jnMetaCode/awesome-claude-md) — CLAUDE.md 最佳实践集合
- [ai-coding-101](https://github.com/jnMetaCode/ai-coding-101) — AI 编程从入门到精通
- [impeccable](https://github.com/pbakaus/impeccable) — 灵感来源，AI 生成无瑕 UI 的指南

## 社区

- **QQ 群**：833585047 — 交流 AI 辅助 UI 开发经验
- **GitHub Issues**：欢迎提交问题和建议
- **Pull Requests**：欢迎贡献新的设计模式和提示词模板

## License

[MIT](./LICENSE)
