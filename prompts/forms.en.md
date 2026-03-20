# Form Design Prompt Templates

> Guide AI to generate user-friendly, well-validated form interfaces.

## Registration Form

### Prompt

```
Create a user registration form:
- Centered card layout (max-w-md), white background, shadow-lg
- Top: Logo + "Create account" heading
- Fields: username, email, password (with show/hide toggle), confirm password
- Password strength indicator (weak/medium/strong, red/yellow/green)
- Terms agreement checkbox
- Submit button (full width)
- Bottom: "Already have an account? Sign in" link
- All fields have label, placeholder, and validation error messages
```

### Reference Structure

```html
<div class="flex min-h-screen items-center justify-center bg-gray-50 px-4">
  <div class="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
    <div class="text-center">
      <div class="mx-auto h-10 w-10 rounded-lg bg-blue-600"></div>
      <h1 class="mt-4 text-2xl font-bold text-gray-900">Create account</h1>
      <p class="mt-1 text-sm text-gray-500">Start your 14-day free trial</p>
    </div>
    <form class="mt-8 space-y-5">
      <div>
        <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
        <input id="username" type="text" required
          class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm
          focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="Your username" />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input id="email" type="email" required
          class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm
          focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="you@example.com" />
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <div class="relative mt-1">
          <input id="password" type="password" required
            class="block w-full rounded-lg border-gray-300 pr-10 shadow-sm
            focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="At least 8 characters" />
          <button type="button" aria-label="Toggle password visibility" class="absolute inset-y-0 right-0 flex items-center pr-3
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
          I agree to the <a href="#" class="text-blue-600 hover:underline">Terms of Service</a> and
          <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>
        </label>
      </div>
      <button type="submit" class="w-full rounded-lg bg-blue-600 px-4 py-2.5
        text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
        Create account
      </button>
    </form>
    <p class="mt-6 text-center text-sm text-gray-500">
      Already have an account? <a href="#" class="text-blue-600 hover:underline">Sign in</a>
    </p>
  </div>
</div>
```

## Settings Page

### Prompt

```
Create a user settings page form:
- Sectioned layout: Personal Info, Notification Preferences, Security
- Each section has title + description + form fields
- Personal Info: avatar upload + name + email + bio (textarea)
- Notifications: toggle switches for different notification types
- Security: change password, two-factor authentication toggle
- Bottom: Save + Cancel buttons
- Sections separated by border-t
```

## Multi-Step Wizard

### Prompt

```
Create a multi-step form wizard:
- Top step indicator (1. Basic Info -> 2. Details -> 3. Confirm)
- Current step highlighted (blue circle + blue connecting line), completed steps with checkmark, incomplete gray
- Centered form area, different fields per step
- Bottom: Previous + Next buttons (no Previous on step 1, Submit on last step)
- Fixed height form area with transition effects between steps
```

### Reference Step Indicator

```html
<div class="flex items-center justify-center">
  <!-- Step 1: completed -->
  <div class="flex items-center">
    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm">
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span class="ml-2 text-sm font-medium text-blue-600">Basic Info</span>
  </div>
  <div class="mx-4 h-0.5 w-16 bg-blue-600"></div>
  <!-- Step 2: current -->
  <div class="flex items-center">
    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm">2</div>
    <span class="ml-2 text-sm font-medium text-blue-600">Details</span>
  </div>
  <div class="mx-4 h-0.5 w-16 bg-gray-200"></div>
  <!-- Step 3: incomplete -->
  <div class="flex items-center">
    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500 text-sm">3</div>
    <span class="ml-2 text-sm font-medium text-gray-500">Confirm</span>
  </div>
</div>
```

## Search Form

### Prompt

```
Create an advanced search form:
- Top search bar: large input + search button (icon)
- Below: collapsible advanced filters area
- Filters: date range, category dropdown, status multi-select, price range slider
- Filter layout: 2-column grid (1 col on mobile)
- "Reset filters" + "Apply filters" buttons
```
