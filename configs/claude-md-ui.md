# UI 开发规范（CLAUDE.md 片段）

> 将以下内容复制到项目根目录的 CLAUDE.md 中，让 Claude 遵循统一的 UI 规范。

```markdown
## UI 与设计系统

### Tailwind CSS
- 使用 Tailwind CSS（v3.x 或 v4.x），启用 @tailwindcss/forms 插件
- v3 使用 `tailwind-design-system.js` 配置；v4 使用 `tailwind-v4-design-system.css`（CSS-first，无需 JS 配置文件）
- v4 主要变化：`@theme` 替代 `tailwind.config.js`、`@plugin` 替代 `require()`、内容检测自动化
- 间距遵循 4px 网格（p-1 = 4px, p-2 = 8px, ...）
- 颜色使用语义化 token：brand-600 为主操作色，gray-900 为正文，gray-500 为辅助文字
- 圆角统一：按钮 rounded-lg，卡片 rounded-xl，弹窗 rounded-xl
- 阴影层级：卡片 shadow-sm + ring-1，下拉 shadow-lg，弹窗 shadow-xl

### 无障碍（必须遵守）
- 所有交互元素必须有 focus-visible 样式（outline-2 outline-offset-2）
- 表单输入必须关联 <label>；无可见 label 时使用 aria-label
- 错误状态输入框添加 aria-invalid="true" + aria-describedby 指向错误消息
- 弹窗使用 role="dialog" aria-modal="true" aria-labelledby
- 提示消息使用 role="alert"
- 导航栏中的标签页使用 <button> 而非 <a href="#">
- 图标按钮必须有 aria-label

### 响应式
- 移动优先：默认样式为手机，sm: 平板，lg: 桌面
- 断点：sm(640px) md(768px) lg(1024px) xl(1280px)
- 内容区最大宽度 max-w-7xl mx-auto px-4
- 网格布局：手机 1 列，平板 2 列，桌面 3-4 列

### 组件规范
- 按钮：始终包含 hover + focus-visible + transition-colors
- 卡片：bg-white rounded-xl shadow-sm ring-1 ring-gray-200
- 表格：圆角容器 + divide-y + hover:bg-gray-50 行高亮
- 空状态：居中图标 + 标题 + 描述 + 操作按钮
- 加载态：骨架屏使用 animate-pulse + bg-gray-200 占位
- 弹窗：bg-black/50 遮罩 + 居中白色面板
```
