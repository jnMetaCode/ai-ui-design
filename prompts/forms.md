# 表单设计提示词模板

> 引导 AI 生成用户友好、验证完善的表单界面。

## 注册表单

### 提示词

```
创建用户注册表单：
- 居中卡片布局（max-w-md），白色背景，shadow-lg
- 顶部：Logo + "创建账号" 标题
- 字段：用户名、邮箱、密码（带显示/隐藏切换）、确认密码
- 密码强度指示器（弱/中/强，对应红/黄/绿）
- 同意条款复选框
- 提交按钮（全宽）
- 底部："已有账号？登录" 链接
- 所有字段有 label、placeholder 和验证错误提示
```

### 参考结构

```html
<div class="flex min-h-screen items-center justify-center bg-gray-50 px-4">
  <div class="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
    <div class="text-center">
      <div class="mx-auto h-10 w-10 rounded-lg bg-blue-600"></div>
      <h1 class="mt-4 text-2xl font-bold text-gray-900">创建账号</h1>
      <p class="mt-1 text-sm text-gray-500">开始你的 14 天免费试用</p>
    </div>
    <form class="mt-8 space-y-5">
      <div>
        <label for="username" class="block text-sm font-medium text-gray-700">用户名</label>
        <input id="username" type="text" required
          class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm
          focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="你的用户名" />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">邮箱</label>
        <input id="email" type="email" required
          class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm
          focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="you@example.com" />
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">密码</label>
        <div class="relative mt-1">
          <input id="password" type="password" required
            class="block w-full rounded-lg border-gray-300 pr-10 shadow-sm
            focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="至少 8 位字符" />
          <button type="button" aria-label="切换密码可见性" class="absolute inset-y-0 right-0 flex items-center pr-3
            text-gray-400 hover:text-gray-600">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex items-start gap-2">
        <input id="terms" type="checkbox" required
          class="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
        <label for="terms" class="text-sm text-gray-600">
          我同意 <a href="#" class="text-blue-600 hover:underline">服务条款</a> 和
          <a href="#" class="text-blue-600 hover:underline">隐私政策</a>
        </label>
      </div>
      <button type="submit" class="w-full rounded-lg bg-blue-600 px-4 py-2.5
        text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
        创建账号
      </button>
    </form>
    <p class="mt-6 text-center text-sm text-gray-500">
      已有账号？<a href="#" class="text-blue-600 hover:underline">登录</a>
    </p>
  </div>
</div>
```

## 设置页面

### 提示词

```
创建用户设置页面表单：
- 分区布局：个人信息、通知偏好、安全设置
- 每个分区有标题 + 描述 + 表单项
- 个人信息：头像上传 + 姓名 + 邮箱 + 个人简介（textarea）
- 通知偏好：多个开关（Switch）控制不同通知类型
- 安全设置：修改密码、两步验证开关
- 底部：保存按钮 + 取消按钮
- 分区之间用 border-t 分隔
```

## 多步向导

### 提示词

```
创建多步骤表单向导：
- 顶部步骤指示器（1. 基本信息 → 2. 详细设置 → 3. 确认提交）
- 当前步骤高亮（蓝色圆圈 + 蓝色连线），已完成步骤打勾，未完成灰色
- 表单区域居中，每步显示不同字段
- 底部：上一步 + 下一步按钮（第一步无上一步，最后一步显示提交）
- 表单区域固定高度，切换有过渡效果
```

### 参考步骤指示器

```html
<div class="flex items-center justify-center">
  <!-- 步骤 1：已完成 -->
  <div class="flex items-center">
    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm">
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span class="ml-2 text-sm font-medium text-blue-600">基本信息</span>
  </div>
  <div class="mx-4 h-0.5 w-16 bg-blue-600"></div>
  <!-- 步骤 2：当前 -->
  <div class="flex items-center">
    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm">2</div>
    <span class="ml-2 text-sm font-medium text-blue-600">详细设置</span>
  </div>
  <div class="mx-4 h-0.5 w-16 bg-gray-200"></div>
  <!-- 步骤 3：未完成 -->
  <div class="flex items-center">
    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500 text-sm">3</div>
    <span class="ml-2 text-sm font-medium text-gray-500">确认提交</span>
  </div>
</div>
```

## 搜索表单

### 提示词

```
创建高级搜索表单：
- 顶部搜索栏：大输入框 + 搜索按钮（图标）
- 下方可折叠的高级筛选区域
- 筛选项：日期范围、分类下拉、状态多选、价格范围滑块
- 筛选项排列：2 列网格（手机 1 列）
- "重置筛选" + "应用筛选" 按钮
```
