# Tailwind CSS 实战

> 工具类优先的实用模式、暗色模式、动画、配置技巧，以及要避免的反模式。

## 工具类优先方法论

### 核心理念

不写自定义 CSS，用组合 Tailwind 工具类解决一切。当组合重复出现时，抽取为组件而非 CSS 类。

```html
<!-- 推荐：直接使用工具类组合 -->
<button class="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white
  hover:bg-blue-700 transition-colors">
  提交
</button>

<!-- 不推荐：自定义 CSS 类 -->
<button class="btn-primary">提交</button>
<style>
.btn-primary { /* 一堆自定义样式 */ }
</style>
```

## 常用类组合速查

### 居中布局

```html
<!-- Flex 水平垂直居中 -->
<div class="flex items-center justify-center">

<!-- Grid 居中 -->
<div class="grid place-items-center">

<!-- 绝对定位居中 -->
<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
```

### 文字截断

```html
<!-- 单行截断 -->
<p class="truncate">很长的一段文字...</p>

<!-- 多行截断（2行） -->
<p class="line-clamp-2">很长的一段文字...</p>
```

### 宽高比

```html
<div class="aspect-video">16:9 视频容器</div>
<div class="aspect-square">正方形</div>
<div class="aspect-[4/3]">4:3 比例</div>
```

### 分割线

```html
<!-- 列表分割线 -->
<ul class="divide-y divide-gray-200">
  <li class="py-4">项目 1</li>
  <li class="py-4">项目 2</li>
</ul>
```

### 渐变背景

```html
<div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
  渐变背景内容
</div>

<!-- 渐变文字 -->
<h1 class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
  text-4xl font-bold">
  渐变文字
</h1>
```

## 暗色模式

### 基于 class 策略

```html
<!-- 在 html 标签添加 dark 类切换 -->
<html class="dark">
  <body class="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
    <div class="bg-gray-50 dark:bg-gray-900 rounded-xl p-6
      ring-1 ring-gray-200 dark:ring-gray-800">
      <h2 class="text-gray-900 dark:text-white">标题</h2>
      <p class="text-gray-600 dark:text-gray-400">描述文本</p>
    </div>
  </body>
</html>
```

### 暗色模式配色映射

| 用途 | 亮色 | 暗色 |
|------|------|------|
| 页面背景 | `bg-white` | `dark:bg-gray-950` |
| 卡片背景 | `bg-gray-50` | `dark:bg-gray-900` |
| 主文本 | `text-gray-900` | `dark:text-gray-100` |
| 次要文本 | `text-gray-600` | `dark:text-gray-400` |
| 边框 | `ring-gray-200` | `dark:ring-gray-800` |
| 悬浮背景 | `hover:bg-gray-50` | `dark:hover:bg-gray-800` |

## 动画和过渡

### 常用过渡

```html
<!-- 颜色过渡（按钮悬浮） -->
<button class="bg-blue-600 hover:bg-blue-700 transition-colors duration-150">

<!-- 阴影过渡（卡片悬浮） -->
<div class="shadow-sm hover:shadow-md transition-shadow duration-200">

<!-- 变换过渡（图片缩放） -->
<img class="hover:scale-105 transition-transform duration-300">

<!-- 透明度过渡（淡入淡出） -->
<div class="opacity-0 hover:opacity-100 transition-opacity duration-300">
```

### 入场动画

```html
<!-- 脉冲加载占位符 -->
<div class="animate-pulse rounded-lg bg-gray-200 h-4 w-3/4"></div>

<!-- 旋转加载 -->
<svg class="animate-spin h-5 w-5 text-blue-600">...</svg>

<!-- 弹跳提示 -->
<div class="animate-bounce">向下滚动</div>
```

## tailwind.config 设计令牌

```js
// tailwind.config.js — 关键自定义
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  darkMode: 'class',
}
```

## Tailwind v3 到 v4 迁移要点

如果你的项目从 Tailwind v3 升级到 v4，注意以下关键变化：

| v3 | v4 | 说明 |
|----|-----|------|
| `tailwind.config.js` | `@theme { }` (CSS 文件) | 配置全部迁移到 CSS，无需 JS 配置文件 |
| `require('@tailwindcss/forms')` | `@plugin "@tailwindcss/forms"` | 插件使用 CSS `@plugin` 指令 |
| `content: [...]` | 自动检测 | v4 自动扫描模板文件，无需手动配置 content |
| `darkMode: 'class'` | 默认 `prefers-color-scheme` | 如需 class 策略需额外配置 |
| `theme.extend.colors.brand` | `--color-brand-*` CSS 变量 | 所有 token 用 CSS 自定义属性定义 |
| `@apply` | 仍可用但不推荐 | v4 继续支持，但官方建议减少使用 |

> 本项目同时提供 v3 配置 (`tailwind-design-system.js`) 和 v4 配置 (`tailwind-v4-design-system.css`)，选择与你的 Tailwind 版本匹配的文件即可。

## 反模式

### 不要这样做

```html
<!-- 反模式 1：行内 style 覆盖 -->
<div class="p-4" style="padding: 13px;">  <!-- 为什么？ -->

<!-- 反模式 2：!important 滥用 -->
<div class="!mt-0">  <!-- 有更好的办法 -->

<!-- 反模式 3：重复冗长的类名不抽取组件 -->
<!-- 当同样的 20 个类出现 5 次时，抽取为 React/Vue 组件 -->

<!-- 反模式 4：用 @apply 把 Tailwind 变回传统 CSS -->
.btn {
  @apply rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white;
  /* 失去了工具类优先的意义 */
}
```

### 正确做法

```jsx
// 抽取为组件，而非 CSS 类
function Button({ children, variant = 'primary' }) {
  const styles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-white text-gray-700 ring-1 ring-gray-300 hover:bg-gray-50',
  }
  return (
    <button className={`inline-flex items-center rounded-lg px-4 py-2.5
      text-sm font-medium transition-colors ${styles[variant]}`}>
      {children}
    </button>
  )
}
```
