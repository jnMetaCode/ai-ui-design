# Dashboard UI Prompt Templates

> Have AI quickly generate professional admin panels and data dashboards.

## Stat Cards Row

### Prompt

```
Create dashboard stat cards at the top:
- 4 stat cards in a row (2 col mobile, 4 col desktop)
- Each card: metric name, value (large font), change vs last period (green up / red down)
- White cards, shadow-sm, ring-1 ring-gray-200
- Example metrics: Total Users, Active Users, Revenue, Conversion Rate
```

### Reference Structure

```html
<div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
  <div class="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
    <p class="text-sm font-medium text-gray-500">Total Users</p>
    <p class="mt-2 text-2xl font-bold text-gray-900">12,456</p>
    <div class="mt-1 flex items-center gap-1 text-sm">
      <span class="text-green-600">+8.2%</span>
      <span class="text-gray-400">vs last month</span>
    </div>
  </div>
  <div class="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
    <p class="text-sm font-medium text-gray-500">Active Users</p>
    <p class="mt-2 text-2xl font-bold text-gray-900">3,842</p>
    <div class="mt-1 flex items-center gap-1 text-sm">
      <span class="text-red-600">-2.1%</span>
      <span class="text-gray-400">vs last month</span>
    </div>
  </div>
  <!-- Repeat 2 more cards -->
</div>
```

## Charts Area

### Prompt

```
Below stat cards, create a charts area:
- Left large chart (2/3 width): line/area chart placeholder
- Right small chart (1/3): pie/donut chart placeholder
- Each chart area: white card + header bar (title + time range selector)
- Chart itself uses gray placeholder area (actual rendering by ECharts/Chart.js)
- Stack vertically on mobile
```

### Reference Structure

```html
<div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
  <!-- Main chart -->
  <div class="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200 lg:col-span-2">
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-semibold text-gray-900">User Growth Trend</h3>
      <select class="rounded-md border-gray-300 text-sm" aria-label="Select time range">
        <option>Last 7 days</option>
        <option>Last 30 days</option>
        <option>Last 90 days</option>
      </select>
    </div>
    <div class="mt-4 h-64 rounded-lg bg-gray-50">
      <!-- Chart renders here -->
    </div>
  </div>
  <!-- Secondary chart -->
  <div class="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
    <h3 class="text-sm font-semibold text-gray-900">Traffic Sources</h3>
    <div class="mt-4 h-64 rounded-lg bg-gray-50">
      <!-- Pie chart renders here -->
    </div>
  </div>
</div>
```

## Data Table

### Prompt

```
Create a data table area:
- Top toolbar: search input (left) + filter dropdown + export button (right)
- Table: rounded border, optional zebra striping, gray header background
- Status column with colored badges (green success, yellow pending, red failed)
- Bottom pagination
- Horizontal scroll on small screens
```

### Reference Structure

```html
<div class="mt-6 rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
  <!-- Toolbar -->
  <div class="flex flex-col gap-3 border-b border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between">
    <div class="relative">
      <input type="search" placeholder="Search..." aria-label="Search orders"
        class="w-full rounded-lg border-gray-300 pl-10 text-sm sm:w-64" />
    </div>
    <div class="flex gap-2">
      <select class="rounded-lg border-gray-300 text-sm" aria-label="Filter by status">
        <option>All statuses</option>
      </select>
      <button class="rounded-lg px-3 py-2 text-sm font-medium text-gray-700
        ring-1 ring-gray-300 hover:bg-gray-50">Export</button>
    </div>
  </div>
  <!-- Table -->
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">Order ID</th>
          <th class="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">Customer</th>
          <th class="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">Status</th>
          <th class="px-4 py-3 text-right text-xs font-medium uppercase text-gray-500">Amount</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr class="hover:bg-gray-50">
          <td class="px-4 py-3 text-sm text-gray-900">#10421</td>
          <td class="px-4 py-3 text-sm text-gray-600">John Smith</td>
          <td class="px-4 py-3">
            <span class="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              Completed
            </span>
          </td>
          <td class="px-4 py-3 text-right text-sm font-medium text-gray-900">$128.00</td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- Pagination -->
  <div class="flex items-center justify-between border-t border-gray-200 px-4 py-3">
    <p class="text-sm text-gray-500">Showing 1-10 of 86</p>
    <div class="flex gap-1">
      <button class="rounded-lg px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100">Previous</button>
      <button class="rounded-lg bg-blue-600 px-3 py-1.5 text-sm text-white">1</button>
      <button class="rounded-lg px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100">2</button>
      <button class="rounded-lg px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100">Next</button>
    </div>
  </div>
</div>
```

## Sidebar Navigation

### Prompt

```
Create a dashboard sidebar nav:
- Dark background (bg-gray-900), width w-64
- Top: Logo area
- Nav groups: Main menu (Home, Analytics, Orders, Users) + Settings group (System, Profile)
- Current page highlighted (bg-gray-800 text-white), others gray
- Each menu item has icon + text
- Bottom: user avatar + name + logout button
```
