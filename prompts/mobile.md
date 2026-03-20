# 移动端 UI 提示词模板

> 引导 AI 生成符合移动端交互习惯的原生体验 UI。

## 底部导航栏

### 提示词

```
创建移动端底部导航栏（Tab Bar）：
- 固定底部，白色背景，顶部 border-t
- 4-5 个标签：首页、发现、消息、我的
- 每个标签：图标 + 文字（小字），当前页高亮蓝色
- 消息标签有未读数量红色圆点
- 适配 iPhone 底部安全区域（safe-area-inset-bottom）
- 图标和文字垂直居中
```

### 参考结构

```html
<nav class="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white
  pb-[env(safe-area-inset-bottom)]">
  <div class="flex items-center justify-around px-2 py-2">
    <!-- 当前标签 -->
    <button class="flex flex-col items-center gap-0.5 px-3 py-1">
      <svg class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 13h1v7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h1a1 1 0 00.7-1.7l-9-9a1 1 0 00-1.4 0l-9 9A1 1 0 003 13z"/>
      </svg>
      <span class="text-xs font-medium text-blue-600">首页</span>
    </button>
    <!-- 普通标签 -->
    <button class="flex flex-col items-center gap-0.5 px-3 py-1">
      <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <span class="text-xs text-gray-500">发现</span>
    </button>
    <!-- 带红点的标签 -->
    <button class="relative flex flex-col items-center gap-0.5 px-3 py-1">
      <div class="relative">
        <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span class="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center
          rounded-full bg-red-500 text-[10px] font-bold text-white">3</span>
      </div>
      <span class="text-xs text-gray-500">消息</span>
    </button>
    <!-- 我的 -->
    <button class="flex flex-col items-center gap-0.5 px-3 py-1">
      <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <span class="text-xs text-gray-500">我的</span>
    </button>
  </div>
</nav>
```

## 下拉刷新

### 提示词

```
创建移动端下拉刷新列表页面：
- 顶部搜索栏（固定）
- 下拉刷新动画指示器（旋转图标 + "下拉刷新" / "释放刷新" / "正在刷新" 文字）
- 列表项：头像 + 标题 + 描述 + 时间戳
- 列表项之间有分割线
- 使用 Tailwind，不依赖第三方库
- 提供 loading 和 refreshing 状态的样式
```

### 刷新指示器结构

```html
<!-- 刷新指示器 -->
<div class="flex items-center justify-center py-4 text-sm text-gray-500">
  <svg class="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
  </svg>
  正在刷新...
</div>

<!-- 列表项 -->
<div class="divide-y divide-gray-100">
  <div class="flex gap-3 px-4 py-3">
    <img src="avatar.jpg" alt="" class="h-10 w-10 rounded-full object-cover" />
    <div class="flex-1 min-w-0">
      <div class="flex items-center justify-between">
        <h4 class="text-sm font-medium text-gray-900 truncate">用户名</h4>
        <span class="text-xs text-gray-400">3 分钟前</span>
      </div>
      <p class="mt-0.5 text-sm text-gray-500 truncate">消息内容预览...</p>
    </div>
  </div>
</div>
```

## 无限滚动

### 提示词

```
创建无限滚动商品列表：
- 双列瀑布流网格布局
- 商品卡片：图片（不同高度）+ 标题 + 价格 + 店铺名
- 底部加载指示器："加载更多..." + 旋转动画
- 加载完毕显示 "没有更多了"
- 使用 CSS Grid 或 columns-2 实现
```

### 参考结构

```html
<div class="columns-2 gap-3 px-3">
  <div class="mb-3 break-inside-avoid overflow-hidden rounded-xl bg-white shadow-sm">
    <img src="product.jpg" alt="商品" class="w-full" />
    <div class="p-2.5">
      <p class="text-sm text-gray-900 line-clamp-2">商品名称商品名称</p>
      <p class="mt-1 text-base font-bold text-red-600">¥99.00</p>
      <p class="mt-0.5 text-xs text-gray-400">品牌旗舰店</p>
    </div>
  </div>
  <!-- 更多卡片... -->
</div>

<!-- 加载更多 -->
<div class="flex items-center justify-center py-6 text-sm text-gray-400">
  <svg class="mr-2 h-4 w-4 animate-spin">...</svg>
  加载更多...
</div>

<!-- 没有更多 -->
<div class="py-6 text-center text-sm text-gray-400">
  — 没有更多了 —
</div>
```

## 滑动操作

### 提示词

```
创建可左滑操作的列表项：
- 默认状态：正常列表项显示
- 左滑后露出操作按钮：置顶（蓝色）、删除（红色）
- 操作按钮区域在列表项右侧
- 使用 CSS transform 实现滑动效果
- 提供触摸友好的大按钮区域
```

### 参考结构

```html
<div class="overflow-hidden">
  <div class="relative flex">
    <!-- 列表项（可滑动） -->
    <div class="flex-shrink-0 w-full bg-white px-4 py-3 flex items-center gap-3
      transition-transform duration-200"
      style="transform: translateX(-140px);">
      <img src="avatar.jpg" alt="" class="h-12 w-12 rounded-full" />
      <div>
        <h4 class="text-sm font-medium text-gray-900">联系人名称</h4>
        <p class="text-sm text-gray-500">最近消息内容...</p>
      </div>
    </div>
    <!-- 操作按钮 -->
    <div class="absolute right-0 top-0 bottom-0 flex">
      <button class="flex w-[70px] items-center justify-center bg-blue-500 text-sm text-white">
        置顶
      </button>
      <button class="flex w-[70px] items-center justify-center bg-red-500 text-sm text-white">
        删除
      </button>
    </div>
  </div>
</div>
```
