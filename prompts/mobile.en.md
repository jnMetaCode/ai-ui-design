# Mobile UI Prompt Templates

> Guide AI to generate native-feeling mobile interfaces that follow mobile interaction conventions.

## Bottom Navigation Bar

### Prompt

```
Create a mobile bottom tab bar:
- Fixed to bottom, white background, top border-t
- 4-5 tabs: Home, Discover, Messages, Profile
- Each tab: icon + text (small), current page highlighted in blue
- Messages tab has unread count red badge
- Handle iPhone safe area (safe-area-inset-bottom)
- Icons and text vertically centered
```

### Reference Structure

```html
<nav class="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white
  pb-[env(safe-area-inset-bottom)]">
  <div class="flex items-center justify-around px-2 py-2">
    <!-- Active tab -->
    <button class="flex flex-col items-center gap-0.5 px-3 py-1">
      <svg class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 13h1v7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h1a1 1 0 00.7-1.7l-9-9a1 1 0 00-1.4 0l-9 9A1 1 0 003 13z"/>
      </svg>
      <span class="text-xs font-medium text-blue-600">Home</span>
    </button>
    <!-- Normal tab -->
    <button class="flex flex-col items-center gap-0.5 px-3 py-1">
      <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <span class="text-xs text-gray-500">Discover</span>
    </button>
    <!-- Tab with badge -->
    <button class="relative flex flex-col items-center gap-0.5 px-3 py-1">
      <div class="relative">
        <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span class="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center
          rounded-full bg-red-500 text-[10px] font-bold text-white">3</span>
      </div>
      <span class="text-xs text-gray-500">Messages</span>
    </button>
    <!-- Profile -->
    <button class="flex flex-col items-center gap-0.5 px-3 py-1">
      <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <span class="text-xs text-gray-500">Profile</span>
    </button>
  </div>
</nav>
```

## Pull-to-Refresh

### Prompt

```
Create a mobile pull-to-refresh list page:
- Fixed top search bar
- Pull-to-refresh animation indicator (spinner + "Pull to refresh" / "Release to refresh" / "Refreshing" text)
- List items: avatar + title + description + timestamp
- Dividers between list items
- Tailwind only, no third-party libraries
- Provide loading and refreshing state styles
```

### Refresh Indicator Structure

```html
<!-- Refresh indicator -->
<div class="flex items-center justify-center py-4 text-sm text-gray-500">
  <svg class="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
  </svg>
  Refreshing...
</div>

<!-- List item -->
<div class="divide-y divide-gray-100">
  <div class="flex gap-3 px-4 py-3">
    <img src="avatar.jpg" alt="" class="h-10 w-10 rounded-full object-cover" />
    <div class="flex-1 min-w-0">
      <div class="flex items-center justify-between">
        <h4 class="text-sm font-medium text-gray-900 truncate">Username</h4>
        <span class="text-xs text-gray-400">3 min ago</span>
      </div>
      <p class="mt-0.5 text-sm text-gray-500 truncate">Message preview...</p>
    </div>
  </div>
</div>
```

## Infinite Scroll

### Prompt

```
Create an infinite scroll product list:
- Two-column masonry grid layout
- Product cards: image (varying heights) + title + price + shop name
- Bottom loading indicator: "Loading more..." + spinner
- End state shows "No more items"
- Use CSS Grid or columns-2
```

### Reference Structure

```html
<div class="columns-2 gap-3 px-3">
  <div class="mb-3 break-inside-avoid overflow-hidden rounded-xl bg-white shadow-sm">
    <img src="product.jpg" alt="Product" class="w-full" />
    <div class="p-2.5">
      <p class="text-sm text-gray-900 line-clamp-2">Product name goes here</p>
      <p class="mt-1 text-base font-bold text-red-600">$9.99</p>
      <p class="mt-0.5 text-xs text-gray-400">Brand Store</p>
    </div>
  </div>
  <!-- More cards... -->
</div>

<!-- Loading more -->
<div class="flex items-center justify-center py-6 text-sm text-gray-400">
  <svg class="mr-2 h-4 w-4 animate-spin">...</svg>
  Loading more...
</div>

<!-- End of list -->
<div class="py-6 text-center text-sm text-gray-400">
  — No more items —
</div>
```

## Swipe Actions

### Prompt

```
Create swipe-to-reveal action list items:
- Default: normal list item display
- Swipe left reveals action buttons: Pin (blue), Delete (red)
- Action buttons area on the right side of the list item
- Use CSS transform for swipe effect
- Touch-friendly large button areas
```

### Reference Structure

```html
<div class="overflow-hidden">
  <div class="relative flex">
    <!-- List item (swipeable) -->
    <div class="flex-shrink-0 w-full bg-white px-4 py-3 flex items-center gap-3
      transition-transform duration-200"
      style="transform: translateX(-140px);">
      <img src="avatar.jpg" alt="" class="h-12 w-12 rounded-full" />
      <div>
        <h4 class="text-sm font-medium text-gray-900">Contact Name</h4>
        <p class="text-sm text-gray-500">Latest message...</p>
      </div>
    </div>
    <!-- Action buttons -->
    <div class="absolute right-0 top-0 bottom-0 flex">
      <button class="flex w-[70px] items-center justify-center bg-blue-500 text-sm text-white">
        Pin
      </button>
      <button class="flex w-[70px] items-center justify-center bg-red-500 text-sm text-white">
        Delete
      </button>
    </div>
  </div>
</div>
```
