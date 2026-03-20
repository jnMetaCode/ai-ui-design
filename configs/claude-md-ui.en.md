# UI Development Rules (CLAUDE.md Snippet)

> Copy the following into your project's root CLAUDE.md so Claude follows a consistent UI standard.

```markdown
## UI & Design System

### Tailwind CSS
- Use Tailwind CSS v3.x with the @tailwindcss/forms plugin enabled
- Spacing follows a 4px grid (p-1 = 4px, p-2 = 8px, ...)
- Use semantic color tokens: brand-600 for primary actions, gray-900 for body text, gray-500 for secondary text
- Consistent border-radius: buttons rounded-lg, cards rounded-xl, modals rounded-xl
- Shadow hierarchy: cards shadow-sm + ring-1, dropdowns shadow-lg, modals shadow-xl

### Accessibility (mandatory)
- Every interactive element MUST have focus-visible styles (outline-2 outline-offset-2)
- Form inputs MUST have an associated <label>; use aria-label when no visible label exists
- Error-state inputs require aria-invalid="true" + aria-describedby pointing to the error message
- Modals use role="dialog" aria-modal="true" aria-labelledby
- Toast notifications use role="alert"
- Navigation tab items use <button> instead of <a href="#">
- Icon-only buttons MUST have aria-label

### Responsive
- Mobile-first: default styles target phones, sm: tablets, lg: desktop
- Breakpoints: sm(640px) md(768px) lg(1024px) xl(1280px)
- Content area max-width: max-w-7xl mx-auto px-4
- Grid layouts: 1 col mobile, 2 col tablet, 3-4 col desktop

### Component Standards
- Buttons: always include hover + focus-visible + transition-colors
- Cards: bg-white rounded-xl shadow-sm ring-1 ring-gray-200
- Tables: rounded container + divide-y + hover:bg-gray-50 row highlight
- Empty states: centered icon + heading + description + action button
- Loading: skeleton screens with animate-pulse + bg-gray-200 placeholders
- Modals: bg-black/50 backdrop + centered white panel
```
