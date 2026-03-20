# 仪表盘 UI 提示词模板

> 让 AI 快速生成专业的管理后台和数据仪表盘界面。

## 统计卡片行

### 提示词

```
创建仪表盘顶部统计卡片行：
- 4 个统计卡片一行（手机 2 列，桌面 4 列）
- 每个卡片：指标名称、数值（大字体）、环比变化（绿色涨/红色跌）
- 白色卡片，shadow-sm，ring-1 ring-gray-200
- 示例指标：总用户、活跃用户、收入、转化率
```

### 参考结构

```html
<div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
  <div class="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
    <p class="text-sm font-medium text-gray-500">总用户</p>
    <p class="mt-2 text-2xl font-bold text-gray-900">12,456</p>
    <div class="mt-1 flex items-center gap-1 text-sm">
      <span class="text-green-600">+8.2%</span>
      <span class="text-gray-400">较上月</span>
    </div>
  </div>
  <div class="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
    <p class="text-sm font-medium text-gray-500">活跃用户</p>
    <p class="mt-2 text-2xl font-bold text-gray-900">3,842</p>
    <div class="mt-1 flex items-center gap-1 text-sm">
      <span class="text-red-600">-2.1%</span>
      <span class="text-gray-400">较上月</span>
    </div>
  </div>
  <!-- 重复 2 个卡片 -->
</div>
```

## 图表区域

### 提示词

```
在统计卡片下方创建图表区域：
- 左侧大图表（占 2/3 宽度）：折线图/面积图的占位容器
- 右侧小图表（占 1/3）：饼图/环形图占位
- 每个图表区域：白色卡片 + 标题栏（标题 + 时间范围选择器）
- 图表本身用灰色占位区域（实际由 ECharts/Chart.js 渲染）
- 手机端上下堆叠
```

### 参考结构

```html
<div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
  <!-- 主图表 -->
  <div class="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200 lg:col-span-2">
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-semibold text-gray-900">用户增长趋势</h3>
      <select class="rounded-md border-gray-300 text-sm" aria-label="选择时间范围">
        <option>近 7 天</option>
        <option>近 30 天</option>
        <option>近 90 天</option>
      </select>
    </div>
    <div class="mt-4 h-64 rounded-lg bg-gray-50">
      <!-- 图表渲染区域 -->
    </div>
  </div>
  <!-- 辅助图表 -->
  <div class="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
    <h3 class="text-sm font-semibold text-gray-900">用户来源分布</h3>
    <div class="mt-4 h-64 rounded-lg bg-gray-50">
      <!-- 饼图渲染区域 -->
    </div>
  </div>
</div>
```

## 数据表格

### 提示词

```
创建数据表格区域：
- 顶部工具栏：搜索框（左）+ 筛选下拉 + 导出按钮（右）
- 表格：圆角边框，斑马纹可选，列头灰色背景
- 状态列用彩色标签（成功绿、待处理黄、失败红）
- 底部分页器
- 小屏幕可横向滚动
```

### 参考结构

```html
<div class="mt-6 rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
  <!-- 工具栏 -->
  <div class="flex flex-col gap-3 border-b border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between">
    <div class="relative">
      <input type="search" placeholder="搜索..." aria-label="搜索订单"
        class="w-full rounded-lg border-gray-300 pl-10 text-sm sm:w-64" />
    </div>
    <div class="flex gap-2">
      <select class="rounded-lg border-gray-300 text-sm" aria-label="筛选状态">
        <option>全部状态</option>
      </select>
      <button class="rounded-lg px-3 py-2 text-sm font-medium text-gray-700
        ring-1 ring-gray-300 hover:bg-gray-50">导出</button>
    </div>
  </div>
  <!-- 表格 -->
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">订单号</th>
          <th class="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">客户</th>
          <th class="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">状态</th>
          <th class="px-4 py-3 text-right text-xs font-medium uppercase text-gray-500">金额</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr class="hover:bg-gray-50">
          <td class="px-4 py-3 text-sm text-gray-900">#10421</td>
          <td class="px-4 py-3 text-sm text-gray-600">张三</td>
          <td class="px-4 py-3">
            <span class="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              已完成
            </span>
          </td>
          <td class="px-4 py-3 text-right text-sm font-medium text-gray-900">¥1,280</td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- 分页 -->
  <div class="flex items-center justify-between border-t border-gray-200 px-4 py-3">
    <p class="text-sm text-gray-500">显示 1-10 条，共 86 条</p>
    <div class="flex gap-1">
      <button class="rounded-lg px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100">上一页</button>
      <button class="rounded-lg bg-blue-600 px-3 py-1.5 text-sm text-white">1</button>
      <button class="rounded-lg px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100">2</button>
      <button class="rounded-lg px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100">下一页</button>
    </div>
  </div>
</div>
```

## 侧边栏导航

### 提示词

```
创建仪表盘侧边栏导航：
- 深色背景（bg-gray-900），宽度 w-64
- 顶部：Logo 区域
- 导航分组：主菜单（首页、数据分析、订单、用户）+ 设置组（系统设置、个人中心）
- 当前页高亮（bg-gray-800 text-white），其他项灰色
- 每个菜单项有图标 + 文字
- 底部：用户头像 + 姓名 + 退出按钮
```
