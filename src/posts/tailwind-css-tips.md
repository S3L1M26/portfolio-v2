---
title: "Advanced Tailwind CSS Tips and Tricks"
description: "Learn how to leverage Tailwind CSS for better UI development"
author: "Sarah Wilson"
tags: ["css", "tailwind", "frontend", "design"]
image: "/assets/images/posts/post2.jpg"
---

# Advanced Tailwind CSS Tips and Tricks

Tailwind CSS has revolutionized how we build user interfaces. Here are some advanced tips to help you get the most out of this utility-first CSS framework.

## Custom Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#1a73e8",
        secondary: "#34a853",
      },
    },
  },
};
```

## Best Practices

1. Use @apply for repeated patterns
2. Leverage custom plugins
3. Optimize for production
4. Use arbitrary values when needed

## Component Examples

```html
<div
  class="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
>
  <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
    Card Title
  </h2>
  <button
    class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
  >
    Click Me
  </button>
</div>
```
