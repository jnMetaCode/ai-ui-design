English | [中文](./README.md)

<div align="center">

# AI UI Design

**The go-to guide for making AI coding assistants produce production-quality UI code**

[![Stars](https://img.shields.io/github/stars/jnMetaCode/ai-ui-design?style=flat-square)](https://github.com/jnMetaCode/ai-ui-design)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](https://github.com/jnMetaCode/ai-ui-design/pulls)
[![QQ Group](https://img.shields.io/badge/QQ_Group-833585047-blue?style=flat-square)](https://qm.qq.com/q/833585047)

</div>

---

## What Is This?

When using AI coding assistants (Claude, Cursor, Copilot, etc.) for frontend work, do you run into these problems?

- Generated UI looks like a 2010 web page — messy spacing, garish colors
- Components lack consistency — buttons all over the place
- No responsive design — unusable on mobile
- Doesn't follow best practices for the framework you're using

**ai-ui-design** provides battle-tested design patterns, prompt templates, and reference configs to guide AI toward professional, consistent, usable UI code.

## Quick Example

**Without design guidance, AI generates:**

```html
<!-- Before: inconsistent, unprofessional -->
<button style="background: blue; color: white; padding: 10px 15px; border: none;">
  Submit
</button>
<button style="background: red; color: white; padding: 8px 20px; border: 1px solid red;">
  Delete
</button>
```

**With this project's design system:**

```html
<!-- After: consistent, professional, accessible -->
<button class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5
  text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline
  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600
  transition-colors">
  Submit
</button>
<button class="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2.5
  text-sm font-medium text-white shadow-sm hover:bg-red-700 focus-visible:outline
  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600
  transition-colors">
  Delete
</button>
```

## Table of Contents

### Design Guides

| Guide | Coverage |
|-------|----------|
| [01 Design Fundamentals](./guides/01-design-fundamentals.en.md) | Color, typography, spacing, visual hierarchy |
| [02 Component Patterns](./guides/02-component-patterns.en.md) | Buttons, forms, cards, modals, navigation, tables |
| [03 Responsive Design](./guides/03-responsive-design.en.md) | Mobile-first, breakpoints, layout patterns |
| [04 Tailwind Patterns](./guides/04-tailwind-patterns.en.md) | Utility-first, dark mode, animations, config |
| [05 Chinese UI Frameworks](./guides/05-chinese-ui-frameworks.en.md) | Ant Design / Element Plus / TDesign / Vant / Mini Programs |
| [06 Accessibility](./guides/06-accessibility.en.md) | WCAG, ARIA, keyboard nav, screen readers |

### Prompt Templates

| Template | Use Case |
|----------|----------|
| [Landing Page](./prompts/landing-page.en.md) | Hero, features grid, pricing, CTA |
| [Dashboard](./prompts/dashboard.en.md) | Stat cards, charts, data tables, filters |
| [Forms](./prompts/forms.en.md) | Registration, settings, multi-step wizard, search |
| [Mobile](./prompts/mobile.en.md) | Bottom nav, pull-to-refresh, infinite scroll |

### Reference Configs

| Config | Description |
|--------|-------------|
| [Tailwind Design System](./configs/tailwind-design-system.js) | Production-ready tailwind.config.js |
| [shadcn/ui Preset](./configs/shadcn-preset.en.md) | Setup guide and AI collaboration tips |
| [Ant Design Preset](./configs/ant-design-preset.en.md) | Theme config and AI collaboration tips |

## Framework Coverage

| Framework | Type | What We Cover |
|-----------|------|---------------|
| React | Frontend framework | JSX patterns, Hooks components, state |
| Vue 3 | Frontend framework | Composition API, template syntax |
| Svelte | Frontend framework | Reactive syntax, component patterns |
| Tailwind CSS | CSS framework | Full design system, dark mode, animations |
| Ant Design | React UI library | Theming, component conventions, forms |
| Element Plus | Vue 3 UI library | Layout patterns, form validation, themes |
| shadcn/ui | React component kit | Setup, composition, style customization |

## Related Projects

- [agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) — 180 AI agent experts team
- [superpowers-zh](https://github.com/jnMetaCode/superpowers-zh) — AI coding superpowers (Chinese edition)

## Community

- **QQ Group**: 833585047 — Discuss AI-assisted UI development
- **GitHub Issues**: Bug reports and suggestions welcome
- **Pull Requests**: Contribute new design patterns and prompt templates

## License

[MIT](./LICENSE)
